## TODO

### 2020

+ options for simple share the shell scripts
    + without ini files, only execute inside path, the same folder for scripts
    + with passwd for many users               

+ there is no roles, becuase some, restricktions is possible to make with different project / path
    + folder/ports
        + 3001 Admin (prompt)
        + 3002 DevOps (all scripts without prompt)
        + 3003 Support (some scripts to help bugfixing and backup)
        + 3004 Users (only access to functions: restart / backup / restore)

+ Queue for commands
    + use icon for make a quee, with waiting for the last executed command

+ action table
    + script name
    + execute now
        + with param
        + with last used param
    + edit file
    + remove / create file
    + logs of this file
        + text in console
        + time of execution
        + user 
+ logs windows

+ execute different files, too .exe, .py
+ Question on forum: https://forum.pasja-informatyki.pl/469386/node-js-python
    

### 2019

 + create settings local file, and by user
 + Split gui to differents technologies/languages/scripts:
 + create an API for these things from the backend:
    + filesystem scanning for projects
    + give list of projects 
    
+ export as libraries
+ create CACHE for file list
+ SCAN all folders on PC, depends system, to find any projects with .bat
+ RECOGNIZE type of project and give the tags for a list
+ create list of projects in config.json, which can be imported to another server, eg. production
+ config has all info about: folder, docker, git repo
+ installation version of server, service for manage the project on production side
+ Authorisation PASSWORD / SSL

Include
+ logo
+ css engine: materialize, or bootstrap icons, menu, itp
+ mobile version 
+ tutorial for start with:
 + install sh script
 + scan server/pc/IOT device
 + find all projects with bash scripts
 + list them, and save in config.json
 
 
 ### Model
 Language + Browser + Command Integration with Apicra DEVOPS
 
 ### Languages
 * NodeJs
 * Python
 * PHP
 * Bash, based on web browser
 
 
 #### Command Browser for Linux
 
 #### elinks
 https://www.raspberrypi.org/magpi/command-line-web-browser/
 sudo apt-get update && sudo apt-get upgrade
 sudo apt-get install elinks
