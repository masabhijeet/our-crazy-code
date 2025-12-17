import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-display">
            Our Crazy <span className="text-primary">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Founded by a 15-year-old dreamer with a mission to revolutionize tech education. 
            We are building the next generation of innovators.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl transform -rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Founder" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-2 font-display">Meet the Founder</h2>
              <h3 className="text-xl text-primary font-medium mb-6">MAS Abhijeet</h3>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  At just 15 years old, Abhijeet realized that the traditional education system was failing 
                  to keep up with the exponential growth of technology. Textbooks were outdated before they 
                  were even printed.
                </p>
                <p>
                  Driven by a passion for coding and AI, he started "Our Crazy Code" – not just as a 
                  YouTube channel, but as a movement to make high-quality tech education accessible, 
                  practical, and fun.
                </p>
                <p>
                  Today, Our Crazy Code has impacted over 5,000 students globally, helping them land jobs, 
                  start companies, and build products that matter.
                </p>
              </div>
              
              <div className="mt-8 flex gap-4">
                <div className="text-center px-6 py-4 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="text-2xl font-bold text-white">15</h4>
                  <p className="text-xs text-muted-foreground">Years Old</p>
                </div>
                <div className="text-center px-6 py-4 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="text-2xl font-bold text-white">5K+</h4>
                  <p className="text-xs text-muted-foreground">Students</p>
                </div>
                <div className="text-center px-6 py-4 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="text-2xl font-bold text-white">1M+</h4>
                  <p className="text-xs text-muted-foreground">Views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white font-display">What We Believe In</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-background border border-white/10 rounded-2xl hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Speed of Implementation</h3>
              <p className="text-muted-foreground">Learning is useless without action. We focus on building and shipping fast.</p>
            </div>
            
            <div className="p-8 bg-background border border-white/10 rounded-2xl hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Outcome Driven</h3>
              <p className="text-muted-foreground">We don't care about hours spent. We care about skills mastered and goals achieved.</p>
            </div>
            
            <div className="p-8 bg-background border border-white/10 rounded-2xl hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community First</h3>
              <p className="text-muted-foreground">Growth happens together. Our community is your biggest asset.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-8 font-display">Join the Revolution</h2>
        <Link href="/courses">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-10 rounded-full">
            Start Learning
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
