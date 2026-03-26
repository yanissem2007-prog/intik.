export const menuCategories = [
  {
    id: 'burgers',
    title: 'Burgers',
    intro: 'Le coeur de la carte. Des recettes qui vont du classique ultra propre au signature bien charge.',
    items: [
      {
        name: 'Cruncher',
        price: 'S 350 / M 550',
        description: 'Poulet pane, fromage, sauce classique',
        badge: 'Crispy',
      },
      {
        name: 'Grillz',
        price: 'S 350 / M 550 / L 700',
        description: 'Boeuf, fromage, sauce classique',
        badge: 'Classic',
      },
      {
        name: 'Cheesy AF',
        price: '700',
        description: 'Boeuf ou poulet pane, mozzarella panee, fromage, sauce fromagere',
        badge: 'Cheesy',
      },
      {
        name: 'Seaquel',
        price: '700',
        description: 'Poisson pane, crevettes panees, surimi, sauce rouille',
        badge: 'Loaded',
      },
      {
        name: 'Bad Guy',
        price: '700',
        description: 'Boeuf, pastrami, oignons caramelises, sauce chorizo',
        badge: 'Smoky',
      },
      {
        name: 'Bad Girl',
        price: '800',
        description: 'Poulet pane & fume artisanal, fromage, oignons caramelises, sauce tomate-chorizo',
        badge: 'Best Seller',
      },
      {
        name: 'Intik',
        price: '800',
        description: 'Boeuf, filet de boeuf, mozzarella panee, sauce chimichurri',
        badge: 'Signature',
      },
    ],
  },
  {
    id: 'loaded-fries',
    title: 'Loaded Fries',
    intro: 'Des frites en mode XXL, sauces bien denses, toppings genereux et vraie sensation comfort food.',
    items: [
      {
        name: 'Brux',
        price: '650',
        description: 'Poulet pane, sauce fromagere, fromage gratine',
        badge: 'Loaded',
      },
      {
        name: 'Chunk',
        price: '650',
        description: 'Boeuf, gouda, sauce fromagere, fromage gratine',
        badge: 'Cheesy',
      },
      {
        name: 'Butter Chicken',
        price: '750',
        description: 'Poulet, sauce cremeuse au beurre & epices douces',
        badge: 'Creamy',
      },
      {
        name: 'Spice',
        price: '750',
        description: 'Poulet, sauce fromagere, fromage gratine',
        badge: 'Spicy',
      },
      {
        name: 'Rage',
        price: '750',
        description: 'Boeuf, pastrami, sauce fromagere, sauce chorizo, fromage gratine',
        badge: 'Hot',
      },
      {
        name: 'Badass',
        price: '850',
        description: 'Poulet pane & fume artisanal, sauce tomate-chorizo & fromagere, fromage gratine',
        badge: 'Best Seller',
      },
    ],
  },
  {
    id: 'pasta',
    title: 'Pasta',
    intro: 'Le move comfort d’INTIK: tagliatelle, sauce, proteins et couche gratinee.',
    items: [
      {
        name: 'Mamma Mia',
        price: '700',
        description: 'Tagliatelle, poulet a la creme, champignons, fromage gratine',
        badge: 'Comfort',
      },
      {
        name: 'Bad MF',
        price: '750',
        description: 'Tagliatelle, boeuf, pastrami, sauce chorizo, fromage gratine',
        badge: 'Bold',
      },
    ],
  },
  {
    id: 'sides-extras',
    title: 'Sides & Extras',
    intro: 'Les complements qui rendent la commande encore plus complete.',
    items: [
      {
        name: 'Crispz',
        price: '150',
        description: 'Frites + sauce',
        badge: 'Side',
      },
      {
        name: 'Fryzza',
        price: '250',
        description: 'Mozzarella panee + sauce',
        badge: 'Cheese',
      },
      {
        name: 'Crunchbox',
        price: '450',
        description: 'Box poulet pane 200g + sauce',
        badge: 'Crunch',
      },
      {
        name: 'Crispy Balls',
        price: '500',
        description: 'Poulet / boeuf / cheese selon disponibilite + sauce — x6 pcs',
        badge: 'Share',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    intro: 'Les basics qui accompagnent bien: simple, efficace et lisible.',
    items: [
      {
        name: 'Soda 24cl',
        price: '100',
        description: 'Soft drink',
        badge: 'Cold',
      },
      {
        name: 'Soda 33cl',
        price: '150',
        description: 'Soft drink',
        badge: 'Cold',
      },
    ],
  },
]

export const deliveryZones = [
  {
    zone: 'Zone Blanche',
    range: '200 - 500 DA',
    tone: 'bg-white text-intik-black border-black/10',
  },
  {
    zone: 'Zone Jaune',
    range: '400 - 750 DA',
    tone: 'bg-[#FFE66A] text-intik-black border-[#FFE66A]',
  },
  {
    zone: 'Zone Orange',
    range: '600 - 900 DA',
    tone: 'bg-intik-orange text-intik-black border-intik-orange',
  },
  {
    zone: 'Zone Noire',
    range: '800 - 1000 DA',
    tone: 'bg-intik-black text-white border-white/10',
  },
]

export const deliveryAreas = [
  { area: 'Alger Centre', fee: '200 DA - 300 DA' },
  { area: 'El Biar', fee: '400 DA - 500 DA' },
  { area: 'Belcourt', fee: '400 DA - 500 DA' },
  { area: 'Ruisseau', fee: '500 DA' },
  { area: 'Bab El Oued', fee: '400 DA - 600 DA' },
  { area: 'Kouba', fee: '400 DA - 600 DA' },
  { area: 'Dely Ibrahim', fee: '500 DA - 700 DA' },
  { area: 'Birkhadem', fee: '500 DA - 700 DA' },
  { area: 'Ben Aknoun', fee: '500 DA - 700 DA' },
  { area: 'Hussein Dey', fee: '500 DA - 700 DA' },
  { area: 'Bouzareah', fee: '550 DA - 750 DA' },
  { area: 'Bab Ezzouar', fee: '600 DA - 800 DA' },
  { area: 'Fort de l’Eau', fee: '600 DA - 800 DA' },
  { area: 'Dar El Beida', fee: '600 DA - 800 DA' },
  { area: 'Ouled Fayet', fee: '700 DA - 900 DA' },
  { area: 'Cheraga', fee: '700 DA - 900 DA' },
  { area: 'Baba Hassen', fee: '750 DA - 900 DA' },
  { area: 'Ain Benian', fee: '800 DA - 1000 DA' },
]
