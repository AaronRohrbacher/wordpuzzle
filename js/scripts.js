var puzzle = "Believe you can and you're halfway there. Theodore Roosevelt";

var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

puzzle = puzzle.split('');


for (var i = 0; i < vowels.length; i++) {
  for (var j = 0; j < puzzle.length; j++) {
    if (vowels[i] == puzzle[j]) {
      puzzle[j] = '-';
    }
  }
}
alert(puzzle.join(''));
