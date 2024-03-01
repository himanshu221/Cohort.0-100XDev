"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const user1 = {
    name: "Himanshu",
    age: 26,
    email: "himanshu@gmail.com",
    phone: 2234
};
const user2 = {
    name: "Snigdha",
    age: 25,
    email: "snigdha@gmail.com",
    phone: 2234
};
console.log(sumOfAge(user1, user2));
function updateUser(updateSchema) {
    // update user
}
function updateUserWithOptionalParam(updateSchema) {
    // update user
}
const conf = {
    url: 'anc.com/path',
    apiKey: "123432324dscfsdw"
};
// cant change a property bec we made the object as read only
// conf.apiKey = "23rwef"
