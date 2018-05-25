## A Tale Of Two Frameworks

## John Coumbe, Oxford, May 26 2018

#### Introduction

- Nominal roll, register students
- Introductions, course format, coffee, WIFI.
- Slides
- JS ecosystem: ES5, ES6, Node, jQuery, Angular, React, functional programming.
- Setup: Github account, StackBlitz

#### Javascript review

- Objects, arrays, functions, variables
- Copy by reference/by value
- Loosely typed, case sensitive language
- Scope including run-time this/bind.
- Arrow, let/const, destructuring, templates strings, classes, modules
- Functional programming : Map, filter, reduce, forEach, pure functions

		https://stackblitz.com/edit/ox-fw-js-review

- Template literals in ES6 and their relevance to frameworks.

		https://stackblitz.com/edit/ox-fw-es6-tmpl

#### Typescript

- Adding strict types to Javascript
- A compile-time, not a run-time technology.

		https://stackblitz.com/edit/ox-fw-typescript
		
- Example composition

		https://stackblitz.com/edit/ox-fw-ng-shop-starter
		
- Review a more advanced example with services and JSON data.

#### Angular

- The structure of an Angular app.
- **Components** combine logic, state, markup, style and a custom HTML element.
- Angular apps are a **composition** of components.
- Data is passed down to components using **Inputs**.
- Events are fired from components as **Outputs**.
- Exercises:

		Create a new Angular project in StackBlitz
		
- Create a shopping basket application

		https://stackblitz.com/edit/ox-fw-ng-shop-starter
		
- Review a more complex implementation of the shop application

		https://stackblitz.com/edit/ox-fw-ng-shop-complete

- Complete a **phrase book** using composition

		https://stackblitz.com/edit/ox-fw-ng-translate
	
- Complete a **game** using events

		https://stackblitz.com/edit/ox-fw-ng-game
				
- Angular use **RxJS**: Reactive extensions to Javascript. This programming paradigm uses Observables: objects which manage an async stream of data.

		https://stackblitz.com/edit/ox-fw-js-observables
		
- Using **Observables** in Angular forms

		https://stackblitz.com/edit/ox-fw-ng-forms
		
- The **Redux** state management pattern in Angular.
- This aims to **isolate** application state in one place.
- State is held in a **store**.
- Application code fires off **actions**.
- Some custom code that you write called a **reducer** makes decisions based on these actions about how to update the store.
- When the store changes, **subscribers** are notified. 

		https://stackblitz.com/edit/ox-fw-ng-redux

#### React

- Stateless components with composition using ES5 and ES6 syntax.

		https://stackblitz.com/edit/ox-fw-react-book
		
- Shopping basket using components, map, props and state.

		https://stackblitz.com/edit/ox-fw-react-fruit

- The Container-Presentation pattern makes a separation between stateful/logic components and stateless/view components.

		https://stackblitz.com/edit/ox-fw-container-pres
		
- React makes extensive use of ES6 modules. Review import/export syntax.

		https://stackblitz.com/edit/ox-fw-react-modules
		
- Create four instances of a panel component that manages its own state.
- Review runtime scope problems with **this** and **bind**.

		https://stackblitz.com/edit/ox-fw-react-state
		
- Using the Redux state management pattern in React

		https://stackblitz.com/edit/ox-fw-react-redux
		
##### john.coumbe@gmail.com