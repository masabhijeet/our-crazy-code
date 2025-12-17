import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/ui/course-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock Data
const allCourses = [
  {
    id: "coding-foundations",
    title: "Coding Foundations: Zero to Hero",
    description: "Master the core principles of programming. Build logic, solve problems, and start your journey with Python.",
    duration: "3 Months",
    level: "Beginner",
    price: "₹6,999",
    priceTier: "paid",
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
    priceTier: "paid",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
  },
  {
    id: "ai-business",
    title: "Generative AI Business Mastermind",
    description: "Learn how to leverage AI tools to automate workflows, create content, and scale your business.",
    duration: "3 Days",
    level: "All Levels",
    price: "₹1,999",
    priceTier: "paid",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "app-dev-flutter",
    title: "App Development with Flutter",
    description: "Create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    duration: "3 Months",
    level: "Intermediate",
    price: "₹7,499",
    priceTier: "paid",
    category: "App Dev",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "product-management-ai",
    title: "Product Management with AI",
    description: "Learn how to build products in the age of AI. From ideation to launch with AI tools.",
    duration: "3 Hours",
    level: "Intermediate",
    price: "₹999",
    priceTier: "paid",
    category: "Product",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "linkedin-growth",
    title: "LinkedIn Growth With AI",
    description: "Master personal branding on LinkedIn using AI tools to generate content and engage leads.",
    duration: "5 Days",
    level: "Beginner",
    price: "₹1,499",
    priceTier: "paid",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "intro-python-free",
    title: "Intro to Python (Free)",
    description: "A quick introduction to Python syntax and basic concepts for absolute beginners.",
    duration: "2 Hours",
    level: "Beginner",
    price: "Free",
    priceTier: "free",
    category: "Coding",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
  }
];

const categories = ["All", "Coding", "Web Dev", "AI", "App Dev", "Product", "Marketing"];

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all"); // all, free, paid

  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = priceFilter === "all" || course.priceTier === priceFilter;
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 md:px-6 container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">All Courses</h1>
          <p className="text-muted-foreground text-lg">
            Explore our comprehensive curriculum designed to take you from beginner to expert.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 order-2 lg:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-white/10 text-muted-foreground hover:bg-white/5 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex w-full lg:w-auto gap-4 order-1 lg:order-2">
            {/* Search */}
            <div className="relative flex-grow lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search courses..." 
                className="pl-10 bg-card border-white/10 text-white focus:ring-primary focus:border-primary h-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Filter Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-white/10 bg-card text-muted-foreground hover:text-white h-10 px-4">
                  <SlidersHorizontal size={16} className="mr-2" /> Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-white/10 text-white">
                <DropdownMenuLabel>Price</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuRadioGroup value={priceFilter} onValueChange={setPriceFilter}>
                  <DropdownMenuRadioItem value="all" className="focus:bg-white/10 focus:text-white cursor-pointer">All Prices</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="free" className="focus:bg-white/10 focus:text-white cursor-pointer">Free</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="paid" className="focus:bg-white/10 focus:text-white cursor-pointer">Paid</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-dashed border-white/10">
            <Search size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-white mb-2">No courses found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filters.</p>
            <Button 
              variant="outline" 
              onClick={() => {setSelectedCategory("All"); setSearchQuery(""); setPriceFilter("all");}}
              className="text-primary border-primary/20 hover:bg-primary/10"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
