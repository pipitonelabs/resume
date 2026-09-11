# Resume App

A modern, interactive resume built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. Features dark mode toggle, responsive design, and print-friendly styling.

## Features

- **Dark Mode**: Toggle between light and dark themes (defaults to dark).
- **Responsive**: Optimized for desktop and mobile.
- **Print-Friendly**: Clean PDF export with proper page breaks.
- **Containerized**: Docker image with Nginx for easy deployment.
- **CI/CD**: Automated builds, vulnerability scanning, and releases via GitHub Actions.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

## Docker

Build locally:
```bash
docker build -t resume .
docker run -p 8080:80 resume
```

## Deployment

Images are automatically built and pushed to GHCR on pushes to `main`. Use FluxCD or Helm for Kubernetes deployment.

Example HelmRelease:
```yaml
image:
  repository: ghcr.io/josephpipitone/resume
  tag: v1.0.0@sha256:...  # From latest release
```

## Security

- Trivy scans for vulnerabilities on each build.
- Results uploaded to GitHub Security tab.

## License

© 2025 Joseph Pipitone. All rights reserved.