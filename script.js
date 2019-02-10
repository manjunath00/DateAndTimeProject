
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var date = new Date();
    let timeNow = date.toLocaleTimeString();
    document.getElementById('displaytime').textContent = timeNow;
}

var autoColor = setInterval(autoUpdateColor, 1500);

function autoUpdateColor() {

    let colorChange = function() {
        let randOne = Math.round(Math.random() *256);
  
        return (randOne);   
    }
  
    let colorChange2 = function() {
        let randOne = Math.round(Math.random() *256);
  
        return (randOne);
    }
  
  let colorChange3 = function() {
    let randOne = Math.round(Math.random() *256);
  
    return (randOne);
  }

    let fourthOpacity = function() {
        let randomNum = (Math.round(Math.random() * 10) / 10);
        return randomNum;
    }
  
   document.querySelector('.big').style.backgroundColor = 'rgb('+colorChange()+', '+colorChange2()+', '+colorChange3()+', '+fourthOpacity()+')';

   console.log(colorChange(), colorChange2(), colorChange3(), fourthOpacity());

};


/*
document.querySelector('.big').addEventListener('click', autoUpdateColor) ;


document.getElementById('displaydate').textContent = '10th Feb Sun';
*/









































































