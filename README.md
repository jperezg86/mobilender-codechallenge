# mobilender-codechallenge

This project was developed using Vue CLI and has the only propose of show my abilities on Vue and Javascript development.

Inside of the package.json you can see this scripts ready to execute: 

```
"serve": "vue-cli-service serve",
"start-backend": "node ./server/index.js",
```
The serve script executes the project and the start-backend launch a Node Express project to simulate the API request.

## First Step: Install the dependences: 

Ensure that you install all dependences required to the project. 

```
npm install
```

Launch the project executing the script serve defined on the package.json 

```
npm run serve
```
Or if you prefer you can build and deploy to production with this other script (also defined on package.json) 

```
npm run build
```


Once the Vue Project is running in your console should see a message like this: 

```
App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.0.24:8080/
```
It could be that the port is different, please ensure to visit this link on your web browser once completed the **second step**

## Second Step: Launch the temporal server project
To simulate the request I have created a Node Express App that use mongoose to connect to **mongoDB** and simulates the request of the data API.

To setup this project ensure that you have on the root directory of your project the file **.env** with the following information: 

```

MONGO_DB_STRING_CONNECTION = mongodb+srv://db_user:Qwaszx@cluster0.ihrin.mongodb.net/code-challenge?retryWrites=true&w=majority

```
<b>
please, please: check the project before one week my credentials will expire on 7 days and you can't see anymore the project running!
</b> <br/>


Once you have created the **.env** file and put the variable MONGO_DB_STRING_CONNECTION with the right credentials to connect to mongo the next step is **launch the EXPRESS server project**

```
npm run start-backend
```

This will launch a message on the console with this content: 

```

Example app listening at http://localhost:3000
MONGODB SUCCESS CONNECTED

```

## IMPORTANT:
**If your node instance runs on other port different to 3000 please modify the api.js file reemplacing the port on the BASE_URL2 constant**

```
BASE_URL2 = "http://localhost:[change-the-port]/"

```

That's it, visit the link launched by the command npm run serve to check the application running.


## THE LOGIN

The application uses Vuex and local storage to manage the session, also has implemented a guard on the global router. For that reason if you try to visit any route for the first time you'll be redirected to login page. The credentials for login is dumped on the field user, by default uses this credentials: 

**username:** *eve.holt@reqres.in* </br>
**password:** *[any-password]*

***Literally, you can use any password =)***

If you want to test a unsuccess login use any username and any password.

## ======= ONE LAST THING =========
I didn't made my unit testing, I'm sorry, I'm currently working and I haven't enought time to develop this code challenge. Also there was one view that is not implemented (the autocompleted one). However I think that the login show the advanced topics with Vue and the reactive library manage. The click on the list items shows the way that I'm using the router library to connect views and passing data. 

Thank you so much for this code challenge  <br/>
I really enjoyed!