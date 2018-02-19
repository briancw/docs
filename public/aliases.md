```
alias cds='cd ~/Sites/'
alias cdp='cd ~/Projects/'
alias mip='ipconfig getifaddr en0 | pbcopy && ipconfig getifaddr en0'
alias cpssh='cat ~/.ssh/id_ed25519.pub | pbcopy && cat ~/.ssh/id_ed25519.pub'

brename() {
  for file in *$1; do mv "$file" "${file%$1}$2"; done
}

clone() {
    cp -a $1/* $2
    cp -a $1/.* $2
}

realpath() { echo $(cd $(dirname $1); pwd)/$(basename $1); }

rf() {
    echo -e $'Are you sure you want to delete \e[31m' $(realpath $1) $'\e[0m?'

    select yn in "Yes" "No"; do
        case $yn in
            Yes ) rm -rf $1; break;;
            No ) echo "Good call..."; break;;
        esac
    done

}

ip() {
    a=`dig +short myip.opendns.com @resolver1.opendns.com`
    echo $a | pbcopy
    echo "$a"
}

mkapp() {
    mkdir $1
    cd $1
    yarn init -y
    echo "Project built!"
}

cdp() {
    cd ~/Projects/$1
}

cds() {
    cd ~/Sites/$1
}

_finish() {
    local cur=${COMP_WORDS[COMP_CWORD]}
    COMPREPLY=( $(compgen -W "$(ls $1)"  -- $cur) )
}

_cdscomplete() {
    _finish ~/Sites
}

_cdpcomplete() {
    _finish ~/Projects
}

complete -F _cdscomplete cds
complete -F _cdpcomplete cdp
```
