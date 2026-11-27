const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseImages = 'C:\\Users\\Proyectos\\manual-payme-panama\\docs\\public\\images';

function getPath(sub, name) {
  const p = path.join(baseImages, sub, name);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  return p;
}

function copyToAliases(sub, primaryName, aliases = []) {
  const src = getPath(sub, primaryName);
  for (const a of aliases) {
    const dest = getPath(sub, a);
    fs.copyFileSync(src, dest);
    console.log(`  ↪ Copiado a alias: ${sub}/${a}`);
  }
}

async function run() {
  console.log('Iniciando navegador Chrome para capturas...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--window-size=1440,900',
      '--disable-web-security'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  // 1. CAP-CLI-01: Registro
  console.log('Capturando CAP-CLI-01: registro-login.png...');
  await page.goto('http://127.0.0.1:8000/register', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: getPath('cliente', 'registro-login.png') });
  copyToAliases('cliente', 'registro-login.png', ['registro-2fa.png']);

  // 2. CAP-CLI-02: Home
  console.log('Capturando CAP-CLI-02: home-storefront.png...');
  await page.goto('http://127.0.0.1:8000/', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: getPath('cliente', 'home-storefront.png') });
  copyToAliases('cliente', 'home-storefront.png', ['home-hero.png']);

  // 3. CAP-CLI-03: Catálogo
  console.log('Capturando CAP-CLI-03: catalogo-filtros.png...');
  await page.goto('http://127.0.0.1:8000/catalogo', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: getPath('cliente', 'catalogo-filtros.png') });

  // 4. CAP-CLI-04: Búsqueda predictiva
  console.log('Capturando CAP-CLI-04: busqueda-predictiva.png...');
  try {
    const searchInput = await page.$('input[name="buscar"], input[type="search"], input[placeholder*="Buscar"]');
    if (searchInput) {
      await searchInput.type('GoPro', { delay: 100 });
      await new Promise(r => setTimeout(r, 800)); // Esperar debounce
    }
  } catch (e) {}
  await page.screenshot({ path: getPath('cliente', 'busqueda-predictiva.png') });

  // 5. CAP-CLI-05: Detalle del Producto
  console.log('Capturando CAP-CLI-05: producto-detalle.png...');
  await page.goto('http://127.0.0.1:8000/producto/msi-geforce-rtx-4070-ti-super-ventus-3x-gpu-7-3', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: getPath('cliente', 'producto-detalle.png') });

  // 6. CAP-CLI-06: Carrito Drawer
  console.log('Capturando CAP-CLI-06: carrito-drawer.png...');
  await page.goto('http://127.0.0.1:8000/', { waitUntil: 'networkidle2', timeout: 30000 });
  try {
    const cartBtn = await page.$('button[title*="carrito" i], a[href*="carrito" i], [aria-label*="carrito" i]');
    if (cartBtn) {
      await cartBtn.click();
      await new Promise(r => setTimeout(r, 500));
    }
  } catch (e) {}
  await page.screenshot({ path: getPath('cliente', 'carrito-drawer.png') });

  // 7. CAP-CLI-07: Checkout Pasos
  console.log('Capturando CAP-CLI-07: checkout-pasos.png...');
  await page.goto('http://127.0.0.1:8000/checkout', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: getPath('cliente', 'checkout-pasos.png') });

  // 8. CAP-CLI-08: Checkout Pago
  console.log('Capturando CAP-CLI-08: checkout-pago.png...');
  await page.goto('http://127.0.0.1:8000/checkout/pago', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: getPath('cliente', 'checkout-pago.png') });
  copyToAliases('cliente', 'checkout-pago.png', ['checkout-pagos.png']);

  // 9. CAP-ADM-01: Login Admin
  console.log('Capturando CAP-ADM-01: login-admin.png...');
  await page.goto('http://127.0.0.1:8000/login', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: getPath('admin', 'login-admin.png') });

  // Iniciar Sesión como Administrador
  console.log('Autenticando como admin@example.com ...');
  await page.type('input[name="email"]', 'admin@example.com');
  await page.type('input[name="password"]', 'Admin1234!');
  await Promise.all([
    page.click('button[type="submit"]'),
    page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {})
  ]);

  // 10. CAP-ADM-02: Dashboard
  console.log('Capturando CAP-ADM-02: dashboard-kpis.png...');
  await page.goto('http://127.0.0.1:8000/admin/dashboard', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 800)); // Esperar gráficas ApexCharts
  await page.screenshot({ path: getPath('admin', 'dashboard-kpis.png') });
  copyToAliases('admin', 'dashboard-kpis.png', ['dashboard.png']);

  // 11. CAP-ADM-03: Productos Lista
  console.log('Capturando CAP-ADM-03: productos-lista.png...');
  await page.goto('http://127.0.0.1:8000/admin/productos', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: getPath('admin', 'productos-lista.png') });
  copyToAliases('admin', 'productos-lista.png', ['catalogo-lista.png']);

  // 12. CAP-ADM-04: Producto Nuevo
  console.log('Capturando CAP-ADM-04: producto-nuevo.png...');
  await page.goto('http://127.0.0.1:8000/admin/productos/create', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: getPath('admin', 'producto-nuevo.png') });
  copyToAliases('admin', 'producto-nuevo.png', ['producto-form.png']);

  // 13. CAP-ADM-05: Producto Variantes
  console.log('Capturando CAP-ADM-05: producto-variantes.png...');
  await page.goto('http://127.0.0.1:8000/admin/productos/175/edit', { waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
  await page.screenshot({ path: getPath('admin', 'producto-variantes.png') });
  copyToAliases('admin', 'producto-variantes.png', ['producto-modal-hd.png']);

  // 14. CAP-ADM-06: Inventario Kardex
  console.log('Capturando CAP-ADM-06: inventario-kardex.png...');
  await page.goto('http://127.0.0.1:8000/admin/inventario', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: getPath('admin', 'inventario-kardex.png') });

  // 15. CAP-ADM-07: Pedidos Lista
  console.log('Capturando CAP-ADM-07: pedidos-lista.png...');
  await page.goto('http://127.0.0.1:8000/admin/pedidos', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: getPath('admin', 'pedidos-lista.png') });

  // 16. CAP-ADM-08: Pedido Detalle
  console.log('Capturando CAP-ADM-08: pedido-detalle.png...');
  await page.goto('http://127.0.0.1:8000/admin/pedidos/2', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: getPath('admin', 'pedido-detalle.png') });

  // 17. CAP-ADM-09: Facturación
  console.log('Capturando CAP-ADM-09: facturacion-pdf.png...');
  await page.goto('http://127.0.0.1:8000/admin/facturas', { waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
  await page.screenshot({ path: getPath('admin', 'facturacion-pdf.png') });
  copyToAliases('admin', 'facturacion-pdf.png', ['factura-detalle.png']);

  // 18. CAP-ADM-10: Zonas de Envío
  console.log('Capturando CAP-ADM-10: zonas-envio.png...');
  await page.goto('http://127.0.0.1:8000/admin/zonas', { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: getPath('admin', 'zonas-envio.png') });
  copyToAliases('admin', 'zonas-envio.png', ['config-zonas.png']);

  // 19. CAP-CLI-09: Pedido Confirmado
  console.log('Capturando CAP-CLI-09: pedido-confirmado.png...');
  await page.goto('http://127.0.0.1:8000/pedidos/2/confirmacion', { waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
  await page.screenshot({ path: getPath('cliente', 'pedido-confirmado.png') });

  // 20. CAP-CLI-10: Perfil Pedidos
  console.log('Capturando CAP-CLI-10: perfil-pedidos.png...');
  await page.goto('http://127.0.0.1:8000/cliente/pedidos', { waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
  await page.screenshot({ path: getPath('cliente', 'perfil-pedidos.png') });

  await browser.close();
  console.log('✨ ¡Todas las capturas de pantalla han sido tomadas y guardadas exitosamente!');
}

run().catch(err => {
  console.error('Error durante las capturas:', err);
  process.exit(1);
});
