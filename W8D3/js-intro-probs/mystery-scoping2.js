function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

//node
/*
> function mysteryScoping2() {
...   const x = 'out of block';
...   if (true) {
.....     const x = 'in block';
.....     console.log(x);
.....   }
...   console.log(x);
... }
undefined
> mysteryScoping2();
in block
out of block
undefined
>
*/