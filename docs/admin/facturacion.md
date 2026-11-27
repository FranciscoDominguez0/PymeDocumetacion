# 6. Cómo Imprimir Facturas y Hacer Anulaciones

El módulo de **Facturación** ([https://pyme.rsfsecure.site/admin/facturas](https://pyme.rsfsecure.site/admin/facturas)) te permite generar e imprimir facturas con formato fiscal válido para Panamá con el **7% de ITBMS** desglosado, tanto en formato carta para oficina como en ticket térmico para paquetería.

---

## 6.1 Cómo ver e imprimir una Factura

Cada vez que un pedido pasa al estado **Pagado**, el sistema genera automáticamente su factura correspondiente:

<div class="screenshot-box">
 <div class="screenshot-header">
 <div class="screenshot-dots">
 <span class="screenshot-dot red"></span>
 <span class="screenshot-dot yellow"></span>
 <span class="screenshot-dot green"></span>
 </div>
 <span class="screenshot-title">Vista de Factura Fiscal para Imprimir</span>
 <span class="screenshot-url">https://pyme.rsfsecure.site/admin/facturas/...</span>
 </div>
 <div class="screenshot-body">
 <img src="/images/admin/facturacion-pdf.webp" alt="Vista de Factura Fiscal para Imprimir" loading="lazy" decoding="async" />
 </div>
</div>

### Tienes dos formatos disponibles:
1. **Factura Completa (PDF Carta/A4):**
 * Es el formato tradicional con todos los datos legales.
 * Ideal para clientes comerciales, reclamos de garantía o para archivar en tu contabilidad.
2. **Ticket Térmico (80mm o 58mm):**
 * Diseñado para impresoras de punto de venta (las impresoras pequeñas de rollo).
 * Es el que se suele grapar o pegar por fuera de la caja o sobre del paquete para la entrega rápida.

---

## 6.2 Cómo Anular una Factura o Devolver una Venta

Si un cliente canceló su pedido antes de salir de bodega, o si hubo una devolución justificada:

1. Entra a la factura en el panel administrativo.
2. Haz clic en el botón rojo **"Anular Factura / Nota de Crédito"**.
3. El sistema te pedirá escribir el **Motivo de la Anulación** (por ejemplo: *"Cliente solicitó cancelación antes del envío"*).
4. Confirma la anulación.
5. **¿Qué hace el sistema automáticamente?**
 * Las unidades vendidas regresan de inmediato al inventario disponible para que otro cliente pueda comprarlas.
 * La factura queda registrada como Anulada en tus reportes para mantener tu cuadre de caja transparente.
