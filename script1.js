// Parker Stratton | declaring variables
// Blake made the stings for the array
var factArray = ["Fun Fact 1: Gaben Newell is also one of the main producers of the First Windows Operation System.", "Fun Fact 2: Gaben does not like the number 3!", "Fun Fact 3: Gaben is sometimes called 'Lord Gaben' because he grants discounts on steam games."];

// this is the script that Blake Worked on

var gabenImg = document.getElementById('gaben');

gabenImg.addEventListener("dblclick", moreInfo)

var i = 0;

function moreInfo() {

//Garrett was the creater of this dumb loop
if (i == 0 ){
  let newPara = document.createElement('p');
  console.log(newPara);

  let newParaNode = document.createTextNode(factArray[i]);


  newPara.appendChild(newParaNode);
  document.body.appendChild(newPara);
  i++;
}

else if (i == 1){
  let newPara = document.createElement('p');
  console.log(newPara);

  let newParaNode = document.createTextNode(factArray[i]);


  newPara.appendChild(newParaNode);
  document.body.appendChild(newPara);
  i++;
}

else if (i == 2){
  let newPara = document.createElement('p');
  console.log(newPara);

  let newParaNode = document.createTextNode(factArray[i]);


  newPara.appendChild(newParaNode);
  document.body.appendChild(newPara);
  i++;
}

else{
    alert("Why are you still clicking? Your just looping the same facts.");
    i = 0
}
}


// end of code
