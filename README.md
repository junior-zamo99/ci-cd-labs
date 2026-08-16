# Laboratorios de CI/CD con NestJS

Repositorio base para los laboratorios del Módulo 4 del diplomado. El proyecto
contiene una aplicación NestJS mínima en `app/` y un primer pipeline de
Integración Continua implementado con GitHub Actions.

## Laboratorio 1: Primer Pipeline de Integración Continua

El workflow `.github/workflows/pipeline.yml` se ejecuta automáticamente después
de cada `push`. También puede iniciarse manualmente desde la pestaña **Actions**
de GitHub.

El pipeline realiza las siguientes operaciones:

1. Descarga el contenido del repositorio.
2. Muestra un mensaje de bienvenida.
3. Muestra la fecha y hora de ejecución.
4. Muestra la versión de Git instalada en el runner.
5. Muestra información del sistema operativo.
6. Finaliza correctamente.

En este primer laboratorio el pipeline todavía no compila la aplicación. La
compilación y las pruebas automatizadas se incorporarán progresivamente en los
siguientes laboratorios.

## Estructura

```text
ci-cd-labs/
├── .github/
│   └── workflows/
│       └── pipeline.yml
├── app/
│   ├── src/
│   ├── test/
│   ├── hello.txt
│   └── package.json
├── docs/
│   └── analisis-laboratorio1.md
└── README.md
```

## Ejecutar la aplicación NestJS localmente

Requisitos: Node.js y npm.

```bash
cd app
npm install
npm run start:dev
```

La aplicación estará disponible en `http://localhost:3000` y responderá
`Hello World!`.

## Publicar el repositorio

Después de crear un repositorio vacío llamado `ci-cd-labs` en GitHub:

```bash
git remote add origin https://github.com/USUARIO/ci-cd-labs.git
git push -u origin main
```

Reemplazar `USUARIO` por el nombre de usuario de GitHub. El `push` iniciará el
pipeline automáticamente.

## Evidencias pendientes

Una vez ejecutado el workflow en GitHub, se deben conservar:

- URL pública o privada del repositorio.
- Captura del pipeline finalizado correctamente.
- Captura de los pasos y registros del job `Verificar entorno de CI`.
- Copia del archivo `pipeline.yml`.
- Documento PDF con las respuestas del análisis.
