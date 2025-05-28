
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


// 4. EJEMPLO DE MENÚ DINÁMICO (si quieres cargar desde JSON)
const MENU_DATA = {
    entradas: [
        {
            id: 1,
            name: 'Ensalada César',
            description: 'Lechuga, crutones, queso parmesano, aderezo césar',
            price: 12.99,
            emoji: '🥗',
            available: true
        },
        {
            id: 2,
            name: 'Camarones al Ajillo',
            description: 'Camarones frescos con ajo, perejil y aceite de oliva',
            price: 18.99,
            emoji: '🍤',
            available: true
        }
    ],
    principales: [
        {
            id: 3,
            name: 'Bistec a la Parrilla',
            description: 'Bistec de res con papas fritas y ensalada',
            price: 24.99,
            emoji: '🥩',
            available: true
        }
    ]
    // Agregar más categorías...
};

// 5. FUNCIÓN PARA GENERAR MENÚ DINÁMICAMENTE
function generateMenuFromData() {
    Object.keys(MENU_DATA).forEach(category => {
        const section = document.getElementById(category);
        if (!section) return;

        const itemsContainer = section.querySelector('.space-y-3');
        itemsContainer.innerHTML = '';

        MENU_DATA[category].forEach(item => {
            if (!item.available) return;

            const itemHTML = `
                <div class="menu-item bg-white rounded-lg p-4 shadow-sm border border-gray-200 fade-in">
                    <div class="flex items-start space-x-3">
                        <div class="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 img-placeholder flex items-center justify-center">
                            <span class="text-2xl">${item.emoji}</span>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="font-medium text-gray-900">${item.name}</h3>
                            <p class="text-sm text-gray-600 mt-1">${item.description}</p>
                            <div class="flex items-center justify-between mt-2">
                                <span class="text-lg font-semibold text-green-600">$${item.price}</span>
                                <button class="add-to-cart bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors" 
                                        data-name="${item.name}" data-price="${item.price}">
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            itemsContainer.innerHTML += itemHTML;
        });
    });
}

// 6. INICIALIZACIÓN DE CONFIGURACIONES
function initializeCustomizations() {
    // Configurar WhatsApp
    WHATSAPP_CONFIG.setupWhatsApp();

    // Aplicar colores personalizados
    CUSTOM_COLORS.applyColors();

    // Generar menú dinámico (opcional)
    // generateMenuFromData();

    // Actualizar información del restaurante
    document.title = `Menú Digital - ${RESTAURANT_DATA.name}`;
    document.querySelector('h1').textContent = `🍽️ ${RESTAURANT_DATA.name}`;
}

// Llamar cuando el DOM esté listo
// document.addEventListener('DOMContentLoaded', initializeCustomizations);
