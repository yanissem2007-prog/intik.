import logo from '../assets/logo/intik-logo.jpg'
import burgerClassic from '../assets/images/intik 1.jfif'
import burgerCrispy from '../assets/images/intik 2.jfif'
import burgerCheesy from '../assets/images/intik 3.jfif'
import burgerLoaded from '../assets/images/intik 4.jfif'
import burgerStack from '../assets/images/intik 5.jfif'
import videoOne from '../assets/videos/StorySaver.net-intikburgers-Video-1773027916981.mp4'
import videoTwo from '../assets/videos/StorySaver.net-intikburgers-Video-1773027920338.mp4'
import videoThree from '../assets/videos/StorySaver.net-intikburgers-Video-1773027922692.mp4'
import videoFour from '../assets/videos/StorySaver.net-intikburgers-Video-1773027924936.mp4'
import videoFive from '../assets/videos/StorySaver.net-intikburgers-Video-1773027927710.mp4'
import videoSix from '../assets/videos/StorySaver.net-intikburgers-Video-1773027929520.mp4'
import videoSeven from '../assets/videos/StorySaver.net-intikburgers-Video-1773027931382.mp4'
import videoEight from '../assets/videos/StorySaver.net-intikburgers-Video-1773027945720.mp4'

const heroImageWeb =
  'https://food.yassir.io/prod/public/images/restaurant-plates/80254db6-d63f-44fc-8aab-f0bc9f16bb96.jpg'

export const siteMeta = {
  name: 'INTIK',
  logo,
  slogan: 'Hungry? We Got You.',
  subline: 'Burgers that hit different.',
  tagline: 'Ton spot burger a Alger.',
  phoneDisplay: '0793331700',
  phoneHref: 'tel:0793331700',
  address: '103 Rue Michelet, Alger centre',
  email: 'contact@intik.dz',
  mapsUrl: 'https://maps.app.goo.gl/YD8BLmcqDtMbuCa99?g_st=ipc',
  socialBlurb: 'Show the drop. Tag the brand. We send the love back.',
  copyright: '(c) 2026 INTIK. Tous droits reserves.',
}

export const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos Menus', to: '/nos-menus' },
  { label: 'A propos', to: '/a-propos' },
  { label: "Besoin d'aide", to: '/besoin-aide' },
  { label: 'Contact', to: '/contact' },
]

export const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/intikburgers',
    external: true,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@intikburgers',
    external: true,
  },
]

export const heroData = {
  video: videoEight,
  image: heroImageWeb,
  title: 'Burgers that hit different.',
  kicker: 'Late-night comfort with a sharper point of view.',
  description:
    'INTIK mixes street culture, premium food styling, and serious appetite appeal to create a burger address that feels as considered as the product itself.',
  highlights: [
    'Delivery / Takeaway / Dine-in',
    'Late-night food',
    '103 Rue Michelet, Alger centre',
    '0793331700',
  ],
  badges: ['Premium street-food', 'Alger centre', 'Open late'],
  imageSource: 'https://delivery.yassir.com/fr/restaurant/alger-centre/69202fdc8c4edb2c05fb6659/Intik-Burger',
}

export const aboutPreview = {
  image: burgerClassic,
  title: "Une burger house moderne, visuelle et assumee au coeur d'Alger.",
  description:
    "INTIK n'est pas juste un fast-food. C'est une marque avec du rythme, de la presence, et une vraie envie de rendre chaque commande plus memorable.",
  points: [
    'Recettes genereuses, textures franches et sauces qui signent la difference.',
    'Un spot jeune et rapide pour manger sur place, emporter ou commander.',
    'Une image pensee pour les reels, les stories et les grosses faims.',
  ],
}

