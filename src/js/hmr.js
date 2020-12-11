let content = "测试热更新..." + Math.ceil(Math.random() * 1000);

let style = {
    color: 'red',
    fontSize: '32px'
};

console.log("welcome webpack-hmr");

export default {
    content,
    style
};