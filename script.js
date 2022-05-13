// ТАЙМЕР
document.addEventListener('DOMContentLoaded', function () {
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {    
        var BirthDate = document.getElementById("input-birthdate").value;    
        var date1 = new Date();
        var date2 = new Date(BirthDate);
        var diff = 70*365*24*3600*1000 - (date1.getTime() - date2.getTime());

        if (diff <= 0) {
            clearInterval(timerId);
        }

        const years = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24 / 365) : 0;
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) % 365 : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        const millis = diff > 0 ? diff % 1000 : 0;
        $years.textContent = years < 10? '0' + years : years;
        $days.textContent = days < 100 ? (days < 10 ? '00' + days : '0' + days) : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $millis.textContent = millis < 100 ? (millis < 10 ? '00' + millis : '0' + millis) : millis;
        $years.dataset.title = declensionNum(years, ['год', 'года', 'лет']);
        $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
        $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
//        $millis.dataset.title = declensionNum(millis, ['миллисекунда', 'миллисекунды', 'миллисекунд']);
    }



    // получаем элементы, содержащие компоненты даты
    const $years = document.querySelector('.timer__years');
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    const $millis = document.querySelector('.timer__millis');
    // вызываем функцию countdownTimer
    countdownTimer();

    timerId = setInterval(countdownTimer, 32);
  });



function daysM()
{
  var BirthDate = document.getElementById("input-birthdate").value;    
  var date1 = new Date();
  var date2 = new Date(BirthDate);;
  const life_duration = 70*365;
  var diff = life_duration - Math.floor((date1.getTime() - date2.getTime()) / 1000 / 3600 / 24);

  console.log(diff);

  var matrix = document.createElement("div");
  matrix.innerHTML = "<p>";

  let days_arr = new Array(life_duration);

  for (let i = 0; i < life_duration; i++) {
    if (i < diff) {
      days_arr[i] = "# ";
    }
    else
    {
      days_arr[i] = "_ ";
    } 

    matrix.innerHTML += days_arr[i];
  }

  matrix.innerHTML += "</p>";
  //here.append(matrix);
  var here = document.getElementById("here");
  var parentDiv = here.parentNode;
  parentDiv.replaceChild(matrix, here);
    
  }


