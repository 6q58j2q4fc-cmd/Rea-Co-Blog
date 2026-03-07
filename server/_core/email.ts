/**
 * Email Service using Resend
 * Sends transactional emails for article notifications and other events
 */

import { Resend } from "resend";
import { ENV } from "./env";

let resendClient: Resend | null = null;

function getResendClient(): Resend | null {
  if (!ENV.resendApiKey) {
    console.warn("[Email] RESEND_API_KEY is not configured");
    return null;
  }
  if (!resendClient) {
    resendClient = new Resend(ENV.resendApiKey);
  }
  return resendClient;
}

export interface ArticleNotificationParams {
  articleTitle: string;
  articleExcerpt: string;
  articleSlug: string;
  articleCategory: string;
  publishedAt: Date;
}

/**
 * Send an email notification to kevin@reacohomes.com when a new article is published
 */
export async function sendArticlePublishedNotification(
  params: ArticleNotificationParams
): Promise<boolean> {
  const client = getResendClient();
  if (!client) return false;

  const siteUrl = ENV.isProduction
    ? "https://bendluxuryhomebuilder.com"
    : "https://reahomes-jh6dlq8f.manus.space";

  const articleUrl = `${siteUrl}/articles/${params.articleSlug}`;
  const formattedDate = params.publishedAt.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  try {
    const { error } = await client.emails.send({
      from: "Rea Co Homes Blog <blog@reacohomes.com>",
      to: ["kevin@reacohomes.com"],
      subject: `New Article Published: ${params.articleTitle}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Georgia, serif; line-height: 1.6; color: #2C1810; max-width: 600px; margin: 0 auto; padding: 20px; background: #F5F0EB;">
  <div style="background: #2C1810; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
    <h1 style="color: #D4A574; font-size: 22px; margin: 0; font-family: Georgia, serif;">Rea Co Homes Blog</h1>
    <p style="color: #ffffff; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin: 8px 0 0 0;">New Article Published</p>
  </div>

  <div style="background: #ffffff; padding: 32px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <p style="color: #888; font-size: 13px; margin: 0 0 16px 0;">${formattedDate} &bull; ${params.articleCategory}</p>

    <h2 style="color: #2C1810; font-size: 24px; margin: 0 0 16px 0; font-family: Georgia, serif; line-height: 1.3;">
      ${params.articleTitle}
    </h2>

    <p style="color: #555; font-size: 16px; line-height: 1.7; margin: 0 0 24px 0;">
      ${params.articleExcerpt}
    </p>

    <div style="text-align: center; margin: 32px 0;">
      <a href="${articleUrl}"
         style="background: #D4A574; color: #2C1810; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block;">
        Read Full Article
      </a>
    </div>

    <hr style="border: none; border-top: 1px solid #E5DED6; margin: 24px 0;">

    <p style="color: #888; font-size: 13px; margin: 0; text-align: center;">
      This notification was sent automatically by the Rea Co Homes blog scheduler.<br>
      <a href="${siteUrl}/blog" style="color: #D4A574;">View all articles</a> &bull;
      <a href="${siteUrl}/admin" style="color: #D4A574;">Admin dashboard</a>
    </p>
  </div>
</body>
</html>
      `,
      text: `New Article Published on Rea Co Homes Blog

${params.articleTitle}
${formattedDate} | ${params.articleCategory}

${params.articleExcerpt}

Read the full article: ${articleUrl}

---
View all articles: ${siteUrl}/blog
This notification was sent automatically by the blog scheduler.`,
    });

    if (error) {
      console.error("[Email] Failed to send article notification:", error);
      return false;
    }

    console.log(`[Email] Article notification sent to kevin@reacohomes.com: "${params.articleTitle}"`);
    return true;
  } catch (err) {
    console.error("[Email] Error sending article notification:", err);
    return false;
  }
}
