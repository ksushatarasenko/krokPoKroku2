document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('p[data-audio] img').forEach(function(img) {
            img.addEventListener("click", function() {
                const p = this.closest('p[data-audio]');
                const audioSrc = p.getAttribute("data-audio");
                const audio = new Audio(audioSrc);
                audio.play();
            });
        });
    });