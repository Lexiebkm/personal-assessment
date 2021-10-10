import fillDataToOptionEl from "./questionanswer.js"
import initiateData from "./initialprocess.js"

let container = document.querySelector("#container");

function showSelectedAnswer() {
	let que = document.querySelector("#answer");
	let useranswer = document.querySelector('#useranswer')

	que.addEventListener('change', function() {
		let value = que.options[que.selectedIndex].value;
		useranswer.innerHTML = "You picked : " + value;
	})

}

function processAnswer() {
	let btn = document.querySelector("#settle");
	btn.addEventListener("click", settleAnswer);
}

function settleAnswer(e) {
	e.preventDefault();

    if (window.questionnumber > (window.numberofquestion )) {        
		alert("You have answered all of the questions");
		return;
	}

	let form = document.querySelector("#formqa");
	let formdata = new FormData(form);
	//console.info(formdata);

    let qlabel = document.querySelector("#questionname");    

    for(let pair of formdata.entries()) {
        console.log(pair[0] + ' : '+ pair[1]); 
        let answer = pair[1];

        // store each question and answer to the public variable
        window.useranswer.push({
			question: qlabel.innerText,
			answer: answer
		});
    }            
        
	if (window.questionnumber == window.numberofquestion) {
        // when it reaches the end of question, send all answers to the backend
		sendData(window.useranswer);
        showNewTest();
        return
	} else {
		// Proceed to the next question
		fillDataToOptionEl(window.qaData, window.questionnumber);
	}

    window.questionnumber++;
}

function sendData (data) { 
	let formdata = new FormData();
    
    // I need to change the format of form data in order to be processed at the backend
    for (let index=0; index < data.length; index++)  {
        for (let prop in data[index]) {
            formdata.append("data[" + index + "]" + "[" + prop + "]", data[index][prop]);
        }
    }
    

    // -- for debugging only -- 
    console.log("In sendData");
    for (let pair of formdata.entries()) {
        console.log(pair[0]+ ' : '+ pair[1]); 
    }
    //*/

    // When sending my code to client interviewer, I missed the URL prefix, so the backend won't work
    const url = document.URL + "backend/prosesdata.php";
    fetch(url, {
        method: 'POST',
        headers: {
            //'Origin':'http://localhost'
        },
        //mode: "cors",
        //cache: "no-cache",
        //credentials: "include"
        body: formdata
    })
    //.then(result => result.json())
    .then(result => result.text())    
    .then(res => {
        let msg = ""
        if (res != 0) {
            console.log(res);
            msg = "Data tidak bisa diproses di backend";
            console.log(msg);
            //alert(msg)
        } else {
            msg = "Proses berhasil";
            console.log(msg);
            //alert("Proses berhasil");
        }            
    })
    .catch(error => {
        alert("Error : " + error);
    })
}


function showNewTest() {
    let divnewtest = document.querySelector("#divnewtest");
    divnewtest.removeAttribute("hidden");

    let form = document.querySelector("#formqa");
    form.setAttribute("hidden", "");

    let divsubmit = document.querySelector("#divsubmit");
    divsubmit.setAttribute("hidden", "false");    

    showAllUserAnswers();

    let btn = document.querySelector("#newtest");
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        form.removeAttribute("hidden");
        divsubmit.removeAttribute("hidden");
        divnewtest.setAttribute("hidden", "");

        window.questionnumber = 1;
        window.useranswer = [];
        initiateData(window.qaData);
    })    
}

function showAllUserAnswers() {
    let lsuseranswer = document.querySelector("#listuseranswer");

    // Remove existing label elements in this div, if any, before filling with the new labels
    let allLabel = document.querySelectorAll("#listuseranswer > label");
    if (allLabel) {
        for (let item of allLabel) {
            lsuseranswer.removeChild(item);
        }
    }

    //console.log("user answer :", window.useranswer);
    let i=0;
    for (let item of window.useranswer) {
        i++
        let label = document.createElement("label");
        //label.setAttribute("class", "block");
        label.innerHTML = "Question " + i + ". " + item.question + " : " + item.answer;
        listuseranswer.appendChild(label);
    }
}

export {showSelectedAnswer, processAnswer};