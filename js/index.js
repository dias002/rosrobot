const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    title.addEventListener('click', () => {
        // Скрыть все активные контенты
        accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-content').style.display = 'none';
            }
        });

        // Переключить текущий элемент
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            content.style.display = 'none';
        } else {
            item.classList.add('active');
            content.style.display = 'block';
        }
    });
});
