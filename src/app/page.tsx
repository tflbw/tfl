import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Shield } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Brand Pillars */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-tfl-blue/5 rounded-full flex items-center justify-center mx-auto mb-4 text-tfl-red">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-tfl-blue">Time</h3>
            <p className="text-gray-600">
              We prioritize timely delivery to ensure your business keeps moving forward, handling cross-border delays and bottlenecks efficiently to meet your deadlines.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-tfl-blue/5 rounded-full flex items-center justify-center mx-auto mb-4 text-tfl-red">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-tfl-blue">Direction</h3>
            <p className="text-gray-600">
              Strategically located to leverage Botswana’s position as a central hub in SADC, we facilitate seamless connections between landlocked Botswana and global markets.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-tfl-blue/5 rounded-full flex items-center justify-center mx-auto mb-4 text-tfl-red">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-tfl-blue">Strength</h3>
            <p className="text-gray-600">
              With an unwavering focus on safety and service quality, our robust network ensures the security of your goods, from mining equipment to FMCG.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-tfl-blue mb-2">Our Services</h2>
            <p className="text-gray-600">Comprehensive logistics solutions tailored to your needs.</p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex">
            <Link href="/services">View All Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'International Freight Forwarding', desc: 'Expert coordination of global shipments via air, sea, and rail.' },
            { title: 'Cross-Border Haulage', desc: 'Secure transport of bulk and consolidated cargo across the SADC region.' },
            { title: 'Production Support Logistics', desc: 'Critical supply chain support for mining and manufacturing industries.' },
            { title: 'Warehousing & Consolidation', desc: 'Safe storage and inventory management in Gaborone and Selebi-Phikwe.' },
            { title: 'Customs Clearing', desc: 'Seamless border clearances with full regulatory compliance and risk management.' },
            { title: 'Project & Contract Logistics', desc: 'End-to-end management for large-scale industrial and infrastructure projects.' },
          ].map((service) => (
            <div key={service.title} className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-tfl-red/20 transition-all hover:shadow-lg cursor-pointer">
              <h3 className="text-xl font-bold text-tfl-blue group-hover:text-tfl-red transition-colors mb-2">{service.title}</h3>
              <p className="text-gray-500 mb-4">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <div className="bg-tfl-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Ready to move your cargo?</h2>
            <p className="text-white/90">Get a competitive quote for your next shipment today.</p>
          </div>
          <Button size="lg" variant="secondary" className="bg-tfl-blue text-white hover:bg-tfl-blue/90" asChild>
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
