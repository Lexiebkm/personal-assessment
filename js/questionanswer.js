/* 
    This function, as its name suggests, serves to fill the select option with values
    from data which results from the random process of the initial data
*/

function fillDataToOptionEl (data, number) {
    let que = document.querySelector("#answer");

    // Remove existing option elements if any, before filling with the new options
    let allOpt = document.querySelectorAll("#answer > option");
    if (allOpt) {
        for (let item of allOpt) {
            que.removeChild(item);
        }
    }

    let ansOpt = data[number].answeroption;
    /*
    console.log("In fillDataToOptionEl number :", number);
    console.log("In fillDataToOptionEl data :", data);
    console.log("In fillDataToOptionEl question is :", data[number].question);
    console.log("In fillDataToOptionEl ansOpt :", ansOpt);
    */

    if (ansOpt.length > 0) {        
	    for (let i=0; i<=ansOpt.length-1; i++) {
            let qlabel1 = document.querySelector("#questionnumber");
            qlabel1.innerText = `Question ${number+1} :`;

            let qlabel2 = document.querySelector("#questionname");
            qlabel2.innerText = data[number].question;
		    
            let optEl = document.createElement("option");
            if (i==0) {
                optEl.setAttribute("selected", "");
            }
		    que.appendChild(optEl);		    	
		    let item = document.createTextNode(ansOpt[i]);
		    optEl.appendChild(item);
		}
	}
}

export default fillDataToOptionEl;