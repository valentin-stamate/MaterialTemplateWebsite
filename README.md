# Material Template Website

This is *one page* presentation template. It can be used for cv, learning how to use **Material desig For Web**, or just a site about yourself in general (hobby's, passions etc), etc.   
This template is build with [Material Design](https://material.io/develop/web/), [Express](https://expressjs.com/), and [Webpack](https://webpack.js.org/).   
Font Awesome and Icon sources: [Konpa](https://konpa.github.io/devicon/), [Fontawesome](https://fontawesome.com/)

To use properly this template you need to have [Node.js](https://nodejs.org)

Go to the root of you folder and press shift + right click and open powershell(or cmd), or if you have a text editor with a command line use that instead
Run the command: `npm install` , this will install the *node_modules* (including *Material Design Components*)

You'll see 2 directories : **private** and **public** . In 'private' you will import and declare the material components : js , and the sass. Webpack will take care of both files : **app.js** , **app.scss** converting them into **bundle.js** and **bundle.css** by running the command `npm run build` (see the package.json) , and to see the changes live run `npm run test` that will open a server at <u>localhost:8080</u> , but this will not update your bundle.js and bundle.css files , you need to run the build command. 

To test if is working run `npm start` after you close run test (just press ctrl + c) and running the build script. This will start your express server at <u>localhost:3000</u> . What I mean by "working" is how this template will look in a cloud app such as Heroku.  

Before deploying your site remove these 2 lines from package.json: *"build": "webpack", "develop": "webpack-dev-server"* , because the cloud app will run those 2 scripts).

Tested Cloud Apps : **[Heroku](https://www.heroku.com/)**



[Demo](https://demo-materialtemplateweb.herokuapp.com/)

