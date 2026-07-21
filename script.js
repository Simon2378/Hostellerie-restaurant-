// Panier de commande de l'utilisateur.
let cart = [];
// Langue actuelle de l'interface.
let currentLanguage = 'fr';

// Textes de remplacement pour l'en-tête hero si aucune traduction n'est disponible.
const heroHeaderTexts = [
  'Bienvenue à l’Hostellerie de la Sanaga',
  'Un lieu où élégance, saveurs et hospitalité se rencontrent',
  'Découvrez une expérience culinaire unique',
  'Votre satisfaction est notre priorité'
];
let heroHeaderIndex = 0;

// Fait défiler les textes de l'en-tête principal.
function rotateHeroHeader() {
  const header = document.getElementById('hero-header');
  if (!header) return;
  const texts = getHeroTexts();
  if (!texts || texts.length === 0) return;
  header.textContent = texts[heroHeaderIndex % texts.length];
  heroHeaderIndex = (heroHeaderIndex + 1) % texts.length;
}

// Récupère les textes du hero selon la langue active.
function getHeroTexts() {
  // Prefer translation keys hero.text1..hero.text4 when available
  const keys = ['hero.text1', 'hero.text2', 'hero.text3', 'hero.text4'];
  const texts = [];
  if (translations && translations[currentLanguage]) {
    keys.forEach(k => {
      if (translations[currentLanguage][k]) texts.push(translations[currentLanguage][k]);
    });
  }
  // Fallback to the original heroHeaderTexts if translations missing
  return texts.length ? texts : heroHeaderTexts;
}

// Ouvre la commande WhatsApp.
function orderNow() {
  window.location.href = 'https://wa.me/237692266713';
}

