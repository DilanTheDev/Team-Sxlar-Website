document.addEventListener("DOMContentLoaded", () => {
    // Load Roster
    const rosterGrid = document.querySelector(".roster-grid");
    const teamMembers = [
        "Player 1", "Player 2", "Player 3", "Player 4", 
        "Player 5", "Player 6", "Player 7", "Player 8", 
        "Player 9", "Player 10"
    ];
    teamMembers.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("roster-item");
        div.innerHTML = `<h2>${member}</h2><p>Role: Player</p>`;
        rosterGrid.appendChild(div);
    });

    // Load News
    const newsContainer = document.getElementById("news-container");
    fetch("articles.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(article => {
                const div = document.createElement("div");
                div.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
                newsContainer.appendChild(div);
            });
        });

    // Admin Dashboard: Add News Article
    const articleForm = document.getElementById("article-form");
    if (articleForm) {
        articleForm.addEventListener("submit", e => {
            e.preventDefault();
            const title = document.getElementById("title").value;
            const content = document.getElementById("content").value;

            fetch("articles.json")
                .then(res => res.json())
                .then(data => {
                    data.push({ title, content });
                    return fetch("articles.json", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)
                    });
                })
                .then(() => {
                    alert("Article added!");
                    location.reload();
                });
        });
    }
});
