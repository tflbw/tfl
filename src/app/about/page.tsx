import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="w-full">
            <div className="bg-tfl-blue py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About TFL</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-300">Your trusted partner in global logistics since 2024.</p>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-tfl-blue mb-6">Who We Are</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Formed on February 16, 2024, Tau Freight and Logistics (TFL) is a Botswana-based logistics provider specializing in the transportation of goods, light and heavy, oversized loads, and bulk commodities. We focus on international freight forwarding, end-to-end logistics, and cross-border haulage across Botswana and the SADC region.
                            </p>
                            <p>
                                TFL is strategically situated to leverage the opportunities presented by Botswana’s geographical advantage as a central hub within SADC. We aim to address critical logistical challenges, including cross-border delays and bottlenecks in rail and port services, particularly in Durban.
                            </p>
                            <p>
                                With a robust network and a customer-centric approach, we facilitate seamless connections between landlocked Botswana and global markets in Asia, Europe, the Middle East, and the Americas.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full bg-gray-200 rounded-lg overflow-hidden">
                        {/* Placeholder for about image - Fig 13 from Business Plan? */}
                        <Image src="/services/fig-11.png" alt="Gaborone Container Terminal Handling" fill className="object-cover" />
                    </div>
                </div>
            </Section>

            <Section className="bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-tfl-red">
                        <h3 className="text-2xl font-bold text-tfl-blue mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            To be one of the contributors to the logistics backbone of Botswana’s resource-driven industries and their link to local and foreign markets, especially in the drive for a Logistics Hub.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-tfl-blue">
                        <h3 className="text-2xl font-bold text-tfl-blue mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            To become Botswana’s leading name in specialized, secure, and smart logistics solutions. We aim to move what matters — where it matters — without compromise.
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
                        <p className="text-gray-600 max-w-2xl">
                            Driving TFL's vision to be the logistics backbone of Botswana. Focused on strategic expansion into Zambia, Namibia, and Mozambique, and fostering partnerships to support the region's resource-driven industries.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
