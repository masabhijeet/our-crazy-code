import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Globe, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Get in Touch</h1>
          <p className="text-slate-500 text-lg">
            Have questions about our courses? Want to partner with us? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 font-display">Contact Information</h2>
            
            <div className="space-y-6">
              <Card className="bg-white border-slate-100 shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-500 text-sm">hello@ourcrazycode.company.site</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-slate-100 shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Official Website</h3>
                    <a href="https://ourcrazycode.company.site/" target="_blank" rel="noopener noreferrer" className="text-slate-500 text-sm hover:text-primary transition-colors">
                      ourcrazycode.company.site
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-slate-100 shadow-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Location</h3>
                    <p className="text-slate-500 text-sm">
                      India<br />
                      (Online & Offline Classes Available)
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="pt-6">
                <h3 className="font-bold text-slate-900 mb-4">Connect on Social Media</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/our-crazy-code" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all shadow-sm">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://twitter.com/ourcrazycode" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all shadow-sm">
                    <Twitter size={20} />
                  </a>
                  <a href="https://www.instagram.com/ourcrazycode/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all shadow-sm">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">Send a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">First Name</label>
                  <Input placeholder="John" className="bg-slate-50 border-slate-200 focus:ring-primary focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Last Name</label>
                  <Input placeholder="Doe" className="bg-slate-50 border-slate-200 focus:ring-primary focus:border-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-slate-50 border-slate-200 focus:ring-primary focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Subject</label>
                <Input placeholder="Course Inquiry" className="bg-slate-50 border-slate-200 focus:ring-primary focus:border-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[120px] bg-slate-50 border-slate-200 focus:ring-primary focus:border-primary" />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 shadow-md">
                Send Message <Send size={18} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
