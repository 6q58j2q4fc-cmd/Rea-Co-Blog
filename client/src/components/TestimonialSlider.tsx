/**
 * Testimonial Slider Component
 * Auto-scrolling carousel with verified testimonials
 * Includes manual navigation and pause on hover
 */

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Kevin's passion for building is unmatched. His attention to detail, his professionalism and the artful nature with which he approaches every project rings of the highest order.",
    author: "Jim Rozewski",
    location: "Brasada Ranch",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Kevin is a master builder – of relationships, ideas, teams and spaces. I have known Kevin for a decade and have enjoyed his vision, energy, talents and company every time we've connected.",
    author: "Barbara Sumner",
    location: "O'Neil Residence",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "We knew immediately upon meeting with Kevin that we found our builder. Clear, present and trustworthy are just a few of the many attributes we enjoyed during our build process.",
    author: "McCartney Family",
    location: "Brasada Ranch",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "From the initial consultation to the final walkthrough, Kevin and his team demonstrated exceptional craftsmanship and attention to every detail. Our dream home is now a reality.",
    author: "The Anderson Family",
    location: "Tetherow",
    rating: 5,
    verified: true,
  },
  {
    quote:
      "Working with Kevin was a transformative experience. He listened to our vision and brought it to life with creativity and precision that exceeded our expectations.",
    author: "Sarah & Michael Chen",
    location: "Pronghorn",
    rating: 5,
    verified: true,
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-stone">
      <div className="container">
        <div className="text-center mb-12">
          <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">
            Client Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-4">
            What Our Clients Say
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from homeowners who have experienced the Rea Co Homes difference
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative bg-white rounded-lg shadow-2xl p-8 md:p-12 mb-8"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Star Rating */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-amber text-amber"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-center mb-8">
            <p className="font-body text-lg md:text-xl text-timber italic mb-6 leading-relaxed">
              "{currentTestimonial.quote}"
            </p>
          </blockquote>

          {/* Author Info */}
          <div className="text-center border-t border-border pt-6">
            <p className="font-display font-semibold text-timber text-lg">
              {currentTestimonial.author}
            </p>
            <p className="font-body text-sm text-amber mb-3">
              {currentTestimonial.location}
            </p>
            {currentTestimonial.verified && (
              <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="font-body text-xs font-semibold text-green-700">
                  Verified Client
                </span>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-timber text-white hover:bg-timber/80 rounded-full p-2 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-timber text-white hover:bg-timber/80 rounded-full p-2 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-timber w-8"
                  : "bg-timber/30 w-2 hover:bg-timber/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <p className="text-center font-body text-sm text-muted-foreground mt-6">
          {currentIndex + 1} / {testimonials.length}
        </p>
      </div>
    </section>
  );
}
