
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


function displayDateMonth() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
    let months = [
      'January',
      'Febraury',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    let time = new Date();
    let month = time.getMonth();
    let day = time.getDay();
    let date = time.getDate();
    
    console.log(`Today's date is ${date} of ${months[month]} and it is ${days[day]}`);

    document.getElementById('displayMonth').textContent = months[month];

    document.getElementById('displaydate').textContent = days[day];

  };
  
  
displayDateMonth();
  
  














































































