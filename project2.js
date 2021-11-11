var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
     var element = elements[i];

  //element.style.setProperty('border','dashed 5px magenta');
  element.style.setProperty('text-shadow', '3px 3px 3px');
  element.style.setProperty('text-decoration', 'line-through');
  element.style.setProperty('letter-spacing', '-4px');
  element.style.setProperty('direction', 'rtl');
  element.style.setProperty('text-transform', 'capitalize');
  element.style.setProperty('font-family', 'monospace');

  }

for (e of document.getElementsByTagName('*')) {
    var c = "rgba(" + Math.floor(Math.random()*255)
	+ "," + Math.floor(Math.random()*255)
	+ "," + Math.floor(Math.random()*255) +
  + "," + "0.025" + ")";

    console.log(e);
    e.style.setProperty('text-shadow',c);
}

for (e of document.getElementsByTagName('*')) {
    var c = "rgb(" + Math.floor(Math.random()*255)
	+ "," + Math.floor(Math.random()*255)
	+ "," + Math.floor(Math.random()*255) + ")"

    e.style.setProperty('color',c);
}

for (e of document.getElementsByTagName('*')) {
    var c = "rgba(" + Math.floor(Math.random()*255)
	+ "," + Math.floor(Math.random()*255)
	+ "," + Math.floor(Math.random()*255)
  + "," + "0.025" + ")"

    e.style.setProperty('background-color',c);
}
