# 5. Cómo Atender los Pedidos y Despachar los Paquetes

El módulo de **Pedidos** ([https://pyme.rsfsecure.site/admin/pedidos](https://pyme.rsfsecure.site/admin/pedidos)) es donde el equipo de ventas y despacho gestiona el día a día: revisar pagos, preparar pedidos y enviarlos con el mensajero.

---

## 5.1 Lista General de Pedidos

<div class="screenshot-box">
 <div class="screenshot-header">
 <div class="screenshot-dots">
 <span class="screenshot-dot red"></span>
 <span class="screenshot-dot yellow"></span>
 <span class="screenshot-dot green"></span>
 </div>
 <span class="screenshot-title">Listado de Pedidos y Estados de Entrega</span>
 <span class="screenshot-url">https://pyme.rsfsecure.site/admin/pedidos</span>
 </div>
 <div class="screenshot-body">
 <img src="/images/admin/pedidos-lista.png" alt="Listado de Pedidos y Estados de Entrega" />
 </div>
</div>

---

## 5.2 El Ciclo de un Pedido (De la compra a la entrega)

Todos los pedidos avanzan por estas etapas:

```
[ Pendiente de Pago ] ──(Pago Verificado)──> [ Pagado / Confirmado ]
 │
 (Empacado en Almacén)
 ▼
[ Entregado al Cliente ] <──(Confirmado por Courier)── [ Enviado ] <── [ En Preparación ]
```

---

## 5.3 Cómo procesar un pedido paso a paso

Haz clic en cualquier pedido para abrir su detalle ([https://pyme.rsfsecure.site/admin/pedidos/...](https://pyme.rsfsecure.site/admin/pedidos/...)):

<div class="screenshot-box">
 <div class="screenshot-header">
 <div class="screenshot-dots">
 <span class="screenshot-dot red"></span>
 <span class="screenshot-dot yellow"></span>
 <span class="screenshot-dot green"></span>
 </div>
 <span class="screenshot-title">Ficha de Atención del Pedido y Asignación de Guía</span>
 <span class="screenshot-url">https://pyme.rsfsecure.site/admin/pedidos/...</span>
 </div>
 <div class="screenshot-body">
 <img src="/images/admin/pedido-detalle.png" alt="Ficha de Atención del Pedido y Asignación de Guía" />
 </div>
</div>

### Paso a paso para atenderlo:
1. **Revisar el Pago:**
 * Si pagó con **Yappy** o **Tarjeta**, el sistema ya lo marcó automáticamente como **"Pagado"**.
 * Si pagó por **Transferencia ACH**, verás la imagen del comprobante bancario que subió el cliente. Revisa en tu banca en línea que el dinero esté disponible y cambia el estado a **"Pagado"**.
2. **Empacar los Productos:**
 * Cambia el estado a **"En Preparación"**.
 * El personal de bodega busca los artículos en las estanterías y los empaca de forma segura.
3. **Entregar al Mensajero o Transporte:**
 * Cambia el estado a **"Enviado"**.
 * Selecciona la empresa (Servientrega, Uno Express, Mensajero Propio) y escribe el **Número de Guía**.
 * Al guardar, el cliente recibirá un mensaje con su número de guía para que pueda rastrear su paquete.
4. **Entrega Final:**
 * Cuando la empresa de transporte o el mensajero confirme la entrega en mano, marca el pedido como **"Entregado"**.
