// add an item
function submitItem() {

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
      $("#err").text("");
      $("#suc").text("Error in Submission. Try Again Later");
      console.log('Error submitting data:', error);
      // Handle errors here
    }
  });
}



// add a link
function submitLink() {

  var linkname = document.getElementById('linkname').value;
  var userid = document.getElementById('userid').value;

  const data = {
      linkname: linkname,
      userid: userid
  };

  $("#err").text("Sending...");

  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3000/links',
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
      $("#err").text("");
      $("#suc").text("Error in Submission. Try Again Later");
      console.log('Error submitting data:', error);
      // Handle errors here
    }
  });
}



// add a pricing
function submitPrice() {

  var itemcode = document.getElementById('itemcode').value;
  var unitcost = document.getElementById('unitcost').value;
  var userid = document.getElementById('userid').value;

  const data = {
      itemcode: itemcode,
      unitcost: unitcost,
      userid: userid
  };

  $("#err").text("Sending...");

  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3000/prices',
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
      $("#err").text("");
      $("#suc").text("Error in Submission. Try Again Later");
      console.error('Error submitting data:', error);
      // Handle errors here
    }
  });
}

// add a pricing
function submitStocks() {

  var itemcode = document.getElementById('itemcode').value;
  var quantity = document.getElementById('quantity').value;
  var unitcost = document.getElementById('unitcost').value;
  var totalprice = document.getElementById('totalprice').value;
  var description = document.getElementById('description').value;
  var userid = document.getElementById('userid').value;

  const data = {
      itemcode: itemcode,
      quantity: quantity,
      unitcost: unitcost,
      totalprice: totalprice,
      description: description,
      userid: userid
  };


  $("#err").text("Sending...");

  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3000/stock',
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
      $("#err").text("");
      $("#suc").text("Error in Submission. Try Again Later");
      console.log('Error submitting data:', error);
      // Handle errors here
    }
  });
}

function updateResult() {
  // Get the values from the input fields
  var input1 = parseFloat(document.getElementById('quantity').value) || 0;
  var input2 = parseFloat(document.getElementById('unitcost').value) || 0;

  // Perform addition
  var result = input1 * input2;

  // Update the value in the result field
  document.getElementById('totalprice').value = result;
}


// add an role
function submitRole() {

  var itemcode = document.getElementById('roletype').value;
  var userid = document.getElementById('userid').value;

  const data = {
      roletype: roletype,
      userid: userid
  };

  $("#suc").text("");  
  $("#err").text("Sending...");


  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3000/roles',
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
      $("#err").text("");
      $("#suc").text("Error in Submission. Try Again Later");
      console.log('Error submitting data:', error);
      // Handle errors here
    }
  });
}


function submitRequests() {

  var itemcode = document.getElementById('itemcode').value;
  var quantity = document.getElementById('quantity').value;
  var incidentid = document.getElementById('incidentid').value;
  var linkname = document.getElementById('linkname').value;
  var userid = document.getElementById('userid').value;

  const data = {
      itemcode: itemcode,
      quantity: quantity,
      incidentid : incidentid ,
      linkname: linkname,
      userid: userid
  };

  $("#err").text("Sending...");

  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3000/requests',
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
      $("#err").text("");
      $("#suc").text("Error in Submission. Try Again Later");
      console.log('Error submitting data:', error);
      // Handle errors here
    }
  });
}


function submitContractor() {

  var contractorname = document.getElementById('contractorname').value;
  var userid = document.getElementById('userid').value;

  const data = {
      contractorname: contractorname,
      userid: userid
  };

  $("#suc").text("");  
  $("#err").text("Sending...");


  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3000/contractors',
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
      $("#err").text("");
      $("#suc").text("Error in Submission. Try Again Later");
      console.log('Error submitting data:', error);
      // Handle errors here
    }
  });
}
