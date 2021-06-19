const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const refs = {
      startBtn: document.querySelector('[data-action="start"]'),
      stopBtn: document.querySelector('[data-action="stop"]'),
      body: document.querySelector('body'),
  };

  let intervalId = null;

  refs.startBtn.addEventListener('click', onStartClick);
  refs.stopBtn.addEventListener('click', onStopClick);

  function onStartClick () {
    refs.startBtn.setAttribute('disabled', true);
      intervalId = setInterval(() => {
        const randomIntegerNumber = randomIntegerFromInterval(0, colors.length - 1);
        refs.body.style.backgroundColor = colors[randomIntegerNumber];
      }, 1000);
  };

  function onStopClick () {
    refs.startBtn.removeAttribute('disabled');
    clearInterval(intervalId);
  };

