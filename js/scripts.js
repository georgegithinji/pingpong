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
  return ping;
}

//user interface logic
$(document).ready(function(){
  $("button.btn.btn-primary").submit(function(event){
    var number=$("#inputNumber").val();

    var corner=(pingpong(number)).toString();
    var split=corner.split(",").join("<br>");

  })
})
