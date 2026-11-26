# Finanzas & Hábitos

Dashboard personal que junta en una sola app **finanzas, hábitos, diario y objetivos**. Funciona en el navegador, se instala como app en el celular y puede mandar reportes y recordatorios por email a través de n8n.

🔗 **Demo en vivo:** https://finanzasyhabitos.netlify.app/

## Qué hace

### Cuentas y configuración
- Registro e inicio de sesión locales (varios usuarios en el mismo dispositivo, contraseñas hasheadas con SHA-256).
- Asistente inicial para elegir la moneda (más de 30 monedas) y definir el presupuesto mensual por categoría.

### Finanzas
- Registro de ingresos y gastos con categoría, fecha, descripción y **foto del ticket**.
- Resumen del mes: ingresos, gastos, balance y porcentaje de ahorro.
- Meta de ingresos mensual con barra de progreso.
- Presupuesto por categoría con aviso cuando te pasás.
- **Metas de ahorro** ("chanchitos") a las que vas sumando aportes.
- Gráficos con Chart.js: últimos 6 meses, gastos por categoría y proyección del mes.
- **Puntaje de salud financiera** calculado a partir de ahorro, presupuesto y hábitos.

### Calendario y diario
- Calendario con mapa de calor por gastos, hábitos cumplidos o estado de ánimo.
- Por cada día: estado de ánimo, entrada de diario, hábitos, eventos y gastos.
- Eventos con color, hora, confirmación por email y recordatorio un día antes.

### Objetivos y hábitos
- Objetivos de tipo hábito diario, meta o personal, con historial y rachas.
- **Logros desbloqueables** (primer ingreso, día perfecto, semana sin pasarse del presupuesto, mes perfecto, etc.) con confeti.

### Integración con n8n
- **Reporte semanal:** envía a un webhook de n8n el resumen de la semana (ingresos, gastos por categoría, cumplimiento de hábitos) y n8n lo manda por email en HTML.
- **Recordatorios de eventos** por email.
- La app genera el workflow de n8n listo para importar, así no hay que armarlo a mano. La URL del webhook se configura en Ajustes.

### Otros
- Exportar a CSV y JSON, e importar desde JSON (backup).
- Tema claro / oscuro y vista compacta.
- Versículo del día en el inicio.

## Tecnología

- HTML, CSS y JavaScript vanilla (`finanzas-tracker.html` + `finanzas-tracker.js`).
- [Chart.js](https://www.chartjs.org/) para los gráficos.
- **PWA** con `manifest.json` y service worker para instalarla y usarla offline.
- Datos guardados en `localStorage`, separados por usuario. No hay backend propio.
- n8n como servicio externo opcional para emails.

## Correrlo localmente

Serví la carpeta con un servidor estático y abrí `index.html`. Para los emails, importá en n8n el workflow que genera la app desde Ajustes y pegá la URL del webhook.

> Nota: como los datos viven en el navegador, borrar los datos del sitio borra todo. Usá la exportación a JSON como backup.

---

Proyecto de portfolio de **Sebastián Soba**.
