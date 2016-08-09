var gridWidth = 600;

var fillGrid = function(){
	$('.grid').css({'width': gridWidth+'px'});
	$('.grid').empty();
  var cellsPer = prompt('How granular would you like the sketch pad to be? \
	30 is very coarse. 150 is very fine. Type a number.');
  var cellWidth = gridWidth / cellsPer;

  var cell = "<div class='cell'></div>";
  for (var i = 0; i < Math.pow(cellsPer,2); i++) {
    $('.grid').append(cell);
  };
  $('.cell').css({
  	'height': cellWidth+'px',  'width': cellWidth+'px',
  });

};

$(document).on('mouseenter','.cell',function() {
	$(this).css('background','pink');
});

$(document).ready(function() {
	fillGrid();
	$('button').click(function(){
		fillGrid();
	});

});
