import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone, Globe } from "lucide-react";
import logoImage from "@assets/generated_images/minimalist_tech_logo_with_curly_braces_and_rocket.png";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg overflow-hidden bg-primary/10 p-1">
                   <img src={logoImage} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <span className="text-xl font-bold font-display text-slate-900">
                  Our Crazy Code
                </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering the next generation of tech leaders with industry-relevant skills in AI, coding, and innovation.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/ourcrazycode" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/ourcrazycode/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/company/our-crazy-code" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="https://github.com/ourcrazycode" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 font-display">Programs</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/courses/coding-foundations" className="hover:text-primary transition-colors">Coding Foundations</Link></li>
              <li><Link href="/courses/web-development" className="hover:text-primary transition-colors">Full Stack Dev</Link></li>
              <li><Link href="/courses/ai-automation" className="hover:text-primary transition-colors">AI Automation</Link></li>
              <li><Link href="/startup-launchpad" className="hover:text-primary transition-colors">Startup Launchpad</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 font-display">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/success-stories" className="hover:text-primary transition-colors">Success Stories</Link></li>
              <li><Link href="/mentors" className="hover:text-primary transition-colors">Mentors</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 font-display">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span>India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>hello@ourcrazycode.company.site</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className="text-primary" />
                <a href="https://ourcrazycode.company.site/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ourcrazycode.company.site</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Our Crazy Code. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
