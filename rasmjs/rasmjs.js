var myModule;

function rasmjs() {
  myModule = rasmod( window );
  docalc();
}

function calc(e) {
  e.preventDefault();
  docalc();
  return false;
}

function docalc() {
  var index = parseInt( document.getElementById("index").value );
  var action = document.getElementById("calcForm").getAttribute( "action" );

  var start = ( new Date() ).getTime();

  //var fib = myModule.fibonacci( index );
  var result = myModule[ action ]( index)

  document.getElementById("output").value = result;

  var end = ( new Date() ).getTime();
  document.getElementById("time").value = end - start;
}
