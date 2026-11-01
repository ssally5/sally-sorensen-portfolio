// Builds the page from data.js. Edit your content in data.js, not here.
const data = portfolioData;
const $ = (id) => document.getElementById(id);
const setText = (id, value) => { if ($(id)) $(id).textContent = value; };
const make = (tag, className, textValue) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textValue !== undefined) element.textContent = textValue;
  return element;
};
const addTags = (parent, values) => parent && values.forEach(value => parent.append(make("span", "tag", value)));

document.title = `${data.name} | ${document.body.dataset.pageTitle || "Portfolio"}`;
setText("nav-name", data.name.toUpperCase());
$("nav-name").append(make("span", "brand-dot", "."));
setText("footer-name", data.name.toUpperCase());

setText("hero-name", data.name);
setText("hero-title", data.headline);
setText("hero-intro", data.intro);
setText("hero-location", data.location);
setText("hero-monogram", data.name.trim().split(/\s+/).map(word => word[0]).slice(0, 2).join("").toUpperCase());
setText("about-heading", data.about.heading);
setText("about-body", data.about.professional);
setText("about-personal", data.about.personal);
setText("learning-description", data.learning.description);
setText("accomplishments-description", data.accomplishments.description);
setText("contact-description", data.contact.description);

if ($("skills-grid")) {
  const categories = ["All", ...data.skills.map(group => group.category)];
  const skills = [...new Set(data.skills.flatMap(group => group.items))];
  function showSkills(category) {
    const visible = category === "All" ? skills : data.skills.find(group => group.category === category).items;
    $("skills-grid").replaceChildren(...visible.map(skill => make("span", "skill-item", skill)));
    setText("skill-count", `${visible.length} skills${category === "All" ? " across all categories" : " in " + category}`);
    $("skill-filters").querySelectorAll("button").forEach(button => button.setAttribute("aria-pressed", String(button.textContent === category)));
  }
  categories.forEach(category => {
    const button = make("button", "skill-filter", category);
    button.type = "button";
    button.addEventListener("click", () => showSkills(category));
    $("skill-filters").append(button);
  });
  showSkills("All");
}

function renderTimeline(items, targetId) {
  const target = $(targetId);
  if (!target) return;
  target.classList.add("resume-cards");
  items.forEach(item => {
    const entry = make("article", "resume-card");
    const body = make("div", "resume-card-body");
    body.append(make("p", "timeline-period", item.period), make("h4", "", item.role), make("p", "timeline-org", item.organization));
    const list = make("ul", "resume-bullets");
    item.bullets.forEach(text => list.append(make("li", "", text)));
    body.append(list);
    entry.append(body);
    target.append(entry);
  });
}
renderTimeline(data.experience, "experience-list");
renderTimeline(data.education, "education-list");

function renderProject(project, index, targetId) {
  const card = make("article", "project-card");
  const visual = make("div", "project-visual");
  if (project.image) {
    const img = make("img", "project-image");
    img.src = project.image;
    img.alt = `${project.title} screenshot`;
    img.loading = "lazy";
    visual.append(img);
  } else {
    visual.append(make("span", "project-placeholder-symbol", "↗"));
    visual.append(make("span", "project-placeholder-text", "PROJECT PREVIEW"));
  }

  card.append(visual);
  const body = make("div", "project-body");
  body.append(make("h3", "", project.title));
  body.append(make("p", "project-description", project.description));
  const tags = make("div", "tag-row");
  addTags(tags, project.technologies);
  body.append(tags);
  if (project.demo) {
    const demo = make("a", "project-link project-demo-link", "View Live Project ↗");
    demo.href = project.demo;
    demo.target = "_blank";
    demo.rel = "noopener noreferrer";
    body.append(demo);
  }
  if (project.github) {
    const link = make("a", "project-link", "View on GitHub ↗");
    link.href = project.github;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    body.append(link);
  }
  const actions = make("div", "project-actions");
  body.querySelectorAll(".project-link").forEach(link => actions.append(link));
  body.append(actions);
  card.append(body);
  $(targetId)?.append(card);
}
data.projects.filter(p => p.featured).forEach((p, i) => renderProject(p, i, "featured-projects"));
const other = data.projects.filter(p => !p.featured);
if (other.length && $("other-projects-section") && document.body.dataset.pageTitle === "Projects") {
  $("other-projects-section").hidden = false;
  other.forEach((p, i) => renderProject(p, i, "other-projects"));
}
addTags($("learning-tags"), data.learning.items);
data.accomplishments.items.forEach(item => $("accomplishments-list")?.append(make("div", "achievement-item", `✦  ${item}`)));

