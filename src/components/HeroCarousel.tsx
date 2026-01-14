"use client"

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Button } from './ui/Button'
import Link from 'next/link'

const slides = [
    {
        image: '/hero/rock-deposit.png',
        title: 'Mining Support',
        subtitle: 'Streamlined handling and processing support for the mining industry.'
    },
    {
        image: '/hero/digger-canyon.png',
        title: 'Heavy Excavation',
        subtitle: 'Precision equipment for complex earthworks and infrastructure projects.'
    },
    {
        image: '/hero/digger-desert.png',
        title: 'Remote Solutions',
        subtitle: 'Expert logistics and plant hire capable of operating in any environment.'
    },
    {
        image: '/hero/rock-truck-mine.png',
        title: 'Earth Moving',
        subtitle: 'Heavy-duty machinery dedicated to maximizing your operational output.'
    },
    {
        image: '/hero/truck-black.png',
        title: 'Logistics Fleet',
        subtitle: 'Versatile transportation options connecting your business to the region.'
    }
]

export default function HeroCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-tfl-blue group">
            <div className="overflow-hidden h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {slides.map((slide, index) => (
                        <div className="relative flex-[0_0_100%] min-w-0 h-full" key={index}>
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-black/50" />

                            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                                <div className="max-w-4xl">
                                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight uppercase drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
                                        {slide.title === 'Timely Delivery' ? (
                                            <>Timely <span className="text-tfl-red">Delivery</span></>
                                        ) : slide.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto font-light drop-shadow-md animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
                                        {slide.subtitle}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                                        <Button size="lg" className="text-lg px-8" asChild>
                                            <Link href="/contact">Get a Quote</Link>
                                        </Button>
                                        <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:!text-tfl-blue" asChild>
                                            <Link href="/services">Our Services</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-tfl-red w-8' : 'bg-white/50 hover:bg-white'
                            }`}
                        onClick={() => emblaApi?.scrollTo(index)}
                    />
                ))}
            </div>

            {/* Polygon Overlay Effect - Preserved */}
            {/* <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div> */}
        </div>
    )
}
