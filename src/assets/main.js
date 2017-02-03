$(function() {

  $.ajax({
      url: 'https://www.codeschool.com/users/OptimalDwarf.json',
      dataType: 'jsonp',
      success: function(response) {
        // handle response
      }
    });
});
