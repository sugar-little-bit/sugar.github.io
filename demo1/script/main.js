let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/grid1.png'){
        myImage.setAttribute('src','image/grid2.png');
    }
    else{
        myImage.setAttribute('src','image/grid1.png');
    }
}

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.text = '快看，有奇才,' + storedName;
}

myButton.onclick = function(){
    setUserName();
}



