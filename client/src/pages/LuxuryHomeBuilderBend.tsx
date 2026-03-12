/**
 * Luxury Home Builder Bend Oregon - High-Value SEO Landing Page
 * Targets: "luxury home builder Bend Oregon", "luxury custom homes Bend",
 * "high end home builder Bend Oregon", "premium home builder Central Oregon"
 * Includes Person schema, Service schema, Review schema for E-E-A-T
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
  Award,
  Star,
  CheckCircle,
  Phone,
  ArrowRight,
  Home,
  Gem,
  Shield,
  Leaf,
  Mountain,
  Users,
} from "lucide-react";

const luxuryFeatures = [
  {
    icon: Gem,
    title: "Bespoke Architectural Design",
    description: "Every Rea Co home is a one-of-a-kind architectural statement. Kevin works with Central Oregon's finest architects to create homes that perfectly balance form, function, and the natural landscape."
  },
  {
    icon: Mountain,
    title: "Premium Site & View Optimization",
    description: "Decades of building on Central Oregon's varied terrain means Kevin knows how to maximize views, solar orientation, and indoor-outdoor connection on any lot."
  },
  {
    icon: Leaf,
    title: "Sustainable Luxury",
    description: "Earth Advantage certified builds featuring geothermal systems, solar integration, triple-pane windows, and smart home automation — luxury that's also responsible."
  },
  {
    icon: Shield,
    title: "Transparent, Trustworthy Process",
    description: "Detailed contracts, open-book accounting, and weekly progress updates. Kevin personally manages every project and is always reachable by phone."
  },
  {
    icon: Users,
    title: "Curated Artisan Network",
    description: "45+ years of relationships with Central Oregon's finest craftspeople: cabinetmakers, tile artisans, stone masons, and finish carpenters."
  },
  {
    icon: Award,
    title: "Award-Winning Results",
    description: "Multiple Best of Show awards from the Realtors Tour of Homes, the Earth Hero Award, and the Governor's Livability Award recognize our commitment to excellence."
  }
];

const completedHomes = [
  {
    name: "Rozewski Residence — Brasada Ranch",
    description: "5,200 sq ft mountain contemporary with panoramic Cascade views, reclaimed timber accents, and geothermal heating.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/hero-neighborhoods_390b87d1.jpg",
    value: "$3.2M"
  },
  {
    name: "Chiaramonte Residence — Tetherow",
    description: "4,800 sq ft modern desert home with floor-to-ceiling glass, Cascade Mountain views, and resort-quality outdoor living.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-hero-exterior_d6a8fd30.webp",
    value: "$2.8M"
  },
  {
    name: "McCartney Family Home — Brasada Ranch",
    description: "4,200 sq ft rustic luxury home with handcrafted timber frame, stone fireplaces, and equestrian access.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/mccartney-exterior_e5caf5be.webp",
    value: "$2.4M"
  }
];

const testimonials = [
  {
    quote: "Kevin's passion for building is unmatched. His attention to detail, his professionalism and the artful nature with which he approaches every project rings of the highest order.",
    author: "Jim Rozewski",
    location: "Brasada Ranch",
    rating: 5
  },
  {
    quote: "Kevin is a master builder – of relationships, ideas, teams and spaces. I have known Kevin for a decade and have enjoyed his vision, energy, talents and company every time we've connected.",
    author: "Barbara Sumner",
    location: "O'Neil Residence",
    rating: 5
  },
  {
    quote: "We knew immediately upon meeting with Kevin that we found our builder. Clear, present and trustworthy are just a few of the many attributes we enjoyed during our build process.",
    author: "McCartney Family",
    location: "Brasada Ranch",
    rating: 5
  }
];

const faqs = [
  {
    question: "Who builds the best luxury custom homes in Bend, Oregon?",
    answer: "Kevin Rea of Rea Co Homes is consistently recognized as one of Bend, Oregon's premier luxury home builders. With 45+ years of experience, 100+ luxury homes built, multiple Best of Show awards, and the Earth Hero Award for sustainable building, Kevin delivers unmatched quality. CCB #193427."
  },
  {
    question: "What makes a luxury custom home builder different from a production builder?",
    answer: "A luxury custom home builder like Rea Co Homes provides fully bespoke homes designed specifically for you and your lot — no repeated floor plans. You get personal attention from the builder (Kevin Rea manages every project himself), premium materials, artisan craftsmanship, and a transparent process. Production builders build the same plans repeatedly with standard finishes."
  },
  {
    question: "What is the minimum budget for a luxury custom home in Bend Oregon?",
    answer: "Entry-level luxury custom homes in Bend, Oregon start around $1.05M for a 3,000 sq ft home with quality finishes. Most Rea Co Homes projects range from $1.5M to $5M+, with ultra-luxury homes in communities like Brasada Ranch, Tetherow, and Pronghorn often exceeding $3M total project cost including land."
  },
  {
    question: "Does Rea Co Homes build in gated communities?",
    answer: "Yes, Rea Co Homes has extensive experience building in gated communities throughout Central Oregon including Brasada Ranch, Tetherow, Pronghorn, Broken Top, Awbrey Glen, Crosswater, and Caldera Springs. Kevin manages all HOA architectural review submissions and ensures full compliance with community design guidelines."
  }
];

export default function LuxuryHomeBuilderBend() {
  return (
    <div className="min-h-screen bg-cream">
      <PageSEO
        title="Luxury Home Builder Bend Oregon | Kevin Rea | Rea Co Homes"
        description="Bend Oregon's premier luxury custom home builder since 1977. Kevin Rea builds extraordinary homes in Brasada Ranch, Tetherow, Pronghorn & all Central Oregon communities. CCB #193427. Call 541-390-9848."
        canonicalUrl="/luxury-home-builder-bend-oregon"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-hero-exterior_d6a8fd30.webp"
        keywords={[
          "luxury home builder Bend Oregon",
          "luxury custom homes Bend",
          "high end home builder Bend Oregon",
          "premium home builder Central Oregon",
          "luxury home construction Bend"
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
        locationSlug="luxury-home-builder-bend-oregon"
        faqs={faqs}
        breadcrumbs={[{ name: "Luxury Home Builder Bend Oregon", url: "/luxury-home-builder-bend-oregon" }]}
      />
      <Header />

      {/* Hero */}
      <section
        className="relative min-h-[80vh] flex items-center"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-hero-exterior_d6a8fd30.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-timber/95 via-timber/75 to-transparent" />
        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber font-body text-sm uppercase tracking-widest mb-4">
              <Gem className="w-4 h-4" />
              <span>Bend Oregon's Premier Luxury Builder</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Luxury Custom Home Builder in Bend, Oregon
            </h1>
            <p className="font-body text-xl text-white/85 mb-8 leading-relaxed">
              Since 1977, Kevin Rea has been crafting Central Oregon's most extraordinary 
              luxury homes — each one a unique architectural masterpiece built with 
              uncompromising attention to detail.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Star className="w-4 h-4 text-amber fill-amber" />
                <span className="font-body text-sm text-white">5.0 Rating (47 Reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Award className="w-4 h-4 text-amber" />
                <span className="font-body text-sm text-white">2x Best of Show Winner</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Shield className="w-4 h-4 text-amber" />
                <span className="font-body text-sm text-white">CCB #193427</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-amber text-timber hover:bg-amber/90 font-body font-semibold uppercase tracking-wide">
                  Schedule Consultation
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
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "45+", label: "Years Building Luxury Homes" },
              { value: "100+", label: "Custom Homes Completed" },
              { value: "$1.5M–$6M+", label: "Typical Project Range" },
              { value: "5-Star", label: "Client Satisfaction Rating" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-semibold text-timber mb-1">{stat.value}</div>
                <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">The Rea Co Difference</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-4">
              What Sets Rea Co Homes Apart
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Building a luxury home is the largest investment most people make. 
              Here's why discerning Central Oregon homeowners choose Kevin Rea.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxuryFeatures.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="w-8 h-8 text-amber mb-4" />
                  <h3 className="font-display text-lg font-semibold text-timber mb-2">{feature.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Luxury Homes */}
      <section className="py-20 bg-timber">
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">Featured Projects</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Recent Luxury Custom Homes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {completedHomes.map((home) => (
              <div key={home.name} className="group overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={home.image}
                    alt={`${home.name} - Luxury Custom Home by Rea Co Homes`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width="400"
                    height="224"
                  />
                  <div className="absolute top-3 right-3 bg-amber text-timber font-body font-semibold text-sm px-3 py-1 rounded">
                    {home.value}
                  </div>
                </div>
                <div className="bg-white p-5">
                  <h3 className="font-display font-semibold text-timber mb-2">{home.name}</h3>
                  <p className="font-body text-sm text-muted-foreground">{home.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/portfolio">
              <Button size="lg" className="bg-amber text-timber hover:bg-amber/90 font-body font-semibold uppercase tracking-wide">
                View Full Portfolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-stone">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-semibold text-timber mb-4">
              What Luxury Homeowners Say About Kevin Rea
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber text-amber" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-display font-semibold text-timber">{testimonial.author}</p>
                  <p className="font-body text-sm text-amber">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-timber mb-10 text-center">
            Luxury Home Builder FAQs
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
              Begin Your Luxury Home Journey
            </h2>
            <p className="font-body text-white/80 text-lg">
              Contact Kevin Rea for a private, no-obligation consultation about your 
              luxury custom home in Central Oregon.
            </p>
          </div>
          <LeadCaptureForm source="luxury-home-builder-page" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
