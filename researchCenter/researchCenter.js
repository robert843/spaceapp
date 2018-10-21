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

 UPGRADES.TELESCOPE.push(
        new Option('Telescope', 'Mouth Module', { cost: parseFloat(4000).toString().toFixed(2) })
    )
 UPGRADES.TELESCOPE.push(
        new Option('Telescope', 'Solar Array', { cost: parseFloat(10000).toString().toFixed(2) })
    )
 UPGRADES.TELESCOPE.push(
        new Option('Telescope', 'Optical Telescope', { cost: parseFloat(20000).toString().toFixed(2) })
    )
 UPGRADES.TELESCOPE.push(
        new Option('Telescope', 'Radial Science Instrument Module', { cost: parseFloat(55000).toString().toFixed(2) })
    )
 UPGRADES.TELESCOPE.push(
        new Option('Telescope', 'Crystal Glass', { cost: parseFloat(100000).toString().toFixed(2) })
    )
 UPGRADES.TELESCOPE.push(
        new Option('Telescope', 'Laser Pointer', { cost: parseFloat(120000).toString().toFixed(2) })
    )
 UPGRADES.TELESCOPE.push(
        new Option('Telescope', 'Automatic Pointer Module', { cost: parseFloat((180000 * i).toString()).toFixed(2) })
    )
 UPGRADES.TELESCOPE.push(
        new Option('Telescope', 'Extra Magnifying Glass', { cost: parseFloat((200000 * i).toString()).toFixed(2) })
    )
 UPGRADES.TELESCOPE.push(
        new Option('Telescope', 'Nanoplastic Glass', { cost: parseFloat((300000 * i).toString()).toFixed(2) })
    )
 UPGRADES.TELESCOPE.push(
        new Option('Telescope', 'Secret Module', { cost: parseFloat((1000000 * i).toString()).toFixed(2) })
    )


for (var i = 1; i < 100; i++) {
    
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