const contactLinks = [
  { label: "Email", value: data.contact.email, href: data.contact.email ? `mailto:${data.contact.email}` : "" },
  { label: "LinkedIn", value: data.contact.linkedin, href: data.contact.linkedin },
  { label: "GitHub", value: data.contact.github, href: data.contact.github }
];
contactLinks.forEach(linkData => {
  const row = make(linkData.href ? "a" : "div", "contact-link");
  if (linkData.href) {
    row.href = linkData.href;
    if (!linkData.href.startsWith("mailto:")) {
      row.target = "_blank";
      row.rel = "noopener noreferrer";
    }
  } else {
    row.classList.add("contact-link-placeholder");
  }
  const left = make("div");
  left.append(make("span", "contact-link-label", linkData.label));
  left.append(make("strong", "", linkData.value || `Add your ${linkData.label.toLowerCase()}`));
  row.append(left, make("span", "contact-link-arrow", "↗"));
  $("contact-links")?.append(row);
});

if (data.resumeFile && $("resume-download")) {
  const download = $("resume-download");
  download.href = data.resumeFile;
  download.textContent = "Download Resume ↓";
  download.removeAttribute("aria-disabled");
  download.setAttribute("download", "");
}

const toggle = $("menu-toggle");
const nav = $("site-nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}));

function openProjectDetails(project) {
  const dialog = make("dialog", "project-dialog");
  dialog.setAttribute("aria-labelledby", "project-dialog-title");
  const close = make("button", "dialog-close", "Close ×");
  close.type = "button";
  close.setAttribute("aria-label", "Close project details");
  close.addEventListener("click", () => dialog.close());
  const title = make("h2", "", project.title);
  title.id = "project-dialog-title";
  dialog.append(close, make("p", "section-kicker", "PROJECT OVERVIEW"), title,
    make("p", "dialog-intro", project.details || project.description));
  if (project.context) dialog.append(make("p", "dialog-intro", project.context));
  if (project.contribution) {
    dialog.append(make("h3", "", "My contribution"), make("p", "dialog-intro", project.contribution));
  }
  const tags = make("div", "tag-row");
  addTags(tags, project.technologies);
  dialog.append(tags);
  if (project.demo) {
    const live = make("a", "btn btn-primary", "View Live Project ↗");
    live.href = project.demo;
    live.target = "_blank";
    live.rel = "noopener noreferrer";
    dialog.append(live);
  }
  dialog.addEventListener("click", event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener("close", () => { document.body.classList.remove("dialog-open"); dialog.remove(); });
  document.body.append(dialog);
  document.body.classList.add("dialog-open");
  dialog.showModal();
}

// About Me gallery: add photo paths here to expand the rotation.
if ($("about-slide")) {
  const photos = Array.from({length: 9}, (_, i) => `assets/images/about/photo-${String(i + 1).padStart(2, "0")}.${i === 8 ? "png" : "jpg"}`);
  let index = 0;
  let paused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const slide = $("about-slide");
  const pause = $("photo-pause");
  function showPhoto(next) {
    index = (next + photos.length) % photos.length;
    slide.src = photos[index];
    slide.alt = `Personal photo ${index + 1} of ${photos.length}`;
    setText("photo-counter", `${index + 1} / ${photos.length}`);
  }
  function syncPause() {
    pause.textContent = paused ? "Play" : "Pause";
    pause.setAttribute("aria-label", paused ? "Start photo rotation" : "Pause photo rotation");
  }
  let timer;
  function restart() { clearInterval(timer); timer = setInterval(() => { if (!paused && !document.hidden) showPhoto(index + 1); }, 5000); }
  $("photo-prev").addEventListener("click", () => { showPhoto(index - 1); restart(); });
  $("photo-next").addEventListener("click", () => { showPhoto(index + 1); restart(); });
  pause.addEventListener("click", () => { paused = !paused; syncPause(); restart(); });
  syncPause(); restart();
}
