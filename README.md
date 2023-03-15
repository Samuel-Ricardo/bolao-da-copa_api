# Bolão da Copa - [API]

<p align="center"> 
  <a target="_blank" href="https://www.rocketseat.com.br/">
    <img width="auto" src="https://media.discordapp.net/attachments/1084951017264783441/1084951190615359559/image.png?width=1064&height=599"/>
  </a> 
</p>

<h4 align="center" >🚀 🟪 Next Level Week - Copa 2022 🟪 🚀</h4>



<h4 align="center">
  Application developed during a Full Stack Event, the <a target="_blank" style="color: #8a4af3;" href="https://github.com/topics/next-level-week">Next Level Week #10</a> promoted by <a target="_blank" style="color: #8a4af3;" href="https://www.rocketseat.com.br/">@Rocketseat</a>
</h4>

#

<br>

<p align="center"><img src="https://github.com/rocketseat-education/nlw-copa-ignite/raw/main/.github/logo.svg"/></p>


#
<p align="center">
  |&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#techs">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#run-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#author">Author</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

#

<h1 align="center">
  
  <a target="_blank" href="https://github.com/Samuel-Ricardo">
    <img src="https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=GITHUB"/>
  </a>

  <a target="_blank" herf="https://www.instagram.com/samuel_ricardo.ex/">
    <img src='https://img.shields.io/static/v1?label=&message=Samuel.ex&color=black&style=for-the-badge&logo=instagram'/> 
  </a>

  <a target="_blank" herf='https://www.linkedin.com/in/samuel-ricardo-cabral/'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=LinkedIn'/> 
  </a>

  <a target="_blank" herf='https://www.linkedin.com/in/samuel-ricardo-cabral/'>
    <img width="64px" src='https://seeklogo.com/images/R/rocketseat-logo-666CE4B396-seeklogo.com.png'/> 
  </a>

</h1>

<br>

<p id="project"/>

<h2>  | :artificial_satellite: About:  </h2>

<p align="justfy">
  This is a API that uses the NestJS framework, has as target service all this project applications (Web & Mobile). This application use Google Auth API to make login with a google account and JWT to keep authenticated for a while and agree a security auth, certificating that is the right user.
</p>

<p align="justfy">
  For database manegement was chosen the Prisma that abstract all the hard work and let us focus on the creative and structural part, with a security migration scheme (as a .git history for database alterations) provide a solid system that are compatible with too many databases. To server was used Fastfy instead express or other.
</p>

- Hosted on: <a  style="color: #8a4af3;" href="https://bolao-da-copa-nlw.onrender.com">Bolão da Copa - [API] </a> 

 - Repo: [Front-end] - <a style="color: #8a4af3;" href="https://github.com/Samuel-Ricardo/bolao-da-copa">Bolão Da Copa - [Landing Page]</a>
 - Repo: [Mobile] - <a style="color: #8a4af3;" href="https://github.com/Samuel-Ricardo/bolao-da-copa_mobile">Bolão Da Copa - [APP]</a>
  
  <br>

- This API is hosted on <a target="_blank" style="color: #8a4af3;" href='https://render.com/'> Render </a> 
- Current Version <b> 1.0.0 </b>

#

<p id="routes"/>

##  :construction: API Routes:

<h3><b> Base URL - https://bolao-da-copa-nlw.onrender.com </b></h3>

<br>

- <b> Users Routes - /users </b>

  <p> - Count - [GET]: /count  </p>

#

- <b> Auth Routes - / </b>

  <p> - Auth - [GET]: /me  </p>
  <p> - Register - [POST]: /users  </p>

# 

- <b> Betting groups Routes - / </b>

  <p> - Count - [GET]: /pool/count' </p>
  <p> - Get Pools - [POST]: /pools  </p>

#

- <b> Games Routes - /pools </b>

  <p> - Get games - [GET]: /:id/games' </p>
  
#

- <b> Guesses Routes - / </b>

  <p> - Count  - [GET]: /guesses/count' </p>
  <p> - Get Pools - [POST]: /pools/:poolId/games/:gameId/guesses  </p>

#

<p align="justfy">
	All routes have error coverage, some are accessible only to authenticated users.
</p>
  
#

<h2 id="techs">
  💻 | Technologies:  
</h2>

<p> - Google APIs</p>
<p> - Google Auth</p>
<p> - JavaScript</p>  
<p> - TypeScript</p>
<p> - NodeJS</p>
<p> - NestJS</p>
<p> - Prisma</p>
<p> - Fastfy</p>
<p> - CORS</p>
<p> - JWT</p>
<p> - zod</p>
<p> - short-unique-id</p>  
<p> - .env variables</p>

<br>
> Among Others...

#

<h2 id="run-project"> 
   👨‍💻 | How to use
</h2>

### Open your Git Terminal and clone this repository

```git
  $ git clone "git@github.com:Samuel-Ricardo/bolao-da-copa_api.git"
```

### Make Pull

```git
  $ git pull "git@github.com:Samuel-Ricardo/bolao-da-copa_api.git"
```


You need to have `NodeJS` on your machine and a package manager (`npm`, `yarn`, or other...) to interpret the code and install the dependecies.

> <a target="_blank" href="https://nodejs.org/en/"> <img width="48px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> </a>


```bash
  
  # To install all the dependencies 
  $ yarn  
  $ npm install

  # To run the project
  $ yarn run dev
  $ npm run dev

```

#

<h2 id="autor">
  :octocat: | Author:  
</h2>

> <a target="_blank" href="https://www.linkedin.com/in/samuel-ricardo-cabral/"> <img width="350px" src="https://github.com/Samuel-Ricardo/bolao-da-copa/raw/main/readme_files/IMG_20220904_220148_188.jpg"/> <br> <p> <b> - Samuel Ricardo</b> </p></a>

<h1>
  <a herf='https://github.com/Samuel-Ricardo'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=GITHUB'> 
  </a>
  
  <a herf='https://www.instagram.com/samuel_ricardo.ex/'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel.ex&color=black&style=for-the-badge&logo=instagram'> 
  </a>
  
  <a herf='https://twitter.com/SamuelR84144340'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=twitter'> 
  </a>
  
   <a herf='https://www.linkedin.com/in/samuel-ricardo-cabral/'>
    <img src='https://img.shields.io/static/v1?label=&message=Samuel%20Ricardo&color=black&style=for-the-badge&logo=LinkedIn'> 
  </a>
</h1>
