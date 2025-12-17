import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, PlayCircle, Users, Trophy, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/clean_minimal_abstract_geometric_shapes_in_blue_and_white.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Minimal Background" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New Batch Starting Soon
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 font-display">
            Become Top 1% <br />
            in the <span className="text-primary">AI Era</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
            Built by a 15-year-old prodigy. Trusted by 5,000+ students. 
            Master coding, AI, and innovation with our project-based curriculum.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/courses">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                View Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-medium h-14 px-8 text-lg rounded-full bg-white">
                Book Consultation
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
            <div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">5k+</h4>
              <p className="text-sm text-slate-500">Students Trained</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">100%</h4>
              <p className="text-sm text-slate-500">Project Based</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-slate-900 mb-1">4.9/5</h4>
              <p className="text-sm text-slate-500">Student Rating</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Abstract floating elements decoration */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full blur-[80px] -z-10"></div>
          
          <div className="relative z-10 grid gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 animate-[float_6s_ease-in-out_infinite] max-w-sm ml-auto">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                   <Trophy size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-900">Course Completed</h3>
                   <p className="text-xs text-slate-500">Just now</p>
                 </div>
               </div>
               <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 w-full"></div>
               </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 ml-12 animate-[float_7s_ease-in-out_infinite_1s] max-w-sm">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                   <Users size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-900">New Enrollment</h3>
                   <p className="text-xs text-slate-500">Sarah joined "AI Mastery"</p>
                 </div>
               </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 mr-8 animate-[float_8s_ease-in-out_infinite_0.5s] max-w-sm ml-auto">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                   <Rocket size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-900">Startup Launched</h3>
                   <p className="text-xs text-slate-500">Student Project Live</p>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
