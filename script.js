let cart = [];
let currentLanguage = 'fr';

const heroHeaderTexts = [
  'Bienvenue à l’Hostellerie de la Sanaga',
  'Un lieu où élégance, saveurs et hospitalité se rencontrent',
  'Découvrez une expérience culinaire unique',
  'Votre satisfaction est notre priorité'
];
let heroHeaderIndex = 0;

function rotateHeroHeader() {
  const header = document.getElementById('hero-header');
  if (!header) return;
  const texts = getHeroTexts();
  if (!texts || texts.length === 0) return;
  header.textContent = texts[heroHeaderIndex % texts.length];
  heroHeaderIndex = (heroHeaderIndex + 1) % texts.length;
}

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

function orderNow() {
  window.location.href = 'https://wa.me/237692266713';
}

// Translation dictionary
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
    'hero.side1': 'Des saveurs authentiques livrées directement chez vous',
    'hero.side2': 'Explorez nos pensées pour satisfaire toutes vos envies',
    'hero.photo1': 'Espace photo 1',
    'hero.photo2': 'Espace photo 2',
    'hero.photo3': 'Espace photo 3',
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
    'nav.softsBieres': 'Softs et Bières de Brasserie',
    'nav.suiteAppero': 'Suite Appero',
    'nav.whiskies': 'Whiskies et Liqueurs',
    'nav.digestifs': 'Digestifs',
    'nav.eauxDeVie': 'Eaux de Vie',
    'section.saladesFraicheurs': 'Salades Fraicheurs',
    'section.saladesComposees': 'SALADES COMPOSEE',
    'section.snacking': 'Snacking',
    'section.fineBouche': 'FINE BOUCHE',
    'section.poeles': 'POELES',
    'section.grillades': 'AU CHOIX PLANCHA/GRILLADE',
    'section.specialites': 'Spécialités Maison',
    'section.desserts': 'Desserts',
    'section.pizzas': 'Pizzas',
    'section.boissonsChaudes': 'Boissons Chaudes',
    'section.eauxMinerales': 'EAUX MINERALES',
    'section.eauxGazeuses': 'EAUX GAZEUSES',
    'section.jusDeFruits': 'JUS DE FRUITS',
    'section.softsBieres': 'SOFTS ET BIERRES BRASSERIE',
    'section.suiteAppero': 'SUITE APPERO',
    'section.whiskies': 'WHISKIES ET LIQUEURS',
    'section.digestifs': 'DIGESTIFS',
    'section.eauxDeVie': 'EAUX DE VIE',
    'section.pizzaNote': 'Nos pizzas sont également à emporter au prix majoré de 500 FCFA pour les frais d’emballage.',
    'button.addToCart': 'Ajouter au panier',
    'button.view': 'Voir'
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
    'hero.side1': 'Authentic flavors delivered directly to you',
    'hero.side2': 'Explore our ideas to satisfy all your cravings',
    'hero.photo1': 'Photo space 1',
    'hero.photo2': 'Photo space 2',
    'hero.photo3': 'Photo space 3',
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
    'nav.softsBieres': 'Soft Drinks & Brewery Beers',
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
    'section.specialites': 'House Specialties',
    'section.desserts': 'Desserts',
    'section.pizzas': 'Pizzas',
    'section.boissonsChaudes': 'Hot Drinks',
    'section.eauxMinerales': 'Mineral Waters',
    'section.eauxGazeuses': 'Sparkling Waters',
    'section.jusDeFruits': 'Fruit Juices',
    'section.softsBieres': 'Soft Drinks & Brewery Beers',
    'section.suiteAppero': 'Aperitif Selection',
    'section.whiskies': 'Whiskies & Liqueurs',
    'section.digestifs': 'Digestifs',
    'section.eauxDeVie': 'Eaux-de-vie',
    'section.pizzaNote': 'Our pizzas are also available for takeaway with a 500 FCFA packaging fee.',
    'button.addToCart': 'Add to Cart',
    'button.view': 'View'
  }
};

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  setLanguage('fr');
  generateQRCode();
  setupLanguageToggle();
  setupItemCardClickHandlers();
  setupModalCloseHandlers();
  
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

  languageTrigger.addEventListener('click', function(e) {
    e.preventDefault();
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
      const lang = this.getAttribute('data-lang');
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

  // Update language label
  const langLabel = document.getElementById('language-current-label');
  langLabel.textContent = lang === 'fr' ? 'Français' : 'English';

  // Update search placeholder
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.placeholder = translations[lang]['menu.searchPlaceholder'];
  }

  // Update hero image buttons (order and see menu)
  const orderBtn = document.querySelector('.hero-side-button[data-action="order"]');
  const seeMenuBtn = document.querySelector('.hero-side-button[data-action="see-menu"]');
  if (orderBtn && translations[lang]['hero.orderNow']) orderBtn.textContent = translations[lang]['hero.orderNow'];
  if (seeMenuBtn && translations[lang]['hero.seeMenu']) seeMenuBtn.textContent = translations[lang]['hero.seeMenu'];

  setupViewButtons();

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
  if (qrContainer) {
    // Clear previous QR code
    qrContainer.innerHTML = '';
    
    // Always generate a QR code for the hosted website URL
    const url = 'https://hostellerie-menu.netlify.app';
    const qrTarget = document.getElementById('qr-target');
    if (qrTarget) {
      qrTarget.textContent = url;
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
}

// Add to cart functionality
function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  const message = currentLanguage === 'fr' 
    ? `${itemName} ajouté au panier! Total des articles: ${cart.length}`
    : `${itemName} added to cart! Total items: ${cart.length}`;
  alert(message);
  console.log('Current cart:', cart);
}

// Scroll to section
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

// Setup item card click handlers for modal
function setupItemCardClickHandlers() {
  const cards = document.querySelectorAll('.item-card');
  cards.forEach(card => {
    // Remove existing event listeners to avoid duplicates
    card.removeEventListener('click', handleCardClick);
    card.addEventListener('click', handleCardClick);
  });
}

// Handle card click
function handleCardClick(e) {
  // Prevent action if clicking the button
  if (e.target.classList.contains('add-to-cart-btn')) {
    return;
  }
  showItemModal(this);
}

// Function to refresh item handlers (call this after adding new items)
function refreshItemHandlers() {
  setupItemCardClickHandlers();
  showAllItems();
}

// Global function to refresh display (can be called from console or HTML)
window.refreshMenuDisplay = function() {
  console.log('Refreshing menu display...');
  showAllItems();
  setupItemCardClickHandlers();
  setupModalCloseHandlers();
  console.log('Menu display refreshed. All items should now be visible.');
};

// Show item in modal
function showItemModal(cardElement) {
  const itemName = cardElement.querySelector('h3').textContent;
  const itemPrice = cardElement.querySelector('.item-price').textContent;
  const itemImage = cardElement.querySelector('img');
  
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
  
  // Extract price value for addToCart
  const priceValue = parseInt(itemPrice.replace(/\D/g, ''));
  
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
          <p>Enjoy this delicious item from our menu</p>
          <div class="modal-price">${itemPrice}</div>
        </div>
        <button class="modal-btn" onclick="addToCartAndClose('${itemName}', ${priceValue})">
          ${currentLanguage === 'fr' ? 'Ajouter au panier' : 'Add to Cart'}
        </button>
      </div>
    </div>
  `;
  
  modal.classList.add('show');
}

// Close item modal
function closeItemModal() {
  const modal = document.getElementById('item-modal');
  if (modal) {
    modal.classList.remove('show');
  }
}

// Setup modal close handlers
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

// Add to cart from modal and close
function addToCartAndClose(itemName, price) {
  addToCart(itemName, price);
  closeItemModal();
}

// Clear search and show all items
function clearSearch() {
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.value = '';
    searchMenu();
  }
}