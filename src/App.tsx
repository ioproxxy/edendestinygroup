/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Globe, 
  Users, 
  Heart, 
  BookOpen, 
  ShieldCheck, 
  Database, 
  Building2, 
  TrendingUp,
  Mail,
  Linkedin,
  TreeDeciduous,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const expertise = [
  { title: "Creative Industry", icon: <Globe className="w-6 h-6" />, description: "Strategic creative direction and industry-leading innovation." },
  { title: "Education", icon: <BookOpen className="w-6 h-6" />, description: "Empowering communities through quality education and learning frameworks." },
  { title: "Governance & Compliance", icon: <ShieldCheck className="w-6 h-6" />, description: "Ensuring integrity and regulatory excellence in every operation." },
  { title: "Data & Assistive Tech", icon: <Database className="w-6 h-6" />, description: "Leveraging technology to bridge gaps and drive data-informed decisions." },
  { title: "Architecture", icon: <Building2 className="w-6 h-6" />, description: "Sustainable design and structural excellence for future-ready spaces." },
  { title: "Business Development", icon: <TrendingUp className="w-6 h-6" />, description: "Driving growth and strategic partnerships for long-term success." },
];

const impactAreas = [
  { 
    title: "Education", 
    description: "Empowering communities through quality education and lifelong learning opportunities.",
    color: "bg-blue-50 text-blue-700 border-blue-100"
  },
  { 
    title: "Economic Empowerment", 
    description: "Driving economic growth and creating sustainable opportunities for all sectors.",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100"
  },
  { 
    title: "DEI", 
    description: "Fostering inclusive and diverse environments where everyone can thrive.",
    color: "bg-purple-50 text-purple-700 border-purple-100"
  },
  { 
    title: "Wellness", 
    description: "Promoting health and wellbeing for individuals and communities alike.",
    color: "bg-rose-50 text-rose-700 border-rose-100"
  },
];

const sdgs = [
  "No Poverty", "Quality Education", "Gender Equality", "Decent Work & Economic Growth", 
  "Reduced Inequalities", "Sustainable Cities & Communities", "Climate Action"
];

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden">
              <img 
                src="https://storage.googleapis.com/static.ai.studio/input_file_0.png" 
                alt="Eden Destiny Group Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if logo image is not found
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('bg-primary');
                  const icon = document.createElement('div');
                  icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-foreground w-6 h-6"><path d="M12 22v-5"/><path d="M9 17H5l6-7 1 1 1-1 6 7h-4v5"/><path d="M12 13V8"/><path d="M12 4V2"/></svg>';
                  e.currentTarget.parentElement?.appendChild(icon.firstChild as Node);
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold tracking-tight leading-none">Eden Destiny Group</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60">Strategic Paths Foreword</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider opacity-80">
            <a href="#expertise" className="hover:text-primary transition-colors">Expertise</a>
            <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
            <a href="#esg" className="hover:text-primary transition-colors">ESG & SDGs</a>
            <Button variant="outline" className="rounded-full px-6">Connect</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="px-4 py-1 text-sm uppercase tracking-widest font-medium">
                30 Years of Excellence
              </Badge>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Strategic Paths Foreword</span>
            </div>
            <h1 className="font-heading text-6xl md:text-8xl leading-[0.9] mb-8 font-medium">
              Strategic Support for a <span className="italic text-primary">Sustainable</span> Future.
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Eden Destiny Group Ltd is a collective of talented experts dedicated to driving positive impact across education, economic empowerment, DEI, and wellness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg">
                Our Collective <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg">
                ESG Integration
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square rounded-3xl overflow-hidden bg-muted"
          >
            <img 
              src="https://picsum.photos/seed/eden-group/1200/1200" 
              alt="Strategic Leadership" 
              className="object-cover w-full h-full opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 p-8 bg-background/90 backdrop-blur-sm rounded-2xl border border-border/50">
              <p className="font-heading text-2xl italic mb-2">"We're committed to helping clients achieve their ESG and CSR objectives sustainably."</p>
              <p className="text-sm font-semibold uppercase tracking-widest opacity-60">— Leadership Team</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="font-heading text-5xl mb-6">Our Collective Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A diverse team of specialists working together to provide comprehensive strategic support.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-background">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="font-heading text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Areas */}
      <section id="impact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-5xl mb-8">Driving Positive Impact</h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                We focus our efforts where they matter most, delivering strategic support to private and public sector clients to foster growth and inclusion.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {impactAreas.map((area) => (
                  <div key={area.title} className={`p-6 rounded-2xl border ${area.color}`}>
                    <h3 className="font-heading text-2xl mb-2">{area.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/edu/600/800" className="rounded-2xl aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/wellness/600/800" className="rounded-2xl aspect-[3/4] object-cover mt-12" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG & SDGs */}
      <section id="esg" className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-5xl mb-8">ESG Integration & UN SDGs</h2>
              <p className="text-xl opacity-80 mb-10 leading-relaxed">
                Aligning your business with the United Nations Sustainable Development Goals isn't just a moral imperative—it's a strategic advantage.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-primary-foreground/20">
                  <AccordionTrigger className="text-xl font-heading hover:no-underline">ESG Strategy</AccordionTrigger>
                  <AccordionContent className="text-lg opacity-80">
                    We help integrate Environmental, Social, and Governance criteria into your core business operations for long-term sustainability.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-primary-foreground/20">
                  <AccordionTrigger className="text-xl font-heading hover:no-underline">CSR Objectives</AccordionTrigger>
                  <AccordionContent className="text-lg opacity-80">
                    Our team guides you in achieving Corporate Social Responsibility goals that resonate with your stakeholders and community.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-primary-foreground/20">
                  <AccordionTrigger className="text-xl font-heading hover:no-underline">SDG Alignment</AccordionTrigger>
                  <AccordionContent className="text-lg opacity-80">
                    We identify key UN SDGs that align with your mission and develop actionable roadmaps to achieve them.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {sdgs.map((sdg, idx) => (
                <motion.div 
                  key={sdg}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{sdg}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 px-6 bg-accent/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-5xl mb-8">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Ready to align your business with sustainable growth? Reach out to our team of experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="rounded-full px-10 h-16 text-lg gap-2">
              <Mail className="w-5 h-5" /> Email Us
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg gap-2">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden">
              <img 
                src="https://storage.googleapis.com/static.ai.studio/input_file_0.png" 
                alt="Eden Destiny Group Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('bg-primary');
                  const icon = document.createElement('div');
                  icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-foreground w-5 h-5"><path d="M12 22v-5"/><path d="M9 17H5l6-7 1 1 1-1 6 7h-4v5"/><path d="M12 13V8"/><path d="M12 4V2"/></svg>';
                  e.currentTarget.parentElement?.appendChild(icon.firstChild as Node);
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold tracking-tight leading-none">Eden Destiny Group</span>
              <span className="text-[8px] uppercase tracking-[0.2em] font-semibold opacity-60">Strategic Paths Foreword</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eden Destiny Group Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium uppercase tracking-widest opacity-60">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
