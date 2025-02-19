const footer = document.querySelector("#footer");
const buttonContainer = document.querySelector("#button-container");
const backCircle = document.querySelector("#back-circle");
const buttonCircle = document.querySelector("#button-circle");
const buttonEarningsParagraph = document.querySelector("#btn-earnings");
const buttonEarningDisplayDiv = document.querySelector("#earnings-display-div");
const buttonLevelParagraph = document.querySelector("#btn-level");

let buttonLevel, buttonColor, buttonEarnings, buttonUpgradeCost, progress;

const levels = {
    0: { "level-color": "rgb(255, 0, 0)", "level-earnings": 2.50, "upgrade-cost": 450 },
    1: { "level-color": "rgb(255, 165, 0)", "level-earnings": 4.75, "upgrade-cost": 865 },
    2: { "level-color": "rgb(255, 255, 0)", "level-earnings": 7.55, "upgrade-cost": 1345 },
    3: { "level-color": "rgb(0, 255, 0)", "level-earnings": 12.45, "upgrade-cost": 1890 },
    4: { "level-color": "rgb(0, 0, 255)", "level-earnings": 18.08, "upgrade-cost": 2400 },
    5: { "level-color": "rgb(75, 0, 130)", "level-earnings": 24.32, "upgrade-cost": 2875 },
    6: { "level-color": "rgb(238, 130, 238)", "level-earnings": 31.16, "upgrade-cost": 3315 },
    7: { "level-color": "rgb(128, 128, 128)", "level-earnings": 38.61, "upgrade-cost": 3720 },
    8: { "level-color": "rgb(255, 20, 147)", "level-earnings": 46.67, "upgrade-cost": 4090 },
    9: { "level-color": "rgb(0, 255, 255)", "level-earnings": 55.34, "upgrade-cost": 4425 },
    10: { "level-color": "rgb(139, 69, 19)", "level-earnings": 64.62, "upgrade-cost": 4725 },
    11: { "level-color": "rgb(255, 69, 0)", "level-earnings": 74.51, "upgrade-cost": 4990 },
    12: { "level-color": "rgb(173, 216, 230)", "level-earnings": 85.01, "upgrade-cost": 5220 },
    13: { "level-color": "rgb(34, 139, 34)", "level-earnings": 96.12, "upgrade-cost": 5415 },
    14: { "level-color": "rgb(123, 104, 238)", "level-earnings": 107.84, "upgrade-cost": 5575 },
    15: { "level-color": "rgb(255, 105, 180)", "level-earnings": 120.26, "upgrade-cost": 5705 },
    16: { "level-color": "rgb(0, 191, 255)", "level-earnings": 133.37, "upgrade-cost": 5805 },
    17: { "level-color": "rgb(46, 139, 87)", "level-earnings": 147.17, "upgrade-cost": 5880 },
    18: { "level-color": "rgb(218, 165, 32)", "level-earnings": 161.67, "upgrade-cost": 5930 },
    19: { "level-color": "rgb(75, 0, 130)", "level-earnings": 176.86, "upgrade-cost": 5955 },
    20: { "level-color": "rgb(255, 215, 0)", "level-earnings": 192.74, "upgrade-cost": 5955 },
    21: { "level-color": "rgb(138, 43, 226)", "level-earnings": 209.31, "upgrade-cost": 5925 },
    22: { "level-color": "rgb(255, 99, 71)", "level-earnings": 226.57, "upgrade-cost": 5860 },
    23: { "level-color": "rgb(64, 224, 208)", "level-earnings": 244.52, "upgrade-cost": 5770 },
    24: { "level-color": "rgb(255, 140, 0)", "level-earnings": 263.16, "upgrade-cost": 5655 },
    25: { "level-color": "rgb(72, 61, 139)", "level-earnings": 282.49, "upgrade-cost": 5515 }
};

if (localStorage.getItem("button-lvl") && localStorage.getItem("button-progress")) {
    buttonLevel = parseInt(localStorage.getItem("button-lvl"));
    progress = parseFloat(localStorage.getItem("button-progress"));
} else {
    buttonLevel = 0;
    progress = 0;
};

document.documentElement.style.setProperty("--progress", progress + "%");

function upgradeButton() {
    if (buttonLevel < Object.keys(levels).length - 1) {
        progress = 0;
        localStorage.setItem("button-progress", progress);
        buttonLevel += 1;

        buttonColor = levels[buttonLevel]["level-color"];
        buttonEarnings = parseFloat(levels[buttonLevel]["level-earnings"]);
        buttonUpgradeCost = parseInt(levels[buttonLevel]["upgrade-cost"]);

        document.documentElement.style.setProperty("--gradient-color", buttonColor);
        document.documentElement.style.setProperty("--color", buttonColor);
        buttonEarningsParagraph.style.setProperty("color", document.documentElement.style.getPropertyValue("--color"));
        buttonEarningsParagraph.style.setProperty("text-shadow", `0px 0px ${window.innerHeight * 0.05}px ${document.documentElement.style.getPropertyValue("--color")}`);
        buttonEarningsParagraph.textContent = buttonEarnings;
        document.title = `button lvl ${buttonLevel}`;
    } else {
        buttonCircle.removeEventListener("click", clickedButton);
        buttonCircle.removeEventListener("touchstart", clickedButton);
        buttonCircle.textContent = "RESET";
        if (navigator.userAgentData.mobile) {
            buttonCircle.addEventListener("touchstart", resetProgress);
        } else {
            buttonCircle.addEventListener("click", resetProgress);
        };
    };
};

