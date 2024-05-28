---
title: UCI Gitlab - Publica una web usando Gitlab Pages
description: Si deseas hacer pública una web gratis y en la UCI puedes usar el GitLab de la UCI para hacer pruebas sin gastar datos 😜
date: 2024-05-27
author: Daniel Labañino
imageUrl: https://i.ytimg.com/vi/TWqh9MtT4Bg/maxresdefault.jpg
tags:
- tutorial
- gitlab
---

Si, estoy seguro de que muchos quieren publicar sus webs sin tanto esfuerso y sin gastar dinero. Y aunque hay maneras de hacerlo gratis en internet, para hacer pruebas y ahorrar datos, además de exponer una *url* para que otras personas puedan acceder a sitio (*también sin gastar*) se puede usar [UCI GitLab](http://gitlab.prod.uci.cu)

## Paso a Paso 

##### 1. Inicia en [GitLab](https://gitlab.prod.uci.cu)
![](https://raw.githubusercontent.com/leonardof02/noob-blog/main/public/images/como-publicar-una%20web-con-gitlab-uci/Screenshot%20(39).png)
Lo primero por supuesto es acceder nuestro [GitLab](https://gitlab.prod.uci.cu) con tu cuenta UCI. Es parecido a GitHub pero cuenta con un poco mas de opciones a la hora de hacer *despliegues*. Por esto se usa más en producción.

##### 2. Crea un nuevo repositorio
![](https://raw.githubusercontent.com/leonardof02/noob-blog/main/public/images/como-publicar-una%20web-con-gitlab-uci/Screenshot%20(40).png)

##### 3. Crear desde plantilla
![](https://raw.githubusercontent.com/leonardof02/noob-blog/main/public/images/como-publicar-una%20web-con-gitlab-uci/Screenshot%20(41).png)

##### 3. Selecciona **Pages/Plain HTML**
![](https://raw.githubusercontent.com/leonardof02/noob-blog/main/public/images/como-publicar-una%20web-con-gitlab-uci/Screenshot%20(42).png)

##### 3. Agrega un nombre al repositorio
![](https://raw.githubusercontent.com/leonardof02/noob-blog/main/public/images/como-publicar-una%20web-con-gitlab-uci/Screenshot%20(43).png)

> **IMPORTANTE**
>> La url final será: http://[user].gitlab.prod.uci.cu/[repo-name]

## Listo para Despliegue
Ahora solo queda lo típico, usar *git* para clonar el repositorio y poner tu web en la carpeta public, *git push* y listo 😁.

Esto porsupuesto tiene sus límites. El primero y más importante es que solo es visible dentro de la red UCI, pero por lo demás no hay muchos problemas.

Gracias por llegar hasta el final.

[![](https://img.shields.io/badge/texelh4ck-GitHub?logo=github&color=rgb(20%2C20%2C20)
)](https://github.com/texelh4ck/)