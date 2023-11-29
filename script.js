const birthdateinp = document.getElementById('birthdate');
const submit = document.getElementById('submitbtn');
const outputresult = document.getElementById('result');

submit.addEventListener('click', calculateAge);

function calculateAge() {
    const birthdate = new Date(birthdateinp.value);
    const today = new Date();

    const ageInMillis = today - birthdate;
    const ageInYears = Math.floor(ageInMillis/(1000 * 60 * 60 *24 * 365));

    if(ageInYears >= 0){
        outputresult.textContent = `Your are ${ageInYears} years old...!`;
    }else{
        outputresult.textContent = `Invalid Input`;
        
    }
}