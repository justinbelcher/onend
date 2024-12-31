export const initCarousel = (
  element: HTMLElement,
  currentLabel: HTMLElement,
  totalItems: number,
) => {
  element.addEventListener("click", (event) => {
    if (element.classList.contains("dragging")) {
      return;
    }

    const nextOffset = getNextOffsetOnClick(
      element.offsetWidth,
      event.offsetX,
      element.scrollLeft,
      totalItems,
    );

    element.scrollTo({
      left: nextOffset,
      behavior: "smooth",
    });
  });

  element.addEventListener("scrollend", () => {
    currentLabel.textContent = getIndexAfterScroll(element);
  });
};

const getIndexAfterScroll = (el: HTMLElement) => {
  const currentLeftOffset = el.scrollLeft;
  const elementWidth = el.offsetWidth;
  const index = Math.round(currentLeftOffset / elementWidth) + 1;

  return index.toString().padStart(2, "0");
};

const getNextOffsetOnClick = (
  elementWidth: number,
  clickX: number,
  currOffset: number,
  totalPhotos: number,
) => {
  const index = Math.round(currOffset / elementWidth);

  let targetIndex;
  if (clickX < elementWidth / 2) {
    targetIndex = index - 1;
  } else {
    targetIndex = index + 1;
  }

  return Math.max(0, Math.min(targetIndex, totalPhotos - 1)) * elementWidth;
};
