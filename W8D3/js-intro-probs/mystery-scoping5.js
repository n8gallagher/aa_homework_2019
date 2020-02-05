function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

//node -- the above code produces an error

/*
> function mysteryScoping5() {
...   let x = 'out of block';
...   if (true) {
.....     let x = 'in block';
.....     console.log(x);
.....   }
...   let x = 'out of block again';
  let x = 'out of block again';
                              ^

SyntaxError: Unexpected end of input

>   console.log(x);
ReferenceError: x is not defined
> }
}
^

SyntaxError: Unexpected token }

> ;
undefined
> ;
undefined
> mysteryScoping5();
ReferenceError: mysteryScoping5 is not defined
>
*/