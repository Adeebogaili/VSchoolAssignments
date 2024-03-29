daBoxObj = document.getElementById('da-box');

function backgroundChanger(event) {
  console.log(event.type);
  switch (event.type) {
    case 'mouseover':
      daBoxObj.style.backgroundColor = 'blue';
      break;
    case 'mouseout':
      daBoxObj.style.backgroundColor = 'pink';
      break;
    case 'mousedown':
      daBoxObj.style.backgroundColor = 'red';
      break;
    case 'mouseup':
      daBoxObj.style.backgroundColor = 'yellow';
      break;
    case 'dblclick':
      daBoxObj.style.backgroundColor = 'green';
      break;
    case 'wheel':
      daBoxObj.style.backgroundColor = 'orange';
      break;
    case 'keydown':
      switch (event.key) {
        case 'b':
          daBoxObj.style.backgroundColor = 'blue';
          break;
        case 'r':
          daBoxObj.style.backgroundColor = 'red';
          break;
        case 'y':
          daBoxObj.style.backgroundColor = 'yellow';
          break;
        case 'g':
          daBoxObj.style.backgroundColor = 'green';
          break;
        case 'o':
          daBoxObj.style.backgroundColor = 'orange';
      }
      break;
    case 'keyup':
      daBoxObj.style.backgroundColor = 'pink';
  }
}

daBoxObj.addEventListener('mouseover', backgroundChanger); // I read that an event object is passed into the function backgroundChanger as a parameter automatically
daBoxObj.addEventListener('mouseout', backgroundChanger);
daBoxObj.addEventListener('mousedown', backgroundChanger);
daBoxObj.addEventListener('mouseup', backgroundChanger);
daBoxObj.addEventListener('dblclick', backgroundChanger);
window.addEventListener('wheel', backgroundChanger);
window.addEventListener('keydown', backgroundChanger);
window.addEventListener('keyup', backgroundChanger);

/*  
const colorMap = {
  'b': 'blue',
  'r': 'red',
  'y': 'yellow',
  'g': 'green',
  'o': 'orange',
};

function backgroundChanger(event) {
  console.log(event.type);
  
  switch (event.type) {
    case 'mousemove':
      if (event.buttons === 1) { // left mouse button is pressed
        daBoxObj.style.backgroundColor = 'red';
      } else if (event.buttons === 2) { // right mouse button is pressed
        daBoxObj.style.backgroundColor = 'blue';
      } else {
        daBoxObj.style.backgroundColor = 'pink';
      }
      break;
      
    case 'dblclick':
      daBoxObj.style.backgroundColor = 'green';
      break;
      
    case 'wheel':
      daBoxObj.style.backgroundColor = 'orange';
      break;
      
    case 'keydown':
      const color = colorMap[event.key];
      if (color) {
        daBoxObj.style.backgroundColor = color;
      }
      break;
      
    case 'keyup':
      daBoxObj.style.backgroundColor = 'pink';
      break;
  }
}

daBoxObj.addEventListener('mousemove', backgroundChanger);
daBoxObj.addEventListener('dblclick', backgroundChanger);
window.addEventListener('wheel', backgroundChanger);
window.addEventListener('keydown', backgroundChanger);
window.addEventListener('keyup', backgroundChanger);

*/
