# Documentation:
  * What this API does:





  This project is practice in creating a basic API/HTTP server. It is an HTTP server, using a router. We have an object constructor making "toy" objects with four parameters (toy name, toy description, material used (ie- plastic), and the price of the toy). The goal is to POST (create) this toy object, PUT, GET and DELETE this object from the server. This is also practice in having a single 'in-memory' resource/model for persistence (only while the server is running). We are recreating the basic functionality of ExpressJS as a router. After this practice in building our own router functionality (??) we will learn more about using just Express going forward.

# Goals:
  * We will work with application, router, and 3rd party middleware through the use of express.js.
  * We will be able to implement custom middleware through the use of express.js.
  * We will be able to create custom routers for a specific resource.

# Any resources that helped me complete this assignment:


# How another dev could 'get started' with my api on their own:
      - How do you clone this project?
      First fork from my repository, then clone from your repo, then create a branch.
      - How do you start using this project?
          1. You will need to have NodeJS installed on your machine.
          2. You will need to install httpie in one terminal window.
          3. Then start up nodemon in a separate terminal window.


- To get an object in terminal, paste this to test (we're able to do this with the http client- superagent to make request on the server side to test for objects like this one):
http POST :3000/api/toy name=barney desc='purple dino' price='$10' material=plastic

- Example responses:
* I realize the following is probably not what is being asked of me, but it's all I've got right now.
    - Then the following good request info is displayed in terminal:
    ```


    ```

# Packages and commands to remember:
  - In package.json's scripts, add- "start:debug": "DEBUG=http* nodemon server.js",

  - npm install (for node modules) -
  - npm install httpie -
  - npm install superagent - DONE
  - npm install uuid -
  - npm install -D jest -
    - npm test

  - node server.js or just nodemon (depending on the day??)
    - rs (restart, if needed)
  - run start: watch -
  - npm run start: debug -

  - npm run debugger - DONE
  - npm install bluebird (sets this as a dependency in package.json) -DONE

  I added the following to my package.json scripts:
  "debugger": "node inspect server.js",

  Then in terminal, within the project directory, type:
  npm run debugger

    - You should then see:
    > node inspect server.js

# Collaborators:
Michelle, Aaron, Isaac and Said.
