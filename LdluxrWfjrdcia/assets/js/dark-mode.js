function toggleDarkMode() {
    const body = document.body;
    const container = document.querySelector('.container');
    const card = document.querySelector('.card');

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    card.classList.toggle('dark-mode');

    // 更新选中状态的样式
    const selectedOption = document.querySelector('.option-item.selected');
    if (selectedOption) {
        selectedOption.classList.remove('selected');
        const input = selectedOption.querySelector('input');
        if (input.checked) {
            input.checked = true;
        }
    }
}

// 检查系统的颜色模式偏好
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleDarkMode();
}

// 初始化选中状态
document.addEventListener('DOMContentLoaded', () => {
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
        if (input.checked) {
            const optionItem = input.closest('.option-item');
            optionItem.classList.add('selected');
        }
    });
});
