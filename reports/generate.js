const report = require("../multiple-cucumber-html-reporter");

const date = new Date();

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

//This arrangement can be altered based on how we want the date's format to appear.
var jTime = new Date() ;
jobstartTime = ((jTime.toLocaleDateString()) +"-"+ jTime. getHours() +":"+ jTime.getMinutes() +"-"+ jTime. getSeconds());
console. log("Test start Time: "+jobstartTime) ;
report.generate({
pageTitle: "Orange HRM",
pageFooter: " ",
jsonDir: "reports",
displayDuration: true,
displayReportTime: true,
reportPath: "st-coverage",
metadata: {
browser: {
name: "chrome",
version: "130.0.6723.92",
},
device: "Local Test Machine",
platform: {
    name: "windows",
    version: "10",
},
},
    customData: {
    title: "Run info",
    data: [
        { label: "Project", value: "Orange HRM" },
        { label: "Release ", value: "1.00" },
        { label: "Sprint", value: "1" },
        { label: "Test Environment", value: "E2E" },
        { label: "Execution Date ", value: jobstartTime },
    ],
},
});
