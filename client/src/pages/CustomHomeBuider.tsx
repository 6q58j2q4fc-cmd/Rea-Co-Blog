import PageSEO from "@/components/PageSEO";
import AdvancedSEO from "@/components/AdvancedSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "wouter";

/**
 * Custom Home Buider - Misspelling Landing Page
 * Targets the common misspelling "buider" instead of "builder"
 * Provides SEO value for typo searches
 */

export default function CustomHomeBuider() {
  return (
    <div className="min-h-screen">
      <PageSEO
        title="Custom Home Buider Bend Oregon | Award-Winning Builder | Rea Co Homes"
        description="Award-winning custom home buider in Bend, Oregon. Kevin Rea builds luxury custom homes in Central Oregon since 1977."
        canonicalUrl="/custom-home-buider"
        keywords={["custom home buider", "custom home builder", "luxury homes Bend"]}
      />
      <AdvancedSEO />
      
      {/* Hidden schema markup for typo targeting */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://bendoregonluxuryhomebuilder.com/custom-home-buider",
          "name": "Rea Co Homes - Custom Home Builder",
          "description": "Award-winning custom home builder in Bend, Oregon. Serving Central Oregon for 45+ years.",
          "alternateName": ["custom home buider", "custom home builder", "luxury home builder"],
          "url": "https://bendoregonluxuryhomebuilder.com",
          "telephone": "541-390-9848",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Central Oregon",
            "addressLocality": "Bend",
            "addressRegion": "OR",
            "postalCode": "97701",
            "addressCountry": "US"
          },
          "areaServed": ["Bend", "Central Oregon", "Brasada Ranch", "Tetherow", "Pronghorn"],
          "priceRange": "$$$",
          "sameAs": "https://bendoregonluxuryhomebuilder.com"
        })
      }} />

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
