const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');
const aboutContents = document.querySelectorAll('.about-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Add 'active' class to the clicked tab
        tab.classList.add('active');

        // Hide all about contents
        aboutContents.forEach(a => a.classList.remove('active'));

        // Show the corresponding about content
        const targetAbout = document.querySelector(`.about-content[data-tab="${tab.dataset.tab}"]`);
        if (targetAbout) {
            targetAbout.classList.add('active');

            // Adjust the height dynamically (optional smooth transition effect)
            targetAbout.style.height = 'auto'; // Allow the content to expand
        } else {
            console.error(`No about-content found for tab: ${tab.dataset.tab}`);
        }

        // Animate skill progress bars if visible
        const activeProgressBars = targetAbout?.querySelectorAll('.progress');
        if (activeProgressBars) {
            activeProgressBars.forEach(bar => {
                const width = bar.getAttribute('data-width'); // Target width stored in `data-width`
                bar.style.width = '0%'; // Reset to 0 for animation
                setTimeout(() => {
                    bar.style.width = width; // Animate to the target width
                }, 100);
            });
        }
    });
});

