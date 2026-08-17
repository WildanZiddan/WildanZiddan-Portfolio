export const loadComponents = async function () {
  const includeElements = document.querySelectorAll("[data-include]");

  const loadPromises = Array.from(includeElements).map(async (el) => {
    const filePath = el.getAttribute("data-include");
    try {
      const response = await fetch(filePath);
      if (response.ok) {
        const html = await response.text();
        el.outerHTML = html;
      } else {
        console.error(`Failed to load ${filePath}: ${response.statusText}`);
      }
    } catch (err) {
      console.warn(
        `Could not load ${filePath} via fetch. If opening locally via file://, please run using a web server (e.g. Live Server).`,
        err
      );
    }
  });

  await Promise.all(loadPromises);
};
