$(function () {

  // $(".button-collapse").sideNav();
  // $('#p').hide();
  // GET function
  $(document).on('click', '#get-button', function() {
    $.ajax({
      url: '/api/view',
      contentType: 'applicatison/json',
      success: function(response) {
        var data = response.employees;
        // Clear the tbody
        $('tbody').html('');
        // Loop and append
        data.forEach(function print(employee) {
          $('tbody').append(
            '<tr>' +
              "<td class='name'>" + employee.name +"</td>" +
              "<td class='email'>" + employee.email + "</td>" +
              "<td class='age'>" + employee.age + "</td>" +
              "<td class='phone_number'>" + employee.phone_number + "</td>" +
              "<td class='hobbies'>" + employee.hobbies + "</td>" +
              "<td class='skills'>" + employee.skills + "</td>" +
            '</tr>'
          );
        });
      }
    });
  });

  // POST function
  $(document).on('click', '#post-button', function() {

//    Get the value from form
    var name = $('#name').val();
    var email = $('#email').val();
    var age = $('#age').val();
    var phone_number = $('#phone_number').val();
    var hobbies = $('#hobbies').val();
    var skills = $('#skills').val();

    // If user has not filled form
    if (!name || !email) {
      // Materialize.toast('Please fill in both fields', 4000);

    } // checks if email follows valid format. Find validateEmail function at bottom of file
    else if (!validateEmail(email)) {

      // Materialize.toast('Please enter a valid email address', 4000);

    }
    else {
      // Post value if user has filled name
      $.ajax({
        url: '/api/save',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({name:name, email:email, age:age, phone_number:phone_number, hobbies:hobbies, skills:skills}),
        success: function(response) {
          console.log(response);
          $('#get-button').trigger('click');
          // Materialize.toast(response.message, 4000);
        }
      });
    }
  });

  // // DELETE Button
  // $(document).on('click', '.delete', function() {
  //   var del = $(this).closest('tr');
  //   var email = del.find('.email').text();
  //   $.ajax({
  //     url: '/api/delete/' + email,
  //     method: 'DELETE',
  //     contentType: 'application/json',
  //     success: function(response) {
  //       Materialize.toast(response.message, 4000);
  //       $('#get-button').trigger('click');
  //     }
  //   });
  // });

  // Function to validate the email entered. Used in POST
  function validateEmail(email) {
     var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
     if (reg.test(email)) {
         return true;
     } else {
         return false;
     }
 }
});
