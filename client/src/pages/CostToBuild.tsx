/**
 * Cost to Build a Custom Home in Bend Oregon - High-Value SEO Landing Page
 * Targets high-intent searches: "how much to build custom home Bend Oregon",
 * "custom home cost per square foot Oregon", "luxury home builder cost Central Oregon"
 * Includes HowTo schema, FAQ schema, and detailed pricing data for featured snippets
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import AdvancedSEO from "@/components/AdvancedSEO";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import {
  DollarSign,
  Home,
  TrendingUp,
  CheckCircle,
  Phone,
  ArrowRight,
  Calculator,
  Info,
  Building,
} from "lucide-react";

const costData = [
  {
    tier: "Entry Luxury",
    sqftRange: "2,000 – 3,000 sq ft",
    costPerSqft: "$350 – $450",
    totalRange: "$700K – $1.35M",
    description: "Quality finishes, standard layouts, efficient design",
    features: ["Granite countertops", "Hardwood floors", "Standard cabinetry", "Efficient HVAC", "2-car garage"],
    color: "bg-stone/30"
  },
  {
    tier: "Mid Luxury",
    sqftRange: "3,000 – 4,500 sq ft",
    costPerSqft: "$450 – $550",
    totalRange: "$1.35M – $2.5M",
    description: "Premium finishes, custom design, high-end systems",
    features: ["Quartz/marble countertops", "Wide-plank hardwood", "Custom cabinetry", "Geothermal HVAC", "3-car garage", "Outdoor living"],
    color: "bg-amber/10",
    highlight: true
  },
  {
    tier: "Ultra Luxury",
    sqftRange: "4,500+ sq ft",
    costPerSqft: "$550 – $800+",
    totalRange: "$2.5M – $6M+",
    description: "Bespoke materials, architectural masterpiece, smart home",
    features: ["Natural stone throughout", "Custom millwork", "Smart home automation", "Wine cellar", "Home theater", "Infinity pool", "4+ car garage"],
    color: "bg-timber/5"
  }
];

const costFactors = [
  {
    factor: "Lot & Site Work",
    lowRange: "$50,000",
    highRange: "$300,000+",
    notes: "Slope, utilities, access, soil conditions"
  },
  {
    factor: "Architectural Design",
    lowRange: "$30,000",
    highRange: "$150,000+",
    notes: "Custom plans vs. modified stock plans"
  },
  {
    factor: "Permits & Fees",
    lowRange: "$15,000",
    highRange: "$50,000",
    notes: "Deschutes County, HOA review fees"
  },
  {
    factor: "Foundation",
    lowRange: "$40,000",
    highRange: "$150,000+",
    notes: "Slab vs. crawl space vs. full basement"
  },
  {
    factor: "Framing & Structure",
    lowRange: "$80,000",
    highRange: "$300,000+",
    notes: "Complexity, ceiling heights, timber accents"
  },
  {
    factor: "Exterior Finishes",
    lowRange: "$50,000",
    highRange: "$250,000+",
    notes: "Stone, wood siding, metal roofing"
  },
  {
    factor: "HVAC & Mechanical",
    lowRange: "$40,000",
    highRange: "$150,000+",
    notes: "Geothermal, radiant heat, smart systems"
  },
  {
    factor: "Interior Finishes",
    lowRange: "$100,000",
    highRange: "$500,000+",
    notes: "Cabinetry, flooring, fixtures, appliances"
  },
  {
    factor: "Landscaping",
    lowRange: "$20,000",
    highRange: "$200,000+",
    notes: "Fire-wise, irrigation, outdoor living"
  }
];

const faqs = [
  {
    question: "How much does it cost to build a custom home in Bend, Oregon?",
    answer: "Custom home construction in Bend, Oregon typically costs $350 to $800+ per square foot, depending on finishes, site conditions, and complexity. A 3,000 sq ft luxury home ranges from $1.05M to $2.4M. Total project costs including land, permits, and landscaping typically run $1.5M to $5M+ for premium custom homes in communities like Brasada Ranch, Tetherow, and Pronghorn."
  },
  {
    question: "What is the cost per square foot to build a custom home in Central Oregon?",
    answer: "In 2024-2025, custom home construction in Central Oregon costs $350-$450/sqft for entry luxury, $450-$550/sqft for mid-luxury, and $550-$800+/sqft for ultra-luxury homes. These figures include labor, materials, and contractor overhead but typically exclude land, permits, landscaping, and design fees."
  },
  {
    question: "How long does it take to build a custom home in Bend Oregon?",
    answer: "Building a custom home in Bend, Oregon typically takes 12-18 months from groundbreaking to move-in. Including the design and permitting phase (4-8 months), the total timeline from initial consultation to move-in is 18-26 months. Larger or more complex homes may take 24-30 months total."
  },
  {
    question: "What is the most expensive part of building a custom home?",
    answer: "The most expensive components of a custom home build are typically: interior finishes (cabinets, flooring, fixtures) at 25-35% of construction cost, structural framing at 15-20%, and mechanical systems (HVAC, plumbing, electrical) at 15-20%. Site work and foundation can also be significant, especially on sloped or challenging lots in Central Oregon."
  },
  {
    question: "Do I need a construction loan to build a custom home?",
    answer: "Yes, most custom home builds require a construction loan, which converts to a permanent mortgage upon completion. You'll typically need 20-25% down payment, good credit (720+), and proof of income. Local lenders like Washington Federal, Summit Bank, and Mid Oregon Credit Union specialize in construction financing in Central Oregon."
  },
  {
    question: "How much does it cost to build a home in Brasada Ranch?",
    answer: "Building a custom home in Brasada Ranch typically costs $1.5M to $4M+, including the lot ($300K-$800K+), construction ($450-$650/sqft), architectural design, permits, and landscaping. HOA architectural review fees and design guideline compliance add to the timeline and cost. Rea Co Homes has built multiple award-winning homes at Brasada Ranch."
  }
];

export default function CostToBuild() {
  return (
    <div className="min-h-screen bg-cream">
      <PageSEO
        title="Cost to Build a Custom Home in Bend Oregon 2025"
        description="How much does it cost to build a custom home in Bend, Oregon? Complete pricing guide: $350-$800+/sqft. Get a free estimate from Kevin Rea, Central Oregon's top builder since 1977."
        canonicalUrl="/cost-to-build-custom-home-bend-oregon"
        keywords={[
          "cost to build custom home Bend Oregon",
          "custom home cost per square foot Oregon",
          "how much to build luxury home Central Oregon",
          "Bend Oregon home construction cost 2025",
          "custom home builder price estimate Oregon"
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />
      <AdvancedSEO
        page="home"
        faqs={faqs}
        breadcrumbs={[
          { name: "Cost to Build", url: "/cost-to-build-custom-home-bend-oregon" }
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-timber text-white py-20 pt-32">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-amber font-body text-sm uppercase tracking-widest mb-4">
            <Calculator className="w-4 h-4" />
            <span>2025 Pricing Guide</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Cost to Build a Custom Home in Bend, Oregon
          </h1>
          <p className="font-body text-xl text-white/85 mb-8 leading-relaxed">
            Complete pricing breakdown for luxury custom home construction in Central Oregon. 
            Based on 45+ years of building exceptional homes by Kevin Rea.
          </p>
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="bg-white/10 rounded-lg px-6 py-4 text-center">
              <div className="font-display text-3xl font-semibold text-amber">$350–$800+</div>
              <div className="font-body text-sm text-white/80 mt-1">Per Square Foot</div>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-4 text-center">
              <div className="font-display text-3xl font-semibold text-amber">12–18 mo</div>
              <div className="font-body text-sm text-white/80 mt-1">Build Timeline</div>
            </div>
            <div className="bg-white/10 rounded-lg px-6 py-4 text-center">
              <div className="font-display text-3xl font-semibold text-amber">$1.5M–$6M+</div>
              <div className="font-body text-sm text-white/80 mt-1">Total Project Cost</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-amber text-timber hover:bg-amber/90 font-body font-semibold uppercase tracking-wide">
                Get Free Cost Estimate
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

      {/* Cost Tiers */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-4">
              Custom Home Cost Tiers in Central Oregon
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Pricing varies significantly based on finishes, site conditions, and design complexity. 
              Here's a realistic breakdown for 2024-2025 construction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {costData.map((tier) => (
              <Card key={tier.tier} className={`border-0 shadow-lg ${tier.highlight ? "ring-2 ring-amber" : ""}`}>
                {tier.highlight && (
                  <div className="bg-amber text-timber text-center py-2 font-body text-sm font-semibold uppercase tracking-wide rounded-t-lg">
                    Most Common
                  </div>
                )}
                <CardHeader className={`${tier.color} rounded-t-lg`}>
                  <CardTitle className="font-display text-xl text-timber">{tier.tier}</CardTitle>
                  <div className="font-body text-sm text-muted-foreground">{tier.sqftRange}</div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-4">
                    <div className="font-display text-2xl font-semibold text-timber">{tier.costPerSqft}</div>
                    <div className="font-body text-sm text-muted-foreground">per square foot</div>
                    <div className="font-body text-lg font-medium text-amber mt-1">{tier.totalRange}</div>
                    <div className="font-body text-sm text-muted-foreground">total construction cost</div>
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-4">{tier.description}</p>
                  <ul className="space-y-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 font-body text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-amber flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-amber/10 border border-amber/30 rounded-lg p-6 flex gap-4">
            <Info className="w-6 h-6 text-amber flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-body text-sm text-foreground">
                <strong>Important:</strong> These figures represent construction costs only and exclude land purchase, 
                architectural design fees, permits, landscaping, and furniture. Total project costs including land 
                in premium communities like Brasada Ranch or Tetherow typically run 40-60% higher than construction costs alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown Table */}
      <section className="py-16 bg-stone/30">
        <div className="container">
          <h2 className="font-display text-3xl font-semibold text-timber mb-4 text-center">
            Detailed Cost Breakdown by Category
          </h2>
          <p className="font-body text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Understanding where your money goes helps you make informed decisions during the design phase.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-timber text-white">
                  <th className="text-left font-body font-semibold py-4 px-6">Cost Category</th>
                  <th className="text-right font-body font-semibold py-4 px-6">Low Range</th>
                  <th className="text-right font-body font-semibold py-4 px-6">High Range</th>
                  <th className="text-left font-body font-semibold py-4 px-6 hidden md:table-cell">Key Factors</th>
                </tr>
              </thead>
              <tbody>
                {costFactors.map((item, index) => (
                  <tr key={item.factor} className={index % 2 === 0 ? "bg-white" : "bg-stone/20"}>
                    <td className="font-body font-medium text-timber py-4 px-6">{item.factor}</td>
                    <td className="font-body text-right py-4 px-6 text-muted-foreground">{item.lowRange}</td>
                    <td className="font-body text-right py-4 px-6 font-medium text-timber">{item.highRange}</td>
                    <td className="font-body text-sm text-muted-foreground py-4 px-6 hidden md:table-cell">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-timber mb-4 text-center">
            Frequently Asked Questions About Custom Home Costs
          </h2>
          <p className="font-body text-muted-foreground text-center mb-10">
            Answers to the most common questions about building costs in Central Oregon.
          </p>

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

      {/* Community Cost Comparison */}
      <section className="py-16 bg-stone/30">
        <div className="container">
          <h2 className="font-display text-3xl font-semibold text-timber mb-4 text-center">
            Cost by Community in Central Oregon
          </h2>
          <p className="font-body text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Land costs and HOA requirements vary significantly across Central Oregon communities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Brasada Ranch", landCost: "$300K–$800K", buildCost: "$450–$650/sqft", link: "/brasada-ranch-builder" },
              { name: "Tetherow", landCost: "$250K–$600K", buildCost: "$450–$650/sqft", link: "/tetherow-custom-homes" },
              { name: "Pronghorn", landCost: "$200K–$500K", buildCost: "$400–$600/sqft", link: "/pronghorn-builder" },
              { name: "Broken Top", landCost: "$300K–$700K", buildCost: "$450–$650/sqft", link: "/broken-top-builder" },
              { name: "Sunriver/Caldera", landCost: "$150K–$400K", buildCost: "$400–$550/sqft", link: "/sunriver-builder" },
              { name: "Awbrey Butte", landCost: "$200K–$500K", buildCost: "$425–$600/sqft", link: "/awbrey-butte-builder" },
              { name: "Black Butte Ranch", landCost: "$150K–$400K", buildCost: "$400–$550/sqft", link: "/black-butte-ranch-builder" },
              { name: "Redmond", landCost: "$100K–$300K", buildCost: "$350–$500/sqft", link: "/redmond-builder" },
              { name: "Sisters", landCost: "$150K–$400K", buildCost: "$375–$525/sqft", link: "/sisters-builder" },
            ].map((community) => (
              <Link key={community.name} href={community.link}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display font-semibold text-timber group-hover:text-amber transition-colors">
                        {community.name}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-amber opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between font-body text-sm">
                        <span className="text-muted-foreground">Land cost:</span>
                        <span className="font-medium text-foreground">{community.landCost}</span>
                      </div>
                      <div className="flex justify-between font-body text-sm">
                        <span className="text-muted-foreground">Build cost:</span>
                        <span className="font-medium text-amber">{community.buildCost}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-20 bg-timber">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">
              Get a Free Custom Home Cost Estimate
            </h2>
            <p className="font-body text-white/80 text-lg">
              Kevin Rea provides free, no-obligation consultations and detailed cost estimates 
              for custom home projects throughout Central Oregon.
            </p>
          </div>
          <LeadCaptureForm source="cost-to-build-page" />
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-cream">
        <div className="container">
          <h2 className="font-display text-2xl font-semibold text-timber mb-8 text-center">
            Explore Custom Home Building in Central Oregon
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: "Dream Home Builder", desc: "Interactive cost calculator", link: "/dream-home-builder", icon: Calculator },
              { title: "Our Portfolio", desc: "See completed custom homes", link: "/portfolio", icon: Building },
              { title: "FAQ", desc: "All your questions answered", link: "/faq", icon: Info },
              { title: "Contact Kevin", desc: "Free consultation", link: "/contact", icon: Phone },
            ].map((item) => (
              <Link key={item.title} href={item.link}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer group text-center p-6">
                  <item.icon className="w-8 h-8 text-amber mx-auto mb-3" />
                  <h3 className="font-display font-semibold text-timber group-hover:text-amber transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
