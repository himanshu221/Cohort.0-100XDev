interface User {
    name: string,
    age: number,
    email: string,
    phone: number
}

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}

const user1: User = {
    name: "Himanshu",
    age: 26,
    email: "himanshu@gmail.com",
    phone: 2234
}
const user2: User = {
    name: "Snigdha",
    age: 25,
    email: "snigdha@gmail.com",
    phone: 2234
}

console.log(sumOfAge(user1, user2))


// pick subset of a interface or type
type UpdateSchema = Pick<User, 'name' | 'age' | 'email'>
// make all elements in a interface or type optional
type UpdateSchemaOptional = Partial<UpdateSchema>

function updateUser(updateSchema: UpdateSchema) {
    // update user
}
function updateUserWithOptionalParam(updateSchema: UpdateSchemaOptional) {
    // update user
}

type config = {
    url: string,
    apiKey: string
}

const conf : Readonly<config> =  {
    url: 'anc.com/path',
    apiKey: "123432324dscfsdw"
}

// cant change a property bec we made the object as read only
// conf.apiKey = "23rwef"