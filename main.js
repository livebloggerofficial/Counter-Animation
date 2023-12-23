const createOdometer = (el, value) => {
  const odometer = new Odometer({
    el: el,
    value: 0,
  });

  let hasRun = false;

  const options = {
    threshold: [0, 0.9],
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!hasRun) {
          odometer.update(value);
          hasRun = true;
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(el);
};

const subscribersOdometer = document.querySelector(".subscribers-odometer");
createOdometer(subscribersOdometer, 29800);

const videosOdometer = document.querySelector(".videos-odometer");
createOdometer(videosOdometer, 790);

const projectsOdometer = document.querySelector(".projects-odometer");
createOdometer(projectsOdometer, 89);
