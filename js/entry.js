function Entry(title, text) {
  this.title = title;
  this.text = text;
}

Entry.prototype.countWords = function() {
  // do stuff to count number of words
  words = this.text.split(" ");
  return words.length();
};

Entry.prototype.countVowels = function() {
  // do stuff to count number of vowels
  letters = this.text.split('');
  numberOfVowels = 0;
  vowels = 'aeiouAEIOU';
  debugger;
  letters.forEach(function(letter) {
    if (vowels.includes(letter)) {
      numberOfVowels++;
    }
  });
  return numberOfVowels;
};

Entry.prototype.countConsonants = function() {
  // do stuff to count number of consonants
  letters = this.text.split('');
  numberOfConsonants = 0;
  vowels = 'aeiouAEIOU';
  debugger;
  letters.forEach(function(letter) {
    if (!vowels.includes(letter)) {
      numberOfConsonants++;
    }
  });
  return numberOfConsonants;
};

exports.entryModule = Entry;
