import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            title: "Sherashiya steel plant",
            category: "Manufacturing Logistics",
            stats: "2000+ Tons/Month",
            description: "Transport of raw materials (scrap/sponge iron) and finished steel billets. Supporting vertical integration and export diversification strategies.",
            image: "/services/fig-1.jpg"
        },
        {
            id: 2,
            title: "Sherashiya (BCL) Liquidation",
            category: "Project Cargo",
            stats: "1M+ Tons Assets",
            description: "Complex logistics for asset acquisition, including dismantling mine buildings, transporting hazardous materials (tailings/slag), and moving heavy machinery.",
            image: "/services/fig-4.png"
        },
        {
            id: 3,
            title: "Regional Expansion",
            category: "Strategic Growth",
            stats: "SADC Network",
            description: "Expanding operations into Zambia, Namibia, and Mozambique. Facilitating bulk transport services and project logistics across the region.",
            image: "/TFL AFRICA.png"
        },
        {
            id: 4,
            title: "Mining Sector Support",
            category: "Mining Logistics",
            stats: "End-to-End",
            description: "Comprehensive logistics backbone for Botswana's resource-driven industries. Handling oversized loads and critical mining equipment.",
            image: "/Mining support.png"
        }
    ];

    return (
        <div className="w-full">
            <div className="bg-tfl-blue py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-300">Showcasing our expertise in action.</p>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-xl bg-gray-900 aspect-[4/3] flex items-end">
                            {/* Background Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>

                            <div className="relative z-20 p-8 w-full">
                                <span className="inline-block px-3 py-1 bg-tfl-red text-white text-xs font-bold uppercase tracking-wider rounded-sm mb-3">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4 text-sm line-clamp-2">{project.description}</p>
                                <div className="flex items-center text-gray-400 text-sm font-medium border-t border-gray-700 pt-4">
                                    <span className="text-tfl-red mr-2">Highlight:</span> {project.stats}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