// Ouvre WhatsApp avec un message prérempli pour un produit.
function openWhatsApp(product) {
  const message = encodeURIComponent(`Je souhaite commander: ${product}`);
  const phoneNumber = '237699801830';
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Dictionnaire des traductions pour la langue française et anglaise.
const translations = {
  fr: {
    'menu.title': 'Hostellerie de la sanaga',
    'menu.tagline': 'Élégant & Raffiné',
    'menu.location': '📍 Edea Cameroun, île ALUCAM Entre les deux ponts de la Sanaga',
    'menu.phone': '📞 +237692266713',
    'menu.welcome': 'Bienvenue à Hostellerie',
    'menu.scanQr': 'Scannez ce code QR pour ouvrir le menu de ce site Web.',
    'menu.backToMenu': '← Retour au menu',
    'menu.searchPlaceholder': 'Rechercher un élément de menu...',
    'hero.title': 'Bienvenue à l’Hostellerie de la Sanaga',
    'hero.intro': 'Bienvenue à l’Hostellerie de la Sanaga — un lieu où élégance, saveurs et hospitalité se rencontrent pour vous offrir une expérience culinaire unique.',
    'hero.text1': 'Découvrez une cuisine raffinée inspirée des richesses locales et internationales, préparée avec passion par nos chefs afin de satisfaire toutes vos envies.',
    'hero.text2': 'Des grillades savoureuses aux spécialités maison, en passant par nos salades fraîches et desserts gourmands, chaque plat est conçu pour éveiller vos sens et créer des moments inoubliables.',
    'hero.text3': 'Dans un cadre chaleureux et convivial, notre restaurant vous accueille pour vos repas en famille, entre amis ou pour vos rencontres professionnelles.',
    'hero.text4': 'Prenez place, explorez notre menu et laissez-vous emporter par l’authenticité et le goût exceptionnel de l’Hostellerie de la Sanaga.',
    'hero.cta': 'Votre satisfaction est notre priorité, votre plaisir notre passion.',
    'hero.buttonMenu': 'Menu',
    'hero.orderNow': 'Commander maintenant',
    'hero.seeMenu': 'Voir le menu',
    'hero.seeHotel': 'Voir les Chambres',
    'hero.seeWeddings': 'Voir les offres',
    'hero.seeCakes': 'Voir les gâteaux',
    'hero.side1': 'Des saveurs authentiques livrées directement chez vous',
    'hero.side2': 'Explorez nos pensées pour satisfaire toutes vos envies',
    'hero.side3': 'Célébrez le plus beau jour de votre vie avec élégance et raffinement',
    'hero.side4': 'Des saveurs authentiques livrées directement chez vous',
    'hero.phot o1': 'Espace photo 1',
    'hero.photo2': 'Espace photo 2',
    'hero.photo3': 'Espace photo 3',
    'hero.sideHeading1': 'Découvrez nos différents menus et profitez d\'un excellent rapport qualité-prix.',
    'hero.sideHeading2': 'Découvrez nos chambres, suites et espaces de réception à des prix attractifs.',
    'hero.sideHeading3': 'Découvrez nos espaces de réception élégants et nos formules adaptées pour célébrer votre mariage dans un cadre exceptionnel.',
    'div.h3-1': 'Découvrez nos différents menus et profitez d\'un excellent rapport qualité-prix.',
    'div.h3-2': 'Découvrez nos chambres, suites et espaces de réception à des prix attractifs.',
    'div.h3-3': 'Découvrez nos espaces de réception élégants et nos formules adaptées pour célébrer votre mariage dans un cadre exceptionnel.',
    'div.h3-4': 'Découvrez nos délicieux gâteaux, parfaits pour toutes les occasions, avec des saveurs authentiques et une présentation élégante.',
    'nav.salades': 'Salades',
    'nav.snacking': 'Snacking',
    'nav.fineBouche': 'Fine bouche',
    'nav.poeles': 'Poêles',
    'nav.grillades': 'Au choix Plancha/Grillades',
    'nav.specialites': 'Spécialités Maison',
    'nav.desserts': 'Desserts',
    'nav.pizzas': 'Pizzas',
    'nav.boissonsChaudes': 'Boissons Chaudes',
    'nav.eauxMinerales': 'Eaux Minérales',
    'nav.jusDeFruits': 'Jus de fruits',
    'nav.softsBieres': 'Soft Drink et Bières',
    'nav.suiteAppero': 'Apéro',
    'nav.whiskies': 'Whiskies et Liqueurs',
    'nav.digestifs': 'Digestifs',
    'nav.eauxDeVie': 'Eaux de Vie',
    'section.saladesFraicheurs': 'Salades Fraicheurs',
    'section.saladesComposees': 'SALADES COMPOSEE',
    'section.snacking': 'Snacking',
    'section.fineBouche': 'FINE BOUCHE',
    'section.poeles': 'POÊLES',
    'section.grillades': 'AU CHOIX PLANCHA/GRILLADE',
    'section.accompagnements': 'ACCOMPAGNEMENTS',
    'section.accompagnementsNote': 'En option, au choix avec votre grillade',
    'section.specialites': 'Spécialités Maison',
    'section.desserts': 'Desserts',
    'section.pizzas': 'Pizzas',
    'section.boissonsChaudes': 'Boissons Chaudes',
    'section.eauxMinerales': 'EAUX MINERALES',
    'section.eauxGazeuses': 'EAUX GAZEUSES',
    'section.jusDeFruits': 'JUS DE FRUITS',
    'section.softsBieres': 'SOFT DRINK ET BIÈRES',
    'section.suiteAppero': 'APÉRO',
    'section.whiskies': 'WHISKIES ET LIQUEURS',
    'section.digestifs': 'DIGESTIFS',
    'section.eauxDeVie': 'EAUX DE VIE',
    'section.pizzaNote': 'Nos pizzas sont également à emporter au prix majoré de 500 FCFA pour les frais d’emballage.',
    'modal.foodDescription': 'Découvrez ce délicieux plat de notre menu',
    'modal.drinkDescription': 'Dégustez cette boisson, à partir de jus de fruits jusqu’aux eaux de vie.',
    'gallery.heading': 'Découvrez l\'Hostellerie de la Sanaga',
    'gallery.intro': 'Cliquez sur une photo pour ouvrir la galerie et naviguer entre les chambres avec les boutons précédent / suivant.',
    'gallery.note': 'Parcourez les images en plein écran et revenez rapidement à la réservation.',
    'gallery.roomDetails': 'Détails de la chambre',
    'button.addToCart': 'Ajouter au panier',
    'button.view': 'Voir',
    'mariage.subtitle': 'à EDEA - OFFRES EXCEPTIONNELLES',
    'mariage.perPerson': 'Par personne',
    'mariage.menuBuffet': 'Menu Buffet Sono',
    'mariage.decoration': 'Décoration complète mise en place',
    'mariage.standardRoom': 'Chambre Standard',
    'mariage.allInclusive': '(Tout couvert inclus)',
    'mariage.roomDecor': '(Chambre décorée + deux petits déjeuners)',
    'mariage.cakeServings': '(Nombre de personnes prévu)',
    'mariage.discount10': '10% de réduction sur les autres chambres',
    'mariage.discount15': '15% de réduction sur les autres chambres',
    'mariage.discount20': '20% de réduction sur les autres chambres',
    'mariage.luxeRoom': 'Chambre Luxe',
    'mariage.vipRoom': 'Chambre VIP',
    'mariage.champagne': 'Bouteille de Champagne',
    'mariage.bouquet': 'Bouquet de Fleur',
    'mariage.cake': 'Gâteau de Mariage',
    'mariage.reserve': 'Réserver',
    'mariage.whyChoose': 'Pourquoi choisir l\'Hostellerie de la Sanaga ?',
    'mariage.location': '📍 Localisation Privilégiée',
    'mariage.locationDesc': 'Sur l\'île ALUCAM à Edea, un cadre idyllique face à la Sanaga pour des photos inoubliables.',
    'mariage.service': '🎩 Service Professionnel',
    'mariage.serviceDesc': 'Notre équipe expérimentée s\'occupe de tous les détails pour votre jour spécial.',
    'mariage.accommodation': '🏨 Hébergement Confortable',
    'mariage.accommodationDesc': 'Vos invités profitent de réductions sur nos chambres spacieuses et bien équipées.',
    'mariage.cuisine': '🍽️ Cuisine Raffinée',
    'mariage.cuisineDesc': 'Des menus variés préparés avec soin pour satisfaire tous vos convives.',
    'mariage.contact': '📞 Réservation & Informations',
    'mariage.edea': 'Edea, île ALUCAM',
    'mariage.between': 'Entre les deux ponts de la Sanaga',
    'mariage.whatsapp': '📱 WhatsApp',
    'mariage.availability': 'Nous sommes disponibles 24h/24 pour répondre à vos questions !',
    'cake.eyebrow': 'Gâteaux d\'anniversaire & de mariage',
    'cake.title': 'Gâteaux sur commande',
    'cake.intro': 'Choisissez un gâteau livré avec une finition professionnelle, une décoration personnalisée et des saveurs variées. Nos formules sont conçues pour célébrer vos moments les plus précieux.',
    'cake.cake10': 'Gâteau 10 parts',
    'cake.cake15': 'Gâteau 15 parts',
    'cake.item1': 'Commande 24h à l\'avance',
    'cake.item2': 'Décoration sur mesure',
    'cake.item3': 'Saveurs au choix',
    'cake.item4': 'Finition professionnelle',
    'cake.item5': 'Personnalisation de thème',
    'cake.item6': 'Disponible sur commande',
    'cake.item7': 'Gâteaux d\'anniversaire personnalisés',
    'cake.item8': 'Gâteaux de mariage',
    'cake.item9': 'Finition professionnelle',
    'cake.item10': 'Décoration selon thème',
    'cake.item11': 'Saveurs variées',
    'cake.item12': 'Commande 24h à l\'avance',
    'cake.orderBtn': 'Commander maintenant',
    'cake.note': 'Sur demande : gâteaux d\'anniversaire personnalisés, gâteaux de mariage et décorations selon votre thème.',
    'room.suite': 'Suite Junior',
    'room.suitebadge': 'SUITE JUNIOR',
    'room.suite-title': 'Suite Junior',
    'room.suite-desc': 'Avec un petit déjeuner buffet.',
    'room.suitePrice': '67 000 FCFA TTC / nuitée + un petit déjeuner',
    'room.reserve': 'Réserver',
    'room.luxe-2': 'CHAMBRE LUXE',
    'room.luxe-1': 'Luxe',
    'room.luxe-special': 'LUXE SPÉCIALE',
    'room.luxe-special-title': 'Luxe Spéciale',
    'room.luxe-special-desc': 'Avec un petit déjeuner buffet.',
    'room.luxe-special-price': '57 000 FCFA TTC / nuitée + un petit déjeuner',
    'room.luxe': 'CHAMBRE LUXE',
    'room.luxe-title': 'Chambre Luxe',
    'room.luxe-desc': 'Avec un petit déjeuner buffet.',
    'room.luxePrice': '42 000 FCFA TTC / nuitée + un petit déjeuner',
    'room.standard-1': 'CHAMBRE STANDARD',
    'room.standard-title': 'Chambre Standard',
    'room.standard-desc': 'Sans petit déjeuner.',
    'room.standardPrice': '29 000 FCFA TTC / nuitée'
  },
  en: {
    'menu.title': 'Hostellerie de la sanaga',
    'menu.tagline': 'Elegant & Classy',
    'menu.location': '📍 Edea Cameroon, ALUCAM Island Between the two bridges of the Sanaga River',
    'menu.phone': '📞 +237692266713',
    'menu.welcome': 'Welcome to Hostellerie',
    'menu.scanQr': 'Scan this QR code to open this website menu.',
    'menu.backToMenu': '← Back to menu',
    'menu.searchPlaceholder': 'Search any menu item...',
    'hero.title': 'Welcome to Hostellerie de la Sanaga',
    'hero.intro': 'Welcome to Hostellerie de la Sanaga — a place where elegance, flavors and hospitality come together to offer you a unique culinary experience.',
    'hero.text1': 'Discover refined cuisine inspired by local and international delights, prepared with passion by our chefs to satisfy every craving.',
    'hero.text2': 'From savory grills to house specialties, fresh salads and indulgent desserts, every dish is designed to awaken your senses and create unforgettable moments.',
    'hero.text3': 'In a warm and friendly atmosphere, our restaurant welcomes you for family meals, time with friends or business gatherings.',
    'hero.text4': 'Take a seat, explore our menu, and let yourself be carried away by the authenticity and exceptional taste of Hostellerie de la Sanaga.',
    'hero.cta': 'Your satisfaction is our priority, your pleasure is our passion.',
    'hero.buttonMenu': 'Menu',
    'hero.orderNow': 'Order now',
    'hero.seeMenu': 'See menu',
    'hero.seeHotel': 'See rooms',
    'hero.seeWeddings': 'See offers',
    'hero.seeCakes': 'See cakes',
    'hero.side1': 'Authentic flavors delivered directly to you',
    'hero.side2': 'Explore our thoughts to satisfy all your cravings',
    'hero.side3': 'Celebrate the most beautiful day of your life with elegance and refinement',
    'hero.side4': 'Authentic flavors delivered directly to you',
    'hero.sideHeading1': 'Discover our different menus and enjoy excellent value for money.',
    'hero.sideHeading2': 'Explore our rooms, suites and event spaces at attractive prices.',
    'hero.sideHeading3': 'Discover our elegant reception spaces and tailored wedding packages for an exceptional celebration.',
    'div.h3-1': 'Discover our different menus and enjoy excellent value for money.',
    'div.h3-2': 'Discover our rooms, suites and event spaces at attractive prices.',
    'div.h3-3': 'Discover our elegant reception spaces and tailored wedding packages for an exceptional celebration.',
    'div.h3-4': 'Discover our delicious cakes, perfect for all occasions, with authentic flavors and elegant presentation.',
    'nav.salades': 'Salads',
    'nav.snacking': 'Snacks',
    'nav.fineBouche': 'Fine Taste',
    'nav.poeles': 'Skillets',
    'nav.grillades': 'Grill & Plancha',
    'nav.specialites': 'House Specialties',
    'nav.desserts': 'Desserts',
    'nav.pizzas': 'Pizzas',
    'nav.boissonsChaudes': 'Hot Drinks',
    'nav.eauxMinerales': 'Mineral Waters',
    'nav.jusDeFruits': 'Fruit Juices',
    'nav.softsBieres': 'Soft Drinks & Beers',
    'nav.suiteAppero': 'Aperitif Selection',
    'nav.whiskies': 'Whiskies & Liqueurs',
    'nav.digestifs': 'Digestifs',
    'nav.eauxDeVie': 'Eaux-de-vie',
    'section.saladesFraicheurs': 'Fresh Salads',
    'section.saladesComposees': 'COMPOSED SALADS',
    'section.snacking': 'Snacking',
    'section.fineBouche': 'FINE TASTE',
    'section.poeles': 'Skillets',
    'section.grillades': 'Grill & Plancha',
    'section.accompagnements': 'SIDE DISHES',
    'section.accompagnementsNote': 'Optional, choose one to go with your grill dish',
    'section.specialites': 'House Specialties',
    'section.desserts': 'Desserts',
    'section.pizzas': 'Pizzas',
    'section.boissonsChaudes': 'Hot Drinks',
    'section.eauxMinerales': 'Mineral Waters',
    'section.eauxGazeuses': 'Sparkling Waters',
    'section.jusDeFruits': 'Fruit Juices',
    'section.softsBieres': 'Soft Drinks & Beers',
    'section.suiteAppero': 'Aperitif Selection',
    'section.whiskies': 'Whiskies & Liqueurs',
    'section.digestifs': 'Digestifs',
    'section.eauxDeVie': 'Eaux-de-vie',
    'section.pizzaNote': 'Our pizzas are also available for takeaway with a 500 FCFA packaging fee.',
    'modal.foodDescription': 'Enjoy this delicious dish from our menu',
    'modal.drinkDescription': 'Enjoy this drink, from fruit juices to eaux-de-vie.',
    'gallery.heading': 'Discover Hostellerie de la Sanaga',
    'gallery.intro': 'Click any photo to open the gallery and browse rooms with previous / next buttons.',
    'gallery.note': 'Explore the room images full screen and return quickly to booking.',
    'gallery.roomDetails': 'Room details',
    'button.addToCart': 'Add to Cart',
    'button.view': 'View',
    'mariage.subtitle': 'in EDEA - EXCEPTIONAL OFFERS',
    'mariage.perPerson': 'Per person',
    'mariage.menuBuffet': 'Menu Buffet Sono',
    'mariage.decoration': 'Complete decoration setup',
    'mariage.standardRoom': 'Standard Room',
    'mariage.allInclusive': '(All inclusive)',
    'mariage.roomDecor': '(Decorated room + two breakfasts)',
    'mariage.cakeServings': '(Number of guests planned)',
    'mariage.discount10': '10% discount on other rooms',
    'mariage.discount15': '15% discount on other rooms',
    'mariage.discount20': '20% discount on other rooms',
    'mariage.luxeRoom': 'Luxury Room',
    'mariage.vipRoom': 'VIP Room',
    'mariage.champagne': 'Bottle of Champagne',
    'mariage.bouquet': 'Flower Bouquet',
    'mariage.cake': 'Wedding Cake',
    'mariage.reserve': 'Reserve',
    'mariage.whyChoose': 'Why choose Hostellerie de la Sanaga ?',
    'mariage.location': '📍 Privileged Location',
    'mariage.locationDesc': 'On ALUCAM Island in Edea, an idyllic setting overlooking the Sanaga for unforgettable photos.',
    'mariage.service': '🎩 Professional Service',
    'mariage.serviceDesc': 'Our experienced team takes care of every detail for your special day.',
    'mariage.accommodation': '🏨 Comfortable Accommodation',
    'mariage.accommodationDesc': 'Your guests enjoy discounts on our spacious and well-equipped rooms.',
    'mariage.cuisine': '🍽️ Refined Cuisine',
    'mariage.cuisineDesc': 'Varied menus prepared with care to satisfy all your guests.',
    'mariage.contact': '📞 Reservation & Information',
    'mariage.edea': 'Edea, ALUCAM Island',
    'mariage.between': 'Between the two bridges of the Sanaga',
    'mariage.whatsapp': '📱 WhatsApp',
    'mariage.availability': 'We are available 24/7 to answer your questions!',
    'cake.eyebrow': 'Birthday & Wedding Cakes',
    'cake.title': 'Custom Cakes on Order',
    'cake.intro': 'Choose a cake delivered with professional finish, custom decoration, and varied flavors. Our packages are designed to celebrate your most precious moments.',
    'cake.cake10': 'Cake 10 servings',
    'cake.cake15': 'Cake 15 servings',
    'cake.item1': '24-hour advance order',
    'cake.item2': 'Custom decoration',
    'cake.item3': 'Flavors to choose from',
    'cake.item4': 'Professional finish',
    'cake.item5': 'Theme personalization',
    'cake.item6': 'Available on order',
    'cake.item7': 'Custom birthday cakes',
    'cake.item8': 'Wedding cakes',
    'cake.item9': 'Professional finish',
    'cake.item10': 'Theme-based decoration',
    'cake.item11': 'Varied flavors',
    'cake.item12': '24-hour advance order',
    'cake.orderBtn': 'Order Now',
    'cake.note': 'On request: custom birthday cakes, wedding cakes and decorations according to your theme.',
    'room.suite': 'Suite Junior',
    'room.suitebadge': 'SUITE JUNIOR',
    'room.suite-title': 'Suite Junior',
    'room.suite-desc': 'Includes breakfast buffet.',
    'room.suitePrice': '67,000 FCFA incl. tax / night + breakfast',
    'room.reserve': 'Reserve',
    'room.luxe-special': 'LUXE SPÉCIALE',
    'room.luxe-special-title': 'Luxe Spéciale',
    'room.luxe-special-desc': 'Includes breakfast buffet.',
    'room.luxe-special-price': '57,000 FCFA incl. tax / night + breakfast',
    'room.luxe': 'CHAMBRE LUXE',
    'room.luxe-2': 'CHAMBRE LUXE',
    'room.luxe-1': 'Luxury',
    'room.luxe-title': 'Chambre Luxe',
    'room.luxe-desc': 'Includes breakfast buffet.',
    'room.luxePrice': '42,000 FCFA incl. tax / night + breakfast',
    'room.standard': 'CHAMBRE STANDARD',
    'room.standard-1': 'CHAMBRE STANDARD',
    'room.standard-title': 'Chambre Standard',
    'room.standard-desc': 'Breakfast not included.',
    'room.standardPrice': '29,000 FCFA incl. tax / night'
  }
};

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  const storedLang = localStorage.getItem('siteLanguage') || 'fr';
  setLanguage(storedLang);
  generateQRCode();

  const qrSection = document.getElementById('qr-section');
  const isAdmin = window.location.href.includes('admin');
  if (qrSection) {
    qrSection.style.display = isAdmin ? 'block' : 'none';
  }

  setupLanguageToggle();
  setupItemCardClickHandlers();
  setupModalCloseHandlers();
  initLoadingScreen();
  
  // Rotate the hero header text every 3 seconds
  rotateHeroHeader();
  setInterval(rotateHeroHeader, 3000);
  
  // Clear search input and ensure all items are visible
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.value = '';
  }
  
  // Ensure all menu items are visible by default
  showAllItems();
    setupViewButtons();
});

