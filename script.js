
// ハンバーガーメニューの処理
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger_btn');
    const menu = document.querySelector('.nav_menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('open');
    });

    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            menu.classList.remove('open');
        });
    });
});

// 画像のモーダル表示
document.addEventListener('DOMContentLoaded', (event) => {

    const heroView = document.querySelector('.page_header') || document.querySelector('.tokyo24_title');
    const photoList = document.querySelector('.photo_list');

    if (heroView && photoList) {
        heroView.addEventListener('click', () => {
            photoList.style.display = 'grid';
        });
    }

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');

    const images = document.querySelectorAll('.photo_list .photo_item img');

    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            if (modal && modalImage) {
                currentIndex = index;
                modal.style.display = 'block';
                modalImage.src = images[currentIndex].src;
            }
        });
    });

    if (closeBtn && modal) {
        closeBtn.onclick = function () {
            modal.style.display = 'none';
        }
    }

    if (modal) {
        modal.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }
    }

    if (modalNext) {
        modalNext.addEventListener('click', (event) => {
            event.stopPropagation();
            currentIndex = (currentIndex + 1) % images.length;
            modalImage.src = images[currentIndex].src;
        });
    }

    if (modalPrev) {
        modalPrev.addEventListener('click', (event) => {
            event.stopPropagation();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            modalImage.src = images[currentIndex].src;
        });
    }

});

// ページ上部に戻るボタン
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

