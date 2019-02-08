function reverseString(str) {
   var first = str.split('');
   var second = first.reverse('');
   var third = second.join('');
   console.log(third);
  }
  
  reverseString("hello");