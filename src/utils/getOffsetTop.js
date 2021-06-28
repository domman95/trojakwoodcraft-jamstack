export default function getOffsetTop(showLogo, setShowLogo) {
  const top = window.scrollY;

  if (top >= 280 && !showLogo) setShowLogo(true);
  if (top <= 279 && showLogo) setShowLogo(false);
}
