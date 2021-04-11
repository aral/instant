# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.1] - 2021-04-11

## Fixed

  - Remove the Firefox timeout/disconnection fix as it was causing a double load at the start. I can’t seem to replicate the issue in latest versions of Firefox.

## [1.1.0] - ???

No notes.

## [1.0.7] - 2020-02-04

### Added

  - Multiple roots support. [See issue.](https://github.com/fgnass/instant/issues/6#issuecomment-69348881)

## [1.0.6] - 2019-10-28

### Fixed

  - Reimplement the Firefox timeout/disconnection fix on host localhost when page is reloaded from memory cache with better understanding of the scope of the problem.

## [1.0.4, 1.0.5] - 2019-10-26

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
