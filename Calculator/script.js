let display = document.getElementById('display');

function append(char) {
  if (display.innerText === '0' && char !== '.') {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === '') {
    display.innerText = '0';
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
  } catch (e) {
    display.innerText = 'Error';
  }
}