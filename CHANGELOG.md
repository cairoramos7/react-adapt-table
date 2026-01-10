# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.2] - 2026-01-09

### Fixed
- Retry deployment with correct Granular Access Token configuration.

## [0.2.1] - 2026-01-09

### Fixed
- Columns with `render` but without `dataIndex` (e.g., action columns) now render correctly.

## [0.2.0] - 2026-01-08

### Breaking Changes
- Removed default `Table` component. Use `TailwindTable` or `BootstrapTable` directly.
- Removed `variant` prop.

### Added
- New controlled components: `TailwindTable` and `BootstrapTable`.
- Support for external sort control via `onSort`, `sortColumn`, and `sortDirection` props.
- `'use client'` directive for better Next.js App Router support.
- `exports` field in `package.json` for modern bundler compatibility.

### Security
- Updated dependencies to resolve vulnerabilities.
## [0.1.0] - 2023-11-15

### Added

- Table component with support for Tailwind CSS and Bootstrap variants
- Complete TypeScript typing
- Usage documentation in README.md
- Build configuration with Vite
- Support for custom cell rendering