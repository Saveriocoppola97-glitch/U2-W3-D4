const getImages = function (query) {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: "YKPpBaZhu3H7o9aYB2LAYV3upyJ0wTrjngPSkHW7ABwWdxi5JjeNOmko",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const cont = document.querySelector("main .container");
      const row = document.createElement("div");
      row.classList.add("row", "g-3");

      data.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        col.innerHTML = `
      <div class="card mb-4 shadow-sm">
        <div class="ratio ratio-4x3">
        <img src="${photo.src.medium}" class="w-100 h-100 object-fit-cover">
      </div>
    <div class="card-body">
      <h5 class="card-title">Pexels Image</h5>

      <p class="card-text">
        Beautiful photo from Pexels API collection.
      </p>

      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
            View
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">
            Hide
          </button>
        </div>

        <small class="text-muted">Just now</small>
      </div>
    </div>
  </div>
     `;
        const hideBtn = col.querySelector(".hide-btn");

        hideBtn.addEventListener("click", function () {
          col.remove();
        });

        row.appendChild(col);
      });

      cont.appendChild(row);
    })
    .catch((error) => console.log("ERRORE:", error));
};

const h = document.getElementById("header");
h.classList.add("bg-dark", "text-white");

const div = document.createElement("div");
div.classList.add(
  "d-flex",
  "justify-content-between",
  "align-items-center",
  "p-2",
  "px-5",
);
h.appendChild(div);
const h3 = document.createElement("h3");
h3.innerText = "Album";
div.appendChild(h3);
const a = document.createElement("a");
a.innerHTML = `<i class="fas fa-bars"></i>`;
a.classList.add("fs-1", "text-light");
div.appendChild(a);
const button1 = document.querySelector(".btn-primary");
button1.addEventListener("click", function (e) {
  e.preventDefault();
  getImages("kittens");
});
const button2 = document.querySelector(".btn-secondary");
button2.addEventListener("click", function (e) {
  e.preventDefault();
  getImages("tigers");
});
