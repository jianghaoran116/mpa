/**
 * @file 订阅发布器
 * @author haoran
 */
class PubSub {
  #message = {};
  #lastUid = -1;
  #ALL_SUBSCRIBING_MSG = "*";

  constructor() {}

  hasKeys = ( obj ) => {
    var key;

    for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Returns a function that throws the passed exception, for use as argument for setTimeout
   * @alias throwException
   * @function
   * @param { Object } ex An Error object
   */
  throwException = ( ex ) => {
    return function reThrowException() {
      throw ex;
    };
  }

  callSubscriberWithDelayed = ( subscriber, message, data ) => {
    try {
      subscriber( message, data );
    } catch ( ex ) {
      setTimeout( this.throwException( ex ), 0);
    }
  }

  callSubscriberWithImmediateExceptions = ( subscriber, message, data ) => {
    subscriber( message, data );
  }

  deliverMessage = ( originalMessage, matchedMessage, data, immediateExceptions ) => {
    let subscribers = this.messages[matchedMessage],
        callSubscriber =
          immediateExceptions 
            ? this.callSubscriberWithImmediateExceptions
            : this.callSubscriberWithDelayedExceptions,
        s;

    if ( !Object.prototype.hasOwnProperty.call(this.messages, matchedMessage ) ) {
      return;
    }

    for (s in subscribers){
      if ( Object.prototype.hasOwnProperty.call(subscribers, s)){
        callSubscriber( subscribers[s], originalMessage, data );
      }
    }
  }

  createDeliveryFunction = ( message, data, immediateExceptions ) => {
    return function deliverNamespaced() {
      let topic = String( message ),
          position = topic.lastIndexOf( '.' );

      // deliver the message as it is now
      this.deliverMessage(message, message, data, immediateExceptions);

      // trim the hierarchy and deliver message to each level
      while( position !== -1 ){
        topic = topic.substr( 0, position );
        position = topic.lastIndexOf('.');
        this.deliverMessage( message, topic, data, immediateExceptions );
      }

      this.deliverMessage(message, this.ALL_SUBSCRIBING_MSG, data, immediateExceptions);
    }
  }

  hasDirectSubscribersFor = ( message ) => {
    var topic = String( message ),
        found = Boolean(Object.prototype.hasOwnProperty.call( this.messages, topic )
                &&
                this.hasKeys(this.messages[topic]));

    return found;
  }

  messageHasSubscribers = ( message ) => {
    var topic = String( message ),
        found = this.hasDirectSubscribersFor(topic) || this.hasDirectSubscribersFor(this.ALL_SUBSCRIBING_MSG),
        position = topic.lastIndexOf( '.' );

    while ( !found && position !== -1 ){
      topic = topic.substr( 0, position );
      position = topic.lastIndexOf( '.' );
      found = this.hasDirectSubscribersFor(topic);
    }

    return found;
  }


  _publish = ( message, data, sync, immediateExceptions ) => {
    message = (typeof message === 'symbol') ? message.toString() : message;

    let deliver = this.createDeliveryFunction( message, data, immediateExceptions ),
        hasSubscribers = this.messageHasSubscribers( message );

    if ( !hasSubscribers ){
      return false;
    }

    if ( sync === true ){
      deliver();
    } else {
      setTimeout( deliver, 0 );
    }
    return true;
  }

  static immediateExceptions = undefined;

  static publish = ( message, data ) => {
    return this._publish( message, data, false, PubSub.immediateExceptions );
  };

  static getInstance = () => {
    if (!PubSub.instance) {
      PubSub.instance = new PubSub();
    }
    return PubSub.instance;
  }
}

export default PubSub;
