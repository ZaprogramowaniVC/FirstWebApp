// TestFunction()
// TestFunctionWithInput('Parameter to input function')
// AddFunction(1,2);
// AddFunction('1',2);
// console.log( AddFunctionWithReturn(1,2) );

console.log(switchCaseFunction('1'));


function TestFunction(){
    console.log('Hello from test function');
}

function TestFunctionWithInput(parameter){
    console.log(parameter);
}

function AddFunction(x, y){
    console.log(x+y);
}

function AddFunctionWithReturn(x,y){
    return x+y;
}


function switchCaseFunction(onSwitch){
    switch(onSwitch){
        case '1':
            return 'Jeden';
        case '2':
            return 'Dwa';
        default:
            return 'Nie znam tego numeru';
    }
}

function IsNotEmpty(parameter){
    return parameter !== "";
}
