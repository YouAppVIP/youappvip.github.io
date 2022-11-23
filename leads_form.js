//selector from your HTML form
$('#leads-form').submit(function (e) {
  //prevent the form from submiting so we can post to the google form
  e.preventDefault();

  //AJAX request
  $.ajax({
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSe1lOKSU4NGTqy2KEhbxFu2MM4GLKfTm5tCYbmoLVLyo6Imlw/formResponse',     //The public Google Form url, but replace /view with /formResponse
    data: $('#leads-form').serialize(), //Nifty jquery function that gets all the input data 
    type: 'POST', //tells ajax to post the data to the url
    dataType: "json", //the standard data type for most ajax requests
    statusCode: { //the status code from the POST request
      0: function (data) { //0 is when Google gives a CORS error, don't worry it went through
        console.log('form submitted');
        //success
        $('#form-success').text('Welcome!');
      },
      200: function (data) {//200 is a success code. it went through!
        console.log('form submitted');
        //success
        $('#form-success').text('Welcome!');
      },
      403: function (data) {//403 is when something went wrong and the submission didn't go through
        console.error('problem submitting form')
        //error
        alert('Oh no! something went wrong. we should check our code to make sure everything matches with Google');
      }
    }
  });
});