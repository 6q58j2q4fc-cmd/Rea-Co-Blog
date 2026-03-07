/**
 * Tests for article email notification via Resend
 */

import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the Resend module
vi.mock("resend", () => {
  return {
    Resend: vi.fn().mockImplementation(() => ({
      emails: {
        send: vi.fn().mockResolvedValue({ data: { id: "test-email-id" }, error: null }),
      },
    })),
  };
});

// Mock ENV to provide a test API key
vi.mock("./_core/env", () => ({
  ENV: {
    resendApiKey: "re_test_key",
    isProduction: false,
  },
}));

describe("Article Email Notification", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should send article notification email successfully", async () => {
    const { sendArticlePublishedNotification } = await import("./_core/email");

    const result = await sendArticlePublishedNotification({
      articleTitle: "Top 5 Custom Home Design Trends in Bend Oregon 2026",
      articleExcerpt: "Discover the latest luxury home design trends shaping Central Oregon's most prestigious communities.",
      articleSlug: "top-5-custom-home-design-trends-bend-oregon-2026-1234567890",
      articleCategory: "Design Trends",
      publishedAt: new Date("2026-03-07T09:00:00Z"),
    });

    expect(result).toBe(true);
  });

  it("should return false when RESEND_API_KEY is not configured", async () => {
    // Re-mock ENV with empty key
    vi.doMock("./_core/env", () => ({
      ENV: {
        resendApiKey: "",
        isProduction: false,
      },
    }));

    // Re-import to pick up new mock
    vi.resetModules();
    const { sendArticlePublishedNotification } = await import("./_core/email");

    const result = await sendArticlePublishedNotification({
      articleTitle: "Test Article",
      articleExcerpt: "Test excerpt",
      articleSlug: "test-article-123",
      articleCategory: "Test",
      publishedAt: new Date(),
    });

    expect(result).toBe(false);
  });

  it("should include article title in email subject", async () => {
    vi.resetModules();

    vi.doMock("./_core/env", () => ({
      ENV: {
        resendApiKey: "re_test_key",
        isProduction: false,
      },
    }));

    const { Resend } = await import("resend");
    const mockSend = vi.fn().mockResolvedValue({ data: { id: "test-id" }, error: null });
    vi.mocked(Resend).mockImplementation(() => ({
      emails: { send: mockSend },
    }) as any);

    const { sendArticlePublishedNotification } = await import("./_core/email");

    await sendArticlePublishedNotification({
      articleTitle: "Luxury Homes at Brasada Ranch",
      articleExcerpt: "Explore the finest custom homes at Brasada Ranch.",
      articleSlug: "luxury-homes-brasada-ranch-1234567890",
      articleCategory: "Neighborhoods",
      publishedAt: new Date(),
    });

    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        subject: "New Article Published: Luxury Homes at Brasada Ranch",
        to: ["kevin@reacohomes.com"],
      })
    );
  });
});
