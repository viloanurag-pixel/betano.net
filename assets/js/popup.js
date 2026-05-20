document.addEventListener("DOMContentLoaded", () => {
  const path = (location.pathname || "").toLowerCase();

  const isdex =
    path === "/" ||
    path.endsWith("/") ||
    path.endsWith("dex.html");

  const isIndex = path.endsWith("Index.html");

  // Only show on dex or Index
  if (!isdex && !isIndex) return;

  // Prevent double rendering
  if (document.querySelector(".modal-backdrop")) return;

  // Create popup
  const bd = document.createElement("div");
  bd.className = "modal-backdrop";
  bd.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="Policy Notice">
      <h3>Policy Notice</h3>
      <p>Great to see you! Unlock exciting benefits today.</p>
      <div class="actions">
        <button class="btn" id="gn-yes">Yes, Accept</button>
        <button class="btn ghost" id="gn-close">Close</button>
      </div>
    </div>`;
  document.body.appendChild(bd);
  bd.style.display = "flex";

  const close = () => {
    bd.style.display = "none";
    bd.remove();
  };

  /**
   * Index LOGIC (Redirect on both buttons)
 
  
  document.addEventListener("DOMContentLoaded", () => {
 
  const yesBtn = document.getElementById("gn-yes");
  const closeBtn = document.getElementById("gn-close");
 
  const IndexRedirect = "https://google.com/";
 
  // detect index page
  const isIndex =
    window.location.pathname === "/" ||
    window.location.pathname.includes("index");
 
  // custom modal close
  function closeGate() {
    document.getElementById("gate")?.classList.remove("show");
  }
 
  // YES BUTTON
  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
 
      if (isIndex) {
        window.location.href = IndexRedirect;
      } else {
        closeGate();
      }
 
    });
  }
 
  // CLOSE BUTTON
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
 
      if (isIndex) {
 
        window.location.href = IndexRedirect;
 
      } else {
 
        const target =
          (document.querySelector('a[href*="terms.html"]') && "terms.html") ||
          (document.querySelector('a[href*="privacy.html"]') && "privacy.html");
 
        if (target) {
          window.location.href = target;
        } else {
          closeGate();
        }
      }
 
    });
  }
 
});
