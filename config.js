// 1. CONFIGURACIÓN DEL RESTAURANTE
const RESTAURANT_DATA = {
    name: 'Mi Restaurante',
    description: 'Menú digital moderno',
    logo: '🍽️',
    phone: '+1234567890',
    address: 'Tu dirección aquí'
};

// 2. CONFIGURACIÓN DE COLORES PERSONALIZADOS
const CUSTOM_COLORS = {
    // Cambia estos colores según tu marca
    primary: 'blue-600',      // Color principal (botones)
    secondary: 'green-600',   // Color secundario (precios)
    accent: 'red-500',        // Color de acento (alertas)

    // Función para aplicar colores personalizados
    applyColors: function () {
        // Ejemplo de cómo cambiar colores dinámicamente
        const style = document.createElement('style');
        style.textContent = `
            .btn-primary { background-color: var(--color-${this.primary}); }
            .text-price { color: var(--color-${this.secondary}); }
        `;
        document.head.appendChild(style);
    }
};

// 3. TRADUCCIONES COMPLETAS
const translations = {
    es: {
        'restaurant-name': 'Menú', 'helados': 'Helados',
        'especiales': 'Especiales', 'granizados': 'Para Tomar', 'nav-helados': 'Helados',
        'nav-especiales': 'Especiales', 'nav-granizados': 'Para Tomar',
        'para-tomar': 'Para Tomar',
        'nav-para-tomar': 'Para Tomar',
        'cart-title': 'Mi Selección',
        'cart-subtitle': 'Muestra esto al vendedor',
        'empty-cart': 'Selecciona los productos que quieres',
        'total-label': 'Total Estimado:',
        'clear-btn': 'Limpiar',
        'show-vendor-btn': 'Mostrar al Vendedor',
        'close-view-btn': 'Cerrar Vista',
        'vendor-title': 'PEDIDO DEL CLIENTE',
        'vendor-subtitle': 'Vista para el vendedor',
        'total-disclaimer': 'Este total es solo referencial. El vendedor confirmará el precio final.',
        'select-btn': '✓ Seleccionar',
        'selected-btn': '✓ Seleccionado'
    }, en: {
        'restaurant-name': 'Menu', 'helados': 'Ice Cream',
        'especiales': 'Specials', 'granizados': 'To Drink', 'nav-helados': 'Ice Cream',
        'nav-especiales': 'Specials', 'nav-granizados': 'To Drink',
        'para-tomar': 'To Drink',
        'nav-para-tomar': 'To Drink',
        'cart-title': 'My Selection',
        'cart-subtitle': 'Show this to the vendor',
        'empty-cart': 'Select the products you want',
        'total-label': 'Estimated Total:',
        'clear-btn': 'Clear',
        'show-vendor-btn': 'Show to Vendor',
        'close-view-btn': 'Close View',
        'vendor-title': 'CUSTOMER ORDER',
        'vendor-subtitle': 'Vendor view',
        'total-disclaimer': 'This total is for reference only. The vendor will confirm the final price.',
        'select-btn': '✓ Select',
        'selected-btn': '✓ Selected'
    },
    fr: {
        'restaurant-name': 'Menu',
        'appetizers': 'Entrées',
        'mains': 'Plats Principaux',
        'drinks': 'Boissons',
        'desserts': 'Desserts',
        'nav-appetizers': 'Entrées',
        'nav-mains': 'Plats',
        'nav-drinks': 'Boissons',
        'nav-desserts': 'Desserts',
        'cart-title': 'Ma Sélection',
        'cart-subtitle': 'Montrez ceci au vendeur',
        'empty-cart': 'Sélectionnez les produits que vous voulez',
        'total-label': 'Total Estimé:',
        'clear-btn': 'Effacer',
        'show-vendor-btn': 'Montrer au Vendeur',
        'close-view-btn': 'Fermer la Vue',
        'vendor-title': 'COMMANDE CLIENT',
        'vendor-subtitle': 'Vue vendeur',
        'total-disclaimer': 'Ce total est indicatif seulement. Le vendeur confirmera le prix final.',
        'select-btn': '✓ Sélectionner',
        'selected-btn': '✓ Sélectionné'
    },
    de: {
        'restaurant-name': 'Menü',
        'appetizers': 'Vorspeisen',
        'mains': 'Hauptgerichte',
        'drinks': 'Getränke',
        'desserts': 'Nachspeisen',
        'nav-appetizers': 'Vorspeisen',
        'nav-mains': 'Hauptgang',
        'nav-drinks': 'Getränke',
        'nav-desserts': 'Desserts',
        'cart-title': 'Meine Auswahl',
        'cart-subtitle': 'Zeigen Sie dies dem Verkäufer',
        'empty-cart': 'Wählen Sie die gewünschten Produkte',
        'total-label': 'Geschätzter Gesamt:',
        'clear-btn': 'Löschen',
        'show-vendor-btn': 'Dem Verkäufer zeigen',
        'close-view-btn': 'Ansicht schließen',
        'vendor-title': 'KUNDENBESTELLUNG',
        'vendor-subtitle': 'Verkäufer-Ansicht',
        'total-disclaimer': 'Diese Summe ist nur als Referenz. Der Verkäufer wird den Endpreis bestätigen.',
        'select-btn': '✓ Auswählen',
        'selected-btn': '✓ Ausgewählt'
    },
    pt: {
        'restaurant-name': '🍽️ Meu Restaurante',
        'appetizers': 'Entradas',
        'mains': 'Pratos Principais',
        'drinks': 'Bebidas',
        'desserts': 'Sobremesas',
        'nav-appetizers': 'Entradas',
        'nav-mains': 'Principais',
        'nav-drinks': 'Bebidas',
        'nav-desserts': 'Sobremesas',
        'cart-title': 'Minha Seleção',
        'cart-subtitle': 'Mostre isso ao vendedor',
        'empty-cart': 'Selecione os produtos que deseja',
        'total-label': 'Total Estimado:',
        'clear-btn': 'Limpar',
        'show-vendor-btn': 'Mostrar ao Vendedor',
        'close-view-btn': 'Fechar Vista',
        'vendor-title': 'PEDIDO DO CLIENTE',
        'vendor-subtitle': 'Vista do vendedor',
        'total-disclaimer': 'Este total é apenas referencial. O vendedor confirmará o preço final.',
        'select-btn': '✓ Selecionar',
        'selected-btn': '✓ Selecionado'
    },
    it: {
        'restaurant-name': '🍽️ Il Mio Ristorante',
        'appetizers': 'Antipasti',
        'mains': 'Piatti Principali',
        'drinks': 'Bevande',
        'desserts': 'Dolci',
        'nav-appetizers': 'Antipasti',
        'nav-mains': 'Principali',
        'nav-drinks': 'Bevande',
        'nav-desserts': 'Dolci',
        'cart-title': 'La Mia Selezione',
        'cart-subtitle': 'Mostra questo al venditore',
        'empty-cart': 'Seleziona i prodotti che vuoi',
        'total-label': 'Totale Stimato:',
        'clear-btn': 'Cancella',
        'show-vendor-btn': 'Mostra al Venditore',
        'close-view-btn': 'Chiudi Vista',
        'vendor-title': 'ORDINE CLIENTE',
        'vendor-subtitle': 'Vista venditore',
        'total-disclaimer': 'Questo totale è solo indicativo. Il venditore confermerà il prezzo finale.',
        'select-btn': '✓ Seleziona',
        'selected-btn': '✓ Selezionato'
    },
    zh: {
        'restaurant-name': '🍽️ 我的餐厅',
        'appetizers': '开胃菜',
        'mains': '主菜',
        'drinks': '饮料',
        'desserts': '甜点',
        'nav-appetizers': '开胃菜',
        'nav-mains': '主菜',
        'nav-drinks': '饮料',
        'nav-desserts': '甜点',
        'cart-title': '我的选择',
        'cart-subtitle': '向卖家展示这个',
        'empty-cart': '选择您想要的产品',
        'total-label': '预估总计:',
        'clear-btn': '清除',
        'show-vendor-btn': '显示给卖家',
        'close-view-btn': '关闭视图',
        'vendor-title': '客户订单',
        'vendor-subtitle': '卖家视图',
        'total-disclaimer': '此总计仅供参考。卖家将确认最终价格。',
        'select-btn': '✓ 选择',
        'selected-btn': '✓ 已选择'
    },
    ja: {
        'restaurant-name': '🍽️ 私のレストラン',
        'appetizers': '前菜',
        'mains': 'メイン料理',
        'drinks': '飲み物',
        'desserts': 'デザート',
        'nav-appetizers': '前菜',
        'nav-mains': 'メイン',
        'nav-drinks': '飲み物',
        'nav-desserts': 'デザート',
        'cart-title': '私の選択',
        'cart-subtitle': 'これを販売者に見せてください',
        'empty-cart': '欲しい商品を選択してください',
        'total-label': '推定合計:',
        'clear-btn': 'クリア',
        'show-vendor-btn': '販売者に見せる',
        'close-view-btn': 'ビューを閉じる',
        'vendor-title': '顧客注文',
        'vendor-subtitle': '販売者ビュー',
        'total-disclaimer': 'この合計は参考のみです。販売者が最終価格を確認します。',
        'select-btn': '✓ 選択',
        'selected-btn': '✓ 選択済み'
    },
    ru: {
        'restaurant-name': '🍽️ Мой Ресторан',
        'appetizers': 'Закуски',
        'mains': 'Основные блюда',
        'drinks': 'Напитки',
        'desserts': 'Десерты',
        'nav-appetizers': 'Закуски',
        'nav-mains': 'Основные',
        'nav-drinks': 'Напитки',
        'nav-desserts': 'Десерты',
        'cart-title': 'Мой выбор',
        'cart-subtitle': 'Покажите это продавцу',
        'empty-cart': 'Выберите продукты, которые хотите',
        'total-label': 'Примерный итог:',
        'clear-btn': 'Очистить',
        'show-vendor-btn': 'Показать продавцу',
        'close-view-btn': 'Закрыть вид',
        'vendor-title': 'ЗАКАЗ КЛИЕНТА',
        'vendor-subtitle': 'Вид продавца',
        'total-disclaimer': 'Эта сумма только для справки. Продавец подтвердит окончательную цену.',
        'select-btn': '✓ Выбрать',
        'selected-btn': '✓ Выбрано'
    },
    nl: {
        'restaurant-name': '🍽️ Mijn Restaurant',
        'appetizers': 'Voorgerechten',
        'mains': 'Hoofdgerechten',
        'drinks': 'Dranken',
        'desserts': 'Nagerechten',
        'nav-appetizers': 'Voorgerechten',
        'nav-mains': 'Hoofdgerecht',
        'nav-drinks': 'Dranken',
        'nav-desserts': 'Nagerechten',
        'cart-title': 'Mijn Selectie',
        'cart-subtitle': 'Toon dit aan de verkoper',
        'empty-cart': 'Selecteer de producten die je wilt',
        'total-label': 'Geschat Totaal:',
        'clear-btn': 'Wissen',
        'show-vendor-btn': 'Toon aan Verkoper',
        'close-view-btn': 'Sluit Weergave',
        'vendor-title': 'KLANTBESTELLING',
        'vendor-subtitle': 'Verkoper weergave',
        'total-disclaimer': 'Dit totaal is alleen ter referentie. De verkoper zal de definitieve prijs bevestigen.',
        'select-btn': '✓ Selecteren',
        'selected-btn': '✓ Geselecteerd'
    }
};