// Function to show all menu items
function showAllItems() {
  const cards = document.querySelectorAll('.item-card');
  cards.forEach(card => {
    card.style.display = 'flex';
  });
  const messageBox = document.getElementById('search-message');
  if (messageBox) {
    messageBox.textContent = '';
  }
}

function setupViewButtons() {
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.type = 'button';
    const viewText = translations[currentLanguage]?.['button.view'];
    if (viewText) {
      button.textContent = viewText;
    }
    button.onclick = function(e) {
      e.stopPropagation();
      const card = this.closest('.item-card');
      if (card) {
        showItemModal(card);
      }
    };
  });
}

function normalizeText(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function searchMenu() {
  const searchInput = document.getElementById('search');
  const messageBox = document.getElementById('search-message');
  if (!searchInput) return;
  
  const query = normalizeText(searchInput.value);
  const cards = document.querySelectorAll('.item-card');
  let visibleCount = 0;
  
  cards.forEach(card => {
    const itemName = card.querySelector('h3');
    if (!itemName) return;
    
    const itemText = normalizeText(itemName.textContent);
    const isMatch = query === '' || itemText.includes(query);
    
    card.style.display = isMatch ? 'flex' : 'none';
    if (isMatch) visibleCount++;
  });
  
  if (messageBox) {
    if (query === '') {
      messageBox.textContent = '';
    } else if (visibleCount === 0) {
      messageBox.textContent = currentLanguage === 'fr'
        ? 'Aucun article trouvé.'
        : 'Item not found.';
    } else {
      messageBox.textContent = currentLanguage === 'fr'
        ? `${visibleCount} article${visibleCount > 1 ? 's' : ''} trouvé${visibleCount > 1 ? 's' : ''}.`
        : `${visibleCount} item${visibleCount > 1 ? 's' : ''} found.`;
    }
  }
}
//Make the  Qr code to be hidden and let it open to vercel.app when am scanning


// Setup item card click handlers for modal
function setupLanguageToggle() {
  const languageTrigger = document.getElementById('language-trigger');
  const languageMenu = document.getElementById('language-menu');
  const langOptions = document.querySelectorAll('.lang-option');

  if (!languageTrigger || !languageMenu) return;

  languageTrigger.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const isHidden = languageMenu.hasAttribute('hidden');
    if (isHidden) {
      languageMenu.removeAttribute('hidden');
      languageTrigger.setAttribute('aria-expanded', 'true');
    } else {
      languageMenu.setAttribute('hidden', '');
      languageTrigger.setAttribute('aria-expanded', 'false');
    }
  });

  langOptions.forEach(option => {
    option.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const lang = this.getAttribute('data-lang');
      // Persist site-wide language preference so all pages load in the chosen language
      try { localStorage.setItem('siteLanguage', lang); } catch (err) {}
      setLanguage(lang);
      languageMenu.setAttribute('hidden', '');
      languageTrigger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.language-toggle')) {
      languageMenu.setAttribute('hidden', '');
      languageTrigger.setAttribute('aria-expanded', 'false');
    }
  });
}

