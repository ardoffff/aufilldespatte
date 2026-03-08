import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="py-12 lg:py-24 px-4 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-6">Contactez-nous</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl">
            Nous sommes là pour répondre à toutes vos questions sur l'adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8">Nos coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center text-green">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase">Téléphone</p>
                    <p className="text-dark font-medium text-lg">+33 6 02 82 21 03</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center text-green">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase">Email</p>
                    <p className="text-dark font-medium text-lg">contact@aufildespattes.fr</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center text-green">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase">Adresse</p>
                    <p className="text-dark font-medium text-lg">Lyon, France (69002)</p>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/33602822103"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xl py-6 rounded-3xl shadow-lg shadow-green-500/30 transition-all hover:-translate-y-1 group"
            >
              <MessageCircle className="mr-3 group-hover:animate-pulse" size={32} />
              Discuter sur WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-8">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nom</label>
                  <input type="text" className="w-full bg-beige/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green outline-none" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full bg-beige/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green outline-none" placeholder="Votre email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Sujet</label>
                <input type="text" className="w-full bg-beige/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green outline-none" placeholder="Sujet de votre message" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-beige/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green outline-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button type="submit" className="w-full bg-green hover:bg-green-dark text-white font-bold text-lg py-4 rounded-xl transition-all shadow-md hover:shadow-lg">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
