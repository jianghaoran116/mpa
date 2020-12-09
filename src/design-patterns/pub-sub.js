/**
 * @file 订阅发布器
 * @author git://github.com/mroderick/PubSubJS.git
 */

class PubSub {
  #messages = {}; // 记录消息
  #lastUid = -1;
  #ALL_SUBSCRIBING_MSG = "*";

  constructor() {
    this.immediateExceptions = undefined;
  }

  hasKeys = (obj) => {
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return true;
      }
    }
    return false;
  };

  /**
   * Returns a function that throws the passed exception, for use as argument for setTimeout
   * @alias throwException
   * @function
   * @param { Object } ex An Error object
   */
  throwException = (ex) => {
    return function reThrowException() {
      throw ex;
    };
  };

  callSubscriberWithDelayed = (subscriber, message, data) => {
    try {
      subscriber(message, data);
    } catch (ex) {
      setTimeout(this.throwException(ex), 0);
    }
  };

  callSubscriberWithDelayedExceptions = (subscriber, message, data) => {
    try {
      subscriber(message, data);
    } catch (ex) {
      setTimeout(this.throwException(ex), 0);
    }
  };

  callSubscriberWithImmediateExceptions = (subscriber, message, data) => {
    subscriber(message, data);
  };

  deliverMessage = (
    originalMessage,
    matchedMessage,
    data,
    immediateExceptions
  ) => {
    let subscribers = this.#messages[matchedMessage],
      callSubscriber = immediateExceptions
        ? this.callSubscriberWithImmediateExceptions
        : this.callSubscriberWithDelayedExceptions,
      s;

    if (!Object.prototype.hasOwnProperty.call(this.#messages, matchedMessage)) {
      return;
    }

    for (s in subscribers) {
      if (Object.prototype.hasOwnProperty.call(subscribers, s)) {
        callSubscriber(subscribers[s], originalMessage, data);
      }
    }
  };

  /**
   * 创建交付函数 返回函数
   * @param {*} message 
   * @param {*} data 
   * @param {*} immediateExceptions 
   */
  createDeliveryFunction = (message, data, immediateExceptions) => {
    // deliverNamespaced
    return () => {
      let topic = String(message),
        position = topic.lastIndexOf(".");

      // deliver the message as it is now
      this.deliverMessage(message, message, data, immediateExceptions);

      // trim the hierarchy and deliver message to each level
      while (position !== -1) {
        topic = topic.substr(0, position);
        position = topic.lastIndexOf(".");
        this.deliverMessage(message, topic, data, immediateExceptions);
      }

      this.deliverMessage(
        message,
        this.#ALL_SUBSCRIBING_MSG,
        data,
        immediateExceptions
      );
    };
  };

  /**
   * 每次发消息前都会判断一下有没有message
   * @param {*} message 
   */
  hasDirectSubscribersFor = (message) => {
    var topic = String(message),
      found = Boolean(
        Object.prototype.hasOwnProperty.call(this.#messages, topic) &&
          this.hasKeys(this.#messages[topic])
      );
    return found;
  };

  /**
   * 寻找消息的key 支持"."分层寻找消息
   * @param {*} message 
   */
  messageHasSubscribers = (message) => {
    let topic = String(message),
      found =
        this.hasDirectSubscribersFor(topic) ||
        this.hasDirectSubscribersFor(this.#ALL_SUBSCRIBING_MSG),
      position = topic.lastIndexOf(".");

    while (!found && position !== -1) {
      topic = topic.substr(0, position);
      position = topic.lastIndexOf(".");
      found = this.hasDirectSubscribersFor(topic);
    }

    return found;
  };

  _publish = (message, data, sync, immediateExceptions) => {
    message = typeof message === "symbol" ? message.toString() : message;

    let deliver = this.createDeliveryFunction(
        message,
        data,
        immediateExceptions
      ),
      hasSubscribers = this.messageHasSubscribers(message);

    if (!hasSubscribers) {
      return false;
    }

    if (sync === true) {
      deliver();
    } else {
      setTimeout(deliver, 0);
    }
    return true;
  };

  /**
   * Publishes the message, passing the data to it's subscribers
   * @function
   * @alias publish
   * @param { String } message The message to publish
   * @param {} data The data to pass to subscribers
   * @return { Boolean }
   */
  publish = (message, data) => {
    return this._publish(message, data, false, this.immediateExceptions);
  };

  /**
   * Publishes the message synchronously, passing the data to it's subscribers
   * @function
   * @alias publishSync
   * @param { String } message The message to publish
   * @param {} data The data to pass to subscribers
   * @return { Boolean }
   */
  publishSync = (message, data) => {
    return this._publish(message, data, true, this.immediateExceptions);
  };

  /**
   * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
   * @function
   * @alias subscribe
   * @param { String } message The message to subscribe to
   * @param { Function } func The function to call when a new message is published
   * @return { String }
   */
  subscribe = (message, func) => {
    if (typeof func !== "function") {
      return false;
    }

    message = typeof message === "symbol" ? message.toString() : message;

    // message is not registered yet
    if (!Object.prototype.hasOwnProperty.call(this.#messages, message)) {
      this.#messages[message] = {};
    }

    // forcing token as String, to allow for future expansions without breaking usage
    // and allow for easy use as key names for the 'messages' object
    var token = "@pubsub_uid_" + String(++this.#lastUid);
    this.#messages[message][token] = func;

    // return token for unsubscribing
    return token;
  };

  subscribeAll = (func) => {
    return this.subscribe(this.#ALL_SUBSCRIBING_MSG, func);
  };

  /**
   * Subscribes the passed function to the passed message once
   * @function
   * @alias subscribeOnce
   * @param { String } message The message to subscribe to
   * @param { Function } func The function to call when a new message is published
   * @return { PubSub }
   */
  subscribeOnce = (message, func) => {
    let token = this.subscribe(message, function () {
      // before func apply, unsubscribe message
      this.unsubscribe(token);
      func.apply(this, arguments);
    });
    return this;
  };

  /**
   * Clears all subscriptions
   * @function
   * @public
   * @alias clearAllSubscriptions
   */
  clearAllSubscriptions = () => {
    this.#messages = {};
  };

  /**
   * Clear subscriptions by the topic
   * @function
   * @public
   * @alias clearAllSubscriptions
   * @return { int }
   */
  clearSubscriptions = (topic) => {
    let m;
    for (m in this.#messages) {
      if (
        Object.prototype.hasOwnProperty.call(this.#messages, m) &&
        m.indexOf(topic) === 0
      ) {
        delete this.#messages[m];
      }
    }
  };

  /** 
     Count subscriptions by the topic
   * @function
   * @public
   * @alias countSubscriptions
   * @return { Array }
  */
  countSubscriptions = (topic) => {
    let m;
    let count = 0;
    for (m in this.#messages) {
      if (
        Object.prototype.hasOwnProperty.call(this.#messages, m) &&
        m.indexOf(topic) === 0
      ) {
        count++;
      }
    }
    return count;
  };

  /** 
     Gets subscriptions by the topic
   * @function
   * @public
   * @alias getSubscriptions
  */
  getSubscriptions = (topic) => {
    let m;
    const list = [];
    for (m in this.#messages) {
      if (
        Object.prototype.hasOwnProperty.call(this.#messages, m) &&
        m.indexOf(topic) === 0
      ) {
        list.push(m);
      }
    }
    return list;
  };

  /**
   * Removes subscriptions
   *
   * - When passed a token, removes a specific subscription.
   *
   * - When passed a function, removes all subscriptions for that function
   *
   * - When passed a topic, removes all subscriptions for that topic (hierarchy)
   * @function
   * @public
   * @alias subscribeOnce
   * @param { String | Function } value A token, function or topic to unsubscribe from
   * @example // Unsubscribing with a token
   * var token = PubSub.subscribe('mytopic', myFunc);
   * PubSub.unsubscribe(token);
   * @example // Unsubscribing with a function
   * PubSub.unsubscribe(myFunc);
   * @example // Unsubscribing from a topic
   * PubSub.unsubscribe('mytopic');
   */
  unsubscribe = (value) => {
    const descendantTopicExists = (topic) => {
      let m;
      for (m in this.#messages) {
        if (Object.prototype.hasOwnProperty.call( this.#messages, m ) && m.indexOf(topic) === 0) {
          // a descendant of the topic exists:
          return true;
        }
      }

      return false;
    };

    let isTopic =
        typeof value === "string" &&
        (Object.prototype.hasOwnProperty.call( this.#messages, value ) || descendantTopicExists(value)),
      isToken = !isTopic && typeof value === "string",
      isFunction = typeof value === "function",
      result = false,
      m,
      message,
      t;

    if (isTopic) {
      this.clearSubscriptions(value);
      return;
    }

    for (m in this.#messages) {
      if (Object.prototype.hasOwnProperty.call( this.#messages, m )) {
        message = this.#messages[m];

        if (isToken && message[value]) {
          delete message[value];
          result = value;
          // tokens are unique, so we can just stop here
          break;
        }

        if (isFunction) {
          for (t in message) {
            if (Object.prototype.hasOwnProperty.call( this.#messages, t ) && message[t] === value) {
              delete message[t];
              result = true;
            }
          }
        }
      }
    }

    return result;
  };

  static getInstance = () => {
    if (!PubSub.instance) {
      PubSub.instance = new PubSub();
    }
    return PubSub.instance;
  };
}

export default PubSub;
