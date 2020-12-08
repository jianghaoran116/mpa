import Main from '../../src/main';

const { Dp } = Main;

const { PubSub } = Dp;

const pubSub = PubSub.getInstance();

var mySubscriber = function (msg, data) {
  console.log( msg, data );
};

var token = pubSub.subscribe('MY TOPIC', mySubscriber);
console.log("token:::", token);
pubSub.publish('MY TOPIC', 'hello world!');
pubSub.publishSync('MY TOPIC', 'hello world!');
