# Task-Manager-Angular-Crash-Course

I created this Task Manager while learning Angular for the first time. 
This webApp is using json server as a server and html to communicate with it. 
In the frontend side we have 2 routes and few components made with buttons, forms, text and more. 
we have real time updating UI compounents in the UI in real time. 

DEMO:
https://www.youtube.com/watch?v=6iKup8nCGCM

---------------------------------------------------

# AngularCrash

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Using the terminal at the project folder / vs code terminal

Install JsonServer in the folder using: `npm install -g json-server`

Devide on server port: `json-server --watch db.json --port 5000`

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.




## Run

In the same terminal run `ng serve` for running the app. 

Open a new VS code terminal and run: npm run server

In browser go to [http://localhost:5000/tasks](http://localhost:5000/tasks) and make sure you can see a json file. 

In brouwser go to [http://localhost:4200/](http://localhost:4200/) to use the app. 


For more information about the server side [click here](https://www.npmjs.com/package/json-server)



## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

------------------
This app was created using this video guidence:
https://www.youtube.com/watch?v=3dHNOWTI7H8

