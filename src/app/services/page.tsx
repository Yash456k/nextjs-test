'use client';
import React, { JSX, useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  Stethoscope,
  Activity,
  Crown,
  Scroll,
  Sparkles,
  Smile,
  Syringe,
  HeartPulse,
  ChevronRight,
} from 'lucide-react';

interface Service {
  name: string;
  description: string;
  icon: JSX.Element;
}

const services = [
  {
    name: 'Scaling',
    description: 'Professional cleaning to remove plaque and tartar.',
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    name: 'Teeth Restoration',
    description: 'Restoring damaged or decayed teeth to full function.',
    icon: <Activity className="w-6 h-6" />,
  },
  {
    name: 'Root Canal Treatment',
    description: 'Treating infected tooth pulp to save the tooth.',
    icon: <Activity className="w-6 h-6" />,
  },
  {
    name: 'Crowns and Bridges',
    description: 'Custom crowns and bridges to restore missing teeth.',
    icon: <Crown className="w-6 h-6" />,
  },
  {
    name: 'Dental Implants',
    description: 'Permanent replacements for missing teeth.',
    icon: <Scroll className="w-6 h-6" />,
  },
  {
    name: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter smile.',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    name: 'Smile Makeovers',
    description: 'Customized treatments to enhance your smile.',
    icon: <Smile className="w-6 h-6" />,
  },
  {
    name: 'Tooth Extractions',
    description: 'Safe removal of damaged or problematic teeth.',
    icon: <Syringe className="w-6 h-6" />,
  },
  {
    name: 'Dentures',
    description: 'Full or partial dentures for missing teeth.',
    icon: <HeartPulse className="w-6 h-6" />,
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (window.innerWidth >= 768) setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (window.innerWidth >= 768) setIsExpanded(false);
  };

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-1000 ease-in-out
          ${isExpanded ? 'bg-gradient-to-br from-blue-50 to-white' : 'hover:bg-blue-50/30'}`}
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <div
            className={`p-2 rounded-lg transition-all duration-1000
              ${isExpanded ? 'bg-blue-100 text-blue-700' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}`}
          >
            {service.icon}
          </div>
          <h3 className="font-semibold text-lg text-zinc-900">
            {service.name}
          </h3>
        </div>

        <div
          className={`transition-all duration-1000 ease-in-out
            ${isExpanded ? 'max-h-80 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'}`}
        >
          <p className="text-zinc-600 mb-4">{service.description}</p>
        </div>
      </div>

      {/* Show "Click here to reveal..." when expanded but not hovered */}
      {isExpanded && !isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 text-blue-600 text-sm font-medium">
          Click here to reveal...
        </div>
      )}

      <div
        className={`absolute bottom-3 right-3 transition-all duration-1000
          ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
          <ChevronRight className="w-4 h-4 text-blue-600" />
        </div>
      </div>
    </Card>
  );
};

const Services = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">
            Comprehensive Dental Services
          </h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Experience top-quality dental care with our expert treatments
            designed to restore, enhance, and maintain your smile.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
