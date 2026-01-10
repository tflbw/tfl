import { Section } from "@/components/ui/Section";

export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            title: "Global Machinery Transport",
            category: "Project Cargo",
            stats: "500 Tons",
            description: "Successfully transported heavy industrial machinery from Europe to Asia via sea freight.",
        },
        {
            id: 2,
            title: "Pharmaceutical Distribution",
            category: "Air Freight",
            stats: "Temperature Controlled",
            description: "Urgent delivery of time-sensitive pharmaceutical supplies during peak demand.",
        },
        {
            id: 3,
            title: "Automotive Parts Logistics",
            category: "Supply Chain",
            stats: "JIT Delivery",
            description: "Managed just-in-time delivery network for a major automotive manufacturer.",
        },
        {
            id: 4,
            title: "Retail Warehouse Management",
            category: "Warehousing",
            stats: "10,000 sq ft",
            description: "Optimized inventory flow and storage for a leading retail chain."
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
                            {/* Placeholder Background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600 z-0 group-hover:scale-105 transition-transform duration-500">
                                [Project Image {project.id}]
                            </div>

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
