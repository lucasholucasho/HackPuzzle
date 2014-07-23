$(document).ready(function() {
  getInstruction();
  });

function getInstruction()
{
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
