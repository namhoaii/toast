const btn = document.querySelectorAll(".control button");

btn.forEach((item, index) => {
    item.addEventListener("click", () => {
        showMessage(item.getAttribute("class"));
    });
});

const showMessage = (status) => {
    /*
    <div class="toast success">
        <i class="fa-solid fa-circle-check"></i>
        <span>Show is a success message</span>
        <div class="countdown success"></div>
    </div>
    <div class="toast warning">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span>Show is a warning message</span>
        <div class="countdown warning"></div>
    </div>
    <div class="toast error">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>Show is a error message</span>
        <div class="countdown error"></div>
    </div>
    */

    //tạo thẻ div
    let toast = document.createElement("div");
    //add class
    toast.classList.add(`toast`);
    toast.classList.add(status);

    //tạo thẻ message
    let message =
        status === "success"
            ? `<i class="fa-solid fa-circle-check"></i>
        <span>Show is a success message</span>`
            : status === "warning"
            ? `<i class="fa-solid fa-triangle-exclamation"></i>
        <span>Show is a warning message</span>`
            : `<i class="fa-solid fa-circle-exclamation"></i>
        <span>Show is a error message</span>`;

    //thêm thẻ
    toast.innerHTML = `
        ${message}
        <div class="countdown ${status}"></div>
    `;

    //lấy vùng toasts
    let toasts = document.getElementById("toasts");
    //thêm vào
    toasts.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000);
};
