function getFirstSelector(string){
  return document.querySelector(string);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

// selectors are only connected if its a class or ID being "called on" the tag it resides in.

function deepestChild(){
  const top = document.getElementById('grand-node').querySelectorAll('div');
  return top[top.length - 1];
}
//wanna use querySelectorAll because we want a collection of 'div' descending from our #grand-node; the last one will be the deepestChild

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < list.length; i++){
    const elements = list[i].children;
    // we want to iterate over each list not their children yet so [i] goes after list
  for (let i = 0; i < elements.length; i++){
    elements[i].innerHTML = parseInt(elements[i].innerHTML) + n
  };
};
}
