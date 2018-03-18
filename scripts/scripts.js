$(document).ready( function () {



  $("#article div img").click( function () {

    var imageLink = $(this).attr("src");

    var imageText = "<img src=\'" + imageLink + "\' />";

    $("#lightbox").html(imageText);

    });


    $("#article .imgBar img").hover( function(e) {

          $(this).animate({opacity: 1.0, height: "auto", width: "105px"}, 150);

      }, function() {

          $(this).animate({opacity: 0.5, height: "auto", width: "100px"}, 150);

      });



  });
