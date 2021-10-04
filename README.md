# yashry-cataloge-front

E-commerce application to interact with products and filter them by Color, Ratings and Price.

### Production

## [yashry-cataloge-front](https://yashry-cataloge-front.vercel.app/)

![Screenshot from 2021-10-04 19-17-20](https://user-images.githubusercontent.com/52901348/135895378-bd432b08-b6f8-43b5-95cc-2e8525f10656.png)

## Prerequisites

required packages on your machine:

1. `Node.js`
2. `yarn`

## Install and Use

To install the project you have to:

1. Clone the repository:
   `git clone https://github.com/atwfk/yashry-cataloge-front.git` or the `ssh url`.

2. Install packages:
   `yarn`

3. Run the project:
   `yarn dev`

4. Run the tests:
   `yarn test`

5. Open storybook:
   `yarn storybook`

6. Build Project:
   `yarn build`

7. lint staged files:
   `npx lint-staged`

## Dependencies

The project is built:-

1. **NextJs**: for server side rendering - production ready - typescript support and dynamic routing.

2. **TailwindCSS**: for utility classes and building reusable components with a set of variants.

3. **Typescript**: for static type checking and catch any type error on run time.

4. **Storybook**: for building dumb component and preview it in isolation and ensure it built in pixel perfect UI.

5. **Jest & testing-library**: for unit testing.

## Folder Structure

The main folder structure of the code is structured like the following:

```typescript
├── modules
│   ├── example // The module name
│   │   ├── api
│   │   │   ├── exampleOne
│   │   │   │   ├── helpers
│   │   │   │   │    ├── exampleOneHelpers.ts
│   │   │   │   │    └── exampleOneHelpers.test.ts
│   │   │   │   ├── exampleOne.ts
│   │   │   │   └── exampleOne.test.ts
│   │   ├── components
│   │   │   └── ComponentOne
│   │   │       ├── IComponentOne.d.tsx
│   │   │       └── ComponentOne.tsx
│   │   │       └── ComponentOne.test.tsx
│   │   ├── pages
│   │   │   └── Page.tsx
│   └── shared
│       ├── api
│       │   └── example1.ts
│       ├── components
│       │   └── atoms
│       │       └── AtomOne
│       │               ├── IAtomOne.d.ts
│       │               ├── AtomOne.tsx
│       │               ├── AtomOne.module.css
│       │               ├── AtomOne.stories.tsx
│       │               └── AtomOne.test.tsx
│       │   └── molecules
│       │       └── MoleculeOne
│       │               ├── IMoleculeOne.d.ts
│       │               ├── MoleculeOne.tsx
│       │               ├── MoleculeOne.module.css
│       │               ├── MoleculeOne.stories.tsx
│       │               └── MoleculeOne.test.tsx
│       │   └── organisms
│       │       └── OrganismOne
│       │               ├── IOrganismOne.d.ts
│       │               ├── OrganismOne.tsx
│       │               ├── OrganismOne.module.css
│       │               ├── OrganismOne.stories.tsx
│       │               └── OrganismOne.test.tsx
│       ├── logic
│       │   └── exampleLogic
│       │               └── IExampleLogic.d.ts
│       │               └── exampleLogic.ts
│       │               └── exampleLogic.test.ts
│       └── types
│           └── IType.d.ts
├── pages
│   ├── api
│   │   └── hello.ts
│   ├── _app.tsx
│   ├── example.tsx
│   └── index.tsx
├── public
│   └── favicon.ico
├── styles
│   └── globals.css
├── README.md
```