const languageFlags = {
    es: '🇪🇸',
    en: '🇺🇸',
    fr: '🇫🇷',
    de: '🇩🇪',
    pt: '🇧🇷',
    it: '🇮🇹',
    zh: '🇨🇳',
    ja: '🇯🇵',
    ru: '🇷🇺',
    nl: '🇳🇱'
};
// Variable global para los datos del menú
let MENU_DATA = {};

// 4. FUNCIÓN PARA CARGAR DATOS DEL MENÚ DESDE JSON
async function loadMenuData() {
    try {
        const response = await fetch('menu.json');
        const data = await response.json();
        MENU_DATA = data.categories;
        return MENU_DATA;
    } catch (error) {
        console.error('Error loading menu data:', error);        // Fallback con datos mínimos si falla la carga
        MENU_DATA = {
            helados: { icon: '🍧', items: [] },
            especiales: { icon: '🍹', items: [] },
            'para-tomar': { icon: '🥤', items: [] }
        };
        return MENU_DATA;
    }
}

// 5. FUNCIÓN PARA GENERAR MENÚ DINÁMICAMENTE
function generateMenuFromData() {
    const translation = translations[currentLanguage];

    Object.keys(MENU_DATA).forEach(category => {
        const section = document.getElementById(category);
        if (!section) return;

        const itemsContainer = section.querySelector('.space-y-3');
        itemsContainer.innerHTML = '';

        MENU_DATA[category].items.forEach(item => {
            if (!item.available) return;

            let itemHTML = '';
            const premiumClass = item.type === 'premium' ? 'premium ' : '';            // Generar HTML base del item
            const imageContent = item.image ?
                `<img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover rounded-lg">` :
                `<span class="text-xl">${item.emoji}</span>`;

            itemHTML = `
                <div class="menu-item ${premiumClass}bg-white rounded-lg p-3 shadow-sm border border-gray-200 fade-in">
                    <div class="flex items-start space-x-2">                        <div class="w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0 img-placeholder flex items-center justify-center overflow-hidden">
                            ${imageContent}
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="font-medium text-gray-900 text-sm">${item.name}</h3>
                            <p class="text-xs text-gray-600 mt-1 line-clamp-2">${item.description}</p>
                            <div class="flex items-center justify-between mt-2 gap-2">
                                <span class="text-base font-semibold text-green-600 flex-shrink-0">$${item.price}</span>
                                <button class="add-to-cart bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-green-700 transition-colors active:bg-green-800 whitespace-nowrap flex-shrink-0 btn-responsive"
                                        data-name="${item.name}" data-price="${item.price}" data-text="select-btn">
                                    ${translation['select-btn']}
                                </button>
                            </div>
                        </div>
                    </div>`;

            // Agregar contenido expandible si el item lo tiene
            if (item.details) {
                const details = item.details;

                itemHTML += `
                    <!-- Barra de información mejorada -->
                    <div class="info-toggle-bar" onclick="toggleItemExpansion(this)">
                        <span class="text-sm font-medium">${details.infoTitle}</span>
                        <div class="expand-icon">▼</div>
                    </div>
                    <!-- Contenido expandible -->
                    <div class="expand-content">                        <!-- Área de imagen para plato -->
                        <div class="expand-image-area">
                            ${details.images.map(img => `
                                <div class="expand-image-container">
                                    ${img.image ?
                        `<img src="${img.image}" alt="${img.label}" class="w-full h-full object-cover rounded">` :
                        `<div class="image-placeholder">${img.emoji}</div>`
                    }
                                </div>
                            `).join('')}
                            <p class="image-caption">${details.imageCaption}</p>
                        </div>

                        <div class="space-y-3">
                            <div>
                                <p class="text-xs text-gray-700 mb-3 leading-relaxed">
                                    <strong>${item.emoji} ¿Qué incluye?</strong><br>
                                    ${details.fullDescription}
                                </p>
                                ${details.ingredients ? `
                                <div class="mb-3">
                                    <p class="text-xs font-semibold text-gray-800 mb-2">
                                        ⭐ Ingredientes: ${details.ingredients}
                                    </p>
                                </div>` : ''}

                                <div class="food-info">
                                    <div class="grid grid-cols-3 gap-2 text-center">
                                        ${Object.values(details.foodInfo).map(info => `
                                            <div>
                                                <div class="font-medium text-${info.color}-700">${info.icon} ${info.text}</div>
                                                <div class="text-xs text-${info.color}-600">${info.subtitle}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                    <div class="mt-2 pt-2 border-t border-gray-200 text-center">
                                        <span class="text-xs text-gray-600">${details.specialNote}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }

            itemHTML += `</div>`;
            itemsContainer.innerHTML += itemHTML;
        });
    });

    // Reconfigurar event listeners después de generar el contenido
    setupMenuEventListeners();
}

