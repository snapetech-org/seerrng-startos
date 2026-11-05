# SeerrNG on StartOS

This wrapper packages [SeerrNG](https://github.com/snapetech/seerrng) using
`docker.io/snapetech/seerrng:v3.27.1` for x86_64 and aarch64 StartOS systems.
It persists the application database and settings at `/app/config` and serves
the web UI on port 5055.

```sh
npm ci
npm run check
npm run build
make
start-sdk verify s9pk seerrng.s9pk
```

The package must be sideload-tested on StartOS before marketplace submission.
Start9's current submission path is the wrapper-repo link plus package details
sent to `submissions@start9labs.com`.

Upstream: <https://github.com/snapetech/seerrng>

The wrapper uses StartOS SDK 4.0.0 and its dependency builder API. Regenerate the lockfile from a clean dependency tree when upgrading the SDK to avoid retaining obsolete bundled tooling.

## Security scanning

Run scripts/security-scan-local.sh for local Semgrep Community Edition and applicable Trivy scans. GitHub Actions scans use private ephemeral JIT runners. CodeQL is disabled. See docs/security-scanning.md for offline setup and updates. Run scripts/install-security-hooks.sh once to enable the staged Semgrep pre-commit hook.
