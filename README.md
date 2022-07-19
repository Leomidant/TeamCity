This file includes documentation of trigger.js

START BUILDING 

1) function startBuildConfig(conditionName, platform, application, callType)
Main function to trigger exact build step.
Condition Name = limitation of bandwidth(chosen by stakeholder)
Platform - which platform test is executing (example AndroidToAndroid, MacToMacApp etc. List is on last page)
Application - which application we test (example: RCV, Zoom, MSTeams. List is on last page)
callType - which call method we use(example: Audio,Video,Dynamic etc. List is on last page)

In startBuildConfig, the getInstance method is called to get the correct teamcity server. Also, sendParameter and sendTestType. 
sendParameter sends “CONDITION” & “CONDITION_NAME” variables to build. 
sendTestType send Test Case name for execution (Platform_Application_Calltype)

getResponseLastBuild(buildNodeMerged) - gives response of status and state until build running is finished. After finishing it downloads the build log.


getCondition() we pass TRUE if we want to get condition for VIDEO, we pass FALSE if we need condition for AUDIO this is happening automatically in startBuilding Function



ANALYZING

Second part of trigger.js is analyzing builded step.

1) function checkAnalysing(platform) is main function where we use FALSE for mobile test analyzing and TRUE for all others, it automatically saves last platform of startBuild function

2) copyFromTerminal() we use this to check if analyzing is finished, it needs ssh server address, path of analyzing file,
final destination where it should be copied.(these addresses are given in checkAnalysing() function)

3) for analyzing file paths we use file "file_path.txt" where all paths are written on single line

4) Time Limit and check time for analyzing. we pass CHECK TIME in milliseconds and MAXIMUM TIME LIMIT in seconds
for example if we pass (3000,30) it will check for file every 3 seconds for 30 seconds




Test Platforms:

AndroidToAndroid
iPhoneToiPhone
WindowsToWindowsApp
WindowsToWindowsChrome
MacToMacApp
MacToMacChrome

Application:

RCV
MSTeams
Zoom

Call Type:
Audio
Video
Dynamic
Static
