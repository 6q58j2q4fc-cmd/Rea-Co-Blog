/**
 * Video Showcase Component
 * Displays project walkthroughs, testimonials, and process videos
 * High-conversion video marketing for custom home builders
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  type: "walkthrough" | "testimonial" | "process";
}

const videos: Video[] = [
  {
    id: "brasada-walkthrough",
    title: "Brasada Ranch Contemporary Home Walkthrough",
    description: "Full tour of our award-winning contemporary home at Brasada Ranch with mountain views",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8:32",
    type: "walkthrough",
  },
  {
    id: "kevin-testimonial",
    title: "Client Testimonial: Building Their Dream Home",
    description: "Hear from satisfied clients about their experience building with Rea Co Homes",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "5:15",
    type: "testimonial",
  },
  {
    id: "build-process",
    title: "Custom Home Build Process: From Concept to Completion",
    description: "Step-by-step walkthrough of our proven custom home building process",
    thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=500&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:47",
    type: "process",
  },
];

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "walkthrough" | "testimonial" | "process">("all");

  const filteredVideos = activeFilter === "all" ? videos : videos.filter((v) => v.type === activeFilter);

  return (
    <div className="py-20 bg-cream">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-amber uppercase tracking-widest text-sm mb-4">Video Gallery</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-timber mb-4">
            See Our Work in Action
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch project walkthroughs, client testimonials, and our proven building process
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(["all", "walkthrough", "testimonial", "process"] as const).map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`capitalize font-body ${
                activeFilter === filter
                  ? "bg-timber text-white hover:bg-timber/90"
                  : "border-timber text-timber hover:bg-timber/5"
              }`}
            >
              {filter === "all" ? "All Videos" : filter.replace("-", " ")}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-timber mb-2 group-hover:text-amber transition-colors">
                {video.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">{video.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-body text-muted-foreground mb-4">
            Ready to start your custom home project?
          </p>
          <Button className="bg-timber text-white hover:bg-timber/90 font-body font-semibold uppercase tracking-wide">
            Schedule a Consultation
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full">
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="font-display text-lg font-semibold text-timber">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-muted-foreground hover:text-timber transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                className="w-full h-full"
                allowFullScreen
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="p-4 border-t border-border">
              <p className="font-body text-muted-foreground">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
