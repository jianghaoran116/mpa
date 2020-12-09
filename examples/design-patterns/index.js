import Main from '../../src/main';

const { Dp } = Main;

const { PubSub } = Dp;

const pubSub = PubSub.getInstance();

// var mySubscriber = function (msg, data) {
//   console.log( msg, data );
// };

// // console.log("PubSub:::", PubSub);

// var token = pubSub.subscribe('MY TOPIC', mySubscriber);
// console.log("token:::", token);
// pubSub.publish('MY TOPIC', 'hello world!');
// // pubSub.unsubscribe(token);
// // pubSub.publish('MY TOPIC', 'hello world!');
// // pubSub.publishSync('MY TOPIC', 'hello world!');
// pubSub.publish('MY TOPIC', '123');
// let token1 = pubSub.getSubscriptions('MY TOPIC');
// console.log("token1", token1)

// var myToplevelSubscriber = function (msg, data) {
//   console.log('top level: ', msg, data);
// }

// subscribe to all topics in the 'car' hierarchy
// pubSub.subscribe('car', myToplevelSubscriber);

// create a subscriber to receive only leaf topic from hierarchy op topics
var mySpecificSubscriber = function (msg, data) {
  console.log('specific: ', msg, data);
}

// subscribe only to 'car.drive' topics
pubSub.subscribe('car.drive', mySpecificSubscriber);

// Publish some topics
pubSub.publish('car.purchase', {name: 'my new car'});
pubSub.publish('car.drive', {speed: '14'});
pubSub.publish('car.sell', {newOwner: 'someone else'});
