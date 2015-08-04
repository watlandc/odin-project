var start = function(option) {
  $('#grid_container').html("");
  var input = prompt('Please enter a number between 1-100.');

  if (input >= 1 && input <= 100) {
    var square_size = $('#grid_container').width()/input - 2;
    for (var i = 1; i <= input; i++) {
      for (var j = 1; j <= input; j++) {
        $('#grid_container').append('<div class="square"></div>');
      }
      $('#grid_container').append('<div class="new_row"></div>');
    }
    $('.square').css('width', square_size);
    $('.square').css('height', square_size);

    $('.square').on('mouseenter', function() {      
     switch(option) {
        case 1:
          $(this).css('background-color', 'blue');
          break;
        case 2:
          $(this).css('background-color', 'green');
          break;
      }
    });
  }
  else {
    alert("Please enter a number between 1-100.");
  }
}