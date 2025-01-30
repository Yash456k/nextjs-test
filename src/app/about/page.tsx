import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Calendar, Award, Stethoscope } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <Card className="max-w-5xl mx-auto p-8 lg:p-12 bg-white/80 backdrop-blur">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Section */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="relative w-[280px] h-[280px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/Dr_Ashni_Shah.JPG"
                  alt="Dr. Shah"
                  fill
                  sizes="280px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="px-4 py-1">
                <Award className="w-4 h-4 mr-2" />
                BDS
              </Badge>
              <Badge variant="secondary" className="px-4 py-1">
                <Stethoscope className="w-4 h-4 mr-2" />
                Implant Specialist
              </Badge>
            </div>
          </div>

          {/* Content Section - Rest remains the same */}
          <CardContent className="flex-1 space-y-6 lg:pt-0">
            <div>
              <h1 className="text-4xl font-bold text-zinc-900 mb-2">
                Dr. Ashni Shah
              </h1>
              <p className="text-blue-600 font-medium">
                Advanced Cosmetic & Implant Dentist
              </p>
            </div>

            <div className="space-y-4 text-zinc-600">
              <p className="text-lg leading-relaxed">
                With over 6 years of specialized experience, Dr. Ashni Shah
                brings exceptional expertise in cosmetic dentistry and dental
                implants. She completed her{' '}
                <span className=" font-bold text-black">
                  Bachelor of Dental Surgery (BDS)
                </span>{' '}
                in 2018 and further honed her skills with a{' '}
                <span className=" font-bold text-black">Small Residency</span>{' '}
                in{' '}
                <span className=" font-bold text-black">Implant Dentistry</span>
                .
              </p>

              <p className="text-lg leading-relaxed">
                Her philosophy combines cutting-edge technology with a gentle,
                patient-centered approach. Dr. Ashni Shah believes in creating
                personalized treatment plans that not only enhance smiles but
                also improve overall oral health and confidence.
              </p>

              <div className="pt-4 space-y-3">
                <h3 className="font-semibold text-zinc-900">
                  Specializations:
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Cosmetic Dentistry</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Dental Implants</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Smile Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Root canals</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Book Consultation
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default About;
