/* =================================
   MARENTZE - PERSONAL SETTINGS
================================= */

// OVDE MENJAŠ SVOJE PODATKE

const settings = {

    // Ime profila
    name: "MARENTZE",

    // Tvoj email
    email: "markozivkovic.yt@gmail.com",

    // Najnoviji YouTube video
    latestVideo: "https://www.youtube.com/watch?v=MVuOOcCWkIU",

    // Slika najnovijeg videa
    videoThumbnail: "thumbnail.jpg",

    // DRUŠTVENE MREŽE
    links: [

        {
            name: "YouTube",
            icon: "▶",
            url: "https://youtube.com/@marentze"
        },

        {
            name: "TikTok",
            icon: "♪",
            url: "https://tiktok.com/@marentze"
        },

        {
            name: "Discord",
            icon: "💬",
            url: "https://discord.com/invite/9QYHA74xcW"
        },

        {
            name: "Instagram",
            icon: "📸",
            url: "https://www.instagram.com/markozivkovic_/"
        }

    ]

};


/* =================================
   PRIKAZ LINKOVA
================================= */

const socialContainer = document.getElementById("social-links");

settings.links.forEach(link => {

    const button = document.createElement("a");

    button.className = "social-button";

    button.href = link.url;

    button.target = "_blank";

    button.rel = "noopener noreferrer";

    button.innerHTML = `
        <div class="social-left">
            <div class="social-icon">${link.icon}</div>
            <span>${link.name}</span>
        </div>

        <span class="arrow">↗</span>
    `;

    socialContainer.appendChild(button);

});


/* =================================
   YOUTUBE VIDEO
================================= */

const video = document.getElementById("latest-video");

video.href = settings.latestVideo;

document.getElementById("video-thumbnail").src =
    settings.videoThumbnail;


/* =================================
   EMAIL
================================= */

document.getElementById("email-link").href =
    "mailto:" + settings.email;

document.getElementById("email-text").textContent =
    settings.email;
