import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@assets/generated_images/minimalist_tech_logo_with_curly_braces_and_rocket.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Programs", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm" 
          : "bg-white/50 border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-primary/5 p-1 group-hover:bg-primary/10 transition-colors">
               <img src={logoImage} alt="Our Crazy Code Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight text-slate-900">
              Our Crazy Code
            </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                location === link.href ? "text-primary font-semibold" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/enroll">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium shadow-sm transition-all rounded-full px-6">
              Enroll Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-slate-600 hover:text-primary py-2 block border-b border-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/enroll">
            <Button className="w-full bg-primary mt-2">Enroll Now</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
