var UPGRADES = {
    CLICKER: new Array(),
    AGENCY: new Array()
}

class Option {
    constructor(optionCategory, optionName, optionSettings) {
        this.optionCategory = optionCategory;
        this.optionName = optionName;
        this.optionSettings = optionSettings;
    }

    buildOptionElement() {
        let option = document.createElement('div');
        let optionLabel = document.createTextNode(this.optionName);

        option.appendChild(optionLabel);
        option.setAttribute('data-option-setting', JSON.stringify(this.optionSettings));

        return option;
    }
}

for (var i = 0; i < 100; i++) {
    UPGRADES.CLICKER.push(
        new Option('Clicker', 'C_Option' + i, { cost: 100 * i })
    )

    UPGRADES.AGENCY.push(
        new Option('Clicker', 'C_Option' + i, { cost: 1000 / i })
    )
}

function LoadOptions(options, optionsBox) {
    for (var option of options) {
        optionsBox.appendChild(option.buildOptionElement());
    }
}

LoadOptions(
    UPGRADES.CLICKER, 
    document.querySelector('#clickerUpgradeOptions .upgradesList')
);

LoadOptions(
    UPGRADES.AGENCY, 
    document.querySelector('#agencyUpgradeOptions .upgradesList')
);
