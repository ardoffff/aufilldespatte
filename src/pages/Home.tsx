import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Stethoscope, ShieldCheck, HeartHandshake, Heart, ArrowRight, Star } from 'lucide-react';
import { animals, testimonials } from '../data';
import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=2000')" }}
        ></div>
        <div className="absolute inset-0 z-10 bg-black/20"></div>
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6"
        >
          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            Adoptez un compagnon pour la vie
          </h1>
          <p className="text-white/95 text-xl md:text-2xl font-medium max-w-2xl drop-shadow-md">
            Trouvez votre nouveau meilleur ami aujourd'hui et offrez-lui le foyer aimant qu'il mérite.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center">
            <Link 
              to="/animaux" 
              className="flex items-center justify-center h-14 px-8 bg-green hover:bg-green-dark text-white text-lg font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Voir les animaux disponibles
            </Link>
            <a 
              href="https://wa.me/33602822103"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-14 px-8 bg-transparent border-2 border-white hover:bg-white text-white hover:text-green text-lg font-bold rounded-full transition-all hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm"
            >
              <MessageCircle className="mr-2" size={24} />
              Contacter via WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">Pourquoi nous choisir ?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-xl">
              Nous nous engageons pour le bien-être animal et une adoption responsable et sécurisée.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-10 rounded-2xl bg-beige/50 hover:bg-beige transition-colors duration-300"
            >
              <div className="w-20 h-20 bg-green/20 text-green rounded-full flex items-center justify-center mb-6">
                <Stethoscope size={40} />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Suivi vétérinaire</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Tous nos animaux sont examinés, vaccinés et pucés par des vétérinaires qualifiés avant adoption.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-10 rounded-2xl bg-beige/50 hover:bg-beige transition-colors duration-300"
            >
              <div className="w-20 h-20 bg-green/20 text-green rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Adoption responsable</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Nous sélectionnons soigneusement les futures familles pour assurer que chaque animal trouve le foyer idéal.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center p-10 rounded-2xl bg-beige/50 hover:bg-beige transition-colors duration-300"
            >
              <div className="w-20 h-20 bg-green/20 text-green rounded-full flex items-center justify-center mb-6">
                <HeartHandshake size={40} />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">Support après adoption</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Nous restons à vos côtés pour vous conseiller et vous accompagner même après l'arrivée de votre compagnon.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Animals Section */}
      <section className="py-24 px-4 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">Nos derniers compagnons</h2>
              <p className="text-gray-600 text-xl">Ils attendent impatiemment de rencontrer leur nouvelle famille.</p>
            </div>
            <Link to="/animaux" className="text-green font-bold hover:text-green-dark flex items-center gap-1 group text-lg">
              Voir tous les animaux 
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {animals.slice(0, 4).map((animal) => (
              <Link 
                key={animal.id} 
                to={`/animal/${animal.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${animal.image}')` }}
                  ></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-green shadow-sm">
                    {animal.type}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-dark">{animal.name}</h3>
                      <p className="text-gray-500 text-base">{animal.age}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {animal.traits.map((trait, index) => (
                      <span key={index} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-md font-medium">
                        {trait}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <div className="w-full h-12 bg-green/10 group-hover:bg-green text-green group-hover:text-white font-bold text-base rounded-xl transition-colors flex items-center justify-center gap-2">
                      <span>En savoir plus</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">Comment adopter ?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-xl">
              Un processus simple et transparent pour garantir le bonheur de nos compagnons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">1</div>
              <h4 className="text-xl font-bold text-dark mb-3">Choisissez</h4>
              <p className="text-gray-600">Parcourez nos annonces et trouvez l'animal qui vous correspond.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">2</div>
              <h4 className="text-xl font-bold text-dark mb-3">Contactez</h4>
              <p className="text-gray-600">Discutez avec nous via WhatsApp pour poser vos questions.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">3</div>
              <h4 className="text-xl font-bold text-dark mb-3">Rencontrez</h4>
              <p className="text-gray-600">Venez rencontrer votre futur compagnon dans sa famille d'accueil.</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">4</div>
              <h4 className="text-xl font-bold text-dark mb-3">Adoptez</h4>
              <p className="text-gray-600">Signez le contrat d'adoption et commencez votre nouvelle vie ensemble.</p>
            </div>
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-green/20 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">Familles heureuses</h2>
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
      </section>
    </div>
  );
}
