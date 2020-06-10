var firstPlayer = true;
var boardState = [];
for(var i = 0; i<9; i++){
    boardState.push(null);
}


function SetField(e){
    var id = e.target.getAttribute('id');
    var button = document.getElementById(id);
    
    if(button.value !== '')
        return;

    //#1
    // if(firstPlayer)
    //     button.value = 'x';
    // else
    //     button.value = 'o';

    //#2
    button.value = firstPlayer ? 'x' : 'o';  
    
    var elementNumberId = id[id.length-1];
    boardState[elementNumberId - 1] = firstPlayer;

    if(CheckResult()){
        resetBoard();
    }

    var isFull = true;
    for(var i = 0; i<9; i++){
        if(boardState[i] === null)
        isFull = false;
    }
    if(isFull)
        resetBoard();

    firstPlayer = !firstPlayer;
}

function CheckResult(){

    if(boardState[0] !== null && 
        (
            (boardState[0] === boardState[1] && boardState[1] == boardState[2]) 
        )){
            alert('Wygrał gracz' + (firstPlayer ? ' pierwszy' : ' drugi'));
            return true;
        }


    return false;    
}

function resetBoard(){
    for(i = 0; i<9; i++){
        var button = document.getElementById('Btn'+(i+1))
        button.value = '';
        
        boardState[i] = null;
    }
}

// function IsNotEmpty(parameter){
//     return parameter !== '';
// }



