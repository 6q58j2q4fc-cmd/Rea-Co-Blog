/**
 * Optimized Lead Capture Form Component
 * High-conversion form with pre-qualification, pricing context, and clear CTAs
 * Based on industry best practices: Diamond Group, BG Collective, 2026 research
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight, CheckCircle, Clock, DollarSign } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  location: string;
}

export default function LeadCaptureOptimized() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "custom-home",
    budget: "",
    timeline: "",
    location: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to backend
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(
          "Thank you! We'll contact you within 24 hours to discuss your project."
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          projectType: "custom-home",
          budget: "",
          timeline: "",
          location: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-timber/10 to-amber/10 rounded-lg p-8 border border-timber/20">
      <div className="mb-6">
        <h3 className="font-display text-2xl font-semibold text-timber mb-2">
          Start Your Custom Home Project
        </h3>
        <p className="font-body text-muted-foreground">
          Share a few details and we'll provide a personalized consultation
        </p>
      </div>

      {/* Trust Signals */}
      <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-timber/10">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber" />
          <span className="font-body text-sm text-muted-foreground">
            Response within 24 hours
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-amber" />
          <span className="font-body text-sm text-muted-foreground">
            No obligation consultation
          </span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-amber" />
          <span className="font-body text-sm text-muted-foreground">
            Transparent pricing
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="font-body"
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="font-body"
          />
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="font-body"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="font-body"
          />
        </div>

        {/* Project Type */}
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-input rounded-md bg-white font-body text-sm"
        >
          <option value="custom-home">Custom Home Build</option>
          <option value="renovation">Home Renovation</option>
          <option value="addition">Addition/Expansion</option>
          <option value="design-build">Design-Build Services</option>
          <option value="other">Other Project Type</option>
        </select>

        {/* Pre-Qualification Fields */}
        <div className="grid grid-cols-2 gap-4">
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="px-4 py-2 border border-input rounded-md bg-white font-body text-sm"
          >
            <option value="">Project Budget</option>
            <option value="under-500k">Under $500K</option>
            <option value="500k-750k">$500K - $750K</option>
            <option value="750k-1m">$750K - $1M</option>
            <option value="1m-1.5m">$1M - $1.5M</option>
            <option value="1.5m-2m">$1.5M - $2M</option>
            <option value="over-2m">Over $2M</option>
          </select>

          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="px-4 py-2 border border-input rounded-md bg-white font-body text-sm"
          >
            <option value="">Project Timeline</option>
            <option value="planning">Still Planning (6+ months)</option>
            <option value="next-year">Next Year</option>
            <option value="next-6-months">Next 6 Months</option>
            <option value="next-3-months">Next 3 Months</option>
            <option value="urgent">Urgent (Starting Soon)</option>
          </select>
        </div>

        {/* Location */}
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-input rounded-md bg-white font-body text-sm"
        >
          <option value="">Service Area / Community</option>
          <option value="brasada-ranch">Brasada Ranch</option>
          <option value="tetherow">Tetherow</option>
          <option value="pronghorn">Pronghorn</option>
          <option value="broken-top">Broken Top</option>
          <option value="awbrey-butte">Awbrey Butte</option>
          <option value="caldera-springs">Caldera Springs</option>
          <option value="other-bend">Other Bend Area</option>
          <option value="central-oregon">Central Oregon</option>
        </select>

        {/* Pricing Context */}
        <div className="bg-amber/5 border border-amber/20 rounded-lg p-4 mb-4">
          <p className="font-body text-sm text-muted-foreground">
            <strong>Budget Guidance:</strong> Most custom builds in Central Oregon begin around $500K-$1M depending on finishes and site work. Lot preparation and site conditions can significantly affect total project cost.
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-amber text-timber hover:bg-amber/90 font-body font-semibold uppercase tracking-wide py-6 text-base"
        >
          {isSubmitting ? "Submitting..." : "Get Your Free Consultation"}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        {/* Secondary CTA */}
        <p className="text-center font-body text-sm text-muted-foreground">
          Or call us directly:{" "}
          <a
            href="tel:541-390-9848"
            className="text-timber font-semibold hover:text-amber transition-colors"
          >
            541-390-9848
          </a>
        </p>
      </form>

      {/* Privacy Notice */}
      <p className="text-center font-body text-xs text-muted-foreground mt-4">
        We respect your privacy. Your information will only be used to contact you about your project.
      </p>
    </div>
  );
}
