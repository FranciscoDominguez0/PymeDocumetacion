# Guía y Checklist de Capturas de Pantalla

Este checklist contiene el catálogo completo de capturas necesarias para documentar visualmente el sistema **PayMe Panamá**. Al tomar cada captura, guárdala con el nombre indicado dentro de la carpeta `docs/public/images/`.

---

## Capturas del Módulo Administrador

| # | Archivo sugerido | URL local del sistema | Elemento / Acción a resaltar |
|---|---|---|---|
| **CAP-ADM-01** | `images/admin/login-admin.png` | `https://pyme.rsfsecure.site/login` | Formulario de acceso con credenciales de administrador y enlace a Google. |
| **CAP-ADM-02** | `images/admin/dashboard.png` | `https://pyme.rsfsecure.site/admin/dashboard` | Tarjetas KPI de ventas, gráfico de balance y tabla de pedidos recientes. |
| **CAP-ADM-03** | `images/admin/catalogo-lista.png` | `https://pyme.rsfsecure.site/admin/productos` | Listado de productos, badges de stock y botón "Nuevo Producto". |
| **CAP-ADM-04** | `images/admin/producto-form.png` | `https://pyme.rsfsecure.site/admin/productos/crear` | Formulario con pestañas: Información básica, Precios, Variantes y Galería. |
| **CAP-ADM-05** | `images/admin/producto-modal-hd.png` | `https://pyme.rsfsecure.site/admin/productos` | Modal emergente al hacer clic en una miniatura mostrando la foto en alta resolución. |
| **CAP-ADM-06** | `images/admin/inventario-kardex.png` | `https://pyme.rsfsecure.site/admin/inventario` | Tabla de movimientos (Kardex) con tipo de movimiento (Entrada/Salida/Ajuste). |
| **CAP-ADM-07** | `images/admin/pedidos-lista.png` | `https://pyme.rsfsecure.site/admin/pedidos` | Listado con badges de estado (Pendiente, En preparación, Enviado, Entregado, Cancelado). |
| **CAP-ADM-08** | `images/admin/pedido-detalle.png` | `https://pyme.rsfsecure.site/admin/pedidos/1` | Detalle del pedido, botones de cambio de estado y enlace a la factura generada. |
| **CAP-ADM-09** | `images/admin/factura-detalle.png` | `https://pyme.rsfsecure.site/admin/facturas/1` | Vista de factura con badge "Emitida" o "Anulada" y botones de descarga PDF / Ticket. |
| **CAP-ADM-10** | `images/admin/config-zonas.png` | `https://pyme.rsfsecure.site/admin/zonas-envio` | Mapeo de zonas de entrega (Ciudad de Panamá, Interior) con tarifas fijas o por peso. |

---

## Capturas del Módulo Cliente (Storefront)

| # | Archivo sugerido | URL local del sistema | Elemento / Acción a resaltar |
|---|---|---|---|
| **CAP-CLI-01** | `images/cliente/registro-2fa.png` | `https://pyme.rsfsecure.site/register` | Pantalla de registro de cliente y verificación por código OTP / 2FA. |
| **CAP-CLI-02** | `images/cliente/home-hero.png` | `https://pyme.rsfsecure.site/` | Página de inicio con carrusel de promociones, marcas oficiales y productos destacados. |
| **CAP-CLI-03** | `images/cliente/busqueda-predictiva.png` | `https://pyme.rsfsecure.site/` | Barra superior con texto tecleado y dropdown de resultados sugeridos (Debounce 300ms). |
| **CAP-CLI-04** | `images/cliente/catalogo-filtros.png` | `https://pyme.rsfsecure.site/catalogo` | Catálogo público con selector de categorías, filtro de rango de precios y marcas. |
| **CAP-CLI-05** | `images/cliente/producto-detalle.png` | `https://pyme.rsfsecure.site/producto/gopro...` | Ficha del producto con galería de fotos, zoom lupa y selección de variantes. |
| **CAP-CLI-06** | `images/cliente/carrito-drawer.png` | `https://pyme.rsfsecure.site/` | Drawer lateral del carrito con resumen de ítems, subtotal y cálculo de ITBMS (7%). |
| **CAP-CLI-07** | `images/cliente/checkout-pasos.png` | `https://pyme.rsfsecure.site/checkout` | Selección de dirección de entrega, cálculo de tarifa de flete y cupones de descuento. |
| **CAP-CLI-08** | `images/cliente/checkout-pagos.png` | `https://pyme.rsfsecure.site/checkout/pago` | Pestañas de métodos de pago (Tarjeta, Yappy, Transferencia con subida de comprobante). |
| **CAP-CLI-09** | `images/cliente/pedido-confirmado.png` | `https://pyme.rsfsecure.site/pedidos/.../confirmacion` | Pantalla de confirmación con número de orden, resumen y botón para ver factura. |
| **CAP-CLI-10** | `images/cliente/perfil-pedidos.png` | `https://pyme.rsfsecure.site/cliente/pedidos` | Historial de compras del cliente con timeline del estado del envío y descarga de factura. |

---

::: tip Nota: Consejo para capturas limpias
1. Abre tu navegador en ventana completa a resolución estándar **1920×1080** o **1440×900**.
2. Usa la herramienta de recorte de Windows (`Win + Shift + S`) para capturar la ventana del navegador.
3. Si deseas resaltar un botón o campo específico, usa un recuadro verde esmeralda (`#059669`) con grosor de 2px.
:::

