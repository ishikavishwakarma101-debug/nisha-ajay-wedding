const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  window.setTimeout(() => {
    document.body.classList.add("invitation-open");

    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth"
    });
  }, 850);
});
