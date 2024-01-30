const list = document.querySelector('.list');
const count = 2;

const lectionHTML = (lectionCount) => `
  <li class="item">
    <span>Лекция ${lectionCount}</span>
    <div class="files">
      <a href="./${lectionCount}/text.md" download="Лекция_${lectionCount}_текст.md">Текст лекции</a>
      <a href="./${lectionCount}/examples.js" download="Лекция_${lectionCount}_примеры.js">Примеры кода</a>
      <a href="./${lectionCount}/exercises.md" download="Лекция_${lectionCount}_задания.md">Задания</a>
    </div>
  </li>
`;

for (let i = 1; i <= count; i++) {
  list.innerHTML += lectionHTML(i);
}