// 6. FUNCIÓN PARA CONFIGURAR EVENT LISTENERS DEL MENÚ DINÁMICO
function setupMenuEventListeners() {
    // Botones agregar al carrito
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const name = btn.dataset.name;
            const price = btn.dataset.price;
            const translation = translations[currentLanguage];
            const isPremium = btn.closest('.menu-item').classList.contains('premium');

            // Verificar si ya está en el carrito
            const existingIndex = cart.findIndex(item => item.name === name);

            if (existingIndex !== -1) {
                // Si ya existe, removerlo
                removeFromCart(existingIndex);
                btn.textContent = translation['select-btn'];
                btn.classList.remove('bg-orange-500', 'bg-orange-600');
                btn.classList.add('bg-green-600');
            } else {
                // Si no existe, agregarlo
                addToCart(name, price);
                btn.textContent = translation['selected-btn'];
                btn.classList.remove('bg-green-600', 'bg-green-700');
                btn.classList.add('bg-orange-500');

                // Si es premium, agregar efectos especiales
                if (isPremium) {
                    const menuItem = btn.closest('.menu-item.premium');
                    createPremiumCelebration(menuItem, btn);

                    // Cambiar texto temporalmente
                    setTimeout(() => {
                        btn.textContent = '👑 ¡SELECCIONADO!';
                        btn.classList.add('premium-button-glow');

                        setTimeout(() => {
                            btn.textContent = translation['selected-btn'];
                            btn.classList.remove('premium-button-glow');
                        }, 2000);
                    }, 100);
                }
            }
        });
    });

    // Expandir card al hacer click en cualquier parte de la tarjeta excepto botones
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', e => {
            // Ignorar si se clicó en el botón de "Seleccionar" o en el área de expansión
            if (e.target.closest('.add-to-cart') || e.target.closest('.info-toggle-bar')) return;
            const bar = item.querySelector('.info-toggle-bar');
            if (bar) toggleItemExpansion(bar);
        });
    });
}

