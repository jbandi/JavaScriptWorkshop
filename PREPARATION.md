#Important
Make sure that you have unrestricted access to the internet! In the steps below you will have to access GitHub and npmjs.org. Some corporate proxies block these sites or access over https/git!

<br/>
#Software
For the workshop the following software should be installed (the version numbers don't have to match exactly, but should be pretty close):

### Git
A recent git installation is needed to download the exercise files.  
Check:  
```
> git --version                                                             
git version 2.0.1
```


### Node.js & NPM & Node Packages
Node and NPM is the fundament for the JavaScript Toolchain.
The Node installer can be downloaded here: http://nodejs.org/download/

Check:
```
> node --version
v0.10.29
> npm --version
1.4.9
```

The following npm packages should be installed globally:
```
npm install -g grunt-cli bower yo http-server
```



### Browser
A recent Chrome and/or Firefox Browser must be available.  
The following extensions should be installed:
- Postman Extension for Chrome: https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop?hl=en
- JetBrains IDE Support for Chrome: https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji
- RESTCilent AddOn for Firefox: https://addons.mozilla.org/en-US/firefox/addon/restclient/

### WebStorm
The WebStorm IDE from JetBrains should be installed. 
There is a free 30 day trial version of WebStorm available here: http://www.jetbrains.com/webstorm/

### Java & Maven
The Java projects are based on Java 7 and Maven 3.  
Check:
```
> java -version                                                                
java version "1.7.0_51"

> mvn -version
Apache Maven 3.1.1 (0728685237757ffbf44136acec0402957f723d9a; 2013-09-17 17:22:22+0200)
```

### JBoss App Server
The examples use JBoss EAP 6.2. A copy can be downloaded from here:  
http://www.jboss.org/jbossas/downloads/  
(unfortunately a registration is necessary)
  
<br/>

# Preparations

To reduce the network traffic during the course the following steps should be executed before the workshop:

Check out the following git repository:  
`git clone --recursive https://github.com/jbandi/JavaScriptWorkshop.git`

From within the cloned repository execute the following commands:
```
cd 01-Intro/02-SimpisticToDo
npm install
...
bower install
...
```

Also from within the cloned repository execute the following commands:
```
cd 04-Toolchain/01-JavaScript
npm install
...
```

Also from within the cloned repository execute the following commands:
```
cd 04-Toolchain/02-Java/courserater
mvn package
...
```

Also from within the cloned repository execute the following commands:
```
cd 06-FullStack/cors/javaee-backend/courserater-javaee
mvn clean package
...

```

