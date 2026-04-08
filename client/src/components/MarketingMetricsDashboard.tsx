/**
 * Marketing Metrics Dashboard
 * Tracks lead generation, conversion, and marketing performance
 * Real-time monitoring for marketing ROI
 */

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Mail, Phone, Calendar } from "lucide-react";

interface MetricData {
  totalLeads: number;
  leadsThisMonth: number;
  conversionRate: number;
  avgResponseTime: string;
  emailsOpened: number;
  emailClickRate: number;
  gbpCalls: number;
  gbpDirections: number;
  consultationsBooked: number;
}

export default function MarketingMetricsDashboard() {
  const [metrics, setMetrics] = useState<MetricData>({
    totalLeads: 0,
    leadsThisMonth: 0,
    conversionRate: 0,
    avgResponseTime: "0m",
    emailsOpened: 0,
    emailClickRate: 0,
    gbpCalls: 0,
    gbpDirections: 0,
    consultationsBooked: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch metrics from backend
    const fetchMetrics = async () => {
      try {
        const response = await fetch("/api/marketing/metrics");
        if (response.ok) {
          const data = await response.json();
          setMetrics(data);
        }
      } catch (error) {
        console.error("Failed to fetch metrics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  const metricCards = [
    {
      title: "Total Leads",
      value: metrics.totalLeads,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Leads This Month",
      value: metrics.leadsThisMonth,
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Conversion Rate",
      value: `${metrics.conversionRate}%`,
      icon: Calendar,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: "Avg Response Time",
      value: metrics.avgResponseTime,
      icon: Phone,
      color: "text-timber",
      bgColor: "bg-timber/10",
    },
    {
      title: "GBP Calls",
      value: metrics.gbpCalls,
      icon: Phone,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Consultations Booked",
      value: metrics.consultationsBooked,
      icon: Calendar,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  if (loading) {
    return (
      <div className="py-12 bg-cream">
        <div className="container">
          <div className="text-center">
            <p className="font-body text-muted-foreground">Loading metrics...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-cream">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <h2 className="font-display text-3xl font-semibold text-timber mb-2">
            Marketing Performance Dashboard
          </h2>
          <p className="font-body text-muted-foreground">
            Real-time tracking of lead generation and conversion metrics
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metricCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.title} className="border-0 shadow-lg">
                <CardHeader className={`${card.bgColor} pb-3`}>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-body text-sm text-muted-foreground">
                      {card.title}
                    </CardTitle>
                    <Icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-3xl font-bold text-timber">{card.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Email Metrics */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber" />
              Email Campaign Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-body text-sm text-muted-foreground mb-2">Emails Opened</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-timber">{metrics.emailsOpened}</span>
                  <span className="text-sm text-muted-foreground">emails</span>
                </div>
              </div>
              <div>
                <p className="font-body text-sm text-muted-foreground mb-2">Click-Through Rate</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-timber">{metrics.emailClickRate}%</span>
                  <span className="text-sm text-muted-foreground">CTR</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insights */}
        <div className="mt-8 bg-amber/10 border border-amber/20 rounded-lg p-6">
          <h3 className="font-display text-lg font-semibold text-timber mb-3">Key Insights</h3>
          <ul className="space-y-2 font-body text-sm text-muted-foreground">
            <li>• Your average response time of {metrics.avgResponseTime} is excellent—keep it up!</li>
            <li>• {metrics.conversionRate}% conversion rate indicates strong lead quality</li>
            <li>• Google Business Profile generated {metrics.gbpCalls} calls this month</li>
            <li>• Email click-through rate of {metrics.emailClickRate}% is above industry average</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
