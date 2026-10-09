# Publicar Notaría 80 en producción

Este proyecto genera un sitio estático en `out/`. No necesita base de datos, servidor de formularios ni variables secretas. El despliegue utiliza las funciones actuales: asistente que prepara el mensaje, WhatsApp, llamadas y mapa bajo solicitud.

## 1. Preparar la entrega

Desde Terminal:

```sh
cd /ruta/a/notaria80
npm ci
npm run lint
npm run typecheck
npm run build
npm start
```

Use Node.js 24 LTS. `npm ci` instala las versiones fijadas en `package-lock.json`. El build prepara los assets y genera `out/`; necesita acceso a Internet para descargar las fuentes durante la compilación. En producción las fuentes se sirven desde el propio sitio.

Abra `http://localhost:3080`. Si ese puerto está ocupado, use `PORT=3081 npm start`. `npm start` sirve la exportación; `npm run dev` es solo para desarrollo.

Para ejecutar las comprobaciones existentes desde otra terminal, con el servidor activo:

```sh
cd /ruta/a/notaria80
npx playwright install chromium
npm run test:e2e
```

Si usó el puerto alternativo: `TARGET_URL=http://localhost:3081 npm run test:e2e`.

## 2. Publicar en Vercel desde esta carpeta

No es necesario crear un repositorio remoto. Inicie sesión y vincule la carpeta al proyecto correcto de su cuenta:

```sh
npx vercel login
npx vercel link
```

En el panel del proyecto, configure la entrega como sitio estático:

| Ajuste | Valor |
| --- | --- |
| Framework Preset | Other |
| Root Directory | Raíz del proyecto |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `out` |
| Node.js Version | 24.x |
| Variables de entorno obligatorias | Ninguna |

`vercel.json` ya declara el comando de build, `out/`, las cabeceras y las redirecciones del sitio anterior. Conserve ese archivo en la raíz. Solo se sirve el contenido de `out/`, no la documentación fuente del proyecto.

Genere primero una vista previa:

```sh
npx vercel deploy
```

Abra la URL devuelta y compruebe las páginas y los enlaces de contacto. Para publicar la misma versión del código en el entorno de producción:

```sh
npx vercel deploy --prod
```

La CLI vincula el despliegue al proyecto elegido. Si ya existe uno para la notaría, selecciónelo durante `vercel link`.

## 3. Conectar el dominio

En Vercel, abra el proyecto → Settings → Domains y añada `notaria80gdl.mx`. Añada también `www.notaria80gdl.mx` y configúrelo para redirigir al dominio sin `www`, que es el utilizado por los metadatos y el sitemap.

En el proveedor DNS del dominio, introduzca exactamente los registros A, CNAME o de verificación que indique Vercel para ese proyecto. No utilice una IP o CNAME copiados de una guía antigua. Puede mantener el proveedor DNS actual; no necesita cambiar los nameservers. Conserve los registros MX, SPF, DKIM y DMARC existentes para no afectar el correo.

Espere a que Vercel muestre el dominio correctamente configurado y el certificado HTTPS activo. Mantenga disponible el alojamiento anterior hasta comprobar el nuevo dominio.

## 4. Comprobar la publicación

- Abra directamente `/servicios/`, una página de servicio, `/proceso/`, `/instalaciones/`, `/notaria/`, `/contacto/` y `/aviso-de-privacidad/`; recargue cada una para comprobar que funciona fuera de la navegación interna.
- Pruebe «Agendar cita», botón flotante, barra móvil y asistente. WhatsApp debe dirigirse a **33 1170 4104**; los teléfonos deben abrir llamadas. Abrir el mensaje de prueba no requiere enviarlo.
- Compruebe que el mapa aparece al solicitarlo y que el aviso integral es accesible desde el pie y el asistente.
- Abra `/nosotros.html`, `/servicios.html`, `/ubicacion.html`, `/index.html` y `/mobile/`; deben redirigir según `vercel.json`.
- Compruebe `/sitemap.xml`, `/robots.txt` y una ruta inexistente, que debe responder con la página 404. El aviso conserva su exclusión de buscadores; sigue siendo accesible por enlace directo.
- Revise una pantalla móvil y una de escritorio. Las mediciones locales no sustituyen las comprobaciones sobre el dominio desplegado.

## 5. Actualizar o restaurar

Para posteriores cambios, repita lint, typecheck y build; después `npx vercel deploy` y `npx vercel deploy --prod`.

Para restaurar, abra Deployments en el proyecto y utilice la opción de rollback al despliegue de producción anterior disponible. Conserve la versión de código correspondiente y no elimine el despliegue anterior durante el lanzamiento.

## Referencias oficiales

- [Publicar con Vercel CLI](https://vercel.com/docs/projects/deploy-from-cli).
- [Configuración de build y directorio de salida](https://vercel.com/docs/builds/configure-a-build).
- [Conectar un dominio](https://vercel.com/docs/domains/working-with-domains/add-a-domain).
- [Configuración de vercel.json](https://vercel.com/docs/project-configuration/vercel-json).

Esta guía describe la publicación; no modifica el DNS ni despliega automáticamente el sitio.
