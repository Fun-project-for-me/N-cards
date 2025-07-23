document.getElementById("turn-on-btn").addEventListener("click", function () {
  // Animate background
  document.body.classList.add("animate-bg");

  // Remove black screen
  document.getElementById("black-screen").style.display = "none";

  // Show music button after 2 seconds
  setTimeout(() => {
    document.getElementById("play-music").style.display = "inline-block";
  }, 2000);
});

const simpleSong = document.getElementById('simple-song');
const favSong = document.getElementById('fav-song');
const message = document.getElementById('boring-message');
const favBtn = document.getElementById('play-fav-btn');
const msg1 = document.getElementById('after-fav-message');
const msg2 = document.getElementById('second-line');
const showCardBtn = document.getElementById('show-card-btn');

document.getElementById("play-music").addEventListener("click", function () {
  // Play simple song on user interaction
  simpleSong.play();
  this.disabled = true;
  this.innerText = "Playing...";
  this.style.display = "none";

  // After 9 sec, stop and show message
  setTimeout(() => {
    simpleSong.pause();
    typeMessage("Wait! This is boring, isn't it? Let's play your favorite song instead 🎶");
  }, 9000);
});
function typeMessage(text) {
  let i = 0;
  message.innerHTML = "";
  document.body.classList.add('show-message');
  message.style.display = "block";

  function typing() {
    if (i < text.length) {
      if (text[i] === '\n') {
        message.innerHTML += "<br>";
      } else {
        message.innerHTML += text[i];
      }
      i++;
      setTimeout(typing, 50);
    } else {
      favBtn.style.display = "block";
    }
  }

  typing();
}

favBtn.addEventListener('click', () => {
  favSong.play();
  message.style.display = "none";
  favBtn.style.display = "none";

  // After 5 sec, start typing first message
  setTimeout(() => {
    typeAfterFav("This one's way better, isn’t it? 🤭");
  }, 5000);
});

function typeAfterFav(firstText) {
  let i = 0;
  msg1.innerHTML = "";
  msg2.innerHTML = "";
  msg1.style.display = "block";
  msg2.style.display = "none";
  showCardBtn.style.display = "none";

  function typing1() {
    if (i < firstText.length) {
      msg1.innerHTML += firstText.charAt(i);
      i++;
      setTimeout(typing1, 50);
    } else {
      // After 1.5 sec, start typing second message
      setTimeout(() => {
        let j = 0;
        const secondText = "Let’s check out your birthday card! 🎂";
        msg2.style.display = "block";

        function typing2() {
          if (j < secondText.length) {
            msg2.innerHTML += secondText.charAt(j);
            j++;
            setTimeout(typing2, 50);
          } else {
            // Show button after second message
            setTimeout(() => {
              showCardBtn.style.display = "inline-block";
            }, 1000);
          }
        }

        typing2();
      }, 1500);
    }
  }

  typing1();
}

// Show the birthday card with animation
showCardBtn.addEventListener("click", () => {
  const card = document.querySelector(".birthday-card");
  card.style.display = "block";
  card.classList.add("swing-animate"); // animation class
  showCardBtn.style.display = "none";
  msg1.style.display = "none";
  msg2.style.display = "none";
});