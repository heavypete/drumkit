const drums = new Howl({
  src: ["./drums/drums.webm", "./drums/drums.mp3"],
  sprite: {
    "CYCdh_AcouKick-14": [0, 625.8503401360545],
    "CYCdh_Crash-01": [2000, 15228.571428571428],
    "CYCdh_Kurz02-Snr02": [19000, 496.82539682539687],
    "CYCdh_LudRimC-07": [21000, 1442.879818594104],
    "CYCdh_Sab_ClHat-06": [24000, 619.0476190476204],
    "KHats Open-07": [26000, 2863.582766439908],
  },
});

//drums.play();

const drumkit = document.querySelector(".drumkit");

function playDrum(event) {
  if (event.target.classList.contains("pad")) {
    event.preventDefault();
    let soundToPlay = event.target.dataset.sound;
    drums.play(soundToPlay);
  }
}

// function playSnare() => {
//   if( event.keyCode === 74) {
//     let soundToPlay = event.target.dataset.sound;
//     drums.play(soundToPlay);
//   }
// }

// function handlePlaySnare("keydown", playSnare() => {
// console.log('ensnared');
// });

//const snare = document.querySelector(".snare");
// const clHat = document.querySelector(".clHat");
// const kick = document.querySelector(".kick");
// const clap = document.querySelector(".clap");
// const opHat = document.querySelector(".opHat");
// const crash = document.querySelector(".crash");

drumkit.addEventListener("click", () => {
  if (event.target.classList.contains("pad")) {
    let soundToPlay = event.target.dataset.sound;
    drums.play(soundToPlay);
  }
});

function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
//setViewportHeight();

window.addEventListener("resize", setViewportHeight);
