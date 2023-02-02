const numbtns = document.querySelectorAll(".num_btn");
const funBtns = document.querySelectorAll(".fun_btn");
const evaluate = document.getElementById("evaluate");
const reset = document.getElementById("clear");
const deleteOneBts = document.getElementById("erase");
const evaluationBtn = document.getElementById("evaluate");
const point = document.querySelector(".poi_btn");
let area = document.getElementById("area");



// add Event Listener
deleteOneBts.addEventListener("click", () => {
  deleteOne();
});
reset.addEventListener("click", () => {
  resetear();
});
evaluationBtn.addEventListener("click", () => {
  evaluation();
});
point.addEventListener("click", () => {
  pointValidation();
});

numbtns.forEach((eventButtons) => {
  eventButtons.addEventListener("click", () => {
    area.value += eventButtons.value;
  });
});
//  -  -  -  -  -

// functions
function deleteOne() {
  area.value = area.value.slice(0, -1);
};

function resetear() {
  area.value = "";
};

function evaluation() {
  area.value = eval(area.value);
};

function pointValidation() {
  if (area.value[area.value.length - 1] === ".") {
  } else if (isNaN(area.value[area.value.length - 1])) {
  } else {
    area.value += point.value;
  };
};

funBtns.forEach((eventButtons) => {
  function verificationToAddSymbols() {
    if (area.value[area.value.length - 1] === eventButtons.value) {
    } else if (isNaN(area.value[(area.value.length = 0)])) {
    } else if (isNaN(area.value[area.value.length - 1])) {
      area.value = area.value.slice(0, -1);
      area.value += eventButtons.value;
    } else {
      area.value += eventButtons.value;
    }
  }
  eventButtons.addEventListener("click", () => {
    verificationToAddSymbols();
  });
});
// -  -  -  -  -