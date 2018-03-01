//business logic
function pingPong(number) {
  var ping=[];
  for(var i=1;i<=number;i++){
    if (i%15===0) {
      ping.push("pingpong");
    }
    else if (i%5===0){
      ping.push("pong");
    }
    else if (i%3===0){
      ping.push("ping");
    }
    else {
      ping.push(i);
    }
  }
  return ping;
}

//user interface logic
$(document).ready(function(){
  $("form#form").submit(function(event){
    var number=parseInt($("#inputNumber").val());

    event.preventDefault();
    $("li.list").empty();

    var corner=pingPong(number).toString();
    var split=corner.split(",").join("<br>");
    $("#result").addClass("list").append("<li class='list'>"+split+"</li>");
      console.log(split);
  });
});
