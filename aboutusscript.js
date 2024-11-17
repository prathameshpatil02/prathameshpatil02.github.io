document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});


let scrollIndex = 0;

function scrollTeam(direction) {
    const container = document.querySelector('.team-members-container');
    const totalItems = document.querySelectorAll('.team-member').length;  // Total number of team members
    const visibleItems = 3;  // Number of visible team members at a time
    const scrollAmount = 250 + 30;  // 250px width of a card + 30px gap between cards

    if (direction === 'left') {
        scrollIndex = Math.max(scrollIndex - 1, 0);  // Prevent scrolling past the first item
    } else {
        scrollIndex = Math.min(scrollIndex + 1, totalItems - visibleItems);  // Prevent scrolling past the last item
    }

    // Scroll the container by updating the transform property
    container.style.transform = `translateX(-${scrollIndex * scrollAmount}px)`;
}




const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const questionButton = item.querySelector('.faq-question');

    questionButton.addEventListener('click', () => {
        faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        item.classList.toggle('active');
    });
});






