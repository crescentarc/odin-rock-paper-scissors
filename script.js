// create function which randomly chooses between rock, paper and scissors //
const cpuChoices = [`rock`, `paper`, `scissors`];
function getComputerChoice(cpuChoices) {
    return cpuChoices[Math.floor(Math.random() * cpuChoices.length)]
};

console.log(getComputerChoice(cpuChoices));
