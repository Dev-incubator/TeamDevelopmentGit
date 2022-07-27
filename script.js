const PROGRAMM_VERSION = "1.0.0";

const elementProgrammVersion = document.createElement("div");
elementProgrammVersion.classList.add("app-version");
elementProgrammVersion.innerHTML = `Version: ${PROGRAMM_VERSION}`;

document.querySelector("body").append(elementProgrammVersion);
