// 1. css module,importLoaders test

// // var avatar = require('./images/avatar.jpg')
// import avatar from './images/avatar.jpg';
// import style from './index.scss'
// import createAvatar from './createAvatar';

// createAvatar();

// var img = new Image();
// img.src = avatar;
// img.classList.add(style.avatar);
// var root = document.getElementById('root');
// root.append(img);




// 2. 字体文件打包test，plugins test
// import './index.scss';

// var root = document.getElementById('root');
// root.innerHTML = "<div class='iconfont icon-changjingguanli'></div>";


// 3. test devServer
// console.log('little sql is 7 months ^ ^')

// 4. test HMR - css
// import './style.css'

// var btn = document.createElement('button');
// btn.innerHTML = '新增';
// document.body.appendChild(btn);

// btn.onclick = function() {
// 	var div = document.createElement('div');
// 	div.innerHTML = 'item';
// 	document.body.appendChild(div);
// }

// test HMR - js
// import counter from './count.js';
// import number from './number.js';

// counter();
// number();

// if(module.hot) {
// 	module.hot.accept('./number', function() {
// 		document.body.removeChild(document.getElementById('number'));
// 		number();
// 	});
// }


// 5. test babel
const arr = [
	new Promise(() => {}),
	new Promise(() => {})
];

arr.map(item => console.log(item));