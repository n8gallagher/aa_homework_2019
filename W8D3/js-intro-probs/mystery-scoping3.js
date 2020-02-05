function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

//node -- the above code produces an error
/*
> function mysteryScoping3() {
...   const x = 'out of block';
...   if (true) {
.....     var x = 'in block';
    var x = 'in block';
                      ^

SyntaxError: Unexpected end of input

>     console.log(x);
ReferenceError: x is not defined
>   }
  }
  ^

SyntaxError: Unexpected token }

>   console.log(x);
ReferenceError: x is not defined
> };
};
^

SyntaxError: Unexpected token }

>
*/