// 14. INICIALIZACIÓN DE CONFIGURACIONES
async function initializeCustomizations() {
    // Aplicar colores personalizados
    CUSTOM_COLORS.applyColors();

    // Cargar datos del menú desde JSON
    await loadMenuData();

    // Generar menú dinámico
    generateMenuFromData();

    // Actualizar información del restaurante
    document.title = `Menú Digital - ${RESTAURANT_DATA.name}`;
    const h1Element = document.querySelector('h1');
    if (h1Element) {
        h1Element.textContent = `🍽️ ${RESTAURANT_DATA.name}`;
    }

    // Configurar event listeners
    setupEventListeners();

    // Cargar idioma guardado
    loadSavedLanguage();

    // Inicializar carrito
    updateCartDisplay();
}

// 15. INICIALIZACIÓN CUANDO EL DOM ESTÉ LISTO
document.addEventListener('DOMContentLoaded', initializeCustomizations);

// 7. VARIABLES GLOBALES DE LA APLICACIÓN
let cart = [];
let cartTotal = 0;
let currentLanguage = localStorage.getItem('preferred-language') || 'es';


// Rotación automática de banderas
const flagsArray = Object.values(languageFlags);
let currentFlagIndex = 0;
let userHasSelectedLanguage = false;

// 8. FUNCIONES DE IDIOMA Y TRADUCCIÓN
function rotateFlagDisplay() {
    if (!userHasSelectedLanguage) {
        currentFlagIndex = (currentFlagIndex + 1) % flagsArray.length;
        const rotatingFlag = document.getElementById('rotatingFlag');
        if (rotatingFlag) {
            rotatingFlag.textContent = flagsArray[currentFlagIndex];
        }
    }
}

