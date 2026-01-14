import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-tfl-blue text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="relative h-16 w-32 mb-4">
                            <Image
                                src="/logo-footer.png"
                                alt="TFL Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-300 text-sm">
                            Timely delivery, precise direction, and structural strength. Your trusted logistics partner.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-tfl-red">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/services" className="hover:text-white">Logistics</Link></li>
                            <li><Link href="/services" className="hover:text-white">Warehousing</Link></li>
                            <li><Link href="/services" className="hover:text-white">Customs Clearance</Link></li>
                            <li><Link href="/services" className="hover:text-white">Transportation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-tfl-red">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold mb-4 text-tfl-red">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Lot 18906, Industrial Site</li>
                            <li>Selebi Phikwe Central 09267</li>
                        </ul>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Plot No. 54358 Building Marula</li>
                            <li>Prime Plaza CBD, Gaborone</li>
                            <li>admin@tfl.co.bw</li>
                            <li>+267 75 624 347</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} TFL Logistics. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
