# Updating the upstream version

This package wraps Start9 Labs' own [seerrng](https://github.com/Start9Labs/seerrng) source, which we build and publish ourselves as `ghcr.io/start9labs/seerrng`. "Upstream" here means that source repo, not the image namespace.

## Determining the upstream version

- **seerrng** ([Start9Labs/seerrng](https://github.com/Start9Labs/seerrng)) — fetch the latest release tag:

  ```sh
  gh release view -R Start9Labs/seerrng --json tagName -q .tagName
  ```

  The current pin lives in `startos/manifest/index.ts` at `images['seerrng'].source.dockerTag` (the version after the `:` in `ghcr.io/start9labs/seerrng:<version>`).

## Applying the bump

- Bump `dockerTag` in `startos/manifest/index.ts` to `ghcr.io/start9labs/seerrng:<new version>` (drop the leading `v` from the release tag).
