function rasmod( stdlib ) {
  "use asm";

  function fibonacci( n ) {
    n = n|0;

    if ( (n|0) == (0|0) ) {
      return 0|0;
    } else if ( (n|0) == (1|0) ) {
      return 1|0;
    }

    // must have final return
    return (fibonacci( n - 1|0 ) + fibonacci( n - 2|0 ))|0;
  }

  function mandlebrot(maxIter) {
    maxIter = maxIter|0;

    var cx = 0.0;
    var cy = 0.0;
    var iter = 0;
    var xn = 0.0;
    var x = 0.0;
    var y = 0.0;

    while ( ((x*x + y*y) < 4.0)&((iter|0) < (maxIter|0))) {
      xn = +( x*x - y*y + cx);
      y = +((x*y)*2.0 + cy);
      x = +xn;
      iter=(iter+1)|0;
    }

    return iter|0;
  }

  return {
    fibonacci: fibonacci,
    mandlebrot: mandlebrot
  };
}
