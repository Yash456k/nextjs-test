'use client';
import React,{JSX} from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Stethoscope,
  Activity,
  Crown,
  Scroll,
  Sparkles,
  Smile,
  Syringe,
  HeartPulse,
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
  return (
    <Card className="group transition-colors hover:bg-blue-50/30">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
            {service.icon}
          </div>
          <CardTitle className="text-lg">{service.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-zinc-600">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 md:mb-6">
            Comprehensive Dental Services
          </h2>
          <p className="text-base md:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Experience top-quality dental care with our expert treatments
            designed to restore, enhance, and maintain your smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
