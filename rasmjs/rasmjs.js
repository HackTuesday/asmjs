function rasmjs() {

  var myModule = rasmod( window );

  var start = ( new Date() ).getTime();

  var fib = myModule.fibonacci( 40 );
  document.getElementById("output").value = fib;

  var end = ( new Date() ).getTime();
  document.getElementById("time").value = end - start;
}
