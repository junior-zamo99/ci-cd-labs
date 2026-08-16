# Análisis del Laboratorio 1

## 1. ¿Qué evento inició el pipeline?

El evento `push`, configurado en la sección `on` del workflow de GitHub
Actions. El pipeline también admite una ejecución manual mediante el evento
`workflow_dispatch`.

## 2. ¿Cuánto tiempo tardó en ejecutarse?

La ejecución completa tardó **11 segundos**. El job `Verificar entorno de CI`
tardó **6 segundos**.

## 3. ¿En qué sistema operativo se ejecutó?

Se ejecutó en Linux Ubuntu porque el job utiliza `runs-on: ubuntu-latest`. El
paso `Mostrar información del sistema operativo` presenta en los logs la
información detallada del sistema mediante el comando `uname -a`.

## 4. ¿Qué runner ejecutó el pipeline?

Un runner hospedado por GitHub con la etiqueta `ubuntu-latest`. El nombre del
runner asignado a la primera ejecución fue `GitHub Actions 1000000003` y
pertenece al grupo `GitHub Actions`.

## 5. ¿Qué información muestran los logs?

Los logs muestran la descarga del repositorio, el mensaje de bienvenida, la
fecha y hora, la versión de Git, la información del sistema operativo y la
confirmación de que el pipeline terminó correctamente.

## 6. ¿Qué ocurriría si el archivo YAML contiene un error de sintaxis?

GitHub Actions no podría interpretar correctamente el workflow. La plataforma
mostraría un error de configuración o de sintaxis y el pipeline no comenzaría
sus jobs hasta que el archivo fuera corregido y se enviara un nuevo cambio.

## Datos de la entrega

- **Estudiante:** completar nombre y apellidos.
- **Fecha de ejecución:** 16 de agosto de 2026, 20:09 (hora de Bolivia).
- **URL del repositorio:** https://github.com/junior-zamo99/ci-cd-labs
- **Duración del pipeline:** 11 segundos.
- **Resultado:** exitoso (`success`).
