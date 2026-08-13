const EDGE_FACTOR = 0.3;

export const initCarousel = (el: HTMLElement, label: HTMLElement) => {
  el.addEventListener("click", (event) => {
    const elRect = el.getBoundingClientRect();
    const edgeThreshold = elRect.width * EDGE_FACTOR;

    if (event.clientX - elRect.left < edgeThreshold) {
      el.scrollBy({ left: -el.offsetWidth, behavior: "smooth" });
    } else if (elRect.right - event.clientX < edgeThreshold) {
      el.scrollBy({ left: el.offsetWidth, behavior: "smooth" });
    }
  });

  el.addEventListener("scrollend", () => {
    const index = Math.round(el.scrollLeft / el.offsetWidth) + 1;
    label.textContent = index.toString().padStart(2, "0");
  });

  el.addEventListener("mousemove", (event) => {
    const elRect = el.getBoundingClientRect();
    const edgeThreshold = elRect.width * EDGE_FACTOR;

    if (event.clientX - elRect.left < edgeThreshold) {
      el.style.cursor = "w-resize";
    } else if (elRect.right - event.clientX < edgeThreshold) {
      el.style.cursor = "e-resize";
    } else {
      el.style.cursor = "default";
    }
  });

  el.addEventListener("mouseleave", () => {
    el.style.cursor = "default";
  });
};
