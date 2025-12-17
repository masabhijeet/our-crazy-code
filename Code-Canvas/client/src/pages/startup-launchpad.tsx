import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Rocket, CheckCircle2, Users, Target, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function StartupLaunchpad() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-600/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-8">
            <Rocket size={14} />
            Startup Launchpad
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display">
            Turn Your <span className="text-blue-400">Crazy Idea</span> <br />
            Into Reality
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            A comprehensive incubation program for young entrepreneurs. 
            We provide mentorship, resources, and a community to help you build and launch your startup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-10 rounded-full shadow-lg">
              Register Your Startup
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-slate-900 font-bold h-14 px-10 rounded-full">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">How It Works</h2>
            <p className="text-slate-500 text-lg">From napkin sketch to market launch in 4 steps.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain size={32} className="text-blue-600" />,
                title: "Ideation",
                desc: "Refine your problem statement and solution with expert feedback."
              },
              {
                icon: <Users size={32} className="text-blue-600" />,
                title: "Team Building",
                desc: "Find technical and non-technical co-founders from our community."
              },
              {
                icon: <Code size={32} className="text-blue-600" />,
                title: "MVP Build",
                desc: "Build your Minimum Viable Product with our dev resources."
              },
              {
                icon: <Rocket size={32} className="text-blue-600" />,
                title: "Launch",
                desc: "Go to market strategies and pitch to potential investors."
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-slate-100 -z-10"></div>
                )}
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center relative z-10 hover:-translate-y-2 transition-transform">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Registration Form */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Register Your Startup</h2>
              <p className="text-slate-500">
                Tell us about your idea. We review applications on a rolling basis.
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Founder Name</label>
                  <Input placeholder="Your Name" className="bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input type="email" placeholder="you@example.com" className="bg-slate-50 border-slate-200" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Startup Name (Tentative)</label>
                <Input placeholder="My Awesome Startup" className="bg-slate-50 border-slate-200" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Problem Statement</label>
                <Textarea placeholder="What problem are you solving?" className="min-h-[100px] bg-slate-50 border-slate-200" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Solution Idea</label>
                <Textarea placeholder="How do you plan to solve it?" className="min-h-[100px] bg-slate-50 border-slate-200" />
              </div>
              
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 rounded-xl shadow-lg">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Helper icons
function Brain({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function Code({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
