
//share and downlaod button functionality//
const moreBtn = document.getElementById("more-btn");
const popupMenu = document.getElementById("popup-menu");

moreBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  popupMenu.style.display = popupMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!popupMenu.contains(e.target) && !moreBtn.contains(e.target)) {
    popupMenu.style.display = "none";
  }
});


//seek bar functionality//

const seek = document.getElementById('seek');
const bar2 = document.getElementById('bar2');
const dot = document.getElementById('dot');

// Update dot & bar on input (drag or click)
seek.addEventListener('input', () => {
  const val = seek.value;
  bar2.style.width = `${val}%`;
  dot.style.left = `${val}%`;
});
//volume control functionality//
const vol = document.getElementById('vol');
const vol_bar = document.querySelector('.vol_bar');
const vol_dot = document.getElementById('vol_dot');

vol.addEventListener('input', () => {
  const val = vol.value;
  vol_bar.style.width = `${val}%`;
  vol_dot.style.left = `${val}%`;
});


//left right functionality


function setScrollButtons(containerId, leftId, rightId) {
    const container = document.getElementById(containerId);
    const leftBtn = document.getElementById(leftId);
    const rightBtn = document.getElementById(rightId);

    leftBtn.addEventListener('click', () => {
        container.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        container.scrollBy({ left: 200, behavior: 'smooth' });
    });
}

// Set for both sections
setScrollButtons('artistScroll', 'artistLeft', 'artistRight');
setScrollButtons('songScroll', 'songLeft', 'songRight');

// const audio = document.getElementById('audio');

// audio.addEventListener('timeupdate', () => {
//     const progress = (audio.currentTime / audio.duration) * 100;
//     seek.value = progress;
//     bar2.style.width = `${progress}%`;
//     dot.style.left = `${progress}%`;
// });


// seek.addEventListener('input', () => {
//     const seekTime = (seek.value / 100) * audio.duration;
//     audio.currentTime = seekTime;
//     bar2.style.width = `${seek.value}%`;
//     dot.style.left = `${seek.value}%`;
// });
