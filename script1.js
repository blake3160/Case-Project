// Parker Stratton | declaring variables

var factArray = ["", "", "", ""]

// this is the script that Blake Worked on

var infoState = "1";

var gabenImg = document.getElementById('gaben');

gabenImg.addEventListener("dblclick", moreInfo)

function moreInfo() {
    
    
if (infoState == "1")
    {
        let newPara = document.createElement('p');
        console.log(newPara);

        let newParaNode = document.createTextNode("Fun Fact: Gaben Newell is also one of the main producers of the First Windows Operation System.");

        newPara.appendChild(newParaNode);
    
        document.body.appendChild(newPara);
        
        infoState = "2"
        alert("a fun fact was displayed below the first paragraph!");
    }
    else 
        {
            alert("sorry no more fun facts here D:");
        }
}

// end of code