import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="w-full">
            <div className="bg-tfl-blue py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About TFL</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-300">Your trusted partner in global logistics since [Year].</p>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-tfl-blue mb-6">Who We Are</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                TFL Logistics is a premier logistics provider dedicated to delivering excellence in every shipment.
                                Inspired by the lion, our brand embodies structure, strength, and precise direction.
                            </p>
                            <p>
                                We understand the complexities of global trade and supply chain management.
                                Our team of experts is committed to providing timely deliveries tailored to meet the specific needs of our clients.
                            </p>
                            <p>
                                With a robust network and a customer-centric approach, we navigate the challenges of logistics
                                so you can focus on growing your business.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full bg-gray-200 rounded-lg overflow-hidden">
                        {/* Placeholder for about image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                            [Office/Team Image Placeholder]
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-tfl-red">
                        <h3 className="text-2xl font-bold text-tfl-blue mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            To provide reliable, efficient, and innovative logistics solutions that empower businesses to connect with the world.
                            We strive for excellence in every delivery, ensuring time-critical execution and structural integrity in our operations.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-tfl-blue">
                        <h3 className="text-2xl font-bold text-tfl-blue mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            To be the leading logistics partner globally, recognized for our strength, reliability, and commitment to customer success.
                            We aim to set the standard for timely delivery and operational precision in the industry.
                        </p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-200 rounded-full flex-shrink-0 relative overflow-hidden">
                        {/* Placeholder for Director Image - using a generic avatar or initials if no image provided */}
                        <div className="absolute inset-0 flex items-center justify-center bg-tfl-blue text-white text-3xl font-bold">
                            MM
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-tfl-blue mb-2">Leadership</h2>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">Moduku Motshegwa</h3>
                        <p className="text-tfl-red font-medium mb-4">Director</p>
                        <p className="text-gray-600 max-w-2xl">
                            Leading TFL Logistics with a vision for excellence and a commitment to reliability.
                            Under his direction, the company continues to grow as a pillar of strength in the logistics industry.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
