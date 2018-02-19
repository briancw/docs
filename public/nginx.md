## Nginx Examples

#### Simple Example
# Catch all foo.whicheloe.us requests
```
server {
  listen 80 default_server;
  listen [::]:80 default_server ipv6only=on;

  return 404;
}

#### Proxy requests to a node App
```
server {
  listen 80;
  server_name whicheloe.us www.whicheloe.us;

  location ~ ^/\.well {
    root /var/www/certbot;
    try_files $uri $uri/ =404;
  }

  # Redirect all trafic to https
  location / {
    return 301 https://$server_name$request_uri;
  }
}
```
