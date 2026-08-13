const copyBtn = document.getElementById("copyBtn");
const copyIcon = document.getElementById("copyIcon");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(copyBtn.innerText.trim()).then(() => {
    copyIcon.src = "/assets/check.svg";
    copyBtn.style.pointerEvents = "none";
    setTimeout(() => {
      copyIcon.src = "/assets/copy.svg";
      copyBtn.style.pointerEvents = "auto";
    }, 1000);
  });
});
const copyBtn2 = document.getElementById("copyBtn2");
const copyIcon2 = document.getElementById("copyIcon2");

copyBtn2.addEventListener("click", () => {
  navigator.clipboard.writeText(copyBtn2.innerText.trim()).then(() => {
    copyIcon2.src = "/assets/check.svg";
    copyBtn2.style.pointerEvents = "none";
    setTimeout(() => {
      copyIcon2.src = "/assets/copy.svg";
      copyBtn2.style.pointerEvents = "auto";
    }, 1000);
  });
});
