function rasmjs() {

  var myModule = rasmod( window );
  var index = parseInt( document.getElementById("index").value );

  var start = ( new Date() ).getTime();

  var fib = myModule.fibonacci( index );
  document.getElementById("output").value = fib;

  var end = ( new Date() ).getTime();
  document.getElementById("time").value = end - start;
}
