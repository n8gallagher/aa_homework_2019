function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}
//node
/*
> function mysteryScoping1() {
...   var x = 'out of block';
...   if (true) {
.....     var x = 'in block';
.....     console.log(x);
.....   }
...   console.log(x);
... }
undefined
> ;
undefined
>
>
>
>
>
>
> x
ReferenceError: x is not defined
> mysteryScoping1();
in block
in block
undefined

*/