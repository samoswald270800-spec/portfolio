# Serve the static portfolio on Railway with Caddy.
#
# Using an explicit Dockerfile (instead of relying on Railpack's static-site
# auto-detection) makes the build deterministic and lets the bundled Caddyfile
# set a Content-Security-Policy that permits the blob:, data: and 'unsafe-eval'
# features this page needs to unpack and render itself. Railpack's default
# static CSP forbade those, which left the deployed page blank.
FROM caddy:2-alpine

# Static site content -> /app (matches the Caddyfile's SITE_ROOT default).
COPY index.html /app/index.html
COPY assets /app/assets

# Caddy runs /etc/caddy/Caddyfile by default. Railway injects $PORT at runtime;
# the Caddyfile listens on {$PORT:80}.
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
