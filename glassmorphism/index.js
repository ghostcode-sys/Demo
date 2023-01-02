window.onload = (event) => {
  const arr = ["Student", "Web Developer", "Coder", "Technology Enthusiast"];
  let i = 0;
  let word = arr[0];
  let sz = word.length;
  const info = document.getElementById("info");
  let j = 0;
  const writeMsg = () => {
    if (j <= sz) {
      info.innerHTML = word.slice(0, j);
      if(j == sz) setTimeout(writeMsg, 1000);
      else setTimeout(writeMsg, 100);
    }
    else if (j > sz && j <= sz * 2) {
      info.innerHTML = word.slice(0, -(j % sz));
      setTimeout(writeMsg, 100);
    }
    else{
        i++;
        j = -1;
       word = arr[i%4];
        sz = word.length;
        setTimeout(writeMsg, 500);
    }
    j++;
  };
  setTimeout(writeMsg, 2000);
};

const toggleClass = (idx) => {
  const btnArr = document.querySelectorAll(".navbtn")
  const activebtn = document.querySelectorAll(".active")
  activebtn[0].classList.remove("active");
  btnArr[idx-1].classList.toggle("active");
}

const circles = document.getElementsByTagName("circle");
const c1x = circles[0].cx.animVal.value;
const c1y = circles[0].cy.animVal.value;
const c2x = circles[1].cx.animVal.value;
const c2y = circles[1].cy.animVal.value;
window.addEventListener("mousemove", (event) => {
  let {x,y} = document.getElementsByTagName("circle")[0].getBoundingClientRect();
  x += 40;
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  if(mouseX - x < 0){
    let val = Math.max(-30, mouseX - x);
    circles[0].cx.baseVal.value = c1x + val;
    circles[1].cx.baseVal.value = c2x + val;
  }
  else{
    let val = Math.min(30, mouseX - x);
    circles[0].cx.baseVal.value = c1x + val;
    circles[1].cx.baseVal.value = c2x + val;
  }
  if(mouseY - y < 0){
    let val = Math.max(-30, mouseY - y);
    circles[0].cy.baseVal.value = c1y + val;
    circles[1].cy.baseVal.value = c2y + val;
  }
  else{
    let val = Math.min(30, mouseY - y);
    circles[0].cy.baseVal.value = c1y + val;
    circles[1].cy.baseVal.value = c2y + val;
  }
})
