function submitForm() {

  var itemcode = document.getElementById('itemcode').value;
  var description = document.getElementById('description').value;
  var userid = document.getElementById('userid').value;

  const data = {
      itemcode: itemcode,
      description: description,
      userid: userid
  };

  $("#err").text("Sending...");

  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3000/items',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function(response) {
      $("#successdiv").show();
      $("#err").text("");
      $("#suc").text("success");
      console.log('Data submitted successfully:', response);
      // You can handle the response from the server here
    },
    error: function(error) {
      console.error('Error submitting data:', error);
      // Handle errors here
    }
  });
}