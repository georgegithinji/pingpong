//business logic
function pingpong(number) {
  var ping=[];
  for(var i=1;i<=number;i++){
    if (number%15===0) {
      ping.push("pingpong");
    }
    else if (number%5===0){
      ping.push("pong");
    }
    else if (number%3===0){
      ping.push("ping");
    }
    else {ping.push(i);}
  }
}