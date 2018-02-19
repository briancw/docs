# SSH

.ssh/config

SSH and SCP will use the file ~/.ssh/config if it exists.

This can save significant time when using AWS servers as it saves having to supply an identity file in commands

An entry for a server looks like the following:

Host whicheloe.us
User ubuntu
IdentityFile "~/Dropbox/pem/server-live.pem"
If a User is added to the config, it will no longer be required when using ssh/scp

Check the key type of all ssh keys:

for keyfile in ~/.ssh/id_*; do ssh-keygen -l -f "${keyfile}"; done | uniq
Generating a more secure SSH key

RSA 1024/2048 are no longer considered secure. When generating an ssh key on a new machine please use a more secure algorithm.

ssh-keygen -o -a 100 -t ed25519
