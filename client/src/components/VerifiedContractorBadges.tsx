/**
 * Verified Contractor Badges Component
 * Displays professional certifications and trust signals in the footer
 */

import { Award, CheckCircle, Shield } from "lucide-react";

export default function VerifiedContractorBadges() {
  const badges = [
    {
      icon: Shield,
      title: "CCB #193427",
      description: "Oregon Contractor License",
      color: "text-amber",
    },
    {
      icon: Award,
      title: "Houzz Pro",
      description: "Professional Verified",
      color: "text-blue-400",
    },
    {
      icon: CheckCircle,
      title: "Google Verified",
      description: "Trusted Business",
      color: "text-green-400",
    },
    {
      icon: Award,
      title: "Best of Show",
      description: "Award Winner",
      color: "text-amber",
    },
  ];

  return (
    <div className="py-8 border-t border-white/10">
      <div className="container">
        <h3 className="font-display text-lg font-semibold text-amber mb-6 text-center">
          Verified Contractor & Certifications
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Icon className={`w-8 h-8 ${badge.color} mb-3`} />
                <h4 className="font-display text-sm font-semibold text-white mb-1">
                  {badge.title}
                </h4>
                <p className="font-body text-xs text-white/60">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
