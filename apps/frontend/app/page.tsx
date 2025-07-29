// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <Button>Sign up</Button>
//     </div>
//   );
// }
"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, Zap, BarChart3, Globe, Wrench, Smartphone, TrendingUp } from "lucide-react";

const BetterUptimeLanding = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  // Demo data
  const demoServices = [
    { name: 'Main Website', status: 'up', uptime: '99.98%' },
    { name: 'API Server', status: 'up', uptime: '100%' },
    { name: 'Payment Gateway', status: 'down', uptime: 'Issue detected' },
    { name: 'Database', status: 'up', uptime: '99.99%' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo(prev => (prev + 1) % demoServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const StatusIndicator = ({ status, animate }) => (
    <div className="flex items-center space-x-2">
      {status === 'up' ? (
        <CheckCircle className={`w-4 h-4 text-green-500 ${animate ? 'animate-pulse' : ''}`} />
      ) : (
        <XCircle className={`w-4 h-4 text-red-500 ${animate ? 'animate-pulse' : ''}`} />
      )}
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
    <Card 
      className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );

  const PricingCard = ({ plan, price, description, features, isPopular = false, cta }) => (
    <Card className={`relative transition-all duration-300 hover:-translate-y-2 ${
      isPopular ? 'border-primary shadow-lg scale-105' : ''
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge variant="default" className="bg-primary">
            Most Popular
          </Badge>
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{plan}</CardTitle>
        <div className="text-4xl font-bold">
          ${price}<span className="text-lg text-muted-foreground font-normal">/month</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-3">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full" variant={isPopular ? "default" : "outline"}>
          {cta}
        </Button>
      </CardContent>
    </Card>
  );

  const StatCard = ({ number, label }) => (
    <Card className="text-center border-none bg-transparent">
      <CardContent className="pt-6">
        <div className="text-4xl font-bold text-primary mb-2">{number}</div>
        <div className="text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Never Miss a <br />
            <span className="text-primary">Downtime Again</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Monitor your websites, APIs, and services with lightning-fast alerts and beautiful status pages. 
            Join thousands of developers who trust Better Uptime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Free Trial →
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Why Choose Better Uptime?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to keep your services running smoothly and your users happy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap}
              title="Lightning Fast Alerts" 
              description="Get notified in seconds, not minutes. Our global monitoring network detects issues before your users do."
              delay={0}
            />
            <FeatureCard 
              icon={BarChart3}
              title="Beautiful Status Pages" 
              description="Keep your users informed with stunning, customizable status pages that match your brand perfectly."
              delay={100}
            />
            <FeatureCard 
              icon={Globe}
              title="Global Monitoring" 
              description="Monitor from 50+ locations worldwide to ensure your services are accessible everywhere."
              delay={200}
            />
            <FeatureCard 
              icon={Wrench}
              title="Easy Integration" 
              description="Connect with Slack, Discord, PagerDuty, and 50+ other tools in just a few clicks."
              delay={300}
            />
            <FeatureCard 
              icon={Smartphone}
              title="Mobile Apps" 
              description="Stay connected on the go with our native iOS and Android apps featuring push notifications."
              delay={400}
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Detailed Analytics" 
              description="Understand your uptime trends with comprehensive reports and performance insights."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="99.9%" label="Uptime SLA" />
            <StatCard number="30s" label="Check Frequency" />
            <StatCard number="50+" label="Global Locations" />
            <StatCard number="10k+" label="Happy Customers" />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold mb-4">See It In Action</CardTitle>
              <CardDescription className="text-xl">
                Real-time monitoring dashboard showing your services status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {demoServices.map((service, index) => (
                <Card 
                  key={index}
                  className={`transition-all duration-300 ${
                    activeDemo === index ? 'border-primary shadow-md scale-105' : ''
                  }`}
                >
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                      <StatusIndicator status={service.status} animate={activeDemo === index} />
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <Badge variant={service.status === 'up' ? 'default' : 'destructive'}>
                      {service.uptime}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the plan that fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              plan="Starter"
              price="0"
              description="Perfect for personal projects"
              features={[
                '5 monitors',
                '1-minute checks', 
                'Email alerts',
                'Basic status page'
              ]}
              cta="Get Started Free"
            />
            <PricingCard 
              plan="Professional"
              price="29"
              description="For growing businesses"
              features={[
                '50 monitors',
                '30-second checks',
                'SMS + Email alerts', 
                'Custom status pages',
                'API monitoring',
                'Integrations'
              ]}
              isPopular={true}
              cta="Start 14-Day Trial"
            />
            <PricingCard 
              plan="Enterprise"
              price="99"
              description="For mission-critical applications"
              features={[
                'Unlimited monitors',
                '10-second checks',
                'Phone + SMS + Email',
                'White-label status pages', 
                'Advanced analytics',
                'Priority support'
              ]}
              cta="Contact Sales"
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-6">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">System Status</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-6">Connect</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Better Uptime. All rights reserved. Built with ❤️ for developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BetterUptimeLanding;