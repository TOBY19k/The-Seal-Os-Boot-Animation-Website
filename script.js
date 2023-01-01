function GoToInstallerReleasePage() {
  window.location.assign("https://github.com/TOBY19k/Seal-Os-Boot-Animation-Installer/releases/latest");
}

function GoToUninstallerReleasePage() {
  window.location.assign("https://github.com/TOBY19k/Boot-Animation-Uninstaller/releases/latest");
}

document.querySelector(".install").addEventListener("click", GoToInstallerReleasePage);

document.querySelector(".uninstall").addEventListener("click", GoToUninstallerReleasePage);
