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

    // if(CheckResult() || boardState.every(x => x != null)){
    if(CheckResult()){
        resetBoard();
    }

    var isFull = true;
    for(var i = 0; i<9; i++){
        if(boardState[i] === null){
            isFull = false;
            break;
        }
    }
    if(isFull){
        alert('Remis!');
        resetBoard();
    }

    firstPlayer = !firstPlayer;
}

function CheckResult(){

    if(boardState[0] !== null && 
        (
            (boardState[0] === boardState[1] && boardState[1] == boardState[2]) ||
            (boardState[0] === boardState[3] && boardState[3] == boardState[6]) ||
            (boardState[0] === boardState[4] && boardState[4] == boardState[8])
        )){
            alert('Wygrał gracz' + (firstPlayer ? ' pierwszy' : ' drugi'));
            return true;
        }

    if(boardState[3] !== null &&
        boardState[3] === boardState[4] && boardState[4] === boardState[5])
        {
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