// Set language and update all translatable elements
function setLanguage(lang) {
  currentLanguage = lang;
  const currentLang = document.documentElement.lang;
  document.documentElement.lang = lang;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update language label when available
  const langLabel = document.getElementById('language-current-label');
  if (langLabel) {
    langLabel.textContent = lang === 'fr' ? 'Français' : 'English';
  }

  // Update search placeholder
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.placeholder = translations[lang]['menu.searchPlaceholder'];
    const clearSearchBtn = document.querySelector('.clear-search-btn');
    if (clearSearchBtn && translations[lang]['menu.clearSearchTitle']) {
      clearSearchBtn.title = translations[lang]['menu.clearSearchTitle'];
    }
  }

  // Update hero image buttons (order and see menu)
  const orderButtons = document.querySelectorAll('.hero-side-button[data-action="order"]');
  const seeMenuButtons = document.querySelectorAll('.hero-side-button[data-action="see-menu"]');
  const seeHotelButtons = document.querySelectorAll('.hero-side-button[data-action="see-hotel"]');
  const seeWeddingsButtons = document.querySelectorAll('.hero-side-button[data-action="see-weddings"]');
  const seeCakesButtons = document.querySelectorAll('.hero-side-button[data-action="see-cakes"]');

  orderButtons.forEach(button => {
    if (translations[lang]['hero.orderNow']) button.textContent = translations[lang]['hero.orderNow'];
  });
  seeMenuButtons.forEach(button => {
    if (translations[lang]['hero.seeMenu']) button.textContent = translations[lang]['hero.seeMenu'];
  });
  seeHotelButtons.forEach(button => {
    if (translations[lang]['hero.seeHotel']) button.textContent = translations[lang]['hero.seeHotel'];
  });
  seeWeddingsButtons.forEach(button => {
    if (translations[lang]['hero.seeWeddings']) button.textContent = translations[lang]['hero.seeWeddings'];
  });
  seeCakesButtons.forEach(button => {
    if (translations[lang]['hero.seeCakes']) button.textContent = translations[lang]['hero.seeCakes'];
  });

  // Update cake order buttons
  const cakeOrderButtons = document.querySelectorAll('.cake-order-btn');
  cakeOrderButtons.forEach(button => {
    if (translations[lang]['cake.orderBtn']) button.textContent = translations[lang]['cake.orderBtn'];
  });

  setupViewButtons();
  renderRoomDetails();

  // Reset hero header rotation index and show immediate language-appropriate text
  heroHeaderIndex = 0;
  const header = document.getElementById('hero-header');
  if (header) {
    const texts = getHeroTexts();
    if (texts && texts.length) header.textContent = texts[0];
  }
}

