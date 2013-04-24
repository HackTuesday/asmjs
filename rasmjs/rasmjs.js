var myModule;

function rasmjs() {
  myModule = rasmod( window );
  docalcfib();
}

function calcfib(e) {
  e.preventDefault();
  docalcfib();
  return false;
}

function docalcfib() {
  var index = parseInt( document.getElementById("index").value );

  var start = ( new Date() ).getTime();

  var fib = myModule.fibonacci( index );
  document.getElementById("output").value = fib;

  var end = ( new Date() ).getTime();
  document.getElementById("time").value = end - start;
}
