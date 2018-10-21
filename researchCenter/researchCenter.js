var UPGRADES = {
    TELESCOPE: new Array(),
    AGENCY: new Array()
}

var FOUNDS = 0;

class Option {
    constructor(optionCategory, optionName, optionSettings) {
        this.optionCategory = optionCategory;
        this.optionName = optionName;
        this.optionSettings = optionSettings;
    }

    buildOptionElement() {
        let option = document.createElement('div');
        let optionLabel = document.createTextNode(this.optionName);

        let buyBtn = document.createElement('button');
        let buyBtnLabel = document.createTextNode('$'+this.optionSettings.cost);
        buyBtn.classList.add('buyBtn');

        buyBtn.appendChild(buyBtnLabel);
        option.appendChild(optionLabel);
        option.appendChild(buyBtn);

        option.setAttribute('data-option-setting', JSON.stringify(this.optionSettings));

        return option;
    }
}

for (var i = 1; i < 100; i++) {
    UPGRADES.TELESCOPE.push(
        new Option('Telescope', 'T_Option' + i, { cost: parseFloat((100 * i).toString()).toFixed(2) })
    )

    UPGRADES.AGENCY.push(
        new Option('Agency', 'A_Option' + i, { cost: parseFloat((1000 / i).toString()).toFixed(2) })
    )
}

function LoadOptions(options, optionsBox) {
    for (var option of options) {
        optionsBox.appendChild(option.buildOptionElement());
    }
}

LoadOptions(
    UPGRADES.TELESCOPE, 
    document.querySelector('#telescopeUpgradeOptions .upgradesList')
);

LoadOptions(
    UPGRADES.AGENCY, 
    document.querySelector('#agencyUpgradeOptions .upgradesList')
);

function showClickPrompt(event) {

    FOUNDS += 1000;
    document.getElementById("founds").innerHTML = '$' + FOUNDS;

    let coords = { x: event.clientX, y: event.clientY };
    let clickPrompt = document.getElementById('clickPrompt');

    clickPrompt.style.top = coords.y + "px";
    clickPrompt.style.left = coords.x + "px";

    setTimeout(function () {
        if (clickPrompt.className.indexOf('hidden') != -1) {
            console.log('isHidden');
            clickPrompt.classList.remove('hidden');
            clickPrompt.classList.add('visible');
        } else if (clickPrompt.className.indexOf('visible') != -1) {
            console.log('isVisible');            
            clickPrompt.classList.remove('visible');
            clickPrompt.classList.add('hidden');
        }
        setTimeout(function () {
            if (clickPrompt.className.indexOf('hidden') != -1) {
                console.log('isHidden');
                clickPrompt.classList.remove('hidden');
                clickPrompt.classList.add('visible');
            } else if (clickPrompt.className.indexOf('visible') != -1) {
                console.log('isVisible');            
                clickPrompt.classList.remove('visible');
                clickPrompt.classList.add('hidden');
            }
        }, 1000);
    }, 500);
}
document.querySelector(".fab").addEventListener("click",function (event) {
    document.querySelector(".radial").classList.toggle("open");
    event.preventDefault();
});