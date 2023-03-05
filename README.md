# Kanban Board Angular

<p align="center">
	
<img src="https://user-images.githubusercontent.com/57604500/222979597-2e3fa267-07df-49fb-a55a-c58dda48aab1.png" width=1056 height=550>
<br />
<h3 align="center">Kanban Board App</h3>
</p>

### My Setup and Working process: 

* To create project run this,

```
 ng new kanban-board-angular --style=scss --routing=true
```
* Install Bulma,

```
  npm install bulma --save
```

* Model = Data
* View = HTML
* Controller = Typescript Class
#### Angular Modules problems:

* Duplicates Modules
* Circular Dependency
* Harder to manage overall.

* To create components, run this,

```
  ng g c pages/MainView
```

* To add Angular CDK Materials,
```
   ng add @angular/material

```

```
   npm install @angular/cdk --save

```

## Default Setup:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
