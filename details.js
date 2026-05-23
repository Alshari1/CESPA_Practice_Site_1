fetch('./info.json')
  .then(res => res.json())
  .then(data => {

    const id = localStorage.getItem('activity_id');

    const activity = data.find(item => item.id == id);

    console.log(activity);

    document.querySelector(".main-container").innerHTML =
      `
      <div class=" pt-20  max-w-7xl mx-auto h-full  px-4 text-black text-center">
      <span
        class="inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
        Workshop
      </span>
      <h1 id="title" class="text-4xl md:text-6xl font-bold mt-5 mb-5">
        ${activity.hedings_info.heading}
      </h1>
      <p id="summary" class="text-lg leading-8 mb-6">
         ${activity.hedings_info.title}
      </p>
      <div class="flex flex-wrap gap-6 text-sm w-fit mx-auto">
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-calendar"></i>
          <span id="date">18 May 2026</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="fa-solid fa-location-dot"></i>
          <span id="location">Engineering Auditorium</span>
        </div>
      </div>
    </div>
      `


  })
  .catch(err => console.log(err.message));