var teamcity = require("teamcity-rest-api");

var client = teamcity.create({
    url: "http://localhost:8111",
    username: "bekarazmadze",
    password: "Bequnio2001!"
});

var test = client.projects.setParameter("TeamCityCheck", "fileName","print.py")
console.log(test)


