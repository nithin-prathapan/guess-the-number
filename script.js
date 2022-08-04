const result = document.getElementById("result");
const yorResultDiv = document.getElementById("yourInput");
const showInput = () => {
  const inputDiv = document.getElementById("inputNumber").value;
  return inputDiv;
};
const viewResult = () => {
  const inputResult = showInput();

  btnClick.disabled = false;
  const Fvalue = Math.floor(Math.random() * 9 + 1);
  result.innerText = `Correct Number ${Fvalue}`;
  yorResultDiv.innerText = `Your Number ${inputResult}`;
  if (Fvalue == inputResult) {
    document.getElementById("status").innerHTML = "Congrats... Both are same";
  }else{
    document.getElementById("status").innerHTML = "Oops..! ";
  }
};
const btnClick = document.getElementById("btn");
btnClick.onclick = () => {
  const inputResult = showInput();
  if (inputResult === "") {
    btnClick.disabled = true;
    alert("Please enter one value");
  } else {
    btnClick.disabled = false;
    viewResult();
  }
};
