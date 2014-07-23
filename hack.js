$(document).ready(function() {
  getInstruction();
  });

function getInstruction()
{
  var key = "hTDiG0IfC2Z82d6pe1aBfwfNa0UoCYuA";
  var zipcode = $('#zipcode').val();
  var distance = 10;
  var url = "http://challenge.outsidehacks.com/";
  $.ajax({
    type: "POST",
    url: url,
    data: {"answer": 42},
    success: function(data) {
      $("#results").append(data.response);
    }
  })
}