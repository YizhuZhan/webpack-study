import avatar from './images/avatar.jpg';
// import style from './index.scss' // 这样引入后，avatar样式才能在这个作用域中生效

function createAvatar() {
	var img = new Image();
	img.src = avatar;
	// img.classList.add(style.avatar);
	img.classList.add(avatar);
	var root = document.getElementById('root');
	root.append(img);
}

export default createAvatar;