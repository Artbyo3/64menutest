# Menú Digital de Selección Visual 📱

Un menú digital moderno y optimizado para dispositivos móviles que permite a los clientes seleccionar productos y mostrar su selección al vendedor de forma rápida y eficiente.

## Características 🚀

- ✅ **Ultra rápido**: Optimizado para conexiones lentas
- ✅ **Responsive**: Diseñado específicamente para móviles
- ✅ **Cache offline**: Funciona sin internet después de la primera carga
- ✅ **Selección visual**: Los clientes pueden seleccionar productos fácilmente
- ✅ **Vista de vendedor**: Pantalla optimizada para mostrar al personal
- ✅ **Navegación suave**: Scroll automático entre categorías
- ✅ **Diseño moderno**: Interfaz limpia con Tailwind CSS

## Flujo de Uso 👥

### Para el Cliente:

1. **Escanea el código QR** NO sera en un local por lo que deve de estar optimo para que el cliente use la app sin necesidad de perder tiempo porque elcliente estara de pie todo eltiempo
2. **Navega por las categorías** (Entradas, Principales, Bebidas, Postres)
3. **Selecciona productos** tocando "✓ Seleccionar"
4. **Ve su selección** en el ícono de lista (contador aparece)
5. **Muestra la pantalla al vendedor** presionando "Mostrar al Vendedor"

### Para el Vendedor:

1. **Ve la vista optimizada** con productos en letras grandes
2. **Confirma los precios** (que son solo referenciales)
3. **Toma el pedido** basado en la selección del cliente
4. **Cierra la vista** para que el cliente pueda seguir navegando

## Ventajas para Negocios Rápidos 💼

- **Reduce tiempo de atención**: El cliente ya tiene su selección lista
- **Minimiza errores**: Visualización clara de productos seleccionados
- **Mejora eficiencia**: El vendedor ve inmediatamente qué quiere el cliente
- **Funciona offline**: No depende de conexión después de la primera carga
- **No requiere capacitación**: Interfaz intuitiva tanto para clientes como vendedores

## Cómo personalizar 🛠️

### 1. Cambiar información del restaurante

Edita el archivo `index.html` y modifica:

- Línea 22: `<title>Menú Digital - Restaurante</title>`
- Línea 37: `<h1>🍽️ Mi Restaurante</h1>`

### 2. Agregar/modificar productos

Cada producto tiene esta estructura:

```html
<div
  class="menu-item bg-white rounded-lg p-4 shadow-sm border border-gray-200 fade-in"
>
  <div class="flex items-start space-x-3">
    <div
      class="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 img-placeholder flex items-center justify-center"
    >
      <span class="text-2xl">🥗</span>
      <!-- Emoji del producto -->
    </div>
    <div class="flex-1 min-w-0">
      <h3 class="font-medium text-gray-900">Nombre del Producto</h3>
      <p class="text-sm text-gray-600 mt-1">Descripción del producto</p>
      <div class="flex items-center justify-between mt-2">
        <span class="text-lg font-semibold text-green-600">$12.99</span>
        <button
          class="add-to-cart..."
          data-name="Nombre del Producto"
          data-price="12.99"
        >
          Agregar
        </button>
      </div>
    </div>
  </div>
</div>
```

### 3. Agregar nuevas categorías

1. Agrega un botón en la navegación (línea ~48):

```html
<button class="category-btn..." data-category="nueva-categoria">
  Nueva Categoría
</button>
```

2. Agrega la sección correspondiente en el contenido:

```html
<section id="nueva-categoria" class="category-section mb-8">
  <h2 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
    <span class="text-2xl mr-2">🆕</span>
    Nueva Categoría
  </h2>
  <!-- Productos aquí -->
</section>
```

### 4. Personalizar colores

Los colores principales están definidos con clases de Tailwind:

- **Primario**: `blue-600` (botones)
- **Éxito**: `green-600` (precios, total)
- **Texto**: `gray-900` (títulos), `gray-600` (descripciones)

### 5. Configurar pedidos

Actualmente muestra una alerta. Para integrar con WhatsApp, modifica la función en el JavaScript:

```javascript
orderBtn.addEventListener("click", () => {
  if (cart.length === 0) return;

  const orderDetails = cart
    .map((item) => `${item.name} - $${item.price}`)
    .join("%0A");
  const message = `¡Nuevo pedido!%0A%0A${orderDetails}%0A%0ATotal: $${cartTotal.toFixed(
    2
  )}`;
  const whatsappURL = `https://wa.me/1234567890?text=${message}`;

  window.open(whatsappURL, "_blank");

  // Limpiar carrito
  cart = [];
  cartTotal = 0;
  updateCartDisplay();
  hideCart();
});
```

## Cómo usar 📖

1. **Subir archivos**: Sube `index.html` y `sw.js` a tu hosting
2. **Generar QR**: Usa cualquier generador de códigos QR con la URL de tu menú
3. **Imprimir QR**: Imprime y coloca los códigos QR en las mesas

## Optimizaciones incluidas ⚡

- **CSS crítico inline**: Carga instantánea
- **Service Worker**: Cache offline
- **Tailwind CDN**: Sin archivos adicionales
- **Emojis en lugar de imágenes**: Carga ultra rápida
- **Lazy loading**: Animaciones suaves
- **Compresión automática**: Código optimizado

## Hosting recomendado 🌐

Para mejor rendimiento:

- **Netlify** (gratis)
- **Vercel** (gratis)
- **GitHub Pages** (gratis)
- **Firebase Hosting** (gratis)

## Soporte 📧

Para dudas o personalizaciones adicionales, puedes modificar el código o contactar para soporte técnico.

---

**¡Tu menú digital está listo para usar! 🎉**
