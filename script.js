document.querySelector(".install").addEventListener("click", GoToInstallerReleasePage);
function GoToInstallerReleasePage() {
  window.location.assign("https://github.com/TOBY19k/Seal-Os-Boot-Animation-Installer/releases/latest");
}
document.querySelector(".uninstall").addEventListener("click", GoToUninstallerReleasePage);
function GoToUninstallerReleasePage() {
  window.location.assign("https://github.com/TOBY19k/Boot-Animation-Uninstaller/releases/latest");
}
