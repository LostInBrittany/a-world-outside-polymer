![hello, slim.js](./docs/slim2.png)

[![Build Status](https://semaphoreci.com/api/v1/eavichay/slim-js/branches/master/badge.svg)](https://semaphoreci.com/eavichay/slim-js)

[Chat on gitter](https://gitter.im/slim-js/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

# Hello, slim.js

# New In 2.7.0 - Typescript Support

## Slim is an elegant library for web components

Slim.js is a lightning fast library for development of native web-components. No black magic.
It uses javascript's inheritance mechanism to boost up HTML elements with superpowers. 

### Is this another framework
No! It's a slim code layer that adds superpowers to HTML elements using it's native class inheritance.

# Guide
[Read the guide](./docs/guide.md)

# Component's Lifecycle
The lifecycle containes the following abstract hooks

- onBeforeCreated()
- onCreated()
- onBeforeRender()
- onAfterRender()
- onBeforeUpdate()
- onAfterUpdate()

also attachment and detachment from the DOM tree invokes

- onAdded()
- onRemoved()

native attributeChangedCallback is also supported.

This is the component's full lifecycle:

- element declared on the DOM
- Initialization
- onBeforeCreated()*
- element creation + data binding
- onCreated()*
- onBeforeRender()*
- element renders
- render
- onAfterRender()*
- onBeforeUpdate()*
- update()
- onAfterUpdate()*

\* empty methods that can be implemented when inheriting a slim element.

## Standards compilant
- es6
- no transpiling or compilation required

## Tools free
- add Slim.js to your project and your'e good to go

## Examples
- [Creating a reusable component](./docs/creating_a_reusable_component_example.md)
- [Developer's Guide](./docs/guide.md)