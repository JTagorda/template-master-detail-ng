"use strict";
const fs = require("fs");
const path = require("path");

console.log("preinstall script running...");

console.log("creating firebase.nativescript.json to enable firebase...");
const firebaseConfig = "firebase.nativescript.json";
copyConfig(firebaseConfig);

console.log("creating tslint.json to enable linting...");
const tslintConfig = "tslint.json";
copyConfig(tslintConfig);

// Destroy tools folder along with all the contents including this preinstall script
console.log('Removing tools directory');
deleteFolder(__dirname);

function copyConfig(configFilename) {
    const oldPath = path.join(__dirname, configFilename);
    const newPath = path.join(getAppRootFolder(), configFilename);
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

function deleteFolder(folderPath) {
    if (fs.statSync(folderPath).isDirectory()) {
        fs.readdirSync(folderPath).forEach(function (file) {
            let content = path.join(folderPath, file);

            if (fs.statSync(content).isDirectory()) {
                delFodler(content);
            } else {
                fs.unlinkSync(content);
            }
        });
        fs.rmdirSync(folderPath);
    }
}

function getAppRootFolder() {
    return "../../../";
}

