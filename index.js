const botao1 = document.getElementById("scroll-sobre");
const botao2 = document.getElementById("scroll-tipos");

botao1.addEventListener("click", () => {
  scrollToElement("sobre", 1000);
});

botao2.addEventListener("click", () => {
  scrollToElement("tipos", 1000);
});

function scrollToElement(id, duration) {
  const target = document.getElementById(id);
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

function scrollToDiv() {
  const divSobre = document.querySelector("#sobre");
  divSobre.scrollIntoView({ behavior: "smooth" });
}

const btnScroll = document.querySelector("#btn-scroll");
btnScroll.addEventListener("click", scrollToDiv);
