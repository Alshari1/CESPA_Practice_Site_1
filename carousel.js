        const images = [
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560439514-4e9645039924?w=700&auto=format&fit=crop",
        ];

        const track = document.getElementById("track");
        const progress = document.getElementById("prog");

        // Create cards
        images.forEach(img => {
            track.innerHTML += `
      <div class="card">
        <img src="${img}">
      </div>
    `;
        });

        let index = 0;
        const width = 274; // card width + gap

        function progressBar() {

            progress.style.transition = "none";
            progress.style.width = "0%";

            setTimeout(() => {
                progress.style.transition = "3s linear";
                progress.style.width = "100%";
            }, 50);

        }

        function slide() {

            index++;

            if (index > images.length - 3) {
                index = 0;
            }

            track.style.transform =
                `translateX(-${index * width}px)`;

            progressBar();

        }

        progressBar();

        setInterval(slide, 3000);