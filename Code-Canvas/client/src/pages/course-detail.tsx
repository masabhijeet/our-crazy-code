import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, BarChart, Users, Calendar, CheckCircle, Star, PlayCircle, BookOpen } from "lucide-react";
import { Link, useRoute } from "wouter";
import CourseCard from "@/components/ui/course-card";

// Mock Data (would typically come from an API based on ID)
const courseData = {
  id: "coding-foundations",
  title: "Coding Foundations: Zero to Hero",
  description: "Master the core principles of programming. Build logic, solve problems, and start your journey with Python.",
  longDescription: "This comprehensive course is designed for absolute beginners who want to break into the world of technology. We start from the very basics of computer science and logic building, moving into Python programming, and finally covering essential algorithms. By the end of this course, you will have a solid foundation to learn any programming language and build real-world applications.",
  duration: "3 Months",
  level: "Beginner",
  price: "₹6,999",
  rating: "4.8",
  students: "1,200+",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  curriculum: [
    { module: "Module 1", title: "Introduction to Computer Science", lessons: ["How Computers Work", "Binary & Logic", "Setting up Environment"] },
    { module: "Module 2", title: "Python Basics", lessons: ["Variables & Data Types", "Control Flow", "Functions & Modules"] },
    { module: "Module 3", title: "Data Structures", lessons: ["Lists, Tuples, Sets", "Dictionaries", "Arrays"] },
    { module: "Module 4", title: "Algorithms", lessons: ["Sorting & Searching", "Recursion", "Big O Notation"] },
    { module: "Module 5", title: "Capstone Project", lessons: ["Building a Real Application", "Code Review", "Presentation"] }
  ],
  features: [
    "Live Classes with Experts",
    "24/7 Doubt Support",
    "Real-world Projects",
    "Certificate of Completion",
    "Lifetime Access to Materials"
  ]
};

const relatedCourses = [
  {
    id: "web-dev-fullstack",
    title: "Full Stack Web Development",
    description: "Build modern web applications with React, Node.js, and MongoDB.",
    duration: "4 Months",
    level: "Intermediate",
    price: "₹8,999",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
  },
  {
    id: "app-dev-flutter",
    title: "App Development with Flutter",
    description: "Create beautiful, natively compiled applications for mobile, web, and desktop.",
    duration: "3 Months",
    level: "Intermediate",
    price: "₹7,499",
    category: "App Dev",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function CourseDetail() {
  const [match, params] = useRoute("/courses/:id");
  
  // In a real app, fetch data based on params.id
  // For now, we use the static mock data
  
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      
      {/* Hero Header */}
      <div className="relative pt-32 pb-20 bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="flex gap-2 mb-6">
                <Badge variant="outline" className="text-blue-300 border-blue-500/50 bg-blue-500/10">Bestseller</Badge>
                <Badge variant="outline" className="text-white border-white/20">Updated 2024</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
                {courseData.title}
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {courseData.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="text-blue-400" size={18} />
                  <span>{courseData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="text-blue-400" size={18} />
                  <span>{courseData.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-blue-400" size={18} />
                  <span>{courseData.students} Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={18} />
                  <span>{courseData.rating} Rating</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" 
                  alt="Instructor" 
                  className="w-12 h-12 rounded-full border-2 border-blue-500"
                />
                <div>
                  <p className="text-white font-bold">Instructed by MAS Abhijeet</p>
                  <p className="text-xs text-slate-400">Founder & Lead Instructor</p>
                </div>
              </div>
            </div>
            
            {/* Enrollment Card (Floating on Desktop) */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl p-6 sticky top-24 shadow-xl border border-slate-100">
                <img 
                  src={courseData.image} 
                  alt={courseData.title} 
                  className="w-full h-48 object-cover rounded-xl mb-6 shadow-sm"
                />
                
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-3xl font-bold text-slate-900">{courseData.price}</span>
                  <span className="text-lg text-slate-400 line-through decoration-red-500 decoration-2">₹12,999</span>
                  <span className="text-sm text-green-600 font-bold ml-auto bg-green-50 px-2 py-1 rounded">46% OFF</span>
                </div>
                
                <Link href="/enroll">
                  <Button className="w-full bg-primary hover:bg-blue-700 text-white font-bold h-12 text-lg mb-4 shadow-lg shadow-blue-200 transition-all">
                    Enroll Now
                  </Button>
                </Link>
                
                <p className="text-xs text-center text-slate-500 mb-6">
                  30-Day Money-Back Guarantee
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-900 text-sm">This Course Includes:</h4>
                  {courseData.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="bg-slate-100 w-full justify-start h-auto p-1 mb-8 rounded-lg">
              <TabsTrigger value="curriculum" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 px-6 text-base rounded-md transition-all">Curriculum</TabsTrigger>
              <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 px-6 text-base rounded-md transition-all">Overview</TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 px-6 text-base rounded-md transition-all">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="curriculum" className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-display">What You Will Learn</h3>
              <div className="space-y-4">
                {courseData.curriculum.map((mod, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    <div className="p-4 bg-white font-bold text-slate-900 flex justify-between items-center border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <BookOpen size={18} className="text-primary" />
                        <span>{mod.module}: {mod.title}</span>
                      </div>
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{mod.lessons.length} Lessons</span>
                    </div>
                    <div className="p-4 space-y-2">
                      {mod.lessons.map((lesson, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm text-slate-600 pl-8">
                          <PlayCircle size={14} className="text-primary/70" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="overview">
              <div className="prose prose-slate max-w-none">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Course Description</h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  {courseData.longDescription}
                </p>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Who is this for?</h4>
                <ul className="list-disc pl-5 text-slate-600 space-y-2">
                  <li>Complete beginners with zero coding experience</li>
                  <li>Students wanting to build a career in tech</li>
                  <li>Professionals looking to upskill</li>
                  <li>Entrepreneurs who want to build their own products</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl bg-slate-50">
                <Star size={40} className="mx-auto text-slate-300 mb-4" />
                <p className="text-slate-500">Reviews coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Courses */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 font-display">Related Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
             {relatedCourses.map((course) => (
               <CourseCard key={course.id} {...course} />
             ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
