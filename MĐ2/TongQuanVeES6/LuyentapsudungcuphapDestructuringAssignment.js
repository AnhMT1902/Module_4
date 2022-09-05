let profile = {
    firstName: 'Code',
    lastName: 'Gym',
    birthDay: new Date('1979-01-02')
}
// let firstName = profile.firstName;
// let lastName = profile.lastName;
let {firstName, lastName} = profile;
console.log(firstName, lastName);