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
    console.log(id);
    console.log(id[id.length-1]);
    console.log(id[id.length-1]-1);
    
    var elementNumberId = id[id.length-1];
    boardState[elementNumberId - 1] = firstPlayer;

    CheckResult();

    firstPlayer = !firstPlayer;

    //Jeżeli ktoś wygrał - wyczyść planszę 

}

function CheckResult(){
    if(boardState[0] !== null && 
        (
            (boardState[0] === boardState[1] && boardState[1] == boardState[2]) 
        ))
        alert('Wygrał gracz' + (firstPlayer ? ' pierwszy' : ' drugi'));
}



