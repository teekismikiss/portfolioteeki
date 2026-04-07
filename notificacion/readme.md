*__Cómo cambiar  el tiempo en el código siguiente:__*

```js
setTimeout(() => {
    crearNotificacion();
}, segundos * 1000);
```

## Convertir a días, semanas o meses

**Días**
```js
setTimeout(() => {
    crearNotificacion();
}, dias * 24 * 60 * 60 * 1000);
```

**Semanas**
```js
setTimeout(() => {
    crearNotificacion();
}, semanas * 7 * 24 * 60 * 60 * 1000);
```

**Meses**


```js
setTimeout(() => {
    crearNotificacion();
}, meses * 30 * 24 * 60 * 60 * 1000);
```
 **_Ojo importante_**

setTimeout no es fiable para tiempos tan largos (días/semanas/meses).
Puede fallar si:
+ el navegador se cierra
+ el usuario recarga la página
+ el sistema entra en reposo


**Alternativa más robusta**

Para tiempos largos, es mejor:

Guardar una fecha futura:
```js
const fechaObjetivo = Date.now() + (semanas * 7 * 24 * 60 * 60 * 1000);
localStorage.setItem('notificacion', fechaObjetivo);
Comprobar periódicamente:
setInterval(() => {
    const objetivo = localStorage.getItem('notificacion');
    if (Date.now() >= objetivo) {
        crearNotificacion();
    }
}, 60000); // cada minuto
```

**Guardas la fecha exacta de la cita**

```js
function programarRecordatorioVacuna(fechaCita) {
    const fechaObjetivo = new Date(fechaCita).getTime();
    localStorage.setItem('recordatorioVacuna', fechaObjetivo);

    verificarRecordatorio(); // por si ya toca
}

// Verifica si ya es momento de notificar
function verificarRecordatorio() {
    const objetivo = localStorage.getItem('recordatorioVacuna');
    if (!objetivo) return;

    const ahora = Date.now();

    if (ahora >= objetivo) {
        crearNotificacion();
        localStorage.removeItem('recordatorioVacuna');
    }
}

// Revisa cada minuto
setInterval(verificarRecordatorio, 60000);
```
*_Opcional_*
function crearNotificacion() {
    if (Notification.permission === "granted") {
        new Notification("💉 Recordatorio de vacuna", {
            body: "Tienes una cita programada",
        });
    } else {
        Notification.requestPermission();
    }
}

**_Solo funciona si la página está abierta _**

**_Bonus útil_**

Puedes mejorar el recordatorio avisando antes:
```js

const avisoPrevio = 24 * 60 * 60 * 1000; // 1 día antes
const fechaAviso = fechaObjetivo - avisoPrevio;

```js