export const bestSellers = [
  {
    name: 'Intik',
    price: '800 DA',
    badge: 'Signature',
    image: burgerClassic,
    description: 'Double impact boeuf, filet de boeuf, mozzarella panee et chimichurri maison.',
  },
  {
    name: 'Bad Girl',
    price: '800 DA',
    badge: 'Best Seller',
    image: burgerCrispy,
    description: 'Poulet pane et fume artisanal, oignons caramelises et sauce tomate-chorizo.',
  },
  {
    name: 'Cheesy AF',
    price: '700 DA',
    badge: 'Cheesy',
    image: burgerCheesy,
    description: 'La version ultra fondante avec mozzarella panee et sauce fromagere.',
  },
  {
    name: 'Badass',
    price: '850 DA',
    badge: 'Loaded',
    image: burgerLoaded,
    description: 'Loaded fries iconiques avec poulet pane et fume artisanal et double sauce.',
  },
  {
    name: 'Rage',
    price: '750 DA',
    badge: 'Spicy',
    image: burgerStack,
    description: 'Boeuf, pastrami, sauce fromage et chorizo pour les vraies grosses faims.',
  },
  {
    name: 'Mamma Mia',
    price: '700 DA',
    badge: 'Comfort',
    image: burgerCheesy,
    description: 'Tagliatelle cremeuse, poulet, champignons et couche gratinee bien doree.',
  },
]

export const experienceHighlights = [
  {
    icon: 'Bike',
    title: 'Delivery',
    description: 'Des commandes qui sortent vite, voyagent bien et arrivent encore chargees.',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Dine-in',
    description: 'Un spot moderne a Alger pour manger chill, seul, en crew ou en famille.',
  },
  {
    icon: 'PackageCheck',
    title: 'Takeaway',
    description: 'Commande, recupere, repars. Le retrait est pense pour rester simple et rapide.',
  },
  {
    icon: 'Zap',
    title: 'Fast service',
    description: "Une execution nette, sans casser la qualite ni l'effet waouh du produit.",
  },
  {
    icon: 'MoonStar',
    title: 'Late-night food',
    description: 'Quand la faim tape tard, INTIK reste dans la conversation.',
  },
  {
    icon: 'MapPinned',
    title: 'Spot Alger centre',
    description: '103 Rue Michelet, une adresse facile a retenir et facile a partager.',
  },
]

export const galleryItems = [
  {
    eyebrow: 'Texture shot',
    title: 'Crispy. Cheesy. Loaded.',
    description:
      "Des buns brillants, des sauces qui coulent juste ce qu'il faut, et cette finition premium qui raconte deja le produit.",
    image: burgerClassic,
  },
  {
    eyebrow: 'Signature mood',
    title: 'Le genre de burger que tu filmes avant la premiere bite.',
    description:
      "INTIK travaille autant l'impact visuel que la gourmandise. Ici, chaque plan food raconte quelque chose.",
    image: burgerCrispy,
  },
  {
    eyebrow: 'Street appetite',
    title: 'Un branding urbain, pas un fast-food generique.',
    description:
      "Le contraste noir, blanc et orange donne a INTIK une image qui s'assume pleinement.",
    image: burgerCheesy,
  },
  {
    eyebrow: 'Loaded energy',
    title: 'Fast food, mais avec une vraie presence de marque.',
    description:
      'Des produits genereux, une DA forte et des contenus penses pour rester credibles sur mobile comme en grand ecran.',
    image: burgerLoaded,
  },
  {
    eyebrow: 'Food identity',
    title: 'Ton spot burger a Alger.',
    description:
      'Sur place, a emporter ou en livraison, la meme vibe INTIK et la meme faim satisfaite.',
    image: burgerStack,
  },
]

export const brandVideos = [
  {
    src: videoOne,
    title: 'Street motion',
    description: "Des micro-moments food qui respirent l'energie et le mouvement.",
  },
  {
    src: videoTwo,
    title: 'Cheese pull',
    description: 'Le genre de detail qui fait lever les yeux et relancer une commande.',
  },
  {
    src: videoThree,
    title: 'Late-night craving',
    description: 'Des reels courts, nets, appetissants et clairement brandes.',
  },
  {
    src: videoFour,
    title: 'Food close-up',
    description: 'Textures, sauces, croustillant. Tout est la pour faire monter la faim.',
  },
  {
    src: videoFive,
    title: 'Brand rhythm',
    description: 'Une section video pensee comme une presence de marque, pas un simple slider.',
  },
  {
    src: videoSix,
    title: 'Premium casual',
    description: "L'univers INTIK reste jeune, propre et net sans jamais tomber dans le cheap.",
  },
  {
    src: videoSeven,
    title: 'Burger culture',
    description: 'Un format social-first qui garde de la tenue en web premium.',
  },
  {
    src: videoEight,
    title: 'Hero impact',
    description: 'Le mood de la home se pose des le premier scroll.',
  },
]

