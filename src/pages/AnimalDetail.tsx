import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { animals } from '../data';
import { MessageCircle, ChevronRight, Info, CheckCircle2, Shield, HeartPulse, MapPin, Stethoscope, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

export function AnimalDetail() {
  const { id } = useParams<{ id: string }>();
  const animal = animals.find(a => a.id === id);
  const [activeImage, setActiveImage] = React.useState(animal?.image || '');
  const [isShared, setIsShared] = React.useState(false);

  // Update active image when animal changes
  React.useEffect(() => {
    if (animal) {
      setActiveImage(animal.image);
    }
  }, [animal]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Adoptez ${animal?.name}`,
        text: `Découvrez ${animal?.name} sur Au fil des pattes !`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsShared(true);
      setTimeout(() => setIsShared(false), 2000);
    }
  };

  if (!animal) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-dark mb-4">Animal non trouvé</h2>
        <Link to="/" className="text-green hover:underline text-lg">Retour à l'accueil</Link>
      </div>
    );
  }

  const gallery = animal.gallery || [animal.image];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-12 text-base text-gray-500">
        <Link to="/" className="hover:text-green transition-colors">Accueil</Link>
        <ChevronRight size={16} />
        <Link to={`/${animal.type.toLowerCase()}s`} className="hover:text-green transition-colors">{animal.type}s</Link>
        <ChevronRight size={16} />
        <span className="text-dark font-medium">{animal.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div 
            key={activeImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm group"
          >
            <img 
              src={activeImage} 
              alt={animal.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wider text-dark shadow-sm flex items-center gap-2">
              <CheckCircle2 size={20} className="text-green" /> Disponible
            </div>
          </motion.div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-6">
            {gallery.map((img, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(img)}
                className={`aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeImage === img 
                    ? 'ring-4 ring-green ring-offset-4 ring-offset-beige scale-95' 
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img src={img} alt={`${animal.name} view ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
            {gallery.length < 4 && (
              <div className="aspect-square rounded-2xl bg-green/10 flex items-center justify-center cursor-pointer hover:bg-green/20 transition-colors">
                <Stethoscope className="text-green opacity-30" size={32} />
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Details & Action */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          {/* Main Info Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-5xl font-extrabold text-dark mb-2">{animal.name}</h1>
                <p className="text-gray-500 text-2xl">{animal.type}</p>
              </div>
              <button 
                onClick={handleShare}
                className="p-4 rounded-2xl bg-beige/50 text-gray-500 hover:text-green hover:bg-beige transition-all relative"
                title="Partager"
              >
                <Share2 size={24} />
                {isShared && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    Lien copié !
                  </span>
                )}
              </button>
            </div>

            {/* Tags Grid */}
            <div className="grid grid-cols-2 gap-4 my-10">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-beige/50">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green shadow-sm">
                  <Info size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Âge</p>
                  <p className="text-dark font-bold text-lg">{animal.age}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-beige/50">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green shadow-sm">
                  <Info size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Sexe</p>
                  <p className="text-dark font-bold text-lg capitalize">{animal.gender === 'male' ? 'Mâle' : 'Femelle'}</p>
                </div>
              </div>
              
              {animal.traits.map((trait, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-beige/50">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green shadow-sm">
                    <Info size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Caractère</p>
                    <p className="text-dark font-bold text-lg">{trait}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-dark mb-4 flex items-center gap-3">
                <Info className="text-green" size={28} />
                À propos de {animal.name}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {animal.description}
              </p>
            </div>

            {/* Main CTA */}
            <a 
              href={`https://wa.me/33602822103?text=Bonjour, je suis intéressé(e) par l'adoption de ${animal.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xl py-5 rounded-2xl shadow-lg shadow-green-500/30 transition-all hover:-translate-y-1 mb-4 group"
            >
              <MessageCircle className="mr-3 group-hover:animate-pulse" size={28} />
              Contacter pour {animal.name}
            </a>
            <p className="text-center text-sm text-gray-400">
              Réponse généralement en moins d'une heure.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="bg-white/50 border border-gray-200 rounded-3xl p-8 flex flex-col gap-6">
            <h4 className="font-bold text-dark text-base uppercase tracking-wider opacity-70">Santé & Garanties</h4>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-green/10 p-2.5 rounded-full text-green">
                  <HeartPulse size={24} />
                </div>
                <span className="text-gray-700 text-lg font-medium">Vacciné(e) & Vermifugé(e)</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-2.5 rounded-full text-blue-600">
                  <Shield size={24} />
                </div>
                <span className="text-gray-700 text-lg font-medium">Identifié(e) par puce électronique</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-2.5 rounded-full text-purple-600">
                  <Stethoscope size={24} />
                </div>
                <span className="text-gray-700 text-lg font-medium">Certificat de bonne santé vétérinaire</span>
              </div>
            </div>
          </div>

          {/* Location Preview */}
          <div className="bg-white/50 border border-gray-200 rounded-3xl p-6 flex items-center gap-6">
            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
              <MapPin size={32} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase mb-1">Localisation</p>
              <p className="text-dark font-medium text-xl flex items-center gap-2">
                <MapPin className="text-green" size={24} />
                Lyon, France (69002)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
