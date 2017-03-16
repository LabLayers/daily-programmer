/****MARKDOWN
Write a function that transforms a string into title case. This mostly means: capitalizing only every first letter of every word in the string. However, there are some non-obvious exceptions to title case which can't easily be hard-coded. Your function must accept, as a second argument, a set or list of words that should not be capitalized. Furthermore, the first word of every title should always have a capital leter. For example:
```exceptions = ['jumps', 'the', 'over']
titlecase('the quick brown fox jumps over the lazy dog', exceptions)```
This should return:
The Quick Brown Fox jumps over the Lazy Dog
An example from the Wikipedia page:
```exceptions = ['are', 'is', 'in', 'your', 'my']
titlecase('THE vitamins ARE IN my fresh CALIFORNIA raisins', exceptions)```
Returns:
```The Vitamins are in my Fresh California Raisins```
****/

// We are assuming that all exceptions are lowercase
function titlecase (input, exceptions) {
  var input_words = input.split(' ');
  input_words.forEach(function(word, i) {
    // console.log(word.charAt(0).toUpperCase());

    if (exceptions.includes(word.toLowerCase())) {
      // Make word lowercase
      input_words[i] = word.toLowerCase();
    } else {
      // Capitalize first letter, make remaining letters lowercase
      input_words[i] = word.charAt(0).toUpperCase() + word.toLowerCase().substring(1,word.length);
    }

  });
  var output = input_words.join(' ');
  return output;
}

exceptions = ['jumps', 'the', 'over']
console.log( titlecase('the quick brown fox jumps over the lazy dog', exceptions) );

exceptions = ['are', 'is', 'in', 'your', 'my']
console.log( titlecase('THE vitamins ARE IN my fresh CALIFORNIA raisins', exceptions) );
