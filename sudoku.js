

var innerBlock = function(){
  var $table = $('<table>').addClass('inner-block');
  for (var i = 0; i < 3 ; i++ ) {
    var $row = $('<tr>').addClass('inner-block-row');
    for (var j = 0; j < 3 ; j++ ) {
     var $col = $('<td>').addClass('inner-block-data');
     // $col.append( innerBlock(i, j) ); 
     var cellData = "."

     $col.append('<div>.</div>')
     $row.append($col)  
    }
  $table.append($row);
  }
  return $table;
}


var outerBlock = function(){
  console.log("here");
  var $table = $('<table>').addClass('outer-block');
  for (var i = 0; i < 3 ; i++ ) {
    var $row = $('<tr>').addClass('outer-block-row');
    for (var j = 0; j < 3 ; j++ ) {
     var $col = $('<td>').addClass('outer-block-data');
     $col.append( innerBlock(i, j) ); 
     $row.append($col)  
    }

    $table.append($row);
  }
  return $table;
};


var displayGrid = function() {

  $grid = $('#puzzle-grid');
  // $grid.append('<div>koz is cool</div>')
  $grid.append( outerBlock() );
};



$(document).ready( function(){

  displayGrid();

});


