const safeUrl = (value) => {
  if (!value || typeof value !== 'string') return '#';

  try {
    const parsed = new URL(value, window.location.href);
    const allowed = ['http:', 'https:', 'mailto:', 'tel:'];
    return allowed.includes(parsed.protocol) ? parsed.href : '#';
  } catch {
    return '#';
  }
};

const render = (data) => {
  document.getElementById('name').textContent = data.name;
  document.getElementById('headline').textContent = data.headline;
  document.getElementById('about').textContent = data.about;

  const projects = document.getElementById('projects');
  projects.replaceChildren();
  data.projects.forEach((project) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = `${project.title} — ${project.description}`;
    link.href = safeUrl(project.url);
    link.rel = 'noopener noreferrer';
    link.target = '_blank';
    item.appendChild(link);
    projects.appendChild(item);
  });

  const contact = document.getElementById('contact');
  contact.replaceChildren();
  Object.entries(data.contact).forEach(([label, value]) => {
    const normalizedLabel = label.trim().toLowerCase();
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = value;

    const href = normalizedLabel === 'email' ? `mailto:${value}` : value;
    link.href = safeUrl(href);

    item.append(`${label}: `, link);
    contact.appendChild(item);
  });
};

fetch('./portfolio.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Could not load portfolio.json: ${response.status} ${response.statusText}. Ensure portfolio.json exists next to index.html.`);
    }
    return response.json();
  })
  .then(render)
  .catch((error) => {
    console.error(error);
  });
