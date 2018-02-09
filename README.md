# Assessment React Native
* Answers to your written questions will be recorded in *Answers.md* 
* This is to be worked on alone but you can use outside resources. You can *reference* any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something. 
* **Just a friendly Reminder** Don't fret or get anxious about this, this is a no-pressure assessment that is only going to help guide you here in the near future. This is NOT a pass/fail situation. 
## Start by forking and cloning this repository.
## Questions
1. What makes apps built with React Native different from hybrid style apps built with Cordova/Ionic?
1. In what ways is React Native different syntactically from React?
1. What are some of the strengths of writing a mobile app in React Native versus the other native languages? [React Blog](https://reactjs.org/blog/2015/03/26/introducing-react-native.html)
1. What is are some differences between `localStorage` and `AsyncStorage`? What are some similarities between the two?

## Project Initialization
* Run `create-react-native-app rn-doggo`
* Run `npm install --save axios react-navigatoin(for use in stretch problem)` || `yarn add axios` to install axios for use with fetching data.

## Project
* You will be writing a simple app that makes a GET request to https://dog.ceo/api/breeds/list/all and lists all the breed names of dogs. I would suggest making a get request with Postman first so that you know the structure of the data coming back. You can also check out their documentation at https://dog.ceo/dog-api/.

## Stretch Problem
* Create a second View that displays the sub breeds of a given breed. 
* Use React Navigation to create a click-able link on those breeds that have sub breeds in order to achieve this.

## Stretch Problem 2
* We have a server that we've previously built in class that makes use of the JWT library. A link to that server can be found [here](https://github.com/LambdaSchool/Auth-JWT).
* Your goal is to create a project that makes use of this server. 
* This will be a separate app after you've submitted the Pull-Request for the app created above. 