
## Stencil Monorepo starter

Monorepo that houses sample component libraries:
- Stencil web component library
- React library (React wrapper library generated from Stencil web component library)
- Vue library (Vue wrapper library generated from Stencil web component library)


## Getting started
Click [here](core/README.md#components) to learn how to use our components.


## Local development
At the root of project in your terminal, run `npm install`

[Lerna](https://lerna.js.org/) is used for managing and publishing packages in this repo.

**Installing and symlinking dependencies via Lerna**

Run `lerna bootstrap` in the terminal. This will npm install all the packages (`core`, `react`, `vue`)

## Running tests 
In the terminal, run `lerna run test`.

## Building packages and publishing
- To build packages run `lerna run build`
- To publish packages run `lerna publish --conventional-commits`

