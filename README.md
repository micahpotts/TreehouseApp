# Code Louisville/Treehouse Syllabus App

Stay on track with your Treehouse assignments throughout the 12 week Code Louisville course. Use the track that is pre-loaded, or create your own! And no worries if you don't get them done that week, just click + or - to change the week. Click the X button to delete the assignment after it's finished.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Technologies

This app makes use of the following technologies.
Download and install both MongoDB and Node.js from the links provided, the others will install with NPM during installation.

- **[Node.js](http://nodejs.org/)**
- **[MongoDb](http://www.mongodb.org/)**
- [MongooseJs](http://mongoosejs.com/)
- [ExpressJs](http://expressjs.com/)
- [AngularJs](http://angularjs.org/)


You will also need a working knowledge of the console of your choice. I use PowerShell.

## Installation

Let's get your development env up and running!
(Note: Though I use PORT 300 in the example below, the app will be running on whatever port is specified in your PORT environment variable.)

1. From your console, clone this repo onto your local machine.

```
git clone https://github.com/micahpotts/TreehouseApp.git
```

2. Change directory to go to root directory

```
cd TreehouseApp
```

3. Install dependencies via npm

```
npm install
```

4. In a separate tab or window, start up MongoDB from the root directory

```
mongod
```
The console should respond with
```
waiting for connections on port 27017
```

5. From the TreehouseApp directory, use node to start the app.

```
node app.js
```
The console should respond with
```
Express server is listening on port 3000* (*or your PORT env variable)
db connection succseeful
DB seeded
```

## Using the app

After the app is up and running, direct your browser to "localhost:3000*" (*or your PORT env variable)


### Application Features

 - Pre-loaded Full Stack JavaScript track
 - Add your own Assignments
 - Edit Assignment's "due by" week, with single button click
 - Delete Assignment when complete
 - Assignments are listed by "due by" week, so you always know what to do next
 - Take notes on each module


## Coming Soon!

More functionality is being added. Soon the app will also:
 - ~~Allow you to take notes on each Treehouse Module~~ *This feature has been added!*
 - Mark Assignments as complete without deleting it from the database

## Contributing

Please feel free to contribute!

## Authors

* **Micah Potts** - *Initial work* - [micahpotts](https://github.com/micahpotts)

## License

This project is licensed under the ISC License

## Aknowledgements

* Thank you to [Code Louisville](https://github.com/CodeLouisville) for the opportunity to learn with you!
* [Shauvon](https://github.com/ShauvonM) and [Aaron](https://github.com/aarontropy) who helped me solve many a problem throughout the creation of my MEAN Stack App. They are amazing mentors!
* [Pete](https://github.com/IzzyD7) for sticking it out with me.
* [PurpleBooth](https://github.com/PurpleBooth) for this README-Template!
* [Alan](https://github.com/zeroasterisk) for the encouragement and tutoring!
