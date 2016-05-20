
var totalSalaries = 0;

$(document).ready(function() {
    getEmployees();

    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      var values = {};
      $.each($('#employeeinfo').serializeArray(), function(i, field) {
        values[field.name] = field.value;
      });

      postEmployee(values);

      console.log(values);
      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');
      $('#employeeinfo').find('input[type=number]').val('');

      // appends to DOM
      totalSalaries += Number.parseInt(values.yearly_salary / 12);

      //appendEmployee(values);
      console.log(totalSalaries);


    });

});

function appendEmployee(empInfo) {
  $('.target-container').append('<div class="person"></div>');
  var $el = $('.target-container').children().last();
  $el.append('<p>' + empInfo.first_name + " " + empInfo.last_name + "</p>");
  $el.append('<p>' + empInfo.emp_id + '</p>');
  $el.append('<p>' + empInfo.job_title + '</p>');
  $el.append('<p>' + empInfo.yearly_salary + '</p>');
  $el.append('<p> Total Monthly Cost of Salaries $' + totalSalaries + '</p>');
}

function getEmployees(){
  $.ajax({
    type: 'GET',
    url: '/employee',
    success: function (employees) {
      $('.target-container').empty();
      employees.forEach(function (employee) {
        appendEmployee(employee);
      });
    }
  });
}

function postEmployee(employee) {
  $.ajax({
    type: 'POST',
    url: '/employee',
    data: employee,
    success: function (data) {
      getEmployees();
    },
});
}
