function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let rank = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rank.length; i++){
    let child = rank[i].children;

    for (let j = 0; j < child.length; j++){
      child[j].innerHTML = parseInt(child[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let next = node.children[0]

  while (next){
    node = next
    next = node.children[0]
  }

  return node
}
