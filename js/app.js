const novels = [
  {
    title: "দেবদাস",
    file: "novels/devdas.pdf",
    thumbnail: "assets/thumbnails/devdas.jpg",
    category: "শরৎচন্দ্র চট্টোপাধ্যায়"
  },
  {
    title: "শেষের কবিতা",
    file: "novels/shesher_kobita.pdf",
    thumbnail: "assets/thumbnails/shesher_kobita.jpg",
    category: "রবীন্দ্রনাথ ঠাকুর"
  }
];

const novelList = document.getElementById("novelList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayNovels(filteredNovels) {
  novelList.innerHTML = "";
  filteredNovels.forEach(novel => {
    const card = document.createElement("div");
    card.className = "novel-card";
    card.innerHTML = `
      <img src="${novel.thumbnail}" alt="${novel.title}">
      <h3>${novel.title}</h3>
      <div class="novel-buttons">
        <a href="novel.html?file=${encodeURIComponent(novel.file)}">📖 পড়ুন</a>
        <a href="${novel.file}" download>⬇ ডাউনলোড</a>
      </div>
    `;
    novelList.appendChild(card);
  });
}

function filterNovels() {
  const keyword = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = novels.filter(novel =>
    novel.title.toLowerCase().includes(keyword) &&
    (category === "" || novel.category === category)
  );
  displayNovels(filtered);
}

searchInput.addEventListener("input", filterNovels);
categoryFilter.addEventListener("change", filterNovels);

// Initial display
displayNovels(novels);
