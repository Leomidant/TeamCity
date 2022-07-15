const path = require("path");
var teamcity = require("teamcity-rest-api");
var projectId = "TeamCityCheck"
var buildId = "ParameterBuild"
var buildNodeMerged = projectId + "_" + buildId
var logDownloadUrl = "http://tdl:12345678@127.0.0.1:8111/httpAuth/downloadBuildLog.html?buildId="
var conditionNames = ["1Mbps", "900kbps", "800kbps", "700kbps", "600kbps", "500kbps", "400kbps", "300kbps", "200kbps", "100kbps", "5PL", "10PL", "15PL", "20PL", "25PL", "30PL", "35PL", "40PL", "45PL", "50PL"]




function getCondition(type, value) {
    if (type == true) return getConditionVideo(value)
    else return getConditionAudio(value)
}

function getConditionVideo(conditionName) {
    var bandwith, latency = "0", loss, buffer = "200";

    switch (conditionName) {
        case "Unlimited":
            bandwith = ""
            latency = ""
            loss = ""
            buffer = ""
            break
        case "1Mbps":
            bandwith = "1000"
            loss = "0"
            break
        case "900kbps":
            bandwith = "900"
            loss = "0"
            break
        case "800kbps":
            bandwith = "800"
            loss = "0"
            break
        case "700kbps":
            bandwith = "700"
            loss = "0"
            break
        case "600kbps":
            bandwith = "600"
            loss = "0"
            break
        case "500kbps":
            bandwith = "500"
            loss = "0"
            break
        case "400kbps":
            bandwith = "400"
            loss = "0"
            break
        case "300kbps":
            bandwith = "300"
            loss = "0"
            break
        case "200kbps":
            bandwith = "200"
            loss = "0"
            break
        case "100kbps":
            bandwith = "100"
            loss = "0"
            break
        case "5PL":
            bandwith = "32000000"
            loss = "5"
            break
        case "10PL":
            bandwith = "32000000"
            loss = "10"
            break
        case "15PL":
            bandwith = "32000000"
            loss = "15"
            break
        case "20PL":
            bandwith = "32000000"
            loss = "20"
            break
        case "25PL":
            bandwith = "32000000"
            loss = "25"
            break
        case "30PL":
            bandwith = "32000000"
            loss = "30"
            break
        case "35PL":
            bandwith = "32000000"
            loss = "35"
            break
        case "40PL":
            bandwith = "32000000"
            loss = "40"
            break
        case "45PL":
            bandwith = "32000000"
            loss = "45"
            break
        case "50PL":
            bandwith = "32000000"
            loss = "50"
            break
    }

    var condition = bandwith + " " + latency + " " + loss + " " + buffer
    return condition
}

function getConditionAudio(conditionName) {
    var bandwith, latency = "0", loss, buffer = "200";

    switch (conditionName) {
        case "Unlimited":
            bandwith = ""
            latency = ""
            loss = ""
            buffer = ""
            break
        case "200kbps":
            bandwith = "200"
            loss = "0"
            break
        case "150kbps":
            bandwith = "150"
            loss = "0"
            break
        case "140kbps":
            bandwith = "140"
            loss = "0"
            break
        case "130kbps":
            bandwith = "130"
            loss = "0"
            break
        case "120kbps":
            bandwith = "120"
            loss = "0"
            break
        case "110kbps":
            bandwith = "110"
            loss = "0"
            break
        case "100kbps":
            bandwith = "100"
            loss = "0"
            break
        case "90kbps":
            bandwith = "90"
            loss = "0"
            break
        case "80kbps":
            bandwith = "80"
            loss = "0"
            break
        case "70kbps":
            bandwith = "70"
            loss = "0"
            break
        case "60kbps":
            bandwith = "60"
            loss = "0"
            break
        case "50kbps":
            bandwith = "50"
            loss = "0"
            break
        case "40kbps":
            bandwith = "40"
            loss = "0"
            break
        case "5PL":
            bandwith = "32000000"
            loss = "5"
            break
        case "10PL":
            bandwith = "32000000"
            loss = "10"
            break
        case "15PL":
            bandwith = "32000000"
            loss = "15"
            break
        case "20PL":
            bandwith = "32000000"
            loss = "20"
            break
        case "25PL":
            bandwith = "32000000"
            loss = "25"
            break
        case "30PL":
            bandwith = "32000000"
            loss = "30"
            break
        case "35PL":
            bandwith = "32000000"
            loss = "35"
            break
        case "40PL":
            bandwith = "32000000"
            loss = "40"
            break
        case "45PL":
            bandwith = "32000000"
            loss = "45"
            break
        case "50PL":
            bandwith = "32000000"
            loss = "50"
            break
    }

    var condition = bandwith + " " + latency + " " + loss + " " + buffer
    return condition
}




