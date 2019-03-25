const getFirstSelector = selector => document.querySelector(selector);

const nestedTarget = () => document.querySelector( '.target')


function deepestChild() {
  let deepest = document.getElementById('grand-node').children[0].children[0].children[0].children[0];

  return deepest
}

function increaseRankBy(n) {
  const ranks = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

for (let i = 0; i < ranks.length; i++) {
  let increase = parseInt(ranks[i].innerHTML)
   ranks[i].innerHTML = (increase+ n).toString();
  }
}
