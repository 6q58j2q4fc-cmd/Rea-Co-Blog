/**
 * Bend Oregon Home Builder - Core Keyword Landing Page
 * Targets: "home builder Bend Oregon", "Bend Oregon home builder",
 * "new home builder Bend OR", "custom home builder Bend OR"
 * This is the primary keyword page with full E-E-A-T content
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import AdvancedSEO from "@/components/AdvancedSEO";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import RelatedCommunities from "@/components/RelatedCommunities";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  MapPin,
  Phone,
  ArrowRight,
  Star,
  CheckCircle,
  Award,
  Clock,
  Home,
  Shield,
  Leaf,
  Mountain,
} from "lucide-react";

const buildingProcess = [
  {
    step: "01",
    title: "Free Consultation",
    description: "Meet with Kevin to discuss your vision, budget, and timeline. Site evaluation included.",
    duration: "1–2 weeks"
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Work with architects to develop your custom plans. Kevin reviews for constructability and value.",
    duration: "2–4 months"
  },
  {
    step: "03",
    title: "Permitting",
    description: "Rea Co Homes manages all permit applications with Deschutes County and HOA review.",
    duration: "2–4 months"
  },
  {
    step: "04",
    title: "Construction",
    description: "Kevin personally oversees all phases from foundation to final finishes.",
    duration: "10–14 months"
  },
  {
    step: "05",
    title: "Move-In",
    description: "Personal walkthrough, systems orientation, and warranty coverage begins.",
    duration: "Final week"
  }
];

const bendCommunities = [
  { name: "Tetherow Golf Resort", description: "World-class golf community with Cascade views", link: "/tetherow-custom-homes" },
  { name: "Pronghorn Resort", description: "Luxury resort community with two golf courses", link: "/pronghorn-builder" },
  { name: "Broken Top", description: "Prestigious gated community in NW Bend", link: "/broken-top-builder" },
  { name: "Awbrey Butte", description: "Elevated views over Bend and the Cascades", link: "/awbrey-butte-builder" },
  { name: "Juniper Preserve", description: "New luxury community in NE Bend", link: "/juniper-preserve-builder" },
  { name: "Northwest Crossing", description: "Walkable urban neighborhood in NW Bend", link: "/northwest-crossing-builder" },
  { name: "Awbrey Glen", description: "Golf community with panoramic views", link: "/awbrey-glen-builder" },
  { name: "Old Mill District", description: "Riverfront living near downtown Bend", link: "/old-mill-builder" },
];

const faqs = [
  {
    question: "Is Rea Co Homes a licensed home builder in Bend, Oregon?",
    answer: "Yes, Rea Co Homes is fully licensed in Oregon under CCB #193427. Kevin Rea has maintained his contractor license since 1977 and carries full general liability insurance and workers' compensation coverage. All subcontractors are also licensed and insured."
  },
  {
    question: "What types of homes does Rea Co Homes build in Bend?",
    answer: "Rea Co Homes builds custom luxury homes ranging from 2,500 to 8,000+ square feet in Bend, Oregon. Styles include mountain contemporary, high desert modern, craftsman, and traditional Pacific Northwest. Every home is completely custom — no repeated floor plans."
  },
  {
    question: "How do I start the process of building a custom home in Bend, Oregon?",
    answer: "The first step is a free consultation with Kevin Rea. Call 541-390-9848 or submit a contact form. Kevin will discuss your vision, evaluate your lot (or help you find one), and provide a preliminary cost estimate. There's no obligation and no pressure."
  },
  {
    question: "Does Rea Co Homes help with lot selection in Bend?",
    answer: "Yes, Kevin Rea has extensive knowledge of Bend's neighborhoods, communities, and available lots. He can evaluate lots for buildability, views, solar orientation, and site conditions. Kevin works with local real estate agents and can refer you to specialists in specific communities."
  }
];

export default function BendOregonHomeBuilder() {
  return (
    <div className="min-h-screen bg-cream">
      <PageSEO
        title="Home Builder Bend Oregon | Custom Homes | Kevin Rea"
        description="Kevin Rea of Rea Co Homes has been building custom homes in Bend, Oregon since 1977. 100+ homes built in Tetherow, Pronghorn, Broken Top & all Bend communities. CCB #193427. Call 541-390-9848."
        canonicalUrl="/home-builder-bend-oregon"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/hero-main_2cc4c17d.jpg"
        keywords={[
          "home builder Bend Oregon",
          "Bend Oregon home builder",
          "custom home builder Bend OR",
          "new home construction Bend Oregon",
          "Bend Oregon custom homes"
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
          }))
        }}
      />
      <AdvancedSEO
        page="location"
        locationName="Bend Oregon"
        locationSlug="home-builder-bend-oregon"
        faqs={faqs}
        breadcrumbs={[{ name: "Home Builder Bend Oregon", url: "/home-builder-bend-oregon" }]}
      />
      <Header />

      {/* Hero */}
      <section className="relative bg-timber text-white py-24 pt-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/hero-main_2cc4c17d.jpg')" }}
        />
        <div className="container relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 text-amber font-body text-sm uppercase tracking-widest mb-4">
            <MapPin className="w-4 h-4" />
            <span>Bend, Oregon</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Home Builder in Bend, Oregon
          </h1>
          <p className="font-body text-xl text-white/85 mb-8 leading-relaxed max-w-3xl">
            Kevin Rea of Rea Co Homes has been building exceptional custom homes in Bend, Oregon 
            since 1977. With 100+ homes completed across Bend's most prestigious communities, 
            Kevin brings unmatched local expertise to every project.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-2xl">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="font-display text-2xl font-semibold text-amber">45+</div>
              <div className="font-body text-sm text-white/80">Years in Bend</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="font-display text-2xl font-semibold text-amber">100+</div>
              <div className="font-body text-sm text-white/80">Homes Built</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="font-display text-2xl font-semibold text-amber">5.0 ★</div>
              <div className="font-body text-sm text-white/80">Client Rating</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-amber text-timber hover:bg-amber/90 font-body font-semibold uppercase tracking-wide">
                Get Free Estimate
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

      {/* About Kevin - E-E-A-T */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">
                About Kevin Rea
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-6">
                Bend's Most Experienced Custom Home Builder
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                Kevin Rea began building custom homes in Central Oregon in 1977 and has never 
                left. His deep roots in the Bend community, relationships with local architects 
                and craftspeople, and intimate knowledge of the land make him uniquely qualified 
                to build your dream home here.
              </p>
              <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                Unlike large production builders, Kevin personally manages every project from 
                initial consultation through final walkthrough. His clients have his personal 
                cell phone number and can reach him anytime.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Oregon CCB License #193427 since 1977",
                  "2x Realtors Tour Best of Show Award winner",
                  "Earth Hero Award for sustainable building",
                  "Governor's Livability Award recipient",
                  "Personal project management on every build",
                  "19 Bend communities served"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber flex-shrink-0" />
                    <span className="font-body text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button className="bg-timber text-white hover:bg-timber/90 font-body font-semibold uppercase tracking-wide">
                  Learn More About Kevin
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/kevin-rea_e5f6g7h8.webp"
                alt="Kevin Rea - Custom Home Builder in Bend Oregon since 1977"
                className="rounded-lg shadow-2xl w-full"
                loading="lazy"
                width="600"
                height="700"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber text-timber p-5 rounded-lg shadow-xl">
                <div className="font-display text-2xl font-semibold">Since 1977</div>
                <div className="font-body text-sm uppercase tracking-wide">Building in Bend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Process */}
      <section className="py-20 bg-stone/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-4">
              How We Build Your Custom Home in Bend
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent, step-by-step process with Kevin Rea personally guiding you 
              from first consultation to move-in day.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-amber/30 mx-20" />
            <div className="grid md:grid-cols-5 gap-6">
              {buildingProcess.map((step) => (
                <div key={step.step} className="text-center relative">
                  <div className="w-16 h-16 bg-amber text-timber rounded-full flex items-center justify-center font-display text-xl font-semibold mx-auto mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-timber mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-2 leading-relaxed">{step.description}</p>
                  <span className="font-body text-xs text-amber font-medium">{step.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bend Communities */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-4">
              Bend Communities Where We Build
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              From Tetherow to Juniper Preserve, Kevin Rea has built exceptional homes 
              in every major Bend community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bendCommunities.map((community) => (
              <Link key={community.name} href={community.link}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-all cursor-pointer group h-full">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-semibold text-timber group-hover:text-amber transition-colors text-sm">
                        {community.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-amber opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                    <p className="font-body text-sm text-muted-foreground">{community.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-stone/30">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-timber mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-border p-6">
                <h3 className="font-display text-lg font-semibold text-timber mb-3">{faq.question}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{faq.answer}</p>
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
              Start Building Your Bend Home Today
            </h2>
            <p className="font-body text-white/80 text-lg">
              Contact Kevin Rea for a free consultation. No obligation, no pressure.
            </p>
          </div>
          <LeadCaptureForm source="bend-home-builder-page" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
