const scribble = require('scribbletune');

function generateMelo (){
  let melo = scribble.clip({
    notes: 'c4',
    pattern: 'x'
  });
  scribble.midi(melo, 'melo.midi');
}

generateMelo();
