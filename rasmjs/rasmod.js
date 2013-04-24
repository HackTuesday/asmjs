function rasmod( stdlib ) {
  "use asm";

  function fibonacci( n ) {
    n = n|0;

    if ( n == 0|0 ) {
      return 0|0;
    } else if ( n == 1|0 ) {
      return 1|0;
    } else {
      return fibonacci( n - 1|0 ) + fibonacci( n - 2|0 )|0;
    }
  }

  return {
    fibonacci: fibonacci
  };
}
