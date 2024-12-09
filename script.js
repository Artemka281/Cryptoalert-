document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");
    const news = [
        { title: "Bitcoin Hits New Highs", date: "2024-12-09" },
        { title: "Ethereum Updates Released", date: "2024-12-08" },
        { title: "Crypto Regulation News", date: "2024-12-07" }
    ];

    news.forEach(item => {
        const newsItem = document.createElement("div");
        newsItem.innerHTML = `<h3>${item.title}</h3><p>${item.date}</p>`;
        newsContainer.appendChild(newsItem);
    });
});
