$(document).ready(function(){
var rows=$("table#mydata tr:not(:first-child)");
$("#selectfield").on("change",function(){
var selected=this.value;
if(selected !="All")
{
rows.filter("[position="+selected+"]").show();
rows.not("[position="+selected+"]").hide();
var visibleRows=rows.filter("[position="+selected+"]");
}
else
{
rows.show();
}
});




$( "#myInput" ).on("click", function () {
  rows.show();
 });


$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#mydata tr:not(:first-child)").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


});


$("#myInput").on("click", function () {
    $('#selectfield option').prop('selected', function() {
        return this.defaultSelected;
    });
});

