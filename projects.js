const PROJECTS = [
  {
    name: "SMITSMAX",
    lang: "TypeScript",
    desc: "Interactive educational web app that teaches the SMITSIMAX (Decoupled UCT) algorithm for simultaneous-move games. Full-stack Next.js.",
    repo: "https://github.com/zikotissam/SMITSMAX",
    live: "http://84.8.222.198:8080",
    liveLabel: "Live demo",
  },
  {
    name: "task-manager",
    lang: "TypeScript",
    desc: "A TypeScript task manager app with login, built on Next.js, libsql and NextAuth.",
    repo: "https://github.com/zikotissam/task-manager",
    live: "http://84.8.222.198:8081",
    liveLabel: "Live demo",
  },
  {
    name: "NeonTron-AI",
    lang: "Python",
    desc: "AI-driven Tron engine with multi-agent PvP. Core in C++ using optimized Decoupled UCT (MCTS), rendered in a cyberpunk Python/Pygame UI.",
    repo: "https://github.com/zikotissam/NeonTron-AI",
  },
  {
    name: "BotTrainer",
    lang: "Python",
    desc: "Reinforcement-learning toolkit to train and evaluate game-playing bots.",
    repo: "https://github.com/zikotissam/BotTrainer",
  },
  {
    name: "botTester",
    lang: "C++",
    desc: "A C++ framework for testing bots and validating agent behavior.",
    repo: "https://github.com/zikotissam/botTester",
  },
  {
    name: "philosophers",
    lang: "C",
    desc: "42 School concurrency project solving the dining philosophers problem with threads and mutexes.",
    repo: "https://github.com/zikotissam/philosophers",
  },
  {
    name: "Winter-Challenge-2026",
    lang: "",
    desc: "Personal entry for the Winter 2026 coding challenge.",
    repo: "https://github.com/zikotissam/Winter-Challenge-2026",
  },
  {
    name: "optimizationTips",
    lang: "",
    desc: "A curated set of performance optimization tips and techniques.",
    repo: "https://github.com/zikotissam/optimizationTips",
  },
];

const grid = document.getElementById("project-grid");

for (let i = 0; i < PROJECTS.length; i++) {
  const p = PROJECTS[i];
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.style.transitionDelay = `${Math.min(i * 70, 420)}ms`;

  const top = document.createElement("div");
  top.className = "p-top";
  const h3 = document.createElement("h3");
  h3.textContent = p.name;
  top.appendChild(h3);
  if (p.lang) {
    const lang = document.createElement("span");
    lang.className = "p-lang";
    lang.textContent = p.lang;
    top.appendChild(lang);
  }
  card.appendChild(top);

  const desc = document.createElement("p");
  desc.textContent = p.desc;
  card.appendChild(desc);

  const links = document.createElement("div");
  links.className = "p-links";
  const gh = document.createElement("a");
  gh.href = p.repo;
  gh.target = "_blank";
  gh.rel = "noopener";
  gh.textContent = "Source";
  links.appendChild(gh);
  if (p.live) {
    const live = document.createElement("a");
    live.className = "live";
    live.href = p.live;
    live.target = "_blank";
    live.rel = "noopener";
    live.textContent = p.liveLabel;
    links.appendChild(live);
  }
  card.appendChild(links);

  grid.appendChild(card);
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
