let result = document.getElementById("inputText");
let calculate = (number) => {
  result.value += number;
};
let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("SYNTAX ERROR!");
  }
};
function clr() {
  result.value = " ";
}
function del() {
  result.value = result.value.slice(0, -1);
}
function sin() {
  result.value = Math.sin(result.value *  Math.PI / 180);
}

function cos() {
  result.value = Math.cos(result.value *  Math.PI / 180);
}
function tan() {
  result.value = Math.tan(result.value *  Math.PI / 180);
}
function log() {
  result.value = Math.log10(result.value);
}
function sqr() {
  result.value = Math.pow(result.value, 2);
}

function root() {
  result.value = Math.sqrt(result.value);
}
function pi() {
  result.value = Math.PI;
}
function expo() {
  result.value = 2.71828182846;
}
function fact() {
  var i, num, f;
  f = 1;
  num = result.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  result.value = f;
}
