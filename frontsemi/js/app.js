const toggleBtn = document.querySelector(".navbar_toggleBtn")
const menu = document.querySelector(".navbar_menu")

toggleBtn.addEventListener("click", () => {
    // 클래스가 존재한다면 클래스를 제거하고, 클래스가 없다면 클래스를 추가하는 전등 스위치 같은 역할 수행
    menu.classList.toggle('active');
    submenu.classList.toggle('active');
});