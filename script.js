// Вычисление времени, учитывая ввод
function allinputs(){
  var region = document.getElementById("input-region").value; 
  
  var male = false;
  var female = false;

  if (document.getElementById("input-male").checked){
    male = true;
  }
  if (document.getElementById("input-female").checked){
    female = true;
  }

  //console.log(male + ' ' + female + ' ' + region);

  switch (region) {
    case 'RU-AD':
      if (male == true) {
        return 69*365;
      }
      if (female == true) {
        return 78.4*365;
      }
      break;
    case 'RU-AL':
      if (male == true) {
        return 64.5*365;
      }
      if (female == true) {
        return 76*365;
      }
      break;
    case 'RU-BA':
      if (male == true) {
        return 67.3*365;
      }
      if (female == true) {
        return 78*365;     
      }
      break;
    case 'RU-BU':
      if (male == true) {
        return 65.4*354;
      }
      if (female == true) {
        return 76.1*365;
      }
      break;
    case 'RU-DA':
      if (male == true) {
        return 76.6*365;
      }
      if (female == true) {
        return 81.4*365;
      }
      break;
    case 'RU-IN':
      if (male == true) {
        return 80*365;
      }
      if (female == true) {
        return 86.3*365;
      }
      break;
    case 'RU-KB':
      if (male == true) {
        return 72.6*365;
      }
      if (female == true) {
        return 80*365;
      }
      break;
    case 'RU-KL':
      if (male == true) {
        return 69.3*365;
      }
      if (female == true) {
        return 80.3*365;
      }
      break;
    case 'RU-KC':
      if (male == true) {
        return 71.7*365;
      }
      if (female == true) {
        return 80.4*365; 
      }
      break;
    case 'RU-KR':
      if (male == true) {
        return 65.7*365;
      }
      if (female == true) {
        return 76.9*365;
      }
      break;
    case 'RU-KO':
      if (male == true) {
        return 65.8*365;
      }
      if (female == true) {
        return 76.7*365;
      }
      break;
    case 'RU-KRY':
      if (male == true) {
        return 67.8*365;
      }
      if (female == true) {
        return 77.4*365;
      }
      break;
    case 'RU-ME':
      if (male == true) {
        return 66.9*365;
      }
      if (female == true) {
        return 78.8*365;
      }
      break;
    case 'RU-MO':
      if (male == true) {
        return 68.8*365;
      }
      if (female == true) {
        return 78.9*365;
      }
      break;
    case 'RU-SA':
      if (male == true) {
        return 68.1*365;
      }
      if (female == true) {
        return 77.9*365;
      }
      break;
    case 'RU-SE':
      if (male == true) {
        return 70.5*365;
      }
      if (female == true) {
        return 80.6*365;
      }
      break;
    case 'RU-TA':
      if (male == true) {
        return 69.7*365;
      }
      if (female == true) {
        return 79.9*365;
      }
      break;
    case 'RU-TY':
      if (male == true) {
        return 62.5*365;
      }
      if (female == true) {
        return 72.5*365;
      }
      break;
    case 'RU-UD':
      if (male == true) {
        return 67*365;
      }
      if (female == true) {
        return 78.3*365;
      }
      break;
    case 'RU-KK':
      if (male == true) {
        return 65.4*365;
      }
      if (female == true) {
        return 76.6*365;
      }
      break;
    case 'RU-CE':
      if (male == true) {
        return 73.6*365;
      }
      if (female == true) {
        return 78*365;
      }
      break;
    case 'RU-CU':
      if (male == true) {
        return 67.6*365;
      }
      if (female == true) {
        return 79.3*365;
      }
      break;
    case 'RU-ALT':
      if (male == true) {
        return 66.3*365;
      }
      if (female == true) {
        return 76.8*365;
      }
      break;
    case 'RU-ZAB':
      if (male == true) {
        return 63.3*365;
      }
      if (female == true) {
        return 74.8*365;
      }
      break;
    case 'RU-KAM':
      if (male == true) {
        return 65.6*365;
      }
      if (female == true) {
        return 75.9*365;
      }
      break;
    case 'RU-KDA':
      if (male == true) {
        return 69*365;
      }
      if (female == true) {
        return 78.7*365;
      }
      break;
    case 'RU-KYA':
      if (male == true) {
        return 65.8*365;
      }
      if (female == true) {
        return 76.3*365;
      }
      break;
    case 'RU-PER':
      if (male == true) {
        return 65.5*365;
      }
      if (female == true) {
        return 76.9*365;
      }
      break;
    case 'RU-PRI':
      if (male == true) {
        return 65.6*365;
      }
      if (female == true) {
        return 75.6*365;
      }
      break;
    case 'RU-STA':
      if (male == true) {
        return 70.1*365;
      }
      if (female == true) {
        return 78.9*365;
      }
      break;
    case 'RU-KHA':
      if (male == true) {
        return 64.4*365;
      }
      if (female == true) {
        return 75.7*365;
      }
      break;
    case 'RU-AMU':
      if (male == true) {
        return 63.5*365;
      }
      if (female == true) {
        return 73.9*365;
      }
      break;
    case 'RU-ARK':
      if (male == true) {
        return 66.8*365;
      }
      if (female == true) {
        return 77.7*365;
      }
      break;
    case 'RU-AST':
      if (male == true) {
        return 69*365;
      }
      if (female == true) {
        return 78.6*365;
      }
      break;
    case 'RU-BEL':
      if (male == true) {
        return 69.3*365;
      }
      if (female == true) {
        return 78.9*365;
      }
      break;
    case 'RU-BRY':
      if (male == true) {
        return 66.6*365;
      }
      if (female == true) {
        return 77.9*365;
      }
      break;
    case 'RU-VLA':
      if (male == true) {
        return 66.1*365;
      }
      if (female == true) {
        return 77.3*365;
      }
      break;
    case 'RU-VGG':
      if (male == true) {
        return 69.1*365;
      }
      if (female == true) {
        return 78.8*365;
      }
      break;
    case 'RU-VLG':
      if (male == true) {
        return 65.9*365;
      }
      if (female == true) {
        return 77.6*365;
      }
      break;
    case 'RU-VOR':
      if (male == true) {
        return 68.2*365;
      }
      if (female == true) {
        return 78.8*365;
      }
      break;
    case 'RU-IVA':
      if (male == true) {
        return 66.5*365;
      }
      if (female == true) {
        return 76.7*365;
      }
      break;
    case 'RU-IRK':
      if (male == true) {
        return 63.8*365;
      }
      if (female == true) {
        return 75.1*365;
      }
      break;
    case 'RU-KGD':
      if (male == true) {
        return 68.7*365;
      }
      if (female == true) {
        return 78*365;
      }
      break;
    case 'RU-KLU':
      if (male == true) {
        return 66.8*365;
      }
      if (female == true) {
        return 77.9*365;
      }
      break;
    case 'RU-KEM':
      if (male == true) {
        return 64.3*365;
      }
      if (female == true) {
        return 75.1*365;
      }
      break;
    case 'RU-KIR':
      if (male == true) {
        return 67.4*365;
      }
      if (female == true) {
        return 78.4*365;
      }
      break;
    case 'RU-KOS':
      if (male == true) {
        return 66.9*365;
      }
      if (female == true) {
        return 77.5*365;
      }
      break;
    case 'RU-KGN':
      if (male == true) {
        return 65.3*365;
      }
      if (female == true) {
        return 77.1*365;
      }
      break;
    case 'RU-KRS':
      if (male == true) {
        return 66.7*365;
      }
      if (female == true) {
        return 77.7*365;
      }
      break;
    case 'RU-LEN':
      if (male == true) {
        return 68.5*365;
      }
      if (female == true) {
        return 78.6*365;
      }
      break;
    case 'RU-LIP':
      if (male == true) {
        return 67.9*365;
      }
      if (female == true) {
        return 78.5*365;
      }
      break;
    case 'RU-MAG':
      if (male == true) {
        return 64.2*365;
      }
      if (female == true) {
        return 75.3*365;
      }
      break;
    case 'RU-MOS':
      if (male == true) {
        return 69*365;
      }
      if (female == true) {
        return 78.3*365;
      }
      break;
    case 'RU-MUR':
      if (male == true) {
        return 66.5*365;
      }
      if (female == true) {
        return 76.6*365;
      }
      break;
    case 'RU-NIZ':
      if (male == true) {
        return 66.5*365;
      }
      if (female == true) {
        return 77.8*365;
      }
      break;
    case 'RU-NGR':
      if (male == true) {
        return 64.5*365;
      }
      if (female == true) {
        return 76.4*365;
      }
      break;
    case 'RU-NVS':
      if (male == true) {
        return 67.1*365;
      }
      if (female == true) {
        return 77.2*365;
      }
      break;
    case 'RU-OMS':
      if (male == true) {
        return 66.9*365;
      }
      if (female == true) {
        return 77.4*365;
      }
      break;
    case 'RU-ORE':
      if (male == true) {
        return 66.6*365;
      }
      if (female == true) {
        return 77.3*365;
      }
      break;
    case 'RU-ORL':
      if (male == true) {
        return 67.1*365;
      }
      if (female == true) {
        return 77.7*365;
      }
      break;
    case 'RU-PNZ':
      if (male == true) {
        return 68.1*365;
      }
      if (female == true) {
        return 78.9*365;
      }
      break;
    case 'RU-PSK':
      if (male == true) {
        return 65.4*365;
      }
      if (female == true) {
        return 75.8*365;
      }
      break;
    case 'RU-ROS':
      if (male == true) {
        return 69.1*365;
      }
      if (female == true) {
        return 78*365; 
      }
      break;
    case 'RU-RYA':
      if (male == true) {
        return 67.7*365;
      }
      if (female == true) {
        return 78.5*365;
      }
      break;
    case 'RU-SAM':
      if (male == true) {
        return 67.5*365;
      }
      if (female == true) {
        return 77.7*365;
      }
      break;
    case 'RU-SAR':
      if (male == true) {
        return 68*365;
      }
      if (female == true) {
        return 77.9*365;
      }
      break;
    case 'RU-SAK':
      if (male == true) {
        return 65*365;
      }
      if (female == true) {
        return 75.7*365;
      }
      break;
    case 'RU-SVE':
      if (male == true) {
        return 66.1*365;
      }
      if (female == true) {
        return 77.2*365;
      }
      break;
    case 'RU-SMO':
      if (male == true) {
        return 66.5*365;
      }
      if (female == true) {
        return 77.1*365;
      }
      break;
    case 'RU-TAM':
      if (male == true) {
        return 68*365;
      }
      if (female == true) {
        return 79*365;
      }
      break;
    case 'RU-TVE':
      if (male == true) {
        return 66.8*365;
      }
      if (female == true) {
        return 76.5*365;
      }
      break;
    case 'RU-TOM':
      if (male == true) {
        return 67.7*365;
      }
      if (female == true) {
        return 77.9*365;
      }
      break;
    case 'RU-TUL':
      if (male == true) {
        return 66.7*365;
      }
      if (female == true) {
        return 77.5*365;
      }
      break;
    case 'RU-TYU':
      if (male == true) {
        return 69.2*365;
      }
      if (female == true) {
        return 78.7*365;
      }
      break;
    case 'RU-ULY':
      if (male == true) {
        return 67.7*365;
      }
      if (female == true) {
        return 78*365;
      }
      break;
    case 'RU-CHE':
      if (male == true) {
        return 66.5*365;
      }
      if (female == true) {
        return 77.3*365;
      }
      break;
    case 'RU-YAR':
      if (male == true) {
        return 67.4*365;
      }
      if (female == true) {
        return 78*365;
      }
      break;
    case 'RU-MOW':
      if (male == true) {
        return 74.8*365  
      }
      if (female == true) {
        return 81.7*354
      }
      break;
    case 'RU-SPE':
      if (male == true) {
        return 72*365;
      }
      if (female == true) {
        return 80*365;
      }
      break;
    case 'RU-YEV':
      if (male == true) {
        return 63.2*365;
      }
      if (female == true) {
        return 72.8*365;
      }
      break;
    case 'RU-NEN':
      if (male == true) {
        return 67.7*365;
      }
      if (female == true) {
        return 78.4*365;
      }
      break;
    case 'RU-KHM':
      if (male == true) {
        return 70.6*365;
      }
      if (female == true) {
        return 79.3*365;
      }
      break;
    case 'RU-CHU':
      if (male == true) {
        return 64.4*365;
      }
      if (female == true) {
        return 72.8*365;
      }
      break;
    case 'RU-YAN':
      if (male == true) {
        return 69.4*365;
      }
      if (female == true) {
        return 78.7*365;
      }
      break;

    default:
      return -1;
  }
}

