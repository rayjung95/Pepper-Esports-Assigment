# Pepper-Esports-Assigment
This project is an assignment that requires **django backend api server** with **react.js frontend** to create Todo App

## Code Structure

```
my-app
├── README.md
├── django
└── react_interface
```
## Installing and Running Django API server - Backend

**You’ll need to have Python 3.7.x and Django 2.x on your local development machine**

```sh
cd django
pipenv install --dev

cd todo_project
python3 manage.py runserver
```
It will start django api server which allow **POST, DELETE, GET Methods** on **http://127.0.0.1:8000**

## python3 manage.py test


```sh
cd todo_project
python3 manage.py test
```

It will run the test which includes <br>
- Test for **GET-API** all Todo Items
- Test for **POST-API** a Todo Item
- Test for **DELETE-API** a Todo Item


## Installing and Running React.js App - Frontend

```sh
cd react_interface
npm install or yarn install
npm start or yarn start
```
It will start React.js Todo App on **http://localhost:3000**
