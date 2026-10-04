const myAvatar = document.getElementById("avatar");

myAvatar.onclick = () => {
    const src = myAvatar.getAttribute("src");

    if (src === "pic/avatar.png") {
        myAvatar.setAttribute("src", "pic/avatar02.jpg");
    } else {
        myAvatar.setAttribute("src", "pic/avatar.png");
    }
};

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function contactMe() {
    const name = prompt("Please enter your name:");

    if (!name || !name.trim()) {
        alert("Name cannot be empty!");
        return;
    }

    localStorage.setItem("name", name.trim());

    myHeading.textContent = `Hello ${name.trim()}, welcome to HsinYu's website!`;
}

// 点击按钮时执行 contactMe
myButton.addEventListener("click", contactMe);

// 如果之前保存过姓名，就恢复到标题中
const storedName = localStorage.getItem("name");

if (storedName) {
    myHeading.textContent = `Hello ${storedName}, welcome to HsinYu's website!`;
}