/**
 * Home Page - High Desert Modernism Design
 * Main landing page for Rea Co Homes lead generation
 * Features: Hero, About, Portfolio preview, Neighborhoods, Testimonials, CTA
 * SEO: Full structured data, E-E-A-T signals, FAQ schema, HowTo schema
 */

import Header from "@/components/Header";
import PageSEO from "@/components/PageSEO";
import AdvancedSEO from "@/components/AdvancedSEO";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Phone,
  Award,
  Home as HomeIcon,
  Users,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  Shield,
  Leaf,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "Kevin's passion for building is unmatched. His attention to detail, his professionalism and the artful nature with which he approaches every project rings of the highest order.",
    author: "Jim Rozewski",
    location: "Brasada Ranch",
    rating: 5,
  },
  {
    quote:
      "Kevin is a master builder – of relationships, ideas, teams and spaces. I have known Kevin for a decade and have enjoyed his vision, energy, talents and company every time we've connected.",
    author: "Barbara Sumner",
    location: "O'Neil Residence",
    rating: 5,
  },
  {
    quote:
      "We knew immediately upon meeting with Kevin that we found our builder. Clear, present and trustworthy are just a few of the many attributes we enjoyed during our build process.",
    author: "McCartney Family",
    location: "Brasada Ranch",
    rating: 5,
  },
];

const stats = [
  { value: "45+", label: "Years Experience", icon: Clock },
  { value: "100+", label: "Custom Homes Built", icon: HomeIcon },
  { value: "19", label: "Neighborhoods Served", icon: MapPin },
  { value: "100%", label: "Client Satisfaction", icon: Star },
];

