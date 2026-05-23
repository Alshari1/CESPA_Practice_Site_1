fetch('./info.json')
    .then(res => res.json())
    .then(data => {

        const cardsContainer =
            document.querySelector(".card-container"); // FIX
            

        data.forEach(activity => {
            console.log(activity)

            cardsContainer.innerHTML += `
        <div class="activity-card">
                <span
                    class="inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Seminar
                </span>
                <h3>${activity.card_info.Title}</h3>
                <p> ${activity.card_info.description}
                </p>
                <!-- BOTTOM AREA -->
                <div class="mt-6 flex justify-end">
                    <button
                        class="rounded-lg border border-white/10 px-4 py-2 text-sm text-white transition hover:border-emerald-400 hover:bg-emerald-400 hover:text-black">
                        Explore
                    </button>
                </div>

            </div>
      `;

        });

    })
    .catch(err => {
        console.log(err.message);
    });

  