function translatePage(lang) {
    currentLanguage = lang;
    const translation = translations[lang];

    // Actualizar todos los elementos con data-text
    document.querySelectorAll('[data-text]').forEach(element => {
        const key = element.getAttribute('data-text');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });

    // Actualizar botones de selección
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        const isSelected = btn.classList.contains('bg-orange-500');
        btn.textContent = isSelected ? translation['selected-btn'] : translation['select-btn'];
    });

    // Marcar que el usuario seleccionó manualmente un idioma
    userHasSelectedLanguage = true;

    // Detener la rotación automática permanentemente
    clearInterval(window.flagRotationInterval);

    // Mostrar la bandera del idioma seleccionado
    const rotatingFlag = document.getElementById('rotatingFlag');
    if (rotatingFlag) {
        rotatingFlag.textContent = languageFlags[lang];
    }

    // Actualizar idioma del HTML
    document.documentElement.lang = lang;

    // Actualizar estado activo en dropdown
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });

    // Guardar preferencia
    localStorage.setItem('preferred-language', lang);

    // Actualizar carrito si está abierto
    if (cart.length === 0) {
        const cartItems = document.getElementById('cartItems');
        if (cartItems) {
            const emptyText = cartItems.querySelector('p');
            if (emptyText) {
                emptyText.textContent = translation['empty-cart'];
            }
        }
    }
}

