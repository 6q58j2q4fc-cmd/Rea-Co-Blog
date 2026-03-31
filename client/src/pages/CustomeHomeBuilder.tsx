import PageSEO from "@/components/PageSEO";
import AdvancedSEO from "@/components/AdvancedSEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";

/**
 * Custome Home Builder - Misspelling Landing Page
 * Targets the common misspelling "custome" instead of "custom"
 * Provides 301 redirect to /services but also serves SEO value
 */

export default function CustomeHomeBuilder() {
  return (
    <div className="min-h-screen">
      <PageSEO
        title="Custome Home Builder Bend Oregon | Custom Homes | Rea Co Homes"
        description="Award-winning custome home builder in Bend, Oregon. Kevin Rea builds luxury custom homes in Central Oregon since 1977."
        canonicalUrl="/custome-home-builder"
        keywords={["custome home builder", "custom home builder", "luxury homes Bend Oregon"]}
      />
      <AdvancedSEO />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-main.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-timber/90 via-timber/70 to-transparent" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">
              Central Oregon's Premier Custom Home Builder
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Award-Winning Custom Homes in Central Oregon
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Since 1977, Kevin Rea has been crafting exceptional luxury custom homes with uncompromising dedication to detail and an artistic touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-amber text-timber hover:bg-amber/90 font-body font-semibold uppercase tracking-wide text-base px-8"
                >
                  View Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:541-390-9848">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-body font-semibold uppercase tracking-wide text-base px-8 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  541-390-9848
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Rea Co Homes */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-4">
              Why Choose Rea Co Homes for Your Custom Build?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              With over 45 years of experience building luxury custom homes in Central Oregon, Kevin Rea delivers unmatched quality and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "45+ Years Experience",
                description: "Decades of expertise building luxury custom homes in Central Oregon",
              },
              {
                title: "100+ Homes Built",
                description: "Award-winning portfolio across all premium neighborhoods",
              },
              {
                title: "Award-Winning Quality",
                description: "2x National Best of Show winner and ACA Award recipient",
              },
              {
                title: "Personal Management",
                description: "Kevin Rea personally manages every project from start to finish",
              },
              {
                title: "Artistic Vision",
                description: "Combines engineering expertise with creative design excellence",
              },
              {
                title: "100% Satisfaction",
                description: "Consistent track record of satisfied, happy homeowners",
              },
            ].map((benefit, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-amber flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-semibold text-timber mb-2">{benefit.title}</h3>
                    <p className="font-body text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-timber">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to Build Your Dream Custom Home?
          </h2>
          <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Kevin Rea today to discuss your custom home project in Central Oregon's most prestigious communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:541-390-9848">
              <Button
                size="lg"
                className="bg-amber text-timber hover:bg-amber/90 font-body font-semibold uppercase tracking-wide"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 541-390-9848
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-body font-semibold uppercase tracking-wide bg-transparent"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
