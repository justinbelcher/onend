export const initCarousel = (el: HTMLElement, label: HTMLElement) => {
  let isDragging = false;
  const EDGE_FACTOR = 0.5;

  el.addEventListener("click", (event) => {
    if (!isDragging) {
      const elRect = el.getBoundingClientRect();
      const edgeThreshold = elRect.width * EDGE_FACTOR;

      if (event.clientX - elRect.left < edgeThreshold) {
        el.scrollBy({
          left: -el.offsetWidth,
          behavior: "smooth",
        });
      } else if (elRect.right - event.clientX < edgeThreshold) {
        el.scrollBy({
          left: el.offsetWidth,
          behavior: "smooth",
        });
      }
    }
  });

  el.addEventListener("scrollend", () => {
    const currentLeftOffset = el.scrollLeft;
    const elementWidth = el.offsetWidth;
    const index = Math.round(currentLeftOffset / elementWidth) + 1;

    label.textContent = index.toString().padStart(2, "0");
  });
};