function toggleLanguageDropdown() {
    const languageDropdown = document.getElementById('languageDropdown');
    if (languageDropdown) {
        languageDropdown.classList.toggle('hidden');
    }
}

function hideLanguageDropdown() {
    const languageDropdown = document.getElementById('languageDropdown');
    if (languageDropdown) {
        languageDropdown.classList.add('hidden');
    }
}

function loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && translations[savedLang]) {
        translatePage(savedLang);
    }
}

// 9. FUNCIONES DEL CARRITO
function updateCartDisplay() {
    const translation = translations[currentLanguage];
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');
    const orderBtn = document.getElementById('orderBtn');
    const clearBtn = document.getElementById('clearBtn');

    if (!cartCount || !cartItems || !cartTotalEl || !orderBtn || !clearBtn) return;

    if (cart.length === 0) {
        cartCount.classList.add('hidden');
        cartItems.innerHTML = `<p class="text-gray-500 text-center text-sm" data-text="empty-cart">${translation['empty-cart']}</p>`;
        orderBtn.disabled = true;
        clearBtn.disabled = true;
    } else {
        cartCount.textContent = cart.length;
        cartCount.classList.remove('hidden');

        cartItems.innerHTML = cart.map((item, index) => `
            <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <div class="flex-1 min-w-0 pr-2">
                    <h4 class="font-medium text-sm text-gray-900 truncate">${item.name}</h4>
                    <p class="text-green-600 font-semibold text-base">$${item.price}</p>
                </div>
                <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700 p-1 flex-shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                </button>
            </div>
        `).join('');

        orderBtn.disabled = false;
        clearBtn.disabled = false;
    }

    cartTotalEl.textContent = `$${cartTotal.toFixed(2)}`;
}

function addToCart(name, price) {
    cart.push({ name, price: parseFloat(price) });
    cartTotal += parseFloat(price);
    updateCartDisplay();
}

function removeFromCart(index) {
    const removedItem = cart[index];
    cartTotal -= cart[index].price;
    cart.splice(index, 1);

    // Encontrar y resetear el botón correspondiente
    const translation = translations[currentLanguage];
    const allButtons = document.querySelectorAll('.add-to-cart');
    allButtons.forEach(btn => {
        if (btn.dataset.name === removedItem.name) {
            btn.textContent = translation['select-btn'];
            btn.classList.remove('bg-orange-500', 'bg-orange-600');
            btn.classList.add('bg-green-600');
        }
    });

    updateCartDisplay();
}

function clearCart() {
    cart = [];
    cartTotal = 0;
    updateCartDisplay();

    // Resetear todos los botones
    const translation = translations[currentLanguage];
    const allButtons = document.querySelectorAll('.add-to-cart');
    allButtons.forEach(btn => {
        btn.textContent = translation['select-btn'];
        btn.classList.remove('bg-orange-500', 'bg-orange-600');
        btn.classList.add('bg-green-600');
    });
}

// 10. FUNCIONES DE NAVEGACIÓN Y UI
function showCart() {
    const cartModal = document.getElementById('cartModal');
    const cartContent = document.getElementById('cartContent');
    if (cartModal && cartContent) {
        cartModal.classList.remove('hidden');
        setTimeout(() => {
            cartContent.style.transform = 'translateY(0)';
        }, 10);
    }
}

function hideCart() {
    const cartModal = document.getElementById('cartModal');
    const cartContent = document.getElementById('cartContent');
    if (cartContent) {
        cartContent.style.transform = 'translateY(100%)';
        setTimeout(() => {
            if (cartModal) {
                cartModal.classList.add('hidden');
            }
        }, 300);
    }
}

