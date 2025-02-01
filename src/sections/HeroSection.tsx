'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { images } from '@/lib/data/home_page_photos';
import Link from 'next/link';

// Updated images array with all your local images

const HeroSection = () => {
  return (
    <section className="pt-12 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content: Text and Buttons */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Crafting confident smiles with precision and care
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Welcome to Akaay Dental Care, your trusted dentist in Ahmedabad
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="#contact_us">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Content: Carousel */}
        <div className="relative w-full">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gray-100 overflow-hidden">
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="relative h-full">
                    <div className="w-full h-full relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="object-fill"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800" />
              <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800" />
            </Carousel>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-blue-600 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
