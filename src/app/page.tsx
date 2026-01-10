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
              The clock hands never stop, and neither do we. We prioritize timely delivery to ensure your business keeps moving forward.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-tfl-blue/5 rounded-full flex items-center justify-center mx-auto mb-4 text-tfl-red">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-tfl-blue">Direction</h3>
            <p className="text-gray-600">
              A clear sense of direction. We navigate complex logistics networks to deliver your cargo to its specific destination.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-tfl-blue/5 rounded-full flex items-center justify-center mx-auto mb-4 text-tfl-red">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-tfl-blue">Strength</h3>
            <p className="text-gray-600">
              Like the lion, we stand for structure and strength. Our robust network ensures the safety and security of your goods.
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
          {['Air Freight', 'Sea Freight', 'Road Transport', 'Warehousing', 'Customs Clearance', 'Project Cargo'].map((service) => (
            <div key={service} className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-tfl-red/20 transition-all hover:shadow-lg cursor-pointer">
              <h3 className="text-xl font-bold text-tfl-blue group-hover:text-tfl-red transition-colors mb-2">{service}</h3>
              <p className="text-gray-500 mb-4">Reliable and efficient {service.toLowerCase()} solutions.</p>
              <span className="text-sm font-medium text-tfl-red flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="ml-1 w-3 h-3" />
              </span>
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