export const practicalInfo = [
  {
    icon: 'Bike',
    title: 'Delivery',
    description: 'Zones de livraison variables selon le secteur.',
  },
  {
    icon: 'Store',
    title: 'On-site services',
    description: 'Commande comptoir, service sur place et retrait rapide.',
  },
  {
    icon: 'Package',
    title: 'Takeaway',
    description: 'Le pick-up est simple, rapide et pense pour le rythme urbain.',
  },
  {
    icon: 'Armchair',
    title: 'Dine-in',
    description: 'Un cadre convivial pour manger sur place sans prise de tete.',
  },
  {
    icon: 'Sandwich',
    title: 'Quick bite',
    description: 'Parfait pour la pause qui doit aller vite sans etre fade.',
  },
  {
    icon: 'MoonStar',
    title: 'Late-night food',
    description: 'Le spot qui repond quand la faim arrive tard.',
  },
  {
    icon: 'Users',
    title: 'Family friendly',
    description: 'Un lieu accessible pour venir solo, entre potes ou en famille.',
  },
  {
    icon: 'Banknote',
    title: 'Cash only',
    description: 'Paiement en especes uniquement pour le moment.',
  },
  {
    icon: 'ParkingCircle',
    title: 'Street parking',
    description: 'Parking gratuit dans la rue, mais les places partent vite.',
  },
  {
    icon: 'Dog',
    title: 'Dogs allowed outside',
    description: "Les chiens sont les bienvenus a l'exterieur.",
  },
]

export const aboutStorySections = [
  {
    eyebrow: 'Notre vibe',
    title: 'Une identite street, nette et premium.',
    description:
      "INTIK assume une image forte: contraste eleve, branding orange-noir-blanc, produits ultra visuels et tonalite jeune qui parle directement a la ville.",
    points: [
      'Un langage visuel moderne, inspire de la culture food et du social content.',
      'Une marque qui peut vivre aussi bien sur une facade que dans une story Instagram.',
      'Une direction artistique qui rend le fast-food plus desire, plus propre et plus memorisable.',
    ],
    mediaType: 'image',
    media: burgerClassic,
  },
  {
    eyebrow: 'Notre food',
    title: 'Des recettes genereuses, faites pour marquer.',
    description:
      'Chez INTIK, le produit doit frapper fort des le premier regard: croustillant, fromage, sauces, viande, volume et gourmandise assumee.',
    points: [
      'Burgers signatures avec personnalite claire.',
      'Loaded fries qui portent vraiment leur nom.',
      'Une carte courte, lisible et orientee sur les vraies envies du moment.',
    ],
    mediaType: 'video',
    media: videoSix,
  },
  {
    eyebrow: 'Notre univers',
    title: 'Une experience pensee pour les jeunes appetits et les bons reflexes.',
    description:
      'Tu peux venir sur place, emporter, commander tard, partager le spot et le faire vivre socialement. INTIK est concu comme une adresse vivante.',
    points: [
      'Un spot facile a recommander.',
      'Une offre qui marche pour le dine-in comme pour la livraison.',
      'Une marque qui reste cool, energique et ultra lisible.',
    ],
    mediaType: 'image',
    media: burgerStack,
  },
]

export const brandPromises = [
  {
    title: 'Pourquoi INTIK',
    description: "Parce qu'on ne voulait pas un fast-food sans visage. On voulait une vraie signature.",
  },
  {
    title: "Ce qu'on sert",
    description: 'Des burgers, loaded fries et pasta qui vont direct au but: gourmandise et attitude.',
  },
  {
    title: 'Pour qui',
    description: 'Pour celles et ceux qui aiment les spots qui ont du style autant que du gout.',
  },
]

export const audienceProfiles = [
  'Les crews qui veulent un spot cool pour manger et poster.',
  'Les grosses faims de fin de soiree.',
  'Les gens du quartier qui veulent une bonne adresse fiable.',
  'Les clients qui cherchent du fast-food, mais avec une vraie image.',
]
