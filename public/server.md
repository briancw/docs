## Setup Node Server

Install NVM:
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh | bash
```
Exit and reconnect to let NVM initialize properly

Install a version of Node
```bash
nvm install 6
```
Determine where Node is installed

```bash
which node
```

Enable node to bind privledged ports using the location you just retrieved:
```bash
sudo setcap 'cap_net_bind_service=+ep' /home/ubuntu/.nvm/versions/node/v6.7.0/bin/node
```

### Swap
sudo dd if=/dev/zero of=/swap bs=1024 count=2M
sudo chmod 600 /swap
sudo mkswap /swap
sudo swapon /swap
