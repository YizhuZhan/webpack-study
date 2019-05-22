function Header() {
	var header = document.createElement('div');
	var dom = document.getElementById('root');
	header.innerText = 'header'
	dom.append(header);
}

module.exports = Header;