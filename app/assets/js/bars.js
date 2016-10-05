var barone = new ProgressBar.Circle(barcontainerone, {
  color: '#aaa',
  strokeWidth: 5,
  trailWidth: 5,
  duration: 800,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#2196F3', width: 7 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText('Python');
    }
  }
});
barone.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
barone.text.style.fontSize = '2rem';
barone.animate(0.6);


var bartwo = new ProgressBar.Circle(barcontainertwo, {
  color: '#aaa',
  strokeWidth: 5,
  trailWidth: 5,
  duration: 1000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#009688', width: 6 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText('Django');
    }
  }
});
bartwo.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bartwo.text.style.fontSize = '2rem';
bartwo.animate(0.7);


var barthree = new ProgressBar.Circle(barcontainerthree, {
  color: '#aaa',
  strokeWidth: 5,
  trailWidth: 5,
  duration: 1200,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#FF9800', width: 9 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText('WebDev');
    }
  }
});
barthree.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
barthree.text.style.fontSize = '2rem';
barthree.animate(0.44);


var barfour = new ProgressBar.Circle(barcontainerfour, {
  color: '#aaa',
  strokeWidth: 5,
  trailWidth: 5,
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#9C27B0', width: 10 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText('JS');
    }
  }
});
barfour.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
barfour.text.style.fontSize = '2rem';
barfour.animate(0.36);


var barfive = new ProgressBar.Circle(barcontainerfive, {
  color: '#aaa',
  strokeWidth: 5,
  trailWidth: 5,
  duration: 1600,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#607D8B', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText('Ops');
    }
  }
});
barfive.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
barfive.text.style.fontSize = '2rem';
barfive.animate(1.0);
