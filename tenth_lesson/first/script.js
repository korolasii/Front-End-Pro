
const user = {
    name: "Edward Noi",
    age: 30,
    location: "New York, USA",

    getUserInfo: function() {
        return `Name: ${this.name}\nAge: ${this.age}\nLocation: ${this.location}`;
    }
};


console.log(user.getUserInfo());