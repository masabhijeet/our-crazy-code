import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BarChart, ChevronRight } from "lucide-react";
import { Link } from "wouter";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  image: string;
  category: string;
  id: string;
}

export default function CourseCard({ title, description, duration, level, price, image, category, id }: CourseCardProps) {
  return (
    <Card className="bg-white border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col h-full rounded-2xl">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold rounded-full border border-slate-200 shadow-sm uppercase tracking-wider">
            {category}
          </span>
        </div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Remove dark gradient overlay for cleaner look */}
      </div>
      
      <CardHeader className="p-6 pb-2">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3 font-medium">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart size={14} />
            <span>{level}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem] font-display">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="p-6 pt-2 flex-grow">
        <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex items-center justify-between mt-auto">
        <div>
          <span className="text-2xl font-bold text-slate-900">{price}</span>
        </div>
        <Link href={`/courses/${id}`}>
          <Button size="sm" className="rounded-full bg-slate-100 hover:bg-primary hover:text-white text-slate-900 border-transparent transition-all font-medium">
            View Details <ChevronRight size={16} className="ml-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
