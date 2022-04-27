let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),
    container = document.getElementById('month-calendar'),
    monthContainer = container.getElementsByClassName('month-name')[0],
    yearContainer = container.getElementsByClassName('year-name')[0],
    daysContainer = container.getElementsByClassName('days')[0],
    prev = container.getElementsByClassName('prev')[0],
    next = container.getElementsByClassName('next')[0],
    monthName = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];



let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
console.log(nowDate.getFullYear());

function setMonthCalendar(year,month) {
    let monthDays = new Date(year, month + 1, 0).getDate(),
        monthPrefix = new Date(year, month, 0).getDay(),
        monthDaysText = '';

    monthContainer.textContent = monthName[month];
    yearContainer.textContent = year;
    daysContainer.innerHTML = '';

    if (monthPrefix > 0){
        for (let i = 1  ; i <= monthPrefix; i++){
            monthDaysText += '<li></li>';
        }
    }

    for (let i = 1; i <= monthDays; i++){
        monthDaysText += '<li>' + i + '</li>';
    }

    daysContainer.innerHTML = monthDaysText;

    if (month == nowMonth && year == nowYear){
        days = daysContainer.getElementsByTagName('li');
        days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
    }
}

setMonthCalendar(nowYear,nowMonth);

prev.onclick = function () {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() - 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
}

next.onclick = function () {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() + 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
}




document.addEventListener('DOMContentLoaded', function () {
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {    
        var BirthDate = document.getElementById("birthdate").value;    
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
        $days.textContent = days < 100 ? (days < 10 ? '0' + days : days) : days;
        $hours.textContent = hours < 10 ? '0' + hours : hours;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $millis.textContent = millis < 100 ? (millis < 10 ? '0' + millis : millis) : millis;
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

    timerId = setInterval(countdownTimer, 1);
  });