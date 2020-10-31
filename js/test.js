let one;
let classOne;
let algo;
let algoSelector;
let options;
let countInput;
let mspfInput;
let prepareBtn;
let goBtn;

window.onload = function(){
    algoSelector = document.getElementById("algo");
    options = document.querySelectorAll('#algo option');
    countInput = document.getElementById("count");
    mspfInput = document.getElementById("mspf");
    prepareBtn = document.getElementById("prepare");
    goBtn = document.getElementById("go");
    resetBtn = document.getElementById("reset");

    algoSelector.addEventListener('change' , algoChosen , false);
    countInput.addEventListener('keydown' , inputChangeDetect , false);
    mspfInput.addEventListener('keydown' , inputChangeDetect , false);
    prepareBtn.addEventListener('click' , prepareForRun , false);
    goBtn.addEventListener('click' , runSorting , false);
    resetBtn.addEventListener('click' , refresh , false);
}



function algoChosen(){

    algo = algoSelector.value;
    if(algo === null || algo === 'none'){
        clearInputDashBoard();
        allDisable([algoSelector]);   
    }
    else{
        if(algo === 'BubbleSort'){
            one = new BubbleSort();
            classOne = BubbleSort;
        }
        else if(algo === 'SelectionSort'){
            one = new SelectionSort();
            classOne = SelectionSort;
        }
        else if(algo === 'ExchangeSort'){
            one = new ExchangeSort();
            classOne = ExchangeSort;
        }
        else if(algo === 'InsertionSort'){
            one = new InsertionSort();
            classOne = InsertionSort;
        }
        else if(algo === 'ShakerSort'){
            one = new ShakerSort();
            classOne = ShakerSort;
        }

        allEnable([goBtn])
    }
    
}

function clearInputDashBoard(){
    algoSelector.value = 'none';
    for(let i=0 ; i<options.length ; i++){
        options[i].selected = options[i].defaultSelected;
    }
    countInput.value = '';
    mspfInput.value = '';
}

function inputChangeDetect(e){
    allEnable([goBtn])
} 

function allEnable(except){
    algoSelector.disabled = false;
    countInput.disabled = false;
    mspfInput.disabled = false;
    prepareBtn.disabled = false;
    goBtn.disabled = false;
    if(except){
        for(let i=0; i<except.length ; i++){
            except[i].disabled = true;
        }
    }
}

function allDisable(except){
    algoSelector.disabled = true;
    countInput.disabled = true;
    mspfInput.disabled = true;
    prepareBtn.disabled = true;
    goBtn.disabled = true;
    if(except){
        for(let i=0; i<except.length ; i++){
            except[i].disabled = false;
        }
    }
}

function prepareForRun(){
    one.entryNum = countInput.value;
    one.milliSecPerFrame = mspfInput.value;
    one.generateElements();
    one.boxShuffle();
    one.generateBlocks();
    one.fillStageWithBlocks();
    goBtn.disabled = false;
}

function runSorting(){
    classOne.run(one, classOne.sleep, classOne.endingPose);
    allDisable();
}

function refresh(){
    window.location.reload();
}