import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="w-full">
            <div className="bg-tfl-blue py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-300">Get in touch for quotes, inquiries, or support.</p>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-tfl-blue mb-6">Get in Touch</h2>
                            <p className="text-gray-600">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-tfl-red/10 rounded-lg flex items-center justify-center text-tfl-red flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-tfl-blue text-lg">Visit Us</h3>
                                    <p className="text-gray-600">
                                        Plot No. 54358 Building Marula<br />
                                        Prime Plaza CBD, Gaborone, Botswana
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-tfl-red/10 rounded-lg flex items-center justify-center text-tfl-red flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-tfl-blue text-lg">Call Us</h3>
                                    <p className="text-gray-600">+267 75 624 347</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-tfl-red/10 rounded-lg flex items-center justify-center text-tfl-red flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-tfl-blue text-lg">Email Us</h3>
                                    <p className="text-gray-600">info@tfl.co.bw</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-tfl-blue focus:ring-1 focus:ring-tfl-blue outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-tfl-blue focus:ring-1 focus:ring-tfl-blue outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                                <select id="subject" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-tfl-blue focus:ring-1 focus:ring-tfl-blue outline-none transition-all">
                                    <option>General Inquiry</option>
                                    <option>Request a Quote</option>
                                    <option>Status Update</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-tfl-blue focus:ring-1 focus:ring-tfl-blue outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>

                            <Button className="w-full" size="lg">Send Message</Button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
