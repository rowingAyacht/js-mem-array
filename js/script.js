
const spellBook = ['Expelliarmous', 'Accio', 'Expecto Patronum', 'Avada Kadarva'];
let mannaPoints = 50;

const castSpell = () => {
    if (mannaPoints > 0){
        console.log('a spell has been cast')
        //choose a random spell from array
        const randomIndex = Math.floor(Math.random() * spellBook.length)
        console.log('randomIndex', randomIndex)
        const randomSpell = spellBook[randomIndex];
        console.log('randomSpell', randomSpell)

        //show the spell on screen
        const spellElement = document.getElementById('spell');
        const message = `You cast the ${randomSpell} spell`;
        spellElement.textContent = message;

        //subtract 5 manna points from the total
        mannaPoints = mannaPoints - 5;
        console.log('mannaPoints', mannaPoints);


        //show user the new manna points
        const mannaElement = document.getElementById('manna');
        mannaElement.textContent = mannaPoints;
    } else {
        const spellElement = document.getElementById('spell');
        spellElement.textContent = 'You can no longer cast spells, please buy more manna';
    }
}
