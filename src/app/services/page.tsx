import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Plane, Ship, Truck, Package, FileCheck, Anchor, ArrowRight } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            title: "International Freight Forwarding",
            icon: <Plane className="w-12 h-12 text-tfl-red" />,
            description: "A multi-stage process involving transport coordination, customs clearing, and regulatory compliance. Connecting Botswana to global markets.",
            features: ["Transport Coordination", "Risk Management", "End-to-end Logistics", "Tracking & Visibility"]
        },
        {
            title: "Production Support Logistics",
            icon: <Anchor className="w-12 h-12 text-tfl-red" />,
            description: "Critical support for industries like mining and manufacturing. We handle the movement of raw materials and finished products to keep your production line moving.",
            features: ["Inbound Logistics", "Outbound Logistics", "Raw Materials", "Finished Goods"]
        },
        {
            title: "Cross-Border Haulage",
            icon: <Truck className="w-12 h-12 text-tfl-red" />,
            description: "Specialized fleet for bulk commodities and finished products. Facilitating trade across SADC with Inbound and Outbound logistics solutions.",
            features: ["Bulk Commodities", "Oversized Loads", "Hazardous Materials", "GPS Tracking"]
        },
        {
            title: "Last-Mile Delivery",
            icon: <Package className="w-12 h-12 text-tfl-red" />,
            description: "Ensuring your goods reach their final destination. We handle the crucial final step of the supply chain with precision and care.",
            features: ["Last-Mile Delivery", "Distribution", "Retail Logistics", "Door-to-Door"]
        },
        {
            title: "Warehousing & Consolidation",
            icon: <Package className="w-12 h-12 text-tfl-red" />,
            description: "Secure storage and consolidation services. Future expansion includes warehouse and plant real estate subdivision.",
            features: ["Inventory Management", "Consolidation", "Distribution", "Secure Facilities"]
        },
        {
            title: "Customs Clearing",
            icon: <FileCheck className="w-12 h-12 text-tfl-red" />,
            description: "Expert handling of customs documentation and border procedures. We ensure regulatory compliance and risk management.",
            features: ["Import/Export Clearance", "Documentation", "Duty Management", "Compliance"]
        },
        {
            title: "Project & Contract Logistics",
            icon: <Anchor className="w-12 h-12 text-tfl-red" />,
            description: "End-to-end logistics for large-scale projects, including mine rehabilitation, plant dismantling, and movement of heavy machinery.",
            features: ["Mine Logistics", "Plant Dismantling", "Heavy Lift", "Turnkey Solutions"]
        },
        {
            title: "Multimodal Logistics",
            icon: <Ship className="w-12 h-12 text-tfl-red" />,
            description: "Leveraging regional trade corridors through South Africa, Namibia, Mozambique, and Zimbabwe. Seamless connections between landlocked Botswana and key ports.",
            features: ["Sea & Rail Integration", "Port Services", "Container Handling", "Export Facilitation"]
        }
    ];

    return (
        <div className="w-full">
            <div className="bg-tfl-blue py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-300">Comprehensive logistics solutions designed to move your business forward.</p>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="mb-6 bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-tfl-blue/5 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-tfl-blue mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-500">
                                        <span className="w-1.5 h-1.5 bg-tfl-red rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button variant="outline" className="w-full group-hover:bg-tfl-blue group-hover:text-white group-hover:border-tfl-blue" asChild>
                                <Link href="/contact">Get a Quote</Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </Section>

            <div className="bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-tfl-blue mb-6">Need a custom solution?</h2>
                    <p className="text-gray-600 mb-8">
                        We understand that every shipment is unique. Contact our team to discuss your specific logistics requirements.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/contact">Contact Us <ArrowRight className="ml-2 w-5 h-5" /></Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
