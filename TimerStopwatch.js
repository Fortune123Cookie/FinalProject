window.onload = function() {
    var pauseClick2 = false;

    var cancelClick2 = false;

    document.getElementById("Pause").onclick = function() {
        pauseClick2 = true;
    };
}

function startClick() {
    
   
    var getUserInput = document.getElementById("userInput").value;
    var getUserInput2 = document.getElementById("userInput2").value;

// Update the count down every 1 second
    var x = setInterval(function() {
    
    
    var minutes = Math.floor(getUserInput);
    var seconds = Math.floor(getUserInput2);

  // Display the result in the element with id="demo"
    document.getElementById("Input").innerHTML = minutes + "m " + seconds + "s ";
        
    if (pauseClick2 === true){
        getUserInput2=getUserInput2+1;
    }
    
    getUserInput2=getUserInput2-1;
    if (getUserInput2===-1){
        getUserInput=getUserInput-1;
        getUserInput2=59;
    }

  // If the count down is finished, write some text 
    if (minutes <= 0 && seconds <= 0) {
        clearInterval(x);
        document.getElementById("Input").innerHTML = "DONE!";
        document.getElementById("Alarm").play();
    }
    
    if (cancelClick2 === true){
        break;
    }
        
    
}, 1000);
//}
}




function cancelClick(){
    
}

function pauseClick(){
    
}