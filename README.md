# ABOUT PROJECT
This project help all people that need to use a public API to search photos and albums by ID or TITLE.

***

## Installation
1. Clone repository or download files
2. npm install - to install all dependencies for the package file
3. create a .env file and put in those code lines
```
PORT = 5003
API_PHOTOS = "https://jsonplaceholder.typicode.com/photos"
API_ALBUMS = "https://jsonplaceholder.typicode.com/albums"
API_USERS = "https://jsonplaceholder.typicode.com/users"
```
4. run project with node index.js

***
## Usage

_How can you use this project_

**GET HTTP**

* /api/photos -> obtain all photos
* /api/photos/:id -> obtain only one photo by id
* /api/albums/:title -> obtain all photos with the albums title 
* /api/users/:name -> obtain photos with the user name


## Features
1. express
2. dotenv
3. axios
4. jest
5. supertest