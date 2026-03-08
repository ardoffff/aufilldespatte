export interface Animal {
  id: string;
  name: string;
  type: 'Chiot' | 'Chaton';
  age: string;
  gender: 'male' | 'female';
  image: string;
  gallery?: string[];
  traits: string[];
  description: string;
}

export const animals: Animal[] = [
  {
    id: 'luna',
    name: 'Luna',
    type: 'Chaton',
    age: '3 mois',
    gender: 'female',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=800',
    ],
    traits: ['Câline', 'Joueuse'],
    description: 'Luna est une petite chatte très douce qui adore les câlins et jouer avec des petites balles. Elle est très propre et s\'entend bien avec les enfants.',
  },
  {
    id: 'max',
    name: 'Max',
    type: 'Chiot',
    age: '2 mois',
    gender: 'male',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800',
    ],
    traits: ['Sociable', 'Actif'],
    description: 'Max est un chiot plein d\'énergie, toujours prêt pour une aventure. Il adore courir dans le jardin et apprendre de nouveaux tours.',
  },
  {
    id: 'simba',
    name: 'Simba',
    type: 'Chaton',
    age: '4 mois',
    gender: 'male',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800',
    ],
    traits: ['Curieux', 'Calme'],
    description: 'Simba est un explorateur né. Il aime observer par la fenêtre et faire de longues siestes au soleil. Très affectueux une fois en confiance.',
  },
  {
    id: 'bella',
    name: 'Bella',
    type: 'Chiot',
    age: '3 mois',
    gender: 'female',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=800',
    ],
    traits: ['Douce', 'Affectueuse'],
    description: 'Bella est une petite chienne très douce à la recherche d\'une famille aimante. Elle adore jouer avec les enfants et s\'entend bien avec les autres animaux.',
  },
  {
    id: 'cooper',
    name: 'Cooper',
    type: 'Chiot',
    age: '2 mois',
    gender: 'male',
    image: 'https://images.unsplash.com/photo-1591160674255-fc8bfffb39fe?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1591160674255-fc8bfffb39fe?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800',
    ],
    traits: ['Intelligent', 'Joueur'],
    description: 'Cooper est un magnifique chiot Berger Australien bleu merle. Il est très intelligent, apprend vite et adore jouer avec ses jouets. Il cherche une famille active qui saura lui donner toute l\'attention qu\'il mérite.',
  },
  {
    id: 'rocky',
    name: 'Rocky',
    type: 'Chiot',
    age: '2 mois',
    gender: 'male',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    ],
    traits: ['Protecteur', 'Câlin'],
    description: 'Rocky est un petit chiot très attaché à ses maîtres. Il adore les moments de calme mais ne refuse jamais une partie de jeu. Un compagnon fidèle en devenir.',
  },
  {
    id: 'oscar',
    name: 'Oscar',
    type: 'Chaton',
    age: '1 an',
    gender: 'male',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80&w=800',
    ],
    traits: ['Calme', 'Observateur'],
    description: 'Oscar est un chat tigré magnifique et très posé. Il apprécie énormément son confort et peut passer des heures à observer son environnement. C\'est un compagnon discret mais très affectueux.',
  },
  {
    id: 'milo',
    name: 'Milo',
    type: 'Chiot',
    age: '4 mois',
    gender: 'male',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=800',
    ],
    traits: ['Curieux', 'Intrépide'],
    description: 'Milo est un petit bouledogue plein de vie. Rien ne lui fait peur et il adore explorer de nouveaux endroits. Il cherche une famille qui saura canaliser son énergie débordante.',
  },
  {
    id: 'nala',
    name: 'Nala',
    type: 'Chaton',
    age: '2 mois',
    gender: 'female',
    image: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513360371669-4adaaee41562?auto=format&fit=crop&q=80&w=800',
    ],
    traits: ['Douce', 'Timide'],
    description: 'Nala est une petite chatte un peu réservée au début, mais une fois en confiance, elle devient une véritable machine à ronrons. Elle a besoin d\'un environnement calme.',
  },
  {
    id: 'rio',
    name: 'Rio',
    type: 'Chiot',
    age: '5 mois',
    gender: 'male',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
    ],
    traits: ['Protecteur', 'Loyal'],
    description: 'Rio est un chiot Golden Retriever très équilibré. Il est déjà très attentif à ses humains et sera un compagnon de vie exceptionnel pour une famille avec enfants.',
  },
  {
    id: 'cleo',
    name: 'Cleo',
    type: 'Chaton',
    age: '3 mois',
    gender: 'female',
    image: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516139008210-96e45dccd83b?auto=format&fit=crop&q=80&w=800',
    ],
    traits: ['Élégante', 'Indépendante'],
    description: 'Cleo est une petite chatte siamoise avec beaucoup de personnalité. Elle sait ce qu\'elle veut et n\'hésite pas à le faire savoir. Elle est très intelligente et joueuse.',
  },
];


export const testimonials = [
  {
    id: 1,
    name: 'Sophie L.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'L\'adoption de Luna s\'est super bien passée. L\'équipe est très à l\'écoute et rassurante !',
  },
  {
    id: 2,
    name: 'Marc D.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'Max est un amour. Merci pour vos conseils et votre accompagnement après l\'adoption.',
  },
  {
    id: 3,
    name: 'Julie M.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'Une expérience merveilleuse. Simba a tout de suite trouvé ses marques chez nous.',
  },
];