function downloadBuildLog(id) {
    var request = require('request')
    var username = 'tdl'
    var password = '12345678'
    var logDownloadUrl = "http://"+username+":"+password+"@127.0.0.1:8111/httpAuth/downloadBuildLog.html?buildId="+id
    var options = {
        url: 'http://localhost:8111/',
        auth: {
            user: username,
            password: password
        }
    }
    request(options, function (err, res, body) {
        if (err) {
            console.dir(err)
            return
        }
        else {
            const open = require('open');
            open(logDownloadUrl)

        }

    })
}


var client = teamcity.create({
    url: "http://localhost:8111",
    username: "tdl",
    password: "12345678"
});
var firstClient = teamcity.create({
    url: "http://localhost:8111",
    username: "tdl",
    password: "12345678"
});

var secondClient = teamcity.create({
    url: "http://localhost:8111",
    username: "tdl",
    password: "12345678"
});
var thirdClient = teamcity.create({
    url: "http://localhost:8111",
    username: "tdl",
    password: "12345678"
});
var fourthClient = teamcity.create({
    url: "http://localhost:8111",
    username: "tdl",
    password: "12345678"
});

function getInstance(platform) {
    switch (platform) {
        case "Android":
            client = firstClient
            break
        case "iOS":
            client = secondClient
            break
        case "Mac":
            client = thirdClient
            break
        case "Windows":
            client = fourthClient
            break
    }

    return client
}
var platform = "Android"
var client = getInstance(platform)


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


function setParametersFromName(type, value) {
    client.projects.setParameter(projectId, "CONDITION", getCondition(type, value))
    client.projects.setParameter(projectId, "CONDITION_NAME", value)
}

function sendTestType(type) {
    client.projects.setParameter(projectId, "TEST_TYPE", type)
}


function getResponseLastBuild(buildNode) {
    var state, status, branchName, buildNum

    client.builds.getByBuildTypeWithCount({ id: "" + buildNode + "" }, { dimensions: { count: 10 } })
        .then(function (buildList) {
            // console.log(buildList.build[0]) //buildList.build is an array of builds, from most recent to the count parameter
            status = buildList.build[0].status
            state = buildList.build[0].state
            branchName = buildList.build[0].branchName
            buildNum = buildList.build[0].id
            var percentageComplete = buildList.build[0].percentageComplete
            if(percentageComplete == null) percentageComplete = "0"
            if (state != "finished") {
                sleep(1000)
                console.log(state + "; " + percentageComplete +"%")
                getResponseLastBuild(buildNode)
            }
            else {
                console.log(state)
                console.log(status)
                downloadBuildLog(buildNum)

            }

        });
}

function startBuildConfig(buildNode) {

    setParametersFromName(true, conditionNames[1])
    sendTestType("Android_MSTeams_ShareScreenDynamic")

    
    var buildNodeObject = "<build> <buildType id=\"" + buildNode + "\"/> </build>"
    client.builds.startBuild(buildNodeObject)
        .then(function (buildStatus) {
            getResponseLastBuild(buildNodeMerged)
        });

}

function copyFileFromTerminal(startingPoint,finalDestination,serverAddress,checkTime, timeLimit) {
    const { execSync } = require("child_process");
   
    var maxTime = timeLimit / (checkTime / 1000)  // Max Time = checkTime * timeLimit
    var copyAnalysedFile = "scp "+ serverAddress +":"+ startingPoint + " " + finalDestination


    var checkFileCreated = false
    while (checkFileCreated == false) {
        var finalText = "Analysing"
        try {
            sleep(checkTime)
            const output = execSync(copyAnalysedFile, { encoding: "utf-8" });

            checkFileCreated = true
            finalText = "Analysed"

        }
        catch (err) {
            if (maxTime == 0) {
                 finalText = "Time Limit Exceed"
                break
            }
            maxTime--
        }

        console.log(finalText)


    }
}



function syncReadFile(filename) {
const {readFileSync, promises: fsPromises} = require('fs');

  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  var path = arr



  return path;
}


function checkAnalysing(platform){
    var paths = syncReadFile("./file_path.txt")
    var finalDestination = "/Users/bekarazmadze/Desktop/Repos/TeamCity"
    var serverAddress

    if(platform) serverAddress = "krisjanis@10.1.16.86"
    else serverAddress = "krisjanis@10.11.52.88"
    
    paths.forEach(eachPath => copyFileFromTerminal(eachPath,finalDestination,serverAddress,1000,5))

}