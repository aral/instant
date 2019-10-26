# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

Nothing yet.

## [1.0.4] - 2019-10-26

### Fixed

  - Firefox disconnection issues 30 seconds after page load and on page reload.

## [1.0.3] - 2019-10-25

### Changed

  - Update sendevent module to latest version.

## [1.0.2] - 2019-10-25

### Fixed

  - Formatting in readme.

## [1.0.1] - 2019-10-25

### Fixed

  - Ensure cleanUp/graceful shutdown functionality is only active if not bypassed.
  - Ensure cleanUp() method exists whether bypass is requested or not.

## [1.0.0] - 2019-10-25

First release of fork.

### Fixed

  - All security and other warnings from npm.

### Added

  - Graceful shutdown: performs housekeeping and exposes method for manually removing file system watchers.
