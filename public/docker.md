# Docker Commands

https://github.com/urbitassociates/docker-images

# Instal Docker Compose
curl -L https://github.com/docker/compose/releases/download/$dockerComposeVersion/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

### Remove all volumes
```bash
docker volume rm `docker volume ls -q -f dangling=true`
```
