class BeerSong {

  verse(number) {
    if (number > 2) {
      return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number - 1} bottles of beer on the wall.\n`;
    } else if (number === 2) {
      return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
    } else if (number === 1) {
      return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    } else if (number === 0) {
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    }
  }

  sing(startNumber, endNumber = 0) {
    let song = '';
    while(startNumber >= endNumber) {
      const newVerse = this.verse(startNumber)
      if (startNumber === endNumber) {
        var completeSong = song.concat(newVerse)
      } else {
        var completeSong = song.concat(newVerse + '\n')
      }
      song = completeSong
      startNumber--;
    }
    return song;
  }
}

module.exports = BeerSong