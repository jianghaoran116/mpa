/**
 * @file 算法
 * @author haoran
 */
import main from '../../src/main';

const { Smobx } = main;

const {
  observable,
  autorun,
} = Smobx

class Person {
  @observable
  name = {
    key:{
      key:1
    }
  };
  @observable
  title = 'xx';
  @observable
  age = 20;
}
const person = new Person();

console.log('person:::', person);
autorun(function(){
  console.log('title change');
  console.log(person.title);
})
person.title = 'change1';
person.title = 'change2';

autorun(function(){
  console.log('age change - 1');
  console.log(person.age);
})
// person.age = 21;
// person.age = 22;
autorun(function(){
  console.log('age change - 2');
  console.log(person.age);
})
// person.age = 23;
// person.age = 24;


// -------------------------- 导读 ---------------------------------
// class Dog {
//   // @readonly
//   bark () {
//     console.log('wang!wang!');
//   }
// }

// const dog = new Dog();
// dog.bark();
// dog.bark = "123";
// console.log(dog.bark);

// 如果想让bark这个方法成为一个只读的属性

// Object.setPrototypeOf(Dog, "bark", {
//   "writable": false,
// });
// dog.bark = "234";
// console.log(dog.bark);

// function readonly(target, key, descriptor) {
//   descriptor.writable = false
//   return descriptor
// }

// const object1 = {
//   property1: 42
// };

// const descriptors1 = Object.getOwnPropertyDescriptors(object1);

// console.log("descriptors1:::", descriptors1);
// console.log(descriptors1.property1.writable);
// expected output: true

// console.log(descriptors1.property1.value);