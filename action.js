function pingpongAPI(){
    let awnser = prompt("Ping or Pong?");
    if(awnser == "ping"){
        document.getElementById("main").innerHTML = "pong";
    }
    else if(awnser == "pong"){
        document.getElementById("main").innerHTML = "ping";
    }
    else{
        document.getElementById("main").innerHTML = "error";
    }
}

function tryAgain (){
    location.reload();   
}