// Generate QR Code
function generateQRCode() {
  const qrContainer = document.getElementById('qr-image');
  if (!qrContainer || typeof QRCode === 'undefined') {
    return;
  }

  // Clear previous QR code
  qrContainer.innerHTML = '';
  
  // Always generate a QR code for the hosted website URL
  const url = 'https://www.hostelleriesanaga.com';
  const qrTarget = document.getElementById('qr-target');
  if (qrTarget) {
    qrTarget.textContent = url;
    qrTarget.setAttribute('href', url);
  }
  
  // Generate QR code
  new QRCode(qrContainer, {
    text: url,
    width: 200,
    height: 200,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
}

// Ajoute un article au panier et affiche un message.
function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  const message = currentLanguage === 'fr' 
    ? `${itemName} ajouté au panier! Total des articles: ${cart.length}`
    : `${itemName} added to cart! Total items: ${cart.length}`;
  alert(message);
  console.log('Current cart:', cart);
}

// Ajoute au panier un article avec un accompagnement éventuellement sélectionné.
function addToCartWithOptionalAccompaniment(itemName, price, cardElement) {
  const selectedAccompaniment = cardElement?.dataset.selectedAccompaniment || '';
  const fullItemName = selectedAccompaniment
    ? `${itemName} • Accompagnement: ${selectedAccompaniment}`
    : itemName;
  addToCart(fullItemName, price);
}

// Ajoute au panier un article avec la portion sélectionnée.
function addToCartWithSelectedPortion(itemName, cardElement) {
  const selectedPortion = cardElement?.dataset.selectedPortion || 'Moyenne';
  const selectedPrice = Number(cardElement?.dataset.selectedPrice || 0);
  const fullItemName = `${itemName} (${selectedPortion})`;
  addToCart(fullItemName, selectedPrice);
}

// Met à jour la portion active et son prix sur la carte.
function selectPortion(button) {
  const card = button.closest('.item-card');
  const buttons = card?.querySelectorAll('.portion-option-btn');

  buttons?.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  const portion = button.dataset.portion || 'Moyenne';
  const price = button.dataset.price || '0';

  if (card) {
    card.dataset.selectedPortion = portion;
    card.dataset.selectedPrice = price;
  }

  const label = card?.querySelector('.selected-portion-label span');
  const priceLabel = card?.querySelector('.item-price');

  if (label) {
    label.textContent = portion;
  }

  if (priceLabel) {
    priceLabel.textContent = `${price} FCFA`;
  }
}

// Ouvre/ferme la liste de choix d'accompagnement.
function toggleAccompanimentPicker(button) {
  const card = button.closest('.item-card');
  const picker = card?.querySelector('.accompaniment-picker');
  if (picker) {
    picker.hidden = !picker.hidden;
  }
}

// Enregistre le choix d'accompagnement sélectionné.
function selectAccompaniment(button, itemName, accompaniment) {
  const card = button.closest('.item-card');
  const toggleButton = card?.querySelector('.choice-toggle-btn');
  const picker = card?.querySelector('.accompaniment-picker');

  if (card) {
    card.dataset.selectedAccompaniment = accompaniment;
  }

  if (toggleButton) {
    toggleButton.textContent = accompaniment || 'Choisir';
  }

  if (picker) {
    picker.hidden = true;
  }

  if (itemName) {
    console.log(`${itemName} accompaniment selected: ${accompaniment || 'none'}`);
  }
}

// Sélectionne (ou désélectionne) un accompagnement optionnel dans la section Accompagnements.
function selectStandaloneAccompaniment(button) {
  const grid = button.closest('.compositions-grid');
  const alreadySelected = button.classList.contains('selected');

  grid?.querySelectorAll('.composition-item').forEach(item => item.classList.remove('selected'));

  if (!alreadySelected) {
    button.classList.add('selected');
  }
}

// Fait défiler la page jusqu'à la section demandée.
function scrollToSection(id) {
  const targetId = String(id || '');
  const normalizedTarget = normalizeText(targetId);
  let target = document.getElementById(targetId);

  if (!target) {
    target = Array.from(document.querySelectorAll('[id]')).find(element => normalizeText(element.id) === normalizedTarget);
  }

  if (!target) {
    target = Array.from(document.querySelectorAll('section.menu-section, section')).find(section => {
      const heading = section.querySelector('.section-heading');
      return normalizeText(heading?.textContent || section.id) === normalizedTarget;
    });
  }

  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Associe les cartes de menu au clic pour ouvrir la vue détaillée.
function setupItemCardClickHandlers() {
  const cards = document.querySelectorAll('.item-card');
  cards.forEach(card => {
    // Remove existing event listeners to avoid duplicates
    card.removeEventListener('click', handleCardClick);
    card.addEventListener('click', handleCardClick);
  });
}

// Gère le clic sur une carte, sauf sur les boutons d'action.
function handleCardClick(e) {
  // Prevent action if clicking the action buttons
  if (e.target.closest('.add-to-cart-btn, .choice-toggle-btn, .accompaniment-option-btn')) {
    return;
  }
  showItemModal(this);
}

// Actualise les gestionnaires de clic après un changement du menu.
function refreshItemHandlers() {
  setupItemCardClickHandlers();
  showAllItems();
}

// Permet de rafraîchir l'affichage du menu depuis la console ou le HTML.
window.refreshMenuDisplay = function() {
  console.log('Refreshing menu display...');
  showAllItems();
  setupItemCardClickHandlers();
  setupModalCloseHandlers();
  console.log('Menu display refreshed. All items should now be visible.');
};

// Affiche les détails d'un article dans une modale.
function showItemModal(cardElement) {
  const itemName = cardElement.querySelector('h3')?.textContent || '';
  const itemImage = cardElement.querySelector('img');
  let itemPrice = '';
  const priceElement = cardElement.querySelector('.item-price');
  if (priceElement) {
    itemPrice = priceElement.textContent.trim();
  } else {
    const table = cardElement.querySelector('.portion-table');
    if (table) {
      itemPrice = Array.from(table.querySelectorAll('tr'))
        .slice(1)
        .map(row => row.textContent.trim().replace(/\s+/g, ' '))
        .join(' | ');
    } else {
      const priceParagraph = Array.from(cardElement.querySelectorAll('p')).find(p => /\d{3,}/.test(p.textContent));
      itemPrice = priceParagraph ? priceParagraph.textContent.trim() : '';
    }
  }
  
  // Create or get modal
  let modal = document.getElementById('item-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'item-modal';
    modal.className = 'item-modal';
    document.body.appendChild(modal);
  }
  
  // Get image source
  let imageSrc = '';
  if (itemImage && itemImage.getAttribute('src')) {
    imageSrc = itemImage.getAttribute('src');
  }
  
  // Build modal content
  const imageTag = imageSrc ? `<img src="${imageSrc}" class="modal-image" alt="${itemName}">` : `<div class="modal-image">🍽️</div>`;
  
  const priceMatches = itemPrice.match(/(\d{3,})/g);
  const priceValue = priceMatches ? parseInt(priceMatches[priceMatches.length - 1], 10) : 0;
  
  const sectionElement = cardElement.closest('section');
  const sectionId = sectionElement?.id || '';
  const drinkSections = ['Cafe', 'Eaux Mineral', 'Jus de fruits', 'Soft drink et bières', 'Apéro', 'Whisky et Liqueurs', 'Digestifs', 'Eaux de Vie'];
  const isDrinkSection = drinkSections.includes(sectionId);

  const itemDescription = translations[currentLanguage]?.[isDrinkSection ? 'modal.drinkDescription' : 'modal.foodDescription'] || (currentLanguage === 'fr'
    ? (isDrinkSection ? 'Dégustez cette boisson, à partir de jus de fruits jusqu’aux eaux de vie.' : 'Découvrez ce délicieux plat de notre menu')
    : (isDrinkSection ? 'Enjoy this drink, from fruit juices to eaux-de-vie.' : 'Enjoy this delicious dish from our menu'));
  const addToCartText = translations[currentLanguage]?.['button.addToCart'] || (currentLanguage === 'fr' ? 'Ajouter au panier' : 'Add to Cart');
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${itemName}</h2>
        <button class="close-modal" onclick="closeItemModal()">&times;</button>
      </div>
      <div class="modal-body">
        ${imageTag}
        <div class="modal-details">
          <h3>${itemName}</h3>
          <p>${itemDescription}</p>
          <div class="modal-price">${itemPrice}</div>
        </div>
        <button class="modal-btn" onclick="addToCartAndClose('${itemName}', ${priceValue})">
          ${addToCartText}
        </button>
      </div>
    </div>
  `;
  
  modal.classList.add('show');
}

// Ferme la modale de détail d'article.
function closeItemModal() {
  const modal = document.getElementById('item-modal');
  if (modal) {
    modal.classList.remove('show');
  }
}

// Gère la fermeture de la modale au clic ou avec la touche Échap.
function setupModalCloseHandlers() {
  document.addEventListener('click', function(e) {
    const modal = document.getElementById('item-modal');
    if (modal && e.target === modal) {
      closeItemModal();
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeItemModal();
    }
  });
}

// Initialise l'écran de chargement au démarrage.
function initLoadingScreen() {
  const body = document.body;
  const loader = document.getElementById('loader-screen');
  if (!loader || !body) return;

  body.classList.add('loading-active');
  setLoaderProgress(0);

  loaderInterval = window.setInterval(() => {
    if (loaderProgress < 85) {
      loaderProgress += Math.floor(Math.random() * 5) + 3;
      if (loaderProgress > 85) loaderProgress = 85;
      setLoaderProgress(loaderProgress);
    }
  }, 120);
}

// Met à jour la barre de progression du chargement.
function setLoaderProgress(value) {
  const progressFill = document.getElementById('loader-bar-fill');
  const progressText = document.getElementById('loader-progress');
  if (progressFill) progressFill.style.width = `${value}%`;
  if (progressText) progressText.textContent = `${value}%`;
}

// Termine l'écran de chargement et retire l'overlay.
function completeLoadingScreen() {
  const loader = document.getElementById('loader-screen');
  if (!loader) return;

  window.clearInterval(loaderInterval);
  loaderProgress = 100;
  setLoaderProgress(100);
  loader.classList.add('loaded');
  document.body.classList.remove('loading-active');
  window.setTimeout(() => {
    if (loader.parentNode) loader.parentNode.removeChild(loader);
  }, 400);
}

window.addEventListener('load', function() {
  completeLoadingScreen();
});

// Ajoute au panier depuis la modale puis la ferme.
function addToCartAndClose(itemName, price) {
  addToCart(itemName, price);
  closeItemModal();
}

// Efface la recherche et réaffiche tous les éléments du menu.
function clearSearch() {
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.value = '';
    searchMenu();
  }
}

// Ouvre WhatsApp pour réserver un package hôtelier.
function reservePackage(packageName) {
  const message = `Je suis intéressé par le package ${packageName.toUpperCase()}`;
  window.location.href = `https://wa.me/237699801830?text=${encodeURIComponent(message)}`;
}

const hotelGallerySlides = [
  {
    src: 'suite.jpg',
    titleKey: 'room.suite-title',
    descriptionKey: 'room.suite-desc',
    priceKey: 'room.suitePrice',
    altKey: 'room.suite',
    images: [
      'suite1.png',
      'suite2.png',
      'suite3.png',
      'suite4.png',
    ]
  },
  {
    src: 'Speciallux.png',
    titleKey: 'room.luxe-special-title',
    descriptionKey: 'room.luxe-special-desc',
    priceKey: 'room.luxe-special-price',
    altKey: 'room.luxe-special',
    images: [
      'luxe special1.png',
      'luxe special2.png',
      'luxe special3.png',
      'luxe special4.png',
    ]
  },
  {
    src: 'luxe.PNG',
    titleKey: 'room.luxe-title',
    descriptionKey: 'room.luxe-desc',
    priceKey: 'room.luxePrice',
    altKey: 'room.luxe',
    images: [
      'luxe1.png',
      'luxe2.png',
      'luxe3.png',
      'luxe4.png',
    ]
  },
  {
    src: 'stand1.jpg',
    titleKey: 'room.standard-title',
    descriptionKey: 'room.standard-desc',
    priceKey: 'room.standardPrice',
    altKey: 'room.standard-1',
    images: [
      'stand1.jpg',
      'stand2.jpg',
      'stand3.jpg',
      'stand1.jpg'

    ]
  }
];

let currentGalleryIndex = 0;
let currentGalleryImageIndex = 0;

function openGallery(index) {
  currentGalleryIndex = index;
  currentGalleryImageIndex = 0;
  renderRoomDetails();

  const detailPanel = document.getElementById('room-detail-panel');
  if (detailPanel) {
    detailPanel.style.display = 'grid';
    detailPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderRoomDetails() {
  const slide = hotelGallerySlides[currentGalleryIndex];
  if (!slide) return;

  const image = document.getElementById('detail-image');
  const title = document.getElementById('detail-title');
  const description = document.getElementById('detail-description');
  const price = document.getElementById('detail-price');
  const thumbnails = document.getElementById('detail-thumbnails');
  const features = document.getElementById('detail-features');
  const reserveButton = document.getElementById('detail-reserve');
  const count = document.getElementById('gallery-count');

  const mainImage = slide.images[currentGalleryImageIndex] || slide.src;

  const translatedSlideTitle = translations[currentLanguage]?.[slide.titleKey] || slide.title || '';
  const translatedSlideDescription = translations[currentLanguage]?.[slide.descriptionKey] || slide.description || '';
  const translatedSlidePrice = translations[currentLanguage]?.[slide.priceKey] || slide.price || '';
  const translatedAltText = translations[currentLanguage]?.[slide.altKey] || translatedSlideTitle || '';

  if (image) {
    image.src = mainImage;
    image.alt = translatedAltText;
  }
  if (title) title.textContent = translatedSlideTitle;
  if (description) description.textContent = translatedSlideDescription;
  if (price) price.textContent = translatedSlidePrice;
  if (reserveButton) {
    reserveButton.href = 'tel:+237699801830';
    reserveButton.textContent = translations[currentLanguage]?.['room.reserve'] || 'Réserver';
  }
  if (count) count.textContent = `${currentGalleryIndex + 1} / ${hotelGallerySlides.length}`;

  if (thumbnails) {
    thumbnails.innerHTML = slide.images.map((src, idx) => `
      <button type="button" class="detail-thumbnail${idx === currentGalleryImageIndex ? ' active' : ''}" data-index="${idx}">
        <img src="${src}" alt="${slide.title} vue ${idx + 1}" />
      </button>
    `).join('');

    thumbnails.querySelectorAll('.detail-thumbnail').forEach(button => {
      button.addEventListener('click', function () {
        currentGalleryImageIndex = Number(this.dataset.index);
        renderRoomDetails();
      });
    });
  }

  if (features) {
    features.innerHTML = slide.features?.length
      ? slide.features.map(feature => `<span>${feature}</span>`).join('')
      : '';
  }
}

function hideRoomDetails() {
  const detailPanel = document.getElementById('room-detail-panel');
  if (detailPanel) {
    detailPanel.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  hideRoomDetails();
});