// МАТРИЦА
function daysM()
{

  var BirthDate = document.getElementById("input-birthdate").value;    
  var date1 = new Date();
  var date2 = new Date(BirthDate);;
  const life_duration = Math.round(allinputs());
  var diff = life_duration - Math.floor((date1.getTime() - date2.getTime()) / 1000 / 3600 / 24);
  console.log(diff);

  var matrix = document.createElement("p");
  matrix.setAttribute("id", "here");
  var here = document.getElementById("here");
  here.parentNode.replaceChild(matrix, here);
  
  for (let i = 0; i < life_duration; i++) {
    if (i < life_duration - diff) {
      matrix.append("■ ");
    }
    else
    {
      matrix.append("□ ");
    } 
  }

}

function weeksM()
{

  var BirthDate = document.getElementById("input-birthdate").value;    
  var date1 = new Date();
  var date2 = new Date(BirthDate);;
  const life_duration = Math.round(allinputs() / 7);
  var diff = life_duration - Math.floor((date1.getTime() - date2.getTime()) / 1000 / 3600 / 24 / 7);
  console.log(diff);

  var matrix = document.createElement("p");
  matrix.setAttribute("id", "here");
  var here = document.getElementById("here");
  here.parentNode.replaceChild(matrix, here);
  

  for (let i = 0; i < life_duration; i++) {
    if (i < life_duration - diff) {
      matrix.append("■ ");
    }
    else
    {
      matrix.append("□ ");
    } 
  }

}