function resetProgress() {
    localStorage.removeItem("button-lvl");
    localStorage.removeItem("button-progress");
    window.location.reload();
};

document.title = `button lvl ${buttonLevel}`;
buttonColor = levels[buttonLevel]["level-color"];
buttonEarnings = parseFloat(levels[buttonLevel]["level-earnings"]);
buttonUpgradeCost = parseInt(levels[buttonLevel]["upgrade-cost"]);
document.documentElement.style.setProperty("--gradient-color", buttonColor);
document.documentElement.style.setProperty("--color", buttonColor);

if (footer) {
    footer.style.setProperty("width", window.innerWidth + "px");
    footer.style.setProperty("height", window.innerHeight * 0.05 + "px");
    footer.style.setProperty("font-size", window.innerHeight * 0.014 + "px");
    footer.textContent = `HTML last modified on ${document.lastModified.split(" ")[0]} at ${document.lastModified.split(" ")[1]}.`;
};

if (buttonContainer) {
    buttonContainer.style.setProperty("height", window.innerHeight / 2 + "px");
    buttonContainer.style.setProperty("aspect-ratio", "1/1");
};

if (backCircle) {
    backCircle.style.setProperty("height", window.innerHeight / 2 * 0.98 + "px");
    backCircle.style.setProperty("aspect-ratio", "1/1");
};

if (buttonCircle) {
    buttonCircle.style.setProperty("height", window.innerHeight / 2 * 0.96 + "px");
    buttonCircle.style.setProperty("aspect-ratio", "1/1");
    if (navigator.userAgentData.mobile) {
        buttonCircle.addEventListener("touchstart", clickedButton);
    } else {
        buttonCircle.addEventListener("click", clickedButton);
    };
};

if (buttonEarningsParagraph) {
    buttonEarningsParagraph.style.setProperty("width", window.innerWidth / 4 * 0.965 * 0.5 + "px");
    buttonEarningsParagraph.style.setProperty("height", "fit-content");
    buttonEarningsParagraph.style.setProperty("font-size", window.innerHeight * 0.1 + "px");
    buttonEarningsParagraph.style.setProperty("color", document.documentElement.style.getPropertyValue("--color"));
    buttonEarningsParagraph.style.setProperty("text-shadow", `0px 0px ${window.innerHeight * 0.05}px ${document.documentElement.style.getPropertyValue("--color")}`);
    buttonEarningsParagraph.style.setProperty("font-weight", "100");
    buttonEarningsParagraph.textContent = buttonEarnings;
};

if (buttonLevelParagraph) {
    buttonLevelParagraph.style.setProperty("width", window.innerWidth / 4 * 0.965 * 0.5);
    buttonLevelParagraph.style.setProperty("height", "fit-content");
    buttonLevelParagraph.textContent = buttonLevelParagraph.textContent = `lvl ${buttonLevel}`;
    buttonLevelParagraph.style.setProperty("text-align", "center");
    buttonLevelParagraph.style.setProperty("text-shadow", `0px 0px ${window.innerHeight * 0.025}px ${buttonLevelParagraph.style.getPropertyValue("color")}`);
    buttonLevelParagraph.style.setProperty("font-size", window.innerHeight * 0.035 + "px");
}

function clickedButton() {
    let progressIncrease = (buttonUpgradeCost / buttonEarnings) / 1000;
    progress += progressIncrease;
    let fixedProgress = progress.toFixed(2);
    if (parseFloat(fixedProgress) >= 100.00) {
        upgradeButton();
    };
    document.documentElement.style.setProperty("--progress", progress + "%");
    localStorage.setItem("button-progress", parseFloat(progress));
    localStorage.setItem("button-lvl", buttonLevel);
    const clonedDiv = buttonEarningDisplayDiv.cloneNode(true);
    let oldClonedDiv = document.querySelector(".latestClone");
    if (oldClonedDiv) {
        oldClonedDiv.remove();
    };
    buttonLevelParagraph.textContent = `lvl ${buttonLevel}`;
    clonedDiv.style.setProperty("width", window.innerWidth / 20 + "px");
    clonedDiv.style.setProperty("height", "fit-content");
    clonedDiv.style.setProperty("color", document.documentElement.style.getPropertyValue("--color"));
    clonedDiv.style.setProperty("text-shadow", `0px 0px ${window.innerHeight * 0.025}px ${document.documentElement.style.getPropertyValue("--color")}`);
    clonedDiv.style.setProperty("display", "flex");
    clonedDiv.style.setProperty("align-items", "center");
    clonedDiv.style.setProperty("justify-content", "center");
    clonedDiv.style.setProperty("font-size", window.innerHeight / 20 + "px");
    clonedDiv.style.setProperty("font-weight", "100");
    document.documentElement.style.setProperty("--offsetX", Math.floor(Math.random() * 200) - 100 + "%");
    clonedDiv.style.setProperty("transform", `translateY(-450%) translateX(${document.documentElement.style.getPropertyValue("--offsetX")})`);
    clonedDiv.classList.add("latestClone");
    clonedDiv.textContent = buttonEarnings;
    buttonContainer.appendChild(clonedDiv);
};