import React from 'react';
import { Shield, Stethoscope, Zap, Heart } from 'lucide-react';

const Featured = () => {
  const features = [
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      text: 'Over 6+ years of experience',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      text: 'State-of-the-art sterilization equipment for patient safety',
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      text: 'Latest technologies to ensure highest level of care',
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      text: 'Gentle care for a stress-free, painless visit',
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border hover:shadow-lg transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <p className="text-gray-800 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
