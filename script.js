
// Входные данные

const data = {
  columnPrice: 'D', // столбец с ценой
  linesNum: [4, 5, 6, 7, 8, 9, 10, 11, 16, 17, 18, 22, 23, 28, 29, 38, 41, 42, 45, 51, 52, 55, 56, 57, 60, 65, 68, 72, 77], // номера строк с ценой
};

// Элементы
const genFormEl = document.querySelector('#gen-form-js');
const formulaEl = document.querySelector('#formula-js');
const btnCopyEl = document.querySelector('#btn-copy-js');

// Функция генерирования формулы

let formula = '=';

function generateFormula(e) {
  e.preventDefault();
  // console.log(e.target);
  const val = e.target[0].value.toString().toUpperCase();
  //console.log(val);
  formula = '=';

  if (!!val) {
    const { columnPrice, linesNum } = data;

    linesNum.forEach(num => formula+= `${val}${num}*${columnPrice}${num}+`);
    formula = formula.slice(0, -1);

    formulaEl.innerHTML = formula;
    btnCopyEl.classList.remove('hidden');
    genFormEl.reset();
  } else {
    formula = formulaEl.innerHTML = '';
    btnCopyEl.classList.add('hidden');
  }

  console.log(formula);
}

// Обработчик на форму
genFormEl.addEventListener('submit', (e) => generateFormula(e));
// Копирование формулы
btnCopyEl.addEventListener('click', () => navigator.clipboard.writeText(formula));