function monthsM()
{

  var BirthDate = document.getElementById("input-birthdate").value;    
  var date1 = new Date();
  var date2 = new Date(BirthDate);;
  const life_duration = Math.round(allinputs() / 30);
  var diff = life_duration - Math.floor((date1.getTime() - date2.getTime()) / 1000 / 3600 / 24 / 30);
  console.log(diff);

  var matrix = document.createElement("p");
  matrix.setAttribute("id", "here");
  var here = document.getElementById("here");
  here.parentNode.replaceChild(matrix, here);

  for (let i = 0; i < life_duration; i++) {
    if (i < life_duration - diff) {
      matrix.append("■ ");
    }
    else
    {
      matrix.append("□ ");
    } 
  }

}

function yearsM()
{

  var BirthDate = document.getElementById("input-birthdate").value;    
  var date1 = new Date();
  var date2 = new Date(BirthDate);;
  const life_duration = Math.round(allinputs() / 365);
  var diff = life_duration - Math.floor((date1.getTime() - date2.getTime()) / 1000 / 3600 / 24 / 365);
  console.log(diff);

  var matrix = document.createElement("p");
  matrix.setAttribute("id", "here");
  var here = document.getElementById("here");
  here.parentNode.replaceChild(matrix, here);
  

  for (let i = 0; i < life_duration; i++) {
    if (i < life_duration - diff) {
      matrix.append("■ ");
    }
    else
    {
      matrix.append("□ ");
    } 
  }

}

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
        var diff = Math.round(allinputs())*24*3600*1000 - (date1.getTime() - date2.getTime());

    //  console.log(allinputs());  

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

    daysM();

    timerId = setInterval(countdownTimer, 63);
  });

