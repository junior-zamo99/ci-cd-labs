# Análisis del Laboratorio 1

## 1. ¿Qué evento inició el pipeline?

El evento `push`, configurado en la sección `on` del workflow de GitHub
Actions. El pipeline también admite una ejecución manual mediante el evento
`workflow_dispatch`.

## 2. ¿Cuánto tiempo tardó en ejecutarse?

**Pendiente de evidencia:** registrar aquí la duración indicada por GitHub
Actions después de realizar el primer `push`.

## 3. ¿En qué sistema operativo se ejecutó?

Se ejecutará en Linux Ubuntu porque el job utiliza `runs-on: ubuntu-latest`.
Después de la ejecución, completar la respuesta con la versión exacta mostrada
en los logs del paso `Mostrar información del sistema operativo`.

## 4. ¿Qué runner ejecutó el pipeline?

Un runner hospedado por GitHub para Ubuntu. Después de la ejecución, registrar
el nombre y la versión de la imagen que aparezcan en los detalles del job.

## 5. ¿Qué información muestran los logs?

Los logs muestran la descarga del repositorio, el mensaje de bienvenida, la
fecha y hora, la versión de Git, la información del sistema operativo y la
confirmación de que el pipeline terminó correctamente.

## 6. ¿Qué ocurriría si el archivo YAML contiene un error de sintaxis?

GitHub Actions no podría interpretar correctamente el workflow. La plataforma
mostraría un error de configuración o de sintaxis y el pipeline no comenzaría
sus jobs hasta que el archivo fuera corregido y se enviara un nuevo cambio.

## Datos de la entrega

- **Estudiante:** completar.
- **Fecha de ejecución:** completar.
- **URL del repositorio:** completar.
- **Duración del pipeline:** completar.
- **Resultado:** completar.
