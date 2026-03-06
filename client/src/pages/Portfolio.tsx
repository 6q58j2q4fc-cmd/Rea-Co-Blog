/**
 * Portfolio Page - High Desert Modernism Design
 * Showcases Rea Co Homes custom home projects with lightbox gallery
 * All images sourced from reacohomes.com with accurate descriptions
 */

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import PageSEO from "@/components/PageSEO";
import Breadcrumb, { breadcrumbConfigs } from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, MapPin, ExternalLink, Expand, Grid3X3 } from "lucide-react";

// Portfolio projects with accurate data and images from reacohomes.com
// Each project has unique images - no duplicates across projects
const projects = [
  {
    name: "Chiaramonte Residence",
    location: "Tetherow Rim, Bend",
    description: "Tetherow Rim Showplace featuring stunning mountain views and modern luxury design. Designed by James Rozewski with expansive west-facing glass walls, swim spa, and Batu hardwood decks.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-hero-exterior_d6a8fd30.webp",
    additionalImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-exterior-angle_7102ad17.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-outdoor-living-fireplace_46092013.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-pool-deck_aab82e90.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-deck-sunset_292e260d.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-living-room_81f48221.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-interior-entry_eed1e28b.webp",
    ],
    features: ["Contemporary Luxury", "Mountain Views", "Glass Walls"],
    sqft: "5,200+",
    style: "Modern Contemporary",
  },
  {
    name: "1st Street Rapids",
    location: "Bend, Oregon",
    description: "Contemporary riverside residence nestled along the Deschutes River in Bend's historic district. Designed by Jim Rozewski featuring dramatic multi-slide glass walls, Batu hardwood decks, and a welcoming firepit.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/1ststreet-hero-exterior_8d6e9035.webp",
    additionalImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/1ststreet-dining_0277b104.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/1ststreet-kitchen_8e4b4769.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/1ststreet-living-room_c1b937ac.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/1ststreet-fireplace_214409f8.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/1ststreet-kitchen-dining_2bdcea7e.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/1ststreet-exterior-trees_f224bb47.webp",
    ],
    features: ["Riverside Location", "Modern Design", "3,500 Sq Ft"],
    sqft: "3,500",
    style: "Contemporary Custom Riverfront",
  },
  {
    name: "Underwood Residence",
    location: "Brasada Ranch",
    description: "Modern ranch design by Liz Dexter, AIA of Reveal Architecture. Features striking non-reflective metal roof, wall of glass, pedestal pavers on decks, and seamless indoor-outdoor living.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/underwood-hero-exterior_582ea3ac.webp",
    additionalImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/underwood-kitchen_7aad858d.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/underwood-great-room_6d927c16.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/underwood-exterior-night_18dc49f0.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/underwood-game-room_e20ae9e7.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/underwood-dining_44384536.webp",
    ],
    features: ["Modern Ranch", "Pool & Spa", "4,311 Sq Ft"],
    sqft: "4,311 + 1,500 deck",
    style: "Modern Ranch",
  },
  {
    name: "McCartney Residence",
    location: "Brasada Ranch",
    description: "Modern Ranch Contemporary with expansive views of the Cascade Mountain Range. Features wall of glass facing west and premium pedestal paver decks.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/mccartney-exterior-night_309be8ac.webp",
    additionalImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/mccartney-deck-sunset_e57ce98e.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/mccartney-kitchen_d9740e14.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/mccartney-bedroom_e024bc89.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/mccartney-living-room_15b91294.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/mccartney-dining_efd4201b.webp",
    ],
    features: ["Modern Ranch", "Mountain Views", "3,800 Sq Ft"],
    sqft: "3,800 + 2,000 deck",
    style: "Modern Ranch Contemporary",
  },
  {
    name: "O'Neil Residence",
    location: "Deschutes River Ranch",
    description: "Contemporary Agrarian design on the edge of a pasture bordering the Deschutes River. Features expansive walls of glass and unique barn vernacular style.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/oneil-hero-exterior_fa890129.webp",
    additionalImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/oneil-living-room_c43fe242.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/oneil-kitchen_c5cec306.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/oneil-dining_c680c913.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/oneil-bedroom_cb3a21e2.webp",
    ],
    features: ["River Views", "Agrarian Style", "4,800 Sq Ft"],
    sqft: "4,800",
    style: "Contemporary Agrarian",
  },
  {
    name: "Von Schlegell Residence",
    location: "Fort Klamath, Oregon",
    description: "Ranch House Contemporary on Seven Mile Creek. Three connected buildings using Aspen trees from the property, reclaimed boxcar wood, and custom sugar pine.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/vonschlegell-hero-hallway_1a493a06.webp",
    additionalImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/vonschlegell-exterior-pasture_56ff4d21.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/vonschlegell-deck-wood_70ec9d33.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/vonschlegell-kitchen_60343cca.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/vonschlegell-living-room_42bfa4ae.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/vonschlegell-bedroom_7fa4b73e.webp",
    ],
    features: ["Ranch House", "9,000 Sq Ft", "Remote Location"],
    sqft: "9,000",
    style: "Ranch House Contemporary",
  },
  {
    name: "Rozewski Residence",
    location: "Brasada Ranch",
    description: "Custom Ranch Contemporary with L-shaped footprint. Features lava rock fireplace, hand-hewn flooring, and ADU above the garage with Cascade Mountain views.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/rozewski-hero-exterior_1dec46c9.webp",
    additionalImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/rozewski-exterior-stone_159f5f5d.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/rozewski-living-room_eca1f1bd.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/rozewski-kitchen_75fdca35.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/rozewski-adu-deck_9205b5fb.webp",
    ],
    features: ["Ranch Style", "ADU Suite", "3,100 Sq Ft"],
    sqft: "3,100 + 1,500 deck",
    style: "Custom Ranch Contemporary",
  },
  {
    name: "Brown Residence",
    location: "Awbrey Butte, Bend",
    description: "Award-winning ICF home designed by Scott and June Brown. Won Best of Show at Realtors Tour of Homes and OCAPA Excellence in Concrete award. First ICF home in Bend.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/brown-hero-exterior_42e9482b.webp",
    additionalImages: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/brown-sitting-area_46f9e9ad.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/brown-rock-fountain_001360cc.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/brown-living-room-windows_5713f2c8.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/brown-fireplace-asian_acbb3eb1.webp",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/brown-fireplace-night_70d98f2f.webp",
    ],
    features: ["Best of Show", "ICF Construction", "4,500 Sq Ft"],
    sqft: "4,500",
    style: "Contemporary Elegance",
  },
];

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Get images for a specific project (for project-specific lightbox)
  const getProjectImages = (projectIndex: number) => {
    const project = projects[projectIndex];
    const images = [
      {
        src: project.image,
        alt: `${project.name} - Exterior`,
        title: project.name,
        description: `${project.location} - ${project.description}`,
      },
    ];
    
    if (project.additionalImages) {
      project.additionalImages.forEach((img, idx) => {
        images.push({
          src: img,
          alt: `${project.name} - View ${idx + 2}`,
          title: project.name,
          description: `${project.location} - ${project.style || 'Custom Home'}`,
        });
      });
    }
    
    return images;
  };

  // Current project images for lightbox
  const currentProjectImages = useMemo(() => {
    if (selectedProject === null) return [];
    return getProjectImages(selectedProject);
  }, [selectedProject]);

  const openLightbox = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedProject(null);
  };

  // Get image count for a project
  const getProjectImageCount = (project: typeof projects[0]) => {
    let count = 1; // main image
    if (project.additionalImages) {
      count += project.additionalImages.length;
    }
    return count;
  };

  return (
    <div className="min-h-screen">
      <PageSEO
        title="Custom Home Portfolio"
        description="Explore our portfolio of award-winning luxury custom homes in Central Oregon. From Brasada Ranch to Tetherow, see Kevin Rea's finest work."
        keywords={["custom home portfolio Bend Oregon", "luxury homes gallery Central Oregon", "Brasada Ranch homes", "Tetherow custom homes", "award-winning home builder"]}
        ogImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/chiaramonte-hero-exterior_d6a8fd30.webp"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663234433834/jH6DLQ8FrZGu3jgVut4Sqk/reaco-hero-portfolio_980a56c9.webp')" }}
        >
          <div className="absolute inset-0 bg-timber/80" />
        </div>

        <div className="container relative z-10 text-center">
          <Breadcrumb items={breadcrumbConfigs.portfolio} className="justify-center mb-6 text-white/70 [&_a]:text-white/70 [&_a:hover]:text-amber [&_span]:text-white" />
          <p className="font-body text-amber uppercase tracking-widest text-sm mb-4 animate-fade-in">
            Our Work
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 animate-fade-in-up">
            Selected Works
          </h1>
          <p className="font-body text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Explore our portfolio of award-winning luxury custom homes across Central Oregon's most prestigious communities.
          </p>
          <p className="font-body text-sm text-white/60 mt-4 animate-fade-in-up animation-delay-300">
            <Expand className="w-4 h-4 inline mr-1" />
            Click any image to view in full screen
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Main Image - Properly centered with object-fit */}
                <div 
                  className="relative h-72 overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-timber/90 via-timber/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Expand className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Image count badge */}
                  {getProjectImageCount(project) > 1 && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Grid3X3 className="w-3 h-3" />
                      {getProjectImageCount(project)} photos
                    </div>
                  )}
                </div>

                <CardContent className="p-6 bg-white">
                  <div className="flex items-center gap-2 text-sage mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-body">{project.location}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-timber mb-2">
                    {project.name}
                  </h3>
                  <p className="font-body text-timber/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-sage/10 text-sage px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Thumbnail strip */}
                  {project.additionalImages && project.additionalImages.length > 0 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                      {project.additionalImages.slice(0, 4).map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="w-16 h-12 flex-shrink-0 rounded overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(index);
                            setLightboxIndex(imgIndex + 1);
                            setLightboxOpen(true);
                          }}
                        >
                          <img
                            src={img}
                            alt={`${project.name} thumbnail ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                      {project.additionalImages.length > 4 && (
                        <div
                          className="w-16 h-12 flex-shrink-0 rounded overflow-hidden cursor-pointer bg-timber/80 flex items-center justify-center text-white text-xs"
                          onClick={() => openLightbox(index)}
                        >
                          +{project.additionalImages.length - 4}
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-timber text-white">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
            Ready to Build Your Dream Home?
          </h2>
          <p className="font-body text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss your vision and explore how we can bring it to life in Central Oregon's most beautiful settings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber hover:bg-amber/90 text-timber">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <a href="https://www.reacohomes.com/portfolio/" target="_blank" rel="noopener noreferrer">
                View Full Portfolio
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox - Now shows only the selected project's images */}
      {selectedProject !== null && (
        <Lightbox
          images={currentProjectImages}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          initialIndex={lightboxIndex}
        />
      )}
    </div>
  );
}
