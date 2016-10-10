var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  var entry;
  $('#newEntryForm').submit(function(event) {
    event.preventDefault();
    var text = $('#textInput').val();
    var title = $('#titleInput').val();
    entry = new Entry(title, text);
  });

  $('#countConsonants').click(function() {
    var numberOfConsonants = entry.countConsonants();
    $('#consonants').text(numberOfConsonants);
  });

  $('#countVowels').click(function() {
    var numberOfVowels = entry.countVowels();
    $('#vowels').text(numberOfVowels);
  });
});
