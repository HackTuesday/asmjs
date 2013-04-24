function ASMFib(stdlib){
    "use asm";
    function fib(n)
    {
        n=n|0;
        if((n|0)  < 2|0)
          return n|0;
        return fib(n - 1 | 0) + fib(n - 2 | 0) | 0;
    }
    return {
        fib:fib
    }
}

function simpleFib(){
    function fib(n)
    {
        n=n|0;
        if((n|0)  < 2|0)
            return n|0;
        return fib(n - 1 | 0) + fib(n - 2 | 0) | 0;
    }
    return {
        fib:fib
    }
}

