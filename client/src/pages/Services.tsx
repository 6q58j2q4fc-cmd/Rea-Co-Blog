/**
 * Services Page - Custom Home Building Services in Central Oregon
 * Targets: "custom home building services Bend Oregon", "luxury home builder services"
 * Includes Service schema, detailed service descriptions, and E-E-A-T signals
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import AdvancedSEO from "@/components/AdvancedSEO";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Home,
  Hammer,
  Leaf,
  Mountain,
  Award,
  ArrowRight,
  Phone,
  CheckCircle,
  Wrench,
  Lightbulb,
  Building,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Custom Home Construction",
    slug: "custom-home-construction",
    description: "Full-service custom home building from groundbreaking to move-in. Kevin Rea personally manages every phase of construction, ensuring quality craftsmanship and clear communication throughout your build.",
    features: [
      "Architectural coordination and design review",
      "Complete permit management (Deschutes County)",
      "Site preparation and foundation work",
      "Structural framing and exterior envelope",
      "All mechanical systems (HVAC, plumbing, electrical)",
      "Premium interior finishes and fixtures",
      "Landscaping coordination",
      "Final walkthrough and warranty coverage"
    ],
    priceRange: "$1.05M – $6M+",
    timeline: "12–18 months",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/hero-main_2cc4c17d.jpg"
  },
  {
    icon: Mountain,
    title: "Golf Community Luxury Homes",
    slug: "golf-community-homes",
    description: "Specialized expertise in building luxury custom homes within Central Oregon's premier golf communities, including Brasada Ranch, Tetherow, Pronghorn, and Broken Top. Full architectural review compliance.",
    features: [
      "HOA architectural review management",
      "Community design guideline compliance",
      "Golf course view optimization",
      "Resort-quality outdoor living spaces",
      "Indoor-outdoor flow design",
      "Cascade Mountain view maximization",
      "Premium material sourcing",
      "Award-winning design coordination"
    ],
    priceRange: "$1.5M – $6M+",
    timeline: "14–24 months",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/reaco-hero-portfolio_980a56c9.webp"
  },
  {
    icon: Leaf,
    title: "Sustainable & Green Home Building",
    slug: "sustainable-homes",
    description: "Earth Advantage certified and LEED-inspired custom homes that minimize environmental impact while maximizing comfort and energy efficiency. Kevin Rea won the Earth Hero Award for sustainable building practices.",
    features: [
      "Earth Advantage certification",
      "Solar panel and solar tile integration",
      "Geothermal heating and cooling systems",
      "High-performance insulation (R-38+ walls)",
      "Triple-pane window systems",
      "Smart home energy management",
      "EV charging infrastructure",
      "Fire-wise landscaping design"
    ],
    priceRange: "$1.2M – $4M+",
    timeline: "14–20 months",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-hero-exterior_d6a8fd30.webp"
  },
  {
    icon: Wrench,
    title: "Major Home Renovations",
    slug: "home-renovations",
    description: "Comprehensive renovations and additions to existing luxury homes in Central Oregon. Maintain architectural integrity while modernizing systems, expanding living spaces, and upgrading finishes.",
    features: [
      "Structural additions and expansions",
      "Kitchen and bathroom renovations",
      "Master suite additions",
      "Garage expansions",
      "Outdoor living space creation",
      "Energy efficiency upgrades",
      "Smart home integration",
      "Historic and architectural preservation"
    ],
    priceRange: "$200K – $2M+",
    timeline: "3–12 months",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/brown-kitchen_0babdbb6.webp"
  },
  {
    icon: Lightbulb,
    title: "Pre-Construction Consulting",
    slug: "pre-construction-consulting",
    description: "Expert guidance before you break ground. Kevin evaluates lots, reviews plans, provides cost estimates, and helps you avoid costly mistakes before construction begins.",
    features: [
      "Lot evaluation and site feasibility",
      "Plan review and constructability analysis",
      "Detailed cost estimation",
      "Value engineering recommendations",
      "Architect and designer referrals",
      "Community and HOA guidance",
      "Financing strategy advice",
      "Timeline and phasing planning"
    ],
    priceRange: "Complimentary consultation",
    timeline: "1–4 weeks",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/kevin-rea_e5f6g7h8.webp"
  },
  {
    icon: Building,
    title: "Spec Home Development",
    slug: "spec-homes",
    description: "Investment-grade spec homes built in Central Oregon's most desirable communities. Rea Co Homes builds spec homes that command premium prices due to exceptional quality and strategic location selection.",
    features: [
      "Strategic community and lot selection",
      "Market-optimized floor plans",
      "Premium spec-level finishes",
      "Professional staging coordination",
      "Real estate agent partnerships",
      "Investment return optimization",
      "Quick-close capability",
      "Warranty and disclosure packages"
    ],
    priceRange: "$1.2M – $4M",
    timeline: "12–18 months",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/vonschlegell-exterior_bea8cf63.webp"
  }
];

const serviceSchemaData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Custom Home Building Services - Rea Co Homes",
  "description": "Comprehensive custom home building services in Central Oregon by Kevin Rea",
  "url": "https://bendoregonluxuryhomebuilder.com/services",
  "itemListElement": services.map((service, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://bendoregonluxuryhomebuilder.com/#homebuilder",
        "name": "Rea Co Homes"
      },
      "areaServed": "Central Oregon",
      "url": `https://bendoregonluxuryhomebuilder.com/services#${service.slug}`
    }
  }))
};

const faqs = [
  {
    question: "What custom home building services does Rea Co Homes offer?",
    answer: "Rea Co Homes offers full-service custom home construction, golf community luxury homes, sustainable green building, major home renovations, pre-construction consulting, and spec home development throughout Central Oregon."
  },
  {
    question: "Does Rea Co Homes handle all permits for custom home construction?",
    answer: "Yes, Rea Co Homes manages all permit applications including building permits, electrical, plumbing, mechanical, and HOA architectural review submissions. We handle all coordination with Deschutes County and community architectural review committees."
  },
  {
    question: "Can Rea Co Homes build a sustainable or green custom home?",
    answer: "Absolutely. Kevin Rea won the Earth Hero Award for sustainable building practices. We build Earth Advantage certified homes with solar panels, geothermal systems, high-performance insulation, and smart home energy management."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-cream">
      <PageSEO
        title="Custom Home Building Services - Central Oregon"
        description="Rea Co Homes offers complete custom home building services in Central Oregon: new construction, golf community homes, green building, renovations & consulting. Kevin Rea, CCB #193427. Call 541-390-9848."
        canonicalUrl="/services"
        keywords={[
          "custom home building services Bend Oregon",
          "luxury home builder services Central Oregon",
          "golf community home builder Oregon",
          "sustainable home builder Bend",
          "home renovation contractor Central Oregon"
        ]}
        structuredData={serviceSchemaData}
      />
      <AdvancedSEO
        page="home"
        faqs={faqs}
        breadcrumbs={[{ name: "Services", url: "/services" }]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-timber text-white py-20 pt-32">
        <div className="container max-w-4xl text-center">
          <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">
            Complete Building Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Custom Home Building Services in Central Oregon
          </h1>
          <p className="font-body text-xl text-white/85 mb-8 leading-relaxed max-w-3xl mx-auto">
            From initial consultation to final walkthrough, Rea Co Homes provides comprehensive 
            custom home building services throughout Central Oregon. Kevin Rea personally manages 
            every project with 45+ years of expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-amber text-timber hover:bg-amber/90 font-body font-semibold uppercase tracking-wide">
                Discuss Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:541-390-9848">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent font-body font-semibold uppercase tracking-wide">
                <Phone className="w-5 h-5 mr-2" />
                541-390-9848
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-amber" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-timber">
                      {service.title}
                    </h2>
                  </div>
                  <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-stone/50 rounded-lg px-4 py-2">
                      <div className="font-body text-xs text-muted-foreground uppercase tracking-wide">Investment</div>
                      <div className="font-display font-semibold text-timber">{service.priceRange}</div>
                    </div>
                    <div className="bg-stone/50 rounded-lg px-4 py-2">
                      <div className="font-body text-xs text-muted-foreground uppercase tracking-wide">Timeline</div>
                      <div className="font-display font-semibold text-timber">{service.timeline}</div>
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button className="bg-timber text-white hover:bg-timber/90 font-body font-semibold uppercase tracking-wide">
                      Inquire About {service.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <img
                    src={service.image}
                    alt={`${service.title} - Rea Co Homes Central Oregon`}
                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-stone/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Award, value: "45+", label: "Years Experience" },
              { icon: Home, value: "100+", label: "Homes Built" },
              { icon: CheckCircle, value: "CCB #193427", label: "Licensed & Insured" },
              { icon: Hammer, value: "5-Star", label: "Client Reviews" },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="w-8 h-8 text-amber mx-auto mb-3" />
                <div className="font-display text-3xl font-semibold text-timber mb-1">{stat.value}</div>
                <div className="font-body text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-20 bg-timber">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">
              Start Your Custom Home Project
            </h2>
            <p className="font-body text-white/80 text-lg">
              Contact Kevin Rea for a free consultation about your custom home project in Central Oregon.
            </p>
          </div>
          <LeadCaptureForm source="services-page" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
