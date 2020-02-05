function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

//node

/*
undefined
> function mysteryScoping4() {
...   let x = 'out of block';
...   if (true) {
.....     let x = 'in block';
.....     console.log(x);
.....   }
...   console.log(x);
... }
undefined
> mysteryScoping4();
in block
out of block
undefined
>
*/