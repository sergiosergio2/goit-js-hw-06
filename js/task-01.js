const allCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategoriesEl.length}`);

for (let item of allCategoriesEl) {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
}

