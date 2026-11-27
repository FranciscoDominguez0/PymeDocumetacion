# 4. Cómo Controlar el Inventario en Bodega

El módulo de **Inventario** ([https://pyme.rsfsecure.site/admin/inventario](https://pyme.rsfsecure.site/admin/inventario)) te permite saber exactamente cuántas unidades tienes en almacén, registrar la llegada de nueva mercancía y hacer ajustes si algo se dañó o se extravió.

---

## 4.1 Historial de Entradas y Salidas (Kardex)

Cada vez que se vende un artículo en la tienda, el sistema descuenta automáticamente la unidad vendida. Del mismo modo, cuando llega mercancía de los proveedores, se registra como una entrada:

<div class="screenshot-box">
 <div class="screenshot-header">
 <div class="screenshot-dots">
 <span class="screenshot-dot red"></span>
 <span class="screenshot-dot yellow"></span>
 <span class="screenshot-dot green"></span>
 </div>
 <span class="screenshot-title">Control de Inventario y Movimientos de Almacén</span>
 <span class="screenshot-url">https://pyme.rsfsecure.site/admin/inventario</span>
 </div>
 <div class="screenshot-body">
 <img src="/images/admin/inventario-kardex.png" alt="Control de Inventario y Movimientos de Almacén" />
 </div>
</div>

---

## 4.2 Cómo registrar llegada de mercancía nueva

Cuando recibas un pedido de tu proveedor:
1. Entra a **Inventario** y pulsa **"+ Registrar Entrada de Mercancía"**.
2. Busca el producto que llegó.
3. Escribe la cantidad de unidades que estás metiendo a la bodega (ej. `+50`).
4. *(Opcional)* Escribe el número de factura de tu proveedor o código de compra para tus registros contables.
5. Haz clic en **"Guardar Entrada"**. El stock en la tienda pública se actualizará inmediatamente y los clientes ya podrán comprarlo.

---

## 4.3 Cómo hacer un ajuste por daño o conteo físico

Si durante un conteo físico descubres que falta un artículo o una caja se dañó:
1. Haz clic en **"Ajuste de Inventario"** en el producto correspondiente.
2. Selecciona **"Ajuste por Merma / Daño"**.
3. Indica cuántas unidades vas a restar (ej. `-2`).
4. Escribe una nota breve explicando la razón (ej. *"Caja rota en bodega, producto dañado"*).
5. Pulsa en **"Guardar Ajuste"** para que el inventario del sistema cuadre exactamente con lo que tienes físicamente en los estantes.
