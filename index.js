function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.querySelector('div.target')
}

function deepestChild() {
	let node = document.getElementById('grand-node')
	let nextNode = node.children[0];

	while (nextNode) {
		node = nextNode;
		nextNode = node.children[0];
	}

	return node;
}

function increaseRankBy(n) {
	const nodes = document.querySelectorAll('.ranked-list')
	// for(const div of nodes) {
	// 	const children = div.children
	// 	for(const li of children) {

	// 	}
	// }
	for (let i = 0, l = nodes.length; i < l; i++) {
		let children = nodes[i].children

		for (let j = 0, k = children.length; j < k; j++) {
			children[j].innerHTML = parseInt(children[j].innerHTML) + n
		}
	}
}