cómo cambiar  el tiempo en el código siguiente:

```js
setTimeout(() => {
    crearNotificacion();
}, segundos * 1000);
```

##Convertir a días, semanas o meses

✅ Días
```js
setTimeout(() => {
    crearNotificacion();
}, dias * 24 * 60 * 60 * 1000);
```

✅ Semanas
```js
setTimeout(() => {
    crearNotificacion();
}, semanas * 7 * 24 * 60 * 60 * 1000);
```js

✅ Meses (aproximado)
```js
setTimeout(() => {
    crearNotificacion();
}, meses * 30 * 24 * 60 * 60 * 1000);
```
⚠️ Ojo importante
setTimeout no es fiable para tiempos tan largos (días/semanas/meses).
Puede fallar si:
el navegador se cierra
el usuario recarga la página
el sistema entra en reposo
💡 Alternativa más robusta

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
