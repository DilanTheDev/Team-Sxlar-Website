document.addEventListener("DOMContentLoaded", () => {
    const rosterGrid = document.querySelector(".roster-grid");
    const teamMembers = [
        "Player 1", "Player 2", "Player 3", "Player 4", 
        "Player 5", "Player 6", "Player 7", "Player 8", 
        "Player 9", "Player 10"
    ];

    // Dynamically load roster
    teamMembers.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("roster-item");
        div.innerHTML = `<h2>${member}</h2><p>Role: Player</p>`;
        rosterGrid.appendChild(div);
    });

    // Loading screen
    const loadingScreen = document.getElementById("loading");
    setTimeout(() => {
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 500);
    }, 3000); // 3 seconds loading screen
});
