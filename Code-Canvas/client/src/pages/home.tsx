import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CourseCard from "@/components/ui/course-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Code, Brain, Rocket, Smartphone, Globe, CheckCircle2, Star, Quote, Mail, Users } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import masAbhijeetImg from "@assets/image_1765980687145.png";

// Mock Data
const featuredCourses = [
  {
    id: "coding-foundations",
    title: "Coding Foundations: Zero to Hero",
    description: "Master the core principles of programming. Build logic, solve problems, and start your journey with Python.",
    duration: "3 Months",
    level: "Beginner",
    price: "₹6,999",
    category: "Coding",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "web-dev-fullstack",
    title: "Full Stack Web Development",
    description: "Build modern web applications with React, Node.js, and MongoDB. Become a complete developer.",
    duration: "4 Months",
    level: "Intermediate",
    price: "₹8,999",
    category: "Software Dev",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
  },
  {
    id: "ai-automation",
    title: "AI Automation Masterclass",
    description: "Learn how to build AI agents, automate workflows, and integrate LLMs into business processes.",
    duration: "4 Weeks",
    level: "Advanced",
    price: "₹4,999",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  }
];

const categories = [
  { icon: <Code size={32} />, title: "Coding", desc: "Python, C++, Java" },
  { icon: <Globe size={32} />, title: "Software Dev", desc: "Full Stack, DevOps" },
  { icon: <Brain size={32} />, title: "AI Automation", desc: "LLMs, Agents, RAG" },
  { icon: <Rocket size={32} />, title: "Startups", desc: "Product, Growth, Funding" },
];

const testimonials = [
  {
    name: "Priya Patel",
    role: "Software Engineer",
    text: "The practical approach at Our Crazy Code helped me land my first job. The projects were exactly what interviewers asked about.",
    // Removed avatar as requested to avoid generic stock photos
  },
  {
    name: "Arjun Singh",
    role: "AI Researcher",
    text: "MAS Abhijeet's vision for AI education is ahead of its time. The AI Automation course is a must for anyone looking to future-proof their career.",
  },
  {
    name: "Rohan Gupta",
    role: "Startup Founder",
    text: "I used the Startup Launchpad to refine my pitch and found my co-founder here. Highly recommended community!",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <Hero />
      
      {/* Categories Section */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Explore Categories</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Specialized tracks for the future of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:-translate-y-2 hover:shadow-lg transition-all cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{cat.title}</h3>
                  <p className="text-xs text-slate-500">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Featured Programs</h2>
              <p className="text-slate-500 text-lg">Hand-picked courses to get you hired.</p>
            </div>
            <Link href="/courses">
              <Button variant="ghost" className="text-primary hover:text-primary/80 hidden md:flex font-medium">
                View All Courses <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/courses">
              <Button variant="outline" className="w-full">View All Courses</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Startup Launchpad Promo */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
         
         <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                New Initiative
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                Startup Launchpad
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Got a crazy idea? We help you build it. Register your startup, find co-founders, 
                and get mentorship from industry experts to launch your product.
              </p>
              <Link href="/startup-launchpad">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold h-12 px-8 rounded-full shadow-lg">
                  Register Your Startup <Rocket size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
               <div className="glass-card bg-white/10 border-white/10 p-8 rounded-2xl backdrop-blur-md">
                 <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                   <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                     <CheckCircle2 size={20} />
                   </div>
                   <div>
                     <h4 className="font-bold text-white">Idea Validation</h4>
                     <p className="text-xs text-slate-400">Step 1</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                     <Users size={20} />
                   </div>
                   <div>
                     <h4 className="font-bold text-white">Team Building</h4>
                     <p className="text-xs text-slate-400">Step 2</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                     <Rocket size={20} />
                   </div>
                   <div>
                     <h4 className="font-bold text-white">MVP Launch</h4>
                     <p className="text-xs text-slate-400">Step 3</p>
                   </div>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Founder Spotlight */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  Meet the Founder
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
                  MAS Abhijeet
                </h2>
                <h3 className="text-xl text-primary font-medium mb-6">
                  India's 3rd Youngest CEO & AI Innovator
                </h3>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  "I started Our Crazy Code because I was tired of outdated education. 
                  Technology moves fast, and schools are too slow. We're here to bridge that gap 
                  with real-world, project-based learning that actually gets you hired."
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                   <span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600 shadow-sm">Jaini AI Creator</span>
                   <span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600 shadow-sm">International Award Winner</span>
                   <span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600 shadow-sm">InnovateX Founder</span>
                </div>
                <Link href="/about">
                  <Button variant="outline" className="border-slate-300 text-slate-900 hover:bg-white transition-all">
                    Read Full Story
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2 relative flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-[60px] opacity-20"></div>
                  <img 
                    src={masAbhijeetImg} 
                    alt="MAS Abhijeet" 
                    className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Success Stories</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Join 5,000+ students who have transformed their careers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-md transition-all">
                <Quote className="absolute top-6 right-6 text-slate-100" size={40} />
                <div className="mb-6">
                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg mb-2">
                      {t.name.charAt(0)}
                   </div>
                   <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                   </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed">"{t.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative bg-blue-600 rounded-3xl p-12 text-center overflow-hidden shadow-xl">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[50px] -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[50px] -ml-16 -mb-16"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white backdrop-blur-sm">
                <Mail size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                Stay Ahead of the Curve
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Get the latest tech trends, free coding resources, and course updates directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white text-slate-900 h-12 rounded-full px-6 border-transparent focus:ring-2 focus:ring-white/50"
                />
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 px-8 rounded-full shadow-lg">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
