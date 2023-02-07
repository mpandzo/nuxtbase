# Dockerise a PocketBase and Nuxt project with ease.

The stack is declared in stack/stack.yml. Docker-compose creates 3 containers, one for PocketBase, one for NuxtJs and one for a landing page that can be used as your starting point. Make is used for running declared targets. 

## Ports

8000 - Landing page
8001 - PocketBase
8002 - Nuxt

## Local development

Run dockerised containers using Make:

```
make dev
```

One docker-compose does it's thing, access landing page to proceed:

```
http://localhost:8000
```