function scrollToCategory(categoryId) {
    const element = document.getElementById(categoryId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function toggleItemExpansion(barElement) {
    const menuItem = barElement.closest('.menu-item');
    const expandContent = barElement.nextElementSibling;

    // Toggle estado activo
    const isCurrentlyExpanded = barElement.classList.contains('expanded');

    // Cerrar otros items expandidos
    document.querySelectorAll('.info-toggle-bar.expanded').forEach(bar => {
        if (bar !== barElement) {
            bar.classList.remove('expanded');
            bar.nextElementSibling.classList.remove('active');
            bar.closest('.menu-item').classList.remove('expanded');
        }
    });

    if (isCurrentlyExpanded) {
        // Contraer
        barElement.classList.remove('expanded');
        expandContent.classList.remove('active');
        menuItem.classList.remove('expanded');
    } else {
        // Expandir
        barElement.classList.add('expanded');
        expandContent.classList.add('active');
        menuItem.classList.add('expanded');
    }
}

// 11. FUNCIONES DE EFECTOS PREMIUM
function createPremiumCelebration(menuItem, button) {
    // Animación principal de la card
    menuItem.classList.add('premium-selected');

    // Crear partículas doradas
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'premium-particles';

    for (let i = 0; i < 4; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particlesContainer.appendChild(particle);
    }

    menuItem.appendChild(particlesContainer);

    // Crear onda de sonido visual
    const soundWave = document.createElement('div');
    soundWave.className = 'premium-sound-wave';
    menuItem.appendChild(soundWave);

    // Vibración en móviles
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100, 50, 200]);
    }

    // Limpiar efectos después de la animación
    setTimeout(() => {
        menuItem.classList.remove('premium-selected');
        if (particlesContainer.parentNode) {
            particlesContainer.remove();
        }
        if (soundWave.parentNode) {
            soundWave.remove();
        }
    }, 2000);

    // Crear efecto de confetti
    createConfetti(menuItem);
}

function createConfetti(container) {
    const colors = ['#fbbf24', '#f59e0b', '#d97706', '#dc2626'];
    const rect = container.getBoundingClientRect();

    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = rect.left + (rect.width * Math.random()) + 'px';
            confetti.style.top = rect.top + (rect.height * 0.3) + 'px';
            confetti.style.width = '6px';
            confetti.style.height = '6px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '40';

            document.body.appendChild(confetti);

            const animation = confetti.animate([
                {
                    transform: 'translateY(0px) rotate(0deg)',
                    opacity: 1
                },
                {
                    transform: `translateY(${100 + Math.random() * 100}px) rotate(${360 * Math.random()}deg)`,
                    opacity: 0
                }
            ], {
                duration: 1000 + Math.random() * 500,
                easing: 'ease-out'
            });

            animation.onfinish = () => confetti.remove();
        }, i * 50);
    }
}

// 12. FUNCIÓN PARA RESTAURAR VISTA NORMAL
function restoreNormalView() {
    const translation = translations[currentLanguage];
    const cartContent = document.getElementById('cartContent');
    const orderBtn = document.getElementById('orderBtn');
    const clearBtn = document.getElementById('clearBtn');

    if (!cartContent || !orderBtn || !clearBtn) return;

    // Restaurar vista normal
    cartContent.classList.remove('vendor-view');
    const title = cartContent.querySelector('h3');
    const subtitle = cartContent.querySelector('.text-xs');

    if (title) title.textContent = translation['cart-title'];
    if (subtitle) subtitle.textContent = translation['cart-subtitle'];

    // Mostrar botones de eliminar items
    const deleteButtons = cartContent.querySelectorAll('button[onclick*="removeFromCart"]');
    deleteButtons.forEach(btn => btn.style.display = 'block');

    // Restaurar botones
    orderBtn.textContent = translation['show-vendor-btn'];
    orderBtn.className = 'bg-blue-600 text-white py-2.5 px-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-sm';
    clearBtn.style.display = 'block';

    // Restaurar tamaño de ventana
    cartContent.style.maxHeight = '85vh';
}

