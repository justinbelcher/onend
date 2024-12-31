export const initCarousel = (el: HTMLElement, label: HTMLElement) => {
  let isDragging = false;
  const EDGE_FACTOR = 0.3;

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

  const updateCursor = (event: MouseEvent) => {
    const elRect = el.getBoundingClientRect();
    const edgeThreshold = elRect.width * EDGE_FACTOR;

    if (event.clientX - elRect.left < edgeThreshold) {
      el.style.cursor = "w-resize";
    } else if (elRect.right - event.clientX < edgeThreshold) {
      el.style.cursor = "e-resize";
    } else {
      el.style.cursor = "default"; // Default cursor
    }
  };

  el.addEventListener("mousemove", (event) => {
    if (!isDragging) {
      updateCursor(event);
    }
  });

  el.addEventListener("mouseleave", () => {
    el.style.cursor = "default";
  });
};
