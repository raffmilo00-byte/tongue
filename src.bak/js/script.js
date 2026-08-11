const STORAGE_KEY = 'counterValue';
let counterValue = Number(localStorage.getItem(STORAGE_KEY)) || 0;

function createCounterUI() {
  const container = document.createElement('section');
  container.className = 'counter-container';

  const display = document.createElement('div');
  display.className = 'counter-display';
  display.setAttribute('role', 'status');
  display.setAttribute('aria-live', 'polite');
  display.id = 'counterDisplay';

  const controls = document.createElement('div');
  controls.className = 'counter-controls';

  const btnMinus = document.createElement('button');
  btnMinus.className = 'btn btn-minus';
  btnMinus.type = 'button';
  btnMinus.setAttribute('aria-label', 'Decrementa');
  btnMinus.textContent = '−';

  const btnPlus = document.createElement('button');
  btnPlus.className = 'btn btn-plus';
  btnPlus.type = 'button';
  btnPlus.setAttribute('aria-label', 'Incrementa');
  btnPlus.textContent = '+';

  const themeToggle = document.createElement('button');
  themeToggle.className = 'btn btn-theme';
  themeToggle.type = 'button';
  themeToggle.setAttribute('aria-label', 'Cambia tema');
  themeToggle.textContent = 'Cambia tema';

  controls.appendChild(btnMinus);
  controls.appendChild(btnPlus);

  container.appendChild(display);
  container.appendChild(controls);
  container.appendChild(themeToggle);

  return { container, display, btnPlus, btnMinus, themeToggle };
}

function updateDisplay(display, value) {
  display.textContent = value;
  localStorage.setItem(STORAGE_KEY, String(value));
}

function setupCounterLogic(ui) {
  const { display, btnPlus, btnMinus, themeToggle } = ui;

  btnPlus.addEventListener('click', () => {
    counterValue += 1;
    updateDisplay(display, counterValue);
  });

  btnMinus.addEventListener('click', () => {
    counterValue -= 1;
    updateDisplay(display, counterValue);
  });

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

function init() {
  const app = document.getElementById('app');
  const ui = createCounterUI();
  app.appendChild(ui.container);
  updateDisplay(ui.display, counterValue);
  setupCounterLogic(ui);
}

document.addEventListener('DOMContentLoaded', init);
