import "./App.less";

export const createDiv = () => {
    const divEle = document.createElement("div");
    divEle.setAttribute("class", "custom-div");

    const body = document.body;
    divEle.innerText = "TypeScript Template";
    body.appendChild(divEle);
};