// 13. CONFIGURACIÓN DE EVENT LISTENERS
function setupEventListeners() {
    // Variables de elementos DOM
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');
    const orderBtn = document.getElementById('orderBtn');
    const clearBtn = document.getElementById('clearBtn');
    const languageBtn = document.getElementById('languageBtn');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');

    // Event listeners básicos del carrito
    if (cartBtn) cartBtn.addEventListener('click', showCart);
    if (cartOverlay) cartOverlay.addEventListener('click', hideCart);
    if (closeCart) closeCart.addEventListener('click', hideCart);
    if (clearBtn) clearBtn.addEventListener('click', clearCart);

    // Event listener del selector de idiomas
    if (languageBtn) languageBtn.addEventListener('click', toggleLanguageDropdown);

    // Event listener para cerrar dropdown al hacer click fuera
    document.addEventListener('click', function (e) {
        const languageDropdown = document.getElementById('languageDropdown');
        if (languageBtn && languageDropdown &&
            !languageBtn.contains(e.target) &&
            !languageDropdown.contains(e.target)) {
            hideLanguageDropdown();
        }
    });

    // Event listeners para opciones de idioma
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function () {
            const lang = this.dataset.lang;
            translatePage(lang);
            hideLanguageDropdown();
        });
    });

    // Event listener dinámico para el botón de orden
    if (orderBtn) {
        orderBtn.addEventListener('click', function (e) {
            const translation = translations[currentLanguage];

            if (orderBtn.textContent === translation['close-view-btn']) {
                restoreNormalView();
                return;
            }

            if (cart.length === 0) return;

            // Cambiar a vista de vendedor
            const cartContent = document.getElementById('cartContent');
            if (cartContent) {
                cartContent.classList.add('vendor-view');
                const title = cartContent.querySelector('h3');
                const subtitle = cartContent.querySelector('.text-xs');

                if (title) title.textContent = translation['vendor-title'];
                if (subtitle) subtitle.textContent = translation['vendor-subtitle'];

                // Ocultar botón de eliminar items en vista de vendedor
                const deleteButtons = cartContent.querySelectorAll('button[onclick*="removeFromCart"]');
                deleteButtons.forEach(btn => btn.style.display = 'none');

                // Cambiar botones
                orderBtn.textContent = translation['close-view-btn'];
                orderBtn.className = 'w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors text-lg';
                clearBtn.style.display = 'none';

                // Hacer la ventana más grande
                cartContent.style.maxHeight = '90vh';
                cartContent.style.height = 'auto';
            }
        });
    }

    // Botones de categorías
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            scrollToCategory(category);

            // Actualizar estado activo
            categoryBtns.forEach(b => b.classList.remove('text-blue-600', 'border-blue-600'));
            btn.classList.add('text-blue-600', 'border-blue-600');
        });
    });

    // Botones agregar al carrito
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.dataset.name;
            const price = btn.dataset.price;
            const translation = translations[currentLanguage];
            const isPremium = btn.closest('.menu-item').classList.contains('premium');

            // Verificar si ya está en el carrito
            const existingIndex = cart.findIndex(item => item.name === name);

            if (existingIndex !== -1) {
                // Si ya existe, removerlo
                removeFromCart(existingIndex);
                btn.textContent = translation['select-btn'];
                btn.classList.remove('bg-orange-500', 'bg-orange-600');
                btn.classList.add('bg-green-600');
            } else {
                // Si no existe, agregarlo
                addToCart(name, price);
                btn.textContent = translation['selected-btn'];
                btn.classList.remove('bg-green-600', 'bg-green-700');
                btn.classList.add('bg-orange-500');

                // Si es premium, agregar efectos especiales
                if (isPremium) {
                    const menuItem = btn.closest('.menu-item.premium');
                    createPremiumCelebration(menuItem, btn);

                    // Cambiar texto temporalmente
                    setTimeout(() => {
                        btn.textContent = '👑 ¡SELECCIONADO!';
                        btn.classList.add('premium-button-glow');

                        setTimeout(() => {
                            btn.textContent = translation['selected-btn'];
                            btn.classList.remove('premium-button-glow');
                        }, 2000);
                    }, 100);
                }
            }
        });
    });

    // Iniciar rotación automática de banderas cada 2 segundos
    window.flagRotationInterval = setInterval(rotateFlagDisplay, 2000);

    // Marcar primera categoría como activa
    if (categoryBtns.length > 0) {
        categoryBtns[0].classList.add('text-blue-600', 'border-blue-600');
    }

    // Service Worker para cache offline (opcional)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(() => console.log('SW registrado'))
                .catch(() => console.log('SW falló'));
        });
    }
}

// Llamar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initializeCustomizations();
    setupEventListeners();
    loadSavedLanguage();
});
