const scribble = require('scribbletune');

function generateMelo (){
  let melo1 = scribble.clip({
    //notes: ['c4', 'd4', 'e4', 'f4', 'g4', 'b4', 'c5'],
    notes: scribble.scale('c minor')
            .filter((a, x) => x % 2 === 0),
    pattern: 'x-x-x-x-x-x-x-x-'
  });

  //console.log(melo1);

  let melo2 = scribble.clip({
    //notes: ['c4', 'd4', 'e4', 'f4', 'g4', 'b4', 'c5'],
    notes: scribble.scale('c minor')
            .filter((a, x) => x % 2),
    pattern: 'x-'.repeat(8)
  });

  scribble.midi(melo1.concat(melo2), './output/melo.midi');
}


function generatePerc() {
  let perc1 = scribble.clip({
    notes: ['c2', 'c#2', 'd2', 'd#2'],
    pattern: 'x-x-x--x',
    sizzle: true,
    shuffle: true
  });

  let perc2 = scribble.clip({
    notes: ['c2', 'c#2', 'd2', 'd#2'],
    pattern: 'x-x-xxxx',
    sizzle: true,
    shuffle: true
  });

  scribble.midi(perc1.concat(perc1, perc1, perc2), './output/perc.midi');
}


generateMelo();
generatePerc();
