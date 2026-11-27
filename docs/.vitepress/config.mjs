import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'es-PA',
  title: 'PayMe Panamá',
  description: 'Manual de Usuario y Operaciones del Sistema eCommerce PyME',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#059669' }]
  ],

  themeConfig: {
    siteTitle: 'PayMe Panamá Docs',
    logo: '/logo.svg',
    
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Buscar en el manual...',
            buttonAriaLabel: 'Buscar en el manual'
          },
          modal: {
            noResultsText: 'No se encontraron resultados para',
            resetButtonTitle: 'Borrar búsqueda',
            footer: {
              selectText: 'para seleccionar',
              navigateText: 'para navegar',
              closeText: 'para cerrar'
            }
          }
        }
      }
    },

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Manual de Administración', link: '/admin/' },
      { text: 'Manual del Cliente', link: '/cliente/' },
      { 
        text: 'Acceso al Sistema', 
        items: [
          { text: 'Tienda en Vivo', link: 'https://pyme.rsfsecure.site' },
          { text: 'Panel Administrativo', link: 'https://pyme.rsfsecure.site/admin/dashboard' }
        ]
      }
    ],

    sidebar: {
      '/admin/': [
        {
          text: 'Panel Administrativo',
          items: [
            { text: '1. Visión General y Acceso', link: '/admin/' },
            { text: '2. Dashboard y KPIs de Ventas', link: '/admin/dashboard' },
            { text: '3. Gestión de Catálogo y Variantes', link: '/admin/productos' },
            { text: '4. Control de Inventario y Kardex', link: '/admin/inventario' },
            { text: '5. Flujo y Estados de Pedidos', link: '/admin/pedidos' },
            { text: '6. Facturación y Anulaciones', link: '/admin/facturacion' },
            { text: '7. Envíos, Cupones y Configuración', link: '/admin/configuracion' }
          ]
        }
      ],
      '/cliente/': [
        {
          text: 'Portal del Cliente (Tienda Online)',
          items: [
            { text: '1. Introducción al Cliente', link: '/cliente/' },
            { text: '2. Registro, Seguridad y Direcciones', link: '/cliente/cuenta' },
            { text: '3. Catálogo y Búsqueda Predictiva', link: '/cliente/catalogo' },
            { text: '4. Ficha de Producto y Galería HD', link: '/cliente/producto' },
            { text: '5. Carrito de Compras y Cupones', link: '/cliente/carrito' },
            { text: '6. Checkout y Métodos de Pago', link: '/cliente/checkout' },
            { text: '7. Seguimiento, Facturas y Devoluciones', link: '/cliente/pedidos' }
          ]
        }
      ]
    },

    outline: {
      level: [2, 3],
      label: 'En esta página'
    },

    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    },

    darkModeSwitchLabel: 'Apariencia',
    returnToTopLabel: 'Volver arriba',
    sidebarMenuLabel: 'Menú de navegación',

    footer: {
      message: 'Documentación Oficial del Sistema PayMe Panamá — Versión 2.1',
      copyright: 'Copyright © 2026 PayMe Panamá. Todos los derechos reservados.'
    }
  }
})
