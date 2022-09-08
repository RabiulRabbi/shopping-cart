function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseValue = caseInput.value;
    if(isIncreasing == true){
        caseValue = parseInt(caseValue) + 1 ;
    }else if(caseValue > 0){
        caseValue = parseInt(caseValue) - 1;
    }
    caseInput.value = caseValue;

    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseValue * 1219;
}

document.getElementById('plus-btn').addEventListener('click', function(){
    updateCaseNumber(true);
})
document.getElementById('minus-btn').addEventListener('click', function(){
    updateCaseNumber(false);
})