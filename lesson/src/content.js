function Content() {
	var content = document.createElement('div');
	var dom = document.getElementById('root');
	content.innerText = 'content';
	dom.append(content);
}

module.exports = Content;