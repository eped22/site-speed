function foreachTree(data, childrenName = 'children', callback) {
	for (let i = 0; i < data.length; i++) {
		callback(data[i]);
		if (data[i][childrenName] && data[i][childrenName].length > 0) {
			foreachTree(data[i][childrenName], childrenName, callback);
		}
	}
}

const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const similarity = (arr1, arr2) => arr1.filter(v => arr2.includes(v));
const fileToBase64 = file => {
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function (e) {
		return e.target.result;
	};
};

function traceChildNode(id, data, pidName = 'parentId', idName = 'id', childrenName = 'children') {
	let arr = [];
	foreachTree(data, childrenName, (node) => {
		if (node[pidName] == id) {
			arr.push(node);
			arr = arr.concat(traceChildNode(node[idName], data, pidName, idName, childrenName));
		}
	});
	return arr;
}

function randomNumInteger(min, max) {
	switch (arguments.length) {
	case 1:
		return parseInt(Math.random() * min + 1, 10);
	case 2:
		return parseInt(Math.random() * (max - min + 1) + min, 10);
	default:
		return 0;
	}
}

function trim(str, type = 1) {
	if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
	switch (type) {
	case 1:
		return str.replace(/\s/g, '');
	case 2:
		return str.replace(/(^\s)|(\s*$)/g, '');
	case 3:
		return str.replace(/(^\s)/g, '');
	case 4:
		return str.replace(/(\s$)/g, '');
	default:
		return str;
	}
}
