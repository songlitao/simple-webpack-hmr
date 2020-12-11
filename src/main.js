const tag = document.getElementById('hotHmrContent');

const render = () => {
    const { content, style } = require("./js/hmr").default;
    tag.innerText = content;
    tag.style.color = style.color || '';
    tag.style.fontSize = style.fontSize || '';
}

render();

if (module.hot) {
    module.hot.accept(["./js/hmr.js"], render);
};