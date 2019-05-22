function SideBar() {
	var sidebar = document.createElement('div');
	var dom = document.getElementById('root');
	sidebar.innerText = 'sidebar';
	dom.append(sidebar);
}

module.exports = SideBar;