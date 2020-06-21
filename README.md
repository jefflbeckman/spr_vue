# spr_vue

## Steps to install
1) Setup an base server
```
    apt-get update
    apt-get upgrade
    apt-get install nginx libnginx-mod-rtmp vim ffmpeg
```
2) Checkout this repo
```
    git clone https://github.com/jefflbeckman/spr_vue.git /var/spr_vue
```
3) Configure nginx
```
    cp spr_vue/nginx_confs/nginx.conf /etc/nginx/nginx.conf
    cp spr_vue/nginx/spr /etc/nginx/sites-enabled/spr
```

## Steps to modify
Add a component to spr\_vue/spr/src/components
Add that component to spr\_vue/spr/src/App.vue
