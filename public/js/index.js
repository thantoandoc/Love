document.addEventListener('DOMContentLoaded', function () {

    // create timeline
    var innerDate = document.querySelector('.date').querySelector('span');
    var hours = document.querySelector('.hours');
    var min = document.querySelector('.min');
    var seconds = document.querySelector('.second');
  
    console.log();

    function convertDateToUTC(date) { 
      return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
    }

    function showDate() {
      let ani = convertDateToUTC(new Date("2018-11-13"))
      let now = new Date();
      console.log(now, ani, now - ani);

      
      let date = Math.floor((now - ani) / 1000 / 60 / 60 / 24);

      innerDate.innerHTML = date;
      setTimeout(showDate, 1000);
    }
    function showTime() {
      let now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();
  
      if (h < 10) {
        h = '0' + h;
      }
      if (m < 10) {
        m = '0' + m;
      }
  
      if (s < 10) {
        s = '0' + s;
      }
  
      hours.innerHTML = h;
      min.innerHTML = m
      seconds.innerHTML = s;
      setTimeout(showTime, 1000);
    }
    showDate();
    showTime();
    // create heart drop  
    setTimeout(createRandomHeart, 800);
    function createRandomHeart() {
      var top = Math.floor(Math.random() * 100);
      var left = Math.floor(Math.random() * screen.width);
      var opacity = Math.random();
      var body = document.body;
      var heart = document.createElement('div');
      heart.classList.add('heart-drop');
      body.appendChild(heart);
      heart.style.top = top + 'px';
      heart.style.left = left + 'px';
      heart.style.opacity = opacity;
      setTimeout(runHeart, 100);
      function runHeart() {
        if (top > screen.height) {
          heart.remove();
        } else {
          top += 1;
          heart.style.top = top + 'px';
        }
        setTimeout(runHeart,100);
      }
      setTimeout(createRandomHeart, 800);
    }
  });
  