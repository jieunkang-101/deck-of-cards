$(document).ready(function() {
  var numbers = ["ace",2,3,4,5,6,7,8,9,10,"jack", "queeen", "king"]
  var suits = ["clubs", "diamonds", "hearts", "spades"]
  var decks = [];
  

  suits.forEach(function(suit) { 
    numbers.forEach(function(number) {
      tempString = temp(number + " of "+ suit);
      decks.push(tempString);
  }
);
  console.log(decks);  
  
  // $(".output").each(function (index) { 
  //   $(this).text(decks[index]);
    
  $(".output").html(decks);

  function temp(value)
  {
    return ("<li>"+value+"</li>")
  }

});

});