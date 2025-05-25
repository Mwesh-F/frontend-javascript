
# ALX Frontend JavaScript - TypeScript Projects

This repository contains my solutions to the ALX Frontend JavaScript TypeScript tasks. Each task focuses on core TypeScript concepts such as interfaces, classes, inheritance, type predicates, namespaces, declaration merging, and advanced typing techniques.

## Project Structure

All tasks are organized under the `0x04-TypeScript` directory.

Each task folder (`task_0`, `task_1`, etc.) contains relevant configuration files (`package.json`, `tsconfig.json`, `webpack.config.js`) and source code in TypeScript (`.ts` files).

Webpack is configured to compile the TypeScript code with zero type errors.

## Tasks Overview

### Task 0 - Creating a Student Interface & Rendering Table

- Defined a `Student` interface with properties: `firstName`, `lastName`, `age`, and `location`.
- Created two student objects and stored them in a `studentsList` array.
- Rendered a dynamic HTML table using Vanilla JavaScript showing student first names and locations.
- Ensured no TypeScript errors during build.

### Task 1 - Building a Teacher Interface & Extending it

- Created a `Teacher` interface with fixed and optional properties.
- Allowed dynamic properties via index signatures.
- Extended the `Teacher` interface to Directors by adding `numberOfReports`.
- Implemented a `printTeacher` function that formats names.
- Built a `StudentClass` with appropriate methods and interfaces.

### Task 2 - Advanced Types & Classes for Employees

- Created interfaces for `Director` and `Teacher` with distinct methods.
- Implemented classes `Director` and `Teacher` adhering to these interfaces.
- Built a factory function `createEmployee` to return instances based on salary input.
- Wrote type predicates and work execution functions to handle employee tasks.
- Used string literal types for restricted values (`Math` or `History`) and related functions.

### Task 3 - Ambient Namespaces & CRUD Operations

- Defined types and interfaces for database rows.
- Declared ambient namespaces for external CRUD functions.
- Imported and used these functions with typed parameters.
- Simulated insert, update, and delete operations with proper TypeScript declarations.

### Task 4 - Namespace & Declaration Merging

- Created a `Subjects` namespace with interfaces and classes for `Teacher`, `Cpp`, `Java`, and `React`.
- Used declaration merging to extend interfaces across files.
- Implemented methods to get requirements and available teachers for subjects.
- Demonstrated namespace usage by exporting constants and logging relevant output.

### Task 5 - Brand Convention & Nominal Typing

- Defined branded interfaces `MajorCredits` and `MinorCredits` to distinguish similar types.
- Created functions to sum credits while preserving type safety.
- Applied branding to avoid accidental interchange of similar numeric types.
