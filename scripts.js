const scrollContainer = document.querySelector('.scroll-container');
            const scrollArrowLeft = document.querySelector('.scroll-arrow-left');
            const scrollArrowRight = document.querySelector('.scroll-arrow-right');
        
            scrollArrowLeft.addEventListener('click', () => {
              scrollContainer.scrollBy({
                left: -300,
                behavior: 'smooth'
              });
            });
        
            scrollArrowRight.addEventListener('click', () => {
              scrollContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
              });
            });

            function toggleItem() {
                const item = document.getElementById('toggleItem');
                item.classList.toggle('active');
            }