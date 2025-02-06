# repo-exercise
If you clone the project, run the command ```npm install``` before starting the application with ```npm run dev```.<br />
<br />

You can install a JSON server globally on your machine using the command ```npm install -g json-server```.<br />
However, a global installation is not necessary. From the root directory of your app, we can run the json-server using the command npx:

```npx json-server --port 3001 --watch db.json```
<br />

```json-server --port 3001 --watch db.json``` The --watch option automatically looks for any saved changes to db.json.<br />
```npm install axios``` using the axios library instead for communication between the browser and server.