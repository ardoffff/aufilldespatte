import React from 'react';
import { testimonials } from '../data';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  return (
    <div className="py-12 lg:py-24 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-6">Familles heureuses</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl">
            Découvrez les histoires de ceux qui ont trouvé leur nouveau meilleur ami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              whileHover={{ y: -5 }}
              className="bg-beige/30 p-8 rounded-2xl border border-beige"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-lg text-dark">{testimonial.name}</h4>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
