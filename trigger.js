const { url } = require("inspector");
const { type } = require("os");
const path = require("path");
var teamcity = require("teamcity-rest-api");

//var logDownloadUrl = "http://tdl:12345678@127.0.0.1:8111/httpAuth/downloadBuildLog.html?buildId=500"


class Trigger{

    constructor(){
        this.projectId = ""
        this.buildId = ""
        this.platformCheck = ""
        this.url = ""       
    }


    getCondition(type, value) {
        if (type == true) return getConditionVideo(value)
        else return getConditionAudio(value)
    }
    
    getConditionVideo(conditionName) {
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
    
    getConditionAudio(conditionName) {
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
    
    
    downloadBuildLog(id) { //working but need refactor
        var request = require('request')
        var username = 'tdl'
        var password = '09Mi^4oB9L7@'
        var logDownloadUrl = "http://"+username+":"+password+"@"+this.url+"/httpAuth/downloadBuildLog.html?buildId="+id
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
    
    
    
    getInstance(platform,type) {
    
    
        if(platform == "WindowsToWindowsApp" || platform == "WindowsToWindowsChrome"){
            url = "http://10.1.16.86:8111"
            this.projectId = "RingCentral"
            this.buildId = ""
            this.platformCheck = true
        }
        else if(platform == "MacToMacApp" || platform=="MacToMacChrome"){
            url = "http://10.1.16.86:8080"
            this.projectId = "RingCentral"
            this.buildId = ""
            this.platformCheck = true
        }
        else if(platform == "iPhoneToiPhone"){
            this.url = "http://10.11.52.88:8111"
            this.projectId = "RingCentralMobileTests"
            this.buildId = ""
    
            this.platformCheck = false
        }
        else if(platform == "AndroidToAndroid"){
            this.url = "http://10.11.52.88:8080"
            this.projectId = "RingCentralMobileTests"
            this.buildId = ""

            this.platformCheck = false
        }
    
        var client = teamcity.create({
            url: this.url,
            username: "triggerPage",
            password: "trigger4RCV!"
        });
        this.buildNodeMerged = this.projectId + "_" + this.buildId
        return client
    }
    
    
    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
    
    
    setParametersFromName(type, value) {
        client.projects.setParameter(projectId, "CONDITION", getCondition(type, value))
        client.projects.setParameter(projectId, "CONDITION_NAME", value)
    }
    
    sendTestType(type) {
        client.projects.setParameter(projectId, "TEST_TYPE", type)
    }
    
    
    getResponseLastBuild(buildNode) {
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
    
    startBuildConfig(conditionName, platform, application, callType) {
        
        var client = getInstance(platform,callType)
        
        console.log()
        var typeCheck = true
        if (testType != "Audio") typeCheck = false
    
        setParametersFromName(typeCheck, conditionName)
    //    sendTestType("Android_MSTeams_ShareScreenDynamic")
        sendTestType(platform + "_" + application + "_" + callType)
    
        
        var buildNodeObject = "<build> <buildType id=\"" + this.buildNodeMerged + "\"/> </build>"
        client.builds.startBuild(buildNodeObject)
            .then(function (buildStatus) {
                getResponseLastBuild(this.buildNodeMerged)
            });
    }
    
    copyFileFromTerminal(startingPoint,finalDestination,serverAddress,checkTime, timeLimit) {
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
    
    
    
    syncReadFile(filename) {
    const {readFileSync, promises: fsPromises} = require('fs');
    
      const contents = readFileSync(filename, 'utf-8');
    
      const arr = contents.split(/\r?\n/);
    
      var path = arr
    
    
    
      return path;
    }
    
    
    checkAnalysing(){
        var paths = syncReadFile("./file_path.txt")
        var finalDestination = "/Users/bekarazmadze/Desktop/Repos/TeamCity"
        var serverAddress
    
        if(this.platformCheck) serverAddress = "krisjanis@10.1.16.86"
        else serverAddress = "krisjanis@10.11.52.88"
        
        paths.forEach(eachPath => copyFileFromTerminal(eachPath,finalDestination,serverAddress,1000,5))
    
    }
}
