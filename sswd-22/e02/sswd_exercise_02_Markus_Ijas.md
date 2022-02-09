# Server-Side Web Development - Exercise 01

*Student: Markus Ijäs*

Help to complete the tasks of this exercise can be found from the chapter 3 ”Creating a Node.js Module” of our course book “Get Programming with Node.js” by Jonathan Wexler and from the chapter “Exploring Node.js Modules” of the supplementary course book “Node.js Web Development” by David Herron. The aims of this exercise are 1) to learn to understand and to use Node.js modules and 2) to give the skills needed to work with NPM package manager.

Embed your theory answers, drawings, codes, and screenshots directly into this document. Always immediately after the relevant question. Return the document in itsLearning by the deadline.

It’s also recommendable to use Internet sources to supplement the information provided by the course book.

The maximum number of points you can earn from this exercise is 10.

## Tasks:

### 1. Modules in Node.js. (4 * 0,5 = 2 points)



#### a. What are the benefits of using modules?

#### b. What is a module in Node.js?

#### c. What are the module formats that can be used with Node.js?

#### d. What are the main differences between these module formats?


### 2. Understanding and using NPM. (4 * 0,5 + 1 = 3 points)

*Use books and visit the web site https://docs.npmjs.com/. Answer the questions below.*

#### a. What is NPM? Explain the purpose and the three main components of it. (0.5 points)



#### b. For what can npm be used for? (0.5 points)



#### c. Explain the purpose and the details of the (fake) package.json file below. (0.5 points)

```json
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "An example project",
  "main": "src/main.js"
  "scripts": {
    "start": "npm run dev",
    "test": "npm run unit",
  },
  "dependencies": {
    "express": "^4.5.2"
  },
  "devDependencies": {
    "babel-core": "^6.22.1",
    "babel-loader": "^7.1.1"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  }
}
```



#### d. Write npm CLI commands to (1 point)



##### a. initialize a Node.js project directory for your application so that package.json file is also created



##### b. install a package as a dependency to your application



##### c. install a package as a development dependency to your application



##### d. install a certain version of a package as a development dependency to your application



##### e. try to update one of the installed packages



##### f. remove one of the installed packages



##### g. modify the package.json so that you can start your application by writing npm start



##### h. install a package globally on your computer



##### i. download a node.js application and install all its dependencies with one npm command



#### e. Explain shortly. (0.5 points)

##### a. What does the folder node_modules contain



##### b. What does the global installation mean?



##### c. Should the contents of the folder node_modules be uploaded into a version control repository and why?



### 3. Program a Node.js module with CommonJS format (2 points)

Program a Node.js module “evaluator”, which can be used to give a grade for a student by using a custom evaluation scale.

The module exports two functions. The first function’s signature is setEvaluationScale(scale). The argument scale is of a type array.
The example below clarifies the structure of the scale argument.

```
[{ grade: 1, points: 20},{ grade: 2, points: 35},
{ grade: 3, points: 50},
{ grade: 4, points: 65},{ grade: 5, points: 80}]
```

The feature points is the minimum number of points that the student needs to collect to get the grade given in the feature grade. In case all the points are more than the student has collected, then the student gets the grade 0.

The second function’s signature is getGrade(points). The argument points is the number of points a student has collected. The functions returns the grade for the given points.

Please note that if someone tries to call function getGrade before the evaluation scale is set, then a message ‘There is no evaluation scale defined.’ is returned.

Require the module and test that it functions as expected by calling its methods.

**Answers**



### 4. Program a Node.js module with ES6 format (1 point)

*Program the previous module “evaluator” again. This time, implement it as a ES6 module. Also the module that imports it should be an ES6 module. Test that everything works.*



### 5. Module variables __dirname and __filename. (1 point)

#### a. Program a Node.js module with CommonJS format that prints the contents of these variables to the console.



#### b. Program a Node.js module with ES6 format that creates these variables and prints their contents of to the console.



### 6. Node.js core modules (4 * 0.25 = 1 point)

#### a. What are Node.js core modules?

*Visit the address https://nodejs.org/api/index.html. Answer the following questions.*

##### b. What is that site?



##### c. Check the link About this documentation. What do you find there?



##### d. Check the link Path. What do you find there?

