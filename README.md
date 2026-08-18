# Laboratorios de CI/CD con NestJS

Repositorio evolutivo para los laboratorios del Módulo 4 del diplomado. El
proyecto contiene una aplicación NestJS en `app/` y un pipeline de Integración
Continua implementado con GitHub Actions.

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

En este primer laboratorio el pipeline todavía no compilaba la aplicación. La
compilación se incorpora en el Laboratorio 2 y las pruebas automatizadas se
integrarán en el Laboratorio 3.

## Laboratorio 2: Branching, Pull Requests y build automatizado

El trabajo se desarrolla en ramas de funcionalidad y se integra a `main`
mediante Pull Requests. El pipeline se ejecuta automáticamente con dos eventos:

- `push` sobre cualquier rama;
- `pull_request` dirigido a `main`.

Además de verificar el entorno, el pipeline utiliza Node.js 24, instala las
dependencias con `npm ci` y compila la aplicación NestJS con `npm run build`.
Un fallo durante la instalación o la compilación detiene el job y evita que la
validación sea exitosa.

### Funcionalidad agregada

La rama `feature/add-project-info` incorpora el endpoint:

```http
GET /project-info
```

Respuesta esperada:

```json
{
  "name": "ci-cd-labs",
  "module": "Módulo 4 - CI/CD",
  "framework": "NestJS",
  "version": "1.0.0",
  "status": "active"
}
```

## Laboratorio 3: Pruebas automatizadas y Quality Gate

El pipeline incorpora un tercer job llamado `Ejecutar pruebas unitarias`. Este
job comienza únicamente después de que la compilación finaliza correctamente y
ejecuta Jest mediante `npm run test:ci`.

La ejecución genera y publica dos artefactos descargables en GitHub Actions:

- `reporte-pruebas-<número>`: reporte JUnit en formato XML;
- `reporte-cobertura-<número>`: reporte HTML, LCOV y Cobertura XML.

Si una prueba falla, el job queda en estado fallido y el pipeline no supera el
Quality Gate. Los pasos de publicación utilizan `always()` para conservar los
reportes disponibles incluso cuando la validación encuentra un error.

Para ejecutar la misma validación localmente:

```bash
cd app
npm ci
npm run test:ci
```

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

La aplicación estará disponible en `http://localhost:3000`.

- `GET /` responde `Hello World!`.
- `GET /project-info` devuelve la información del proyecto.

## Publicar el repositorio

Después de crear un repositorio vacío llamado `ci-cd-labs` en GitHub:

```bash
git remote add origin https://github.com/USUARIO/ci-cd-labs.git
git push -u origin main
```

Reemplazar `USUARIO` por el nombre de usuario de GitHub. El `push` iniciará el
pipeline automáticamente.

## Evidencias del Laboratorio 3

Después de publicar la rama, se deben conservar:

- Captura del pipeline con los tres jobs finalizados correctamente.
- Captura de los registros del job `Ejecutar pruebas unitarias`.
- Captura de los artefactos de pruebas y cobertura.
- Captura de una ejecución fallida provocada por una prueba.
- Captura de la ejecución corregida y exitosa.
- Copia del archivo `pipeline.yml`.
- Documento PDF con las respuestas del análisis.
