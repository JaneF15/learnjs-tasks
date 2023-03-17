function User(name) {
  this.name = name;
}

let user = new User('Jane');
let user1 = new user.constructor('Kate');

console.log(user.name);
console.log(user1.name);




function UserError(name) {
  this.name = name;
}

UserError.prototype = {};

user = new UserError('Jane');
user1 = new user.constructor('Kate');

console.log(user.name);
console.log(user1.name);

