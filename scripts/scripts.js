$(document).ready( function () {



  $("#article .imgBar img").click( function () {

    var imageLink = $(this).attr("src");

    var imageText = "<img src=\'" + imageLink + "\' />";

    $("#lightbox").html(imageText);

    });


    $("#article .imgBar img").hover( function(e) {

          $(this).animate({opacity: 1.0, height: "auto", width: "105px"}, 150);

      }, function() {

          $(this).animate({opacity: 0.5, height: "auto", width: "100px"}, 150);

      });



$(".logo img").click(function () {
    let myArray = [10,20,30,51];
    let length = myArray.length;
    let total = 0;
    for (var i = 0; i < length; i++) {
     total = total + myArray[i];
    }
    return console.log(total / length);
  });


  });
