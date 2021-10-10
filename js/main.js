import initiateData from "./initialprocess.js"
import {showSelectedAnswer, processAnswer} from "./processdata.js"


// The initial data
window.qaData = [
    {
        id: 1,
        question: "I value",
        answeroption: ["Justice","Mercy"]
    },
    {
        id: 2,
        question: "I appreciate a wide variey of music",
        answeroption: ["Rarely", "Ocassionally", "Sometimes", "Usually", "Almost Always"]

    },
    {
        id: 3,
        question: "A quiet weeken at home is",
        answeroption: ["Boring", "Rejuvinating"]
    },
    {
        id: 4,
        question: "I prefer speaks that communicate",
        answeroption: ["Literally", "Figuratively"]
    },
    {
    	id: 5,
    	question: "With people I am more often",
        answeroption: ["Brief and To The point", "Friendly and Warm"]
    }    
];

window.numberofquestion = 5;
window.questionnumber = 1;
window.useranswer = [];

document.body.onload = initiateData(window.qaData);

showSelectedAnswer();
processAnswer(useranswer);