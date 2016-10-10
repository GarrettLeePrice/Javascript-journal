(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/entry.js":1}]},{},[2]);