const neighborhoods = [
  { name: "Brasada Ranch", location: "Powell Butte", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/mccartney-exterior_e5caf5be.webp", link: "/brasada-ranch-builder" },
  { name: "Tetherow", location: "Bend", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/reaco-chiaramonte-exterior_58703850.webp", link: "/tetherow-custom-homes" },
  { name: "Pronghorn", location: "Bend", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/oneil-exterior_0d3f2739.webp", link: "/pronghorn-builder" },
  { name: "Broken Top", location: "Bend", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/vonschlegell-exterior_bea8cf63.webp", link: "/broken-top-builder" },
  { name: "Awbrey Butte", location: "Bend", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/brown-kitchen_0babdbb6.webp", link: "/awbrey-butte-builder" },
  { name: "Caldera Springs", location: "Sunriver", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/craft-exterior_2bccdeaf.webp", link: "/caldera-springs-builder" },
];

// FAQ data for rich snippets
const homeFaqs = [
  {
    question: "Who is the best custom home builder in Bend, Oregon?",
    answer: "Kevin Rea of Rea Co Homes is widely recognized as one of Bend, Oregon's premier custom home builders. With 45+ years of experience, 100+ homes built, multiple Best of Show awards, and the Earth Hero Award, Kevin brings unmatched expertise and craftsmanship to every project."
  },
  {
    question: "How much does it cost to build a custom home in Central Oregon?",
    answer: "Custom home construction in Central Oregon typically costs $350 to $800+ per square foot, with total project costs ranging from $1.05M to $6M+ depending on size, finishes, and community. Rea Co Homes provides free, detailed cost estimates during the initial consultation."
  },
  {
    question: "What communities does Rea Co Homes build in?",
    answer: "Rea Co Homes builds throughout Central Oregon, including Brasada Ranch, Tetherow, Pronghorn, Broken Top, Awbrey Butte, Caldera Springs, Sunriver, Black Butte Ranch, Juniper Preserve, Northwest Crossing, and cities including Bend, Redmond, Sisters, La Pine, and Prineville."
  },
  {
    question: "How long has Kevin Rea been building custom homes?",
    answer: "Kevin Rea has been building custom homes in Central Oregon since 1977 — over 45 years of experience. He has personally managed every project, building more than 100 exceptional custom homes throughout the region."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageSEO
        title="Custom Home Builder Bend Oregon | Kevin Rea | Rea Co Homes"
        description="Award-winning custom home builder in Bend, Oregon since 1977. Kevin Rea builds luxury homes in Brasada Ranch, Tetherow & all Central Oregon communities. CCB #193427. Call 541-390-9848."
        canonicalUrl="/"
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/hero-main_2cc4c17d.jpg"
        keywords={["custom home builder Bend Oregon", "luxury homes Central Oregon", "Brasada Ranch builder", "Tetherow custom homes", "home construction Bend"]}
      />
      <AdvancedSEO
        page="home"
        faqs={homeFaqs}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/hero-main_2cc4c17d.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-timber/90 via-timber/70 to-transparent" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <p className="font-body text-amber uppercase tracking-widest text-sm mb-4 animate-fade-in" data-speakable>
              Central Oregon's Premier Custom Home Builder
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 animate-fade-in-up" data-speakable>
              Award-Winning Custom Homes in Central Oregon
            </h1>
            <p className="font-body text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up animation-delay-200" data-speakable>
              Since 1977, Kevin Rea has been crafting exceptional luxury homes
              with uncompromising dedication to detail and an artistic touch.
              From Brasada Ranch to Tetherow, we bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-amber text-timber hover:bg-amber/90 font-body font-semibold uppercase tracking-wide text-base px-8"
                >
                  Start Your Project
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

            <div className="mt-12 flex flex-wrap items-center gap-6 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-amber" />
                <span className="font-body text-white/80 text-sm">
                  2x National Best of Show
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-amber" />
                <span className="font-body text-white/80 text-sm">
                  Earth Hero Award
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-amber" />
                <span className="font-body text-white/80 text-sm">
                  CCB #193427
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-stone py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-amber mx-auto mb-3" />
                <div className="font-display text-4xl font-semibold text-timber mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - E-E-A-T Signals */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">
                About Kevin Rea
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-6" data-speakable>
                A Master Builder of Relationships, Ideas & Spaces
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                Each home we have completed is unique and creative in its own
                way. All of our custom homes have one thing in common: satisfied
                happy homeowners. We satisfy our clients time and time again
                with our well-managed team of professionals pushed to do their
                best and make creative contributions to our projects.
              </p>
              <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                Kevin personally manages every project. Good people management
                skills along with a natural engineering aptitude complement his
                artful creative seasoned eye for fine details.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Award className="w-5 h-5 text-amber" />
                  <span className="font-body text-sm font-medium text-timber">
                    Realtors Tour Best of Show
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Award className="w-5 h-5 text-amber" />
                  <span className="font-body text-sm font-medium text-timber">
                    ACA Award Winner
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Shield className="w-5 h-5 text-amber" />
                  <span className="font-body text-sm font-medium text-timber">
                    CCB #193427 Licensed
                  </span>
                </div>
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
                alt="Kevin Rea - Master Custom Home Builder in Central Oregon since 1977"
                className="rounded-lg shadow-2xl"
                width="600"
                height="700"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber text-timber p-6 rounded-lg shadow-xl">
                <div className="font-display text-3xl font-semibold">1977</div>
                <div className="font-body text-sm uppercase tracking-wide">
                  Building Since
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-timber diagonal-top">
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">
              Our Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Selected Custom Home Projects
            </h2>
            <p className="font-body text-lg text-white/80 max-w-2xl mx-auto">
              Explore our portfolio of award-winning luxury homes across Central
              Oregon's most prestigious communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/reaco-hero-portfolio_980a56c9.webp"
                alt="Luxury Custom Home Interior - Rea Co Homes Central Oregon"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                width="800"
                height="320"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-timber/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-1">
                    Brasada Ranch Residence
                  </h3>
                  <p className="font-body text-white/80 text-sm">
                    Modern mountain contemporary with panoramic views
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-hero-exterior_d6a8fd30.webp"
                alt="Tetherow Custom Home - Rea Co Homes"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                width="400"
                height="320"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-timber/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-1">
                    Tetherow Showplace
                  </h3>
                  <p className="font-body text-white/80 text-sm">
                    Glass, wood & stone harmony
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button
                size="lg"
                className="bg-amber text-timber hover:bg-amber/90 font-body font-semibold uppercase tracking-wide"
              >
                View Full Portfolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">
              Where We Build
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-4">
              Central Oregon's Premier Communities
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              From Brasada Ranch to Tetherow, we build luxury custom homes in
              Central Oregon's most sought-after neighborhoods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {neighborhoods.map((neighborhood) => (
              <Link key={neighborhood.name} href={neighborhood.link}>
                <Card
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={neighborhood.image}
                      alt={`Custom homes in ${neighborhood.name} - Rea Co Homes`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="400"
                      height="192"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-timber/60 to-transparent" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-display text-lg font-semibold text-timber group-hover:text-amber transition-colors">
                      {neighborhood.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {neighborhood.location}, Oregon
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/neighborhoods">
              <Button className="bg-timber text-white hover:bg-timber/90 font-body font-semibold uppercase tracking-wide">
                Explore All Neighborhoods
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - E-E-A-T */}
      <section className="py-20 bg-stone">
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">
              Client Testimonials
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg p-6 relative"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="absolute top-4 right-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber text-amber"
                    />
                  ))}
                </div>
                <CardContent className="p-0 pt-8">
                  <p className="font-body text-muted-foreground italic mb-6 leading-relaxed" itemProp="reviewBody">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-display font-semibold text-timber" itemProp="author">
                      {testimonial.author}
                    </p>
                    <p className="font-body text-sm text-amber flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/testimonials">
              <Button variant="outline" className="border-timber text-timber hover:bg-timber hover:text-white font-body font-semibold uppercase tracking-wide">
                Read All Testimonials
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section for Rich Snippets */}
      <section className="py-20 bg-cream">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">
              Common Questions
            </p>
            <h2 className="font-display text-3xl font-semibold text-timber mb-4">
              Custom Home Building in Central Oregon
            </h2>
          </div>
          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-border p-6">
                <h3 className="font-display text-lg font-semibold text-timber mb-3">{faq.question}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq">
              <Button variant="outline" className="border-timber text-timber hover:bg-timber hover:text-white font-body font-semibold uppercase tracking-wide">
                View All FAQs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Capture CTA */}
      <section className="py-20 bg-timber">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">
                Start Your Journey
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
                Ready to Build Your Dream Home in Central Oregon?
              </h2>
              <p className="font-body text-lg text-white/80 mb-8 leading-relaxed">
                Contact Kevin Rea today for a free, no-obligation consultation. 
                We'll discuss your vision, evaluate your site, and provide a 
                detailed estimate for your custom home project.
              </p>
              <div className="space-y-3">
                {[
                  "Free initial consultation and site evaluation",
                  "Detailed cost estimate within 2 weeks",
                  "Architectural referrals if needed",
                  "No pressure, no obligation",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber flex-shrink-0" />
                    <span className="font-body text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <LeadCaptureForm source="homepage" />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Internal Linking Hub - Boosts PageRank Distribution */}
      <section className="py-16 bg-stone/30">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-semibold text-timber mb-3">
              Explore Rea Co Homes
            </h2>
            <p className="font-body text-muted-foreground">
              Everything you need to start your Central Oregon custom home journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-display font-semibold text-timber mb-3 text-sm uppercase tracking-wide">Build Locations</h3>
              <ul className="space-y-2">
                {[
                  { href: "/brasada-ranch-builder", label: "Brasada Ranch Builder" },
                  { href: "/tetherow-custom-homes", label: "Tetherow Custom Homes" },
                  { href: "/pronghorn-builder", label: "Pronghorn Builder" },
                  { href: "/broken-top-builder", label: "Broken Top Builder" },
                  { href: "/caldera-springs-builder", label: "Caldera Springs Builder" },
                  { href: "/sunriver-builder", label: "Sunriver Builder" },
                  { href: "/neighborhoods", label: "All 19 Communities →" },
                ].map(link => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="font-body text-sm text-muted-foreground hover:text-amber transition-colors">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-timber mb-3 text-sm uppercase tracking-wide">Popular Searches</h3>
              <ul className="space-y-2">
                {[
                  { href: "/luxury-home-builder-bend-oregon", label: "Luxury Home Builder Bend" },
                  { href: "/home-builder-bend-oregon", label: "Home Builder Bend Oregon" },
                  { href: "/custom-home-builder-near-me", label: "Custom Home Builder Near Me" },
                  { href: "/cost-to-build-custom-home-bend-oregon", label: "Cost to Build in Bend" },
                  { href: "/services", label: "Our Services" },
                  { href: "/compare-communities", label: "Compare Communities" },
                  { href: "/dream-home-builder", label: "Dream Home Builder Tool" },
                ].map(link => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="font-body text-sm text-muted-foreground hover:text-amber transition-colors">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-timber mb-3 text-sm uppercase tracking-wide">Resources</h3>
              <ul className="space-y-2">
                {[
                  { href: "/portfolio", label: "Portfolio Gallery" },
                  { href: "/about", label: "About Kevin Rea" },
                  { href: "/faq", label: "Building FAQs" },
                  { href: "/resources", label: "Free Guides & Downloads" },
                  { href: "/testimonials", label: "Client Testimonials" },
                  { href: "/blog", label: "Blog & Articles" },
                  { href: "/news", label: "Industry News" },
                ].map(link => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="font-body text-sm text-muted-foreground hover:text-amber transition-colors">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-timber mb-3 text-sm uppercase tracking-wide">More Locations</h3>
              <ul className="space-y-2">
                {[
                  { href: "/awbrey-butte-builder", label: "Awbrey Butte Builder" },
                  { href: "/awbrey-glen-builder", label: "Awbrey Glen Builder" },
                  { href: "/black-butte-ranch-builder", label: "Black Butte Ranch" },
                  { href: "/juniper-preserve-builder", label: "Juniper Preserve" },
                  { href: "/redmond-builder", label: "Redmond Builder" },
                  { href: "/sisters-builder", label: "Sisters Builder" },
                  { href: "/eagle-crest-builder", label: "Eagle Crest Builder" },
                ].map(link => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="font-body text-sm text-muted-foreground hover:text-amber transition-colors">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
