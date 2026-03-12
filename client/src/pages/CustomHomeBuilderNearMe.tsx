/**
 * Custom Home Builder Near Me - Local SEO Landing Page
 * Targets "near me" searches which are extremely high-intent local queries
 * Optimized for Google's local pack and map results
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
  MapPin,
  Phone,
  ArrowRight,
  Star,
  CheckCircle,
  Award,
  Clock,
  Home,
  Navigation,
} from "lucide-react";

const serviceAreas = [
  { city: "Bend", distance: "Local", communities: ["Tetherow", "Pronghorn", "Broken Top", "Awbrey Butte", "Northwest Crossing", "Juniper Preserve"], link: "/" },
  { city: "Powell Butte", distance: "15 min", communities: ["Brasada Ranch"], link: "/brasada-ranch-builder" },
  { city: "Sunriver", distance: "20 min", communities: ["Caldera Springs", "Crosswater"], link: "/sunriver-builder" },
  { city: "Redmond", distance: "20 min", communities: ["Eagle Crest Resort"], link: "/redmond-builder" },
  { city: "Sisters", distance: "30 min", communities: ["Black Butte Ranch", "Aspen Lakes"], link: "/sisters-builder" },
  { city: "La Pine", distance: "35 min", communities: ["Sunriver Area"], link: "/la-pine-builder" },
  { city: "Prineville", distance: "35 min", communities: ["Brasada Ranch Area"], link: "/prineville-builder" },
  { city: "Tumalo", distance: "10 min", communities: ["Rural Acreage"], link: "/" },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: "45+ Years Building Locally",
    description: "Kevin Rea has been building custom homes in Central Oregon since 1977. No one knows the land, climate, and communities better."
  },
  {
    icon: Award,
    title: "Award-Winning Craftsmanship",
    description: "Multiple Best of Show awards, Earth Hero Award, and Governor's Livability Award recognize our commitment to excellence."
  },
  {
    icon: Home,
    title: "100+ Custom Homes Built",
    description: "Over 100 exceptional custom homes completed across Central Oregon's most prestigious communities."
  },
  {
    icon: Star,
    title: "5-Star Client Reviews",
    description: "100% client satisfaction with glowing reviews from homeowners in Brasada Ranch, Tetherow, and throughout Central Oregon."
  },
  {
    icon: CheckCircle,
    title: "Licensed & Insured",
    description: "Oregon Contractor License CCB #193427. Fully bonded and insured for your complete protection."
  },
  {
    icon: MapPin,
    title: "Truly Local Builder",
    description: "Based in Bend, Oregon. Kevin personally manages every project and is available to meet at your site."
  }
];

const faqs = [
  {
    question: "Who is the best custom home builder near Bend, Oregon?",
    answer: "Kevin Rea of Rea Co Homes is widely recognized as one of Central Oregon's premier custom home builders. With 45+ years of experience, 100+ homes built, and multiple Best of Show awards, Kevin brings unmatched expertise to every project. He personally manages every build and is based in Bend, Oregon."
  },
  {
    question: "How do I find a reputable custom home builder near me in Central Oregon?",
    answer: "Look for builders with: Oregon CCB license (Rea Co Homes: CCB #193427), local experience (45+ years for Kevin Rea), a portfolio of completed homes in your target community, client references, and transparent pricing. Always visit completed homes and speak with past clients before selecting a builder."
  },
  {
    question: "Does Rea Co Homes build custom homes near Sisters, Oregon?",
    answer: "Yes, Rea Co Homes builds custom homes in Sisters, Oregon and surrounding communities including Black Butte Ranch and Aspen Lakes Golf Course. Sisters is approximately 30 minutes from Bend, and Kevin Rea has extensive experience building in this beautiful mountain community."
  },
  {
    question: "Can Rea Co Homes build on my rural lot near Bend?",
    answer: "Yes, Rea Co Homes builds on rural acreage throughout Deschutes, Crook, and Jefferson counties. Kevin evaluates rural lots for buildability including well and septic requirements, access, and site conditions. Rural builds often offer more design freedom and privacy."
  }
];

export default function CustomHomeBuilderNearMe() {
  return (
    <div className="min-h-screen bg-cream">
      <PageSEO
        title="Custom Home Builder Near Me - Central Oregon"
        description="Looking for a custom home builder near Bend, Oregon? Kevin Rea of Rea Co Homes has built 100+ luxury homes in Central Oregon since 1977. Serving Bend, Redmond, Sisters & all communities. Call 541-390-9848."
        canonicalUrl="/custom-home-builder-near-me"
        keywords={[
          "custom home builder near me",
          "custom home builder near Bend Oregon",
          "luxury home builder near me Central Oregon",
          "local custom home builder Bend",
          "home builder near Bend Oregon"
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
        locationName="Central Oregon"
        locationSlug="custom-home-builder-near-me"
        faqs={faqs}
        breadcrumbs={[{ name: "Custom Home Builder Near Me", url: "/custom-home-builder-near-me" }]}
      />
      <Header />

      {/* Hero */}
      <section className="relative bg-timber text-white py-20 pt-32">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-amber font-body text-sm uppercase tracking-widest mb-4">
            <Navigation className="w-4 h-4" />
            <span>Serving All of Central Oregon</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Custom Home Builder Near Bend, Oregon
          </h1>
          <p className="font-body text-xl text-white/85 mb-8 leading-relaxed">
            Kevin Rea of Rea Co Homes has been building exceptional custom homes throughout 
            Central Oregon since 1977. Locally based in Bend, serving every community within 
            a 60-mile radius.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Star className="w-5 h-5 text-amber fill-amber" />
              <span className="font-body text-sm">5.0 Rating (47 Reviews)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <CheckCircle className="w-5 h-5 text-amber" />
              <span className="font-body text-sm">CCB #193427 Licensed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Home className="w-5 h-5 text-amber" />
              <span className="font-body text-sm">100+ Homes Built</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-amber text-timber hover:bg-amber/90 font-body font-semibold uppercase tracking-wide">
                Schedule Free Consultation
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

      {/* Service Area Map */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-4">
              Where We Build Custom Homes Near You
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Rea Co Homes serves all communities within 60 miles of Bend, Oregon. 
              Click any area to learn more about building your custom home there.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <Link key={area.city} href={area.link}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-all cursor-pointer group h-full">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-amber" />
                        <h3 className="font-display font-semibold text-timber group-hover:text-amber transition-colors">
                          {area.city}
                        </h3>
                      </div>
                      <span className="font-body text-xs text-muted-foreground bg-stone/50 px-2 py-1 rounded">
                        {area.distance}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {area.communities.map((community) => (
                        <div key={community} className="flex items-center gap-1.5 font-body text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-amber flex-shrink-0" />
                          {community}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-stone/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-4">
              Why Choose Rea Co Homes as Your Local Builder
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-amber mb-4" />
                  <h3 className="font-display text-lg font-semibold text-timber mb-2">{item.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-timber mb-10 text-center">
            Questions About Finding a Local Custom Home Builder
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
              Ready to Build Your Dream Home Near Bend?
            </h2>
            <p className="font-body text-white/80 text-lg">
              Contact Kevin Rea today for a free consultation. We'll discuss your vision, 
              evaluate your site, and provide a detailed estimate.
            </p>
          </div>
          <LeadCaptureForm source="near-me-page" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
