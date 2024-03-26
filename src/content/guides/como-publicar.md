---
title: ¿Cómo publicar un artículo?
---

¿Tienes ganas aportar a la comunidad con tu conocimiento? Puedes crear tu propio artículo abriendo un pull request en Github con el contenido que quieras publicar en formato Markdown. La ventaja de esto es que puedes aprender además a contribuir a proyectos de código abierto en GitHub y ganarte tu primer logro por contribuir Pull Shark.

No conoces Markdown? No hay problema [Chequea aquí](https://es.wikipedia.org/wiki/Markdown)

Aquí puedes seguir una serie de pasos para publicar contenido:

#### Paso 1: Crear una cuenta de GitHub

Visita https://github.com: Ve a GitHub y haz clic en "Sign up" en la esquina superior derecha. Regístrate completando el formulario de registro con tu nombre, correo electrónico y una contraseña y confirma tu cuenta. Si eres programador y no tienes perfil de GitHub es un buen momento para que te crees uno.

#### Paso 2: Forkear el repositorio

Busca el repositorio del blog en GitHub: https://github.com/ucidevs/ucidevs.github.io
Una vez ahí haz clic en el botón "Fork" en la esquina superior derecha de la página del repositorio. Esto creará una copia del repositorio en tu cuenta de GitHub.

![Como hacer Fork](/images/guias/como-publicar/fork.png)

#### Paso 3: Crea una rama

Una vez hecho el fork ya tendrás el repositorio clonado en tus repositorios personales. Lo puedes comprobar porque acá te lo dice
![Despues de hacer fork](/images/guias/como-publicar/after-fork.png)

Ahora lo siguiente es crearse una rama para que redactes tu artículo, para esto da click en este botón y dentro le haces click a New Branch en la parte superior derecha. Para crear una nueva rama.
![Botón Crear Rama](/images/guias/como-publicar/create-branch-button.png)

Una vez creada la nueva rama podemos cambiar a ella a través de este menú, clickamos aquí para cambiar la rama.
![Cambiar Rama](/images/guias/como-publicar/change-branch.png)

#### Paso 4: Redacta el artículo

Para redactar el artículo muévete hacia la siguiente dirección en el repositorio: `/src/content/blog/` y ahí creas un nuevo archivo .md.

> **NOTA:** el nombre no debe contener espacios ni caracteres especiales Ej. como-sacar-el-github-student-developer-pack.md.

![Crear nuevo archivo](/images/guias/como-publicar/create-new-file.png)

Cada artículo tiene que comenzar con estos metadatos en el frontmatter, si tienes dudas puedes guiarte por otros artículos anteriores de esa misma carpeta.

```yaml
---
title: # Titulo que va a aparecer en grande
description: # Una pequeña descripción del artículo
date: # Fecha de hoy o de cuando hayas publicado
author: # Tu nombre
imageUrl: # URL de la imagen del artículo (busca una por internet)
tags:
- tutorial # Cada una tiene un -
- github # No pongas más de las necesarias aceptables son menos de 3
---

# Aquí va el contenido del blog
```

> **OJO:** Cada uno de estos elementos debe estar en el articulo escrito sino no se aceptará el contenido, puedes copiar y pegar lo que hay arriba en el artículo.

Luego de redactar el artículo le haces commit al archivo, para guardarlo en tu rama.

![Hacer commit al nuevo archivo](/images/guias/como-publicar/commit-file.png)

#### Paso 5: Haz un pull request

Una vez guardado los cambios en tu rama debería aparecer que hiciste commit recientemente y que puedes hacer pull request. Para esto le damos al botón compare y pull request, rellenamos el pull request con un nombre y una descripción y pues ya está lo que queda es esperar a que se acepte tu publicación. Una vez aceptada GitHub te notificará saldrá en la página principal

![Botón de Pull Request](/images/guias/como-publicar/pull-request-button.png)
![Hacer un Pull Request](/images/guias/como-publicar/make-pull-request.png)

> **Pull Request** (PR) es una solicitud que el programador de otra rama o fork hace al propietario del repositorio para que este incorpore los cambios realizados por el programador. Este proceso permite revisar y discutir los cambios antes de integrarlos al código principal, facilitando la colaboración y el control en proyectos de desarrollo de software.

Estos pasos no son muy distintos a trabajar y contribuir en un software de código abierto y tampoco es muy distinto a como se trabaja en equipo en entornos reales así que los invitamos a todos a contribuir con el blog redactando artículos.
