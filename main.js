

let textMyName = ' mohamed adel ';
let myName = document.getElementById('myName');
i = 0;
let loadMyNmae = setInterval(function () {
  myName.textContent += textMyName[i];
  i = i + 1;
  if (i > textMyName.length - 1) {
    clearInterval(loadMyNmae);
  };
}, 150);
//  myName.textContent = textMyName[i];
//  i = i + 1;
//  if (i > textMyName.length - 1) {
//    clearInterval(loadMyNmae);
//  }
//}, 100);