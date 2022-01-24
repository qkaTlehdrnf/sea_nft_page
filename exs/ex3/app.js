"use strict";
// const person : {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];//tuple type
// }= {
//     name: 'KimWonJoong',
//     age: 27,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'KimWonJoong',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(Role);
if (person.role === Role.ADMIN) {
    console.log('ADMIN IS HERE');
}
//# sourceMappingURL=app.js.map