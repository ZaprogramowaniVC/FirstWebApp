var ifVariable = true;

getEvenNumbers();


function doSomething(){
    
    
    var myImage = document.getElementById("ImageContainer");

    console.log(myImage);

    if(myImage.style.display == "block"){
        myImage.style.display = "none";
    }
    else{
        myImage.style.display = "block";
    }



    //  for(i = 0; i < 11; i++){
    //     console.log(i);
    //  }


    // var counter = 0;
    // while(counter < 10){
        
    //     console.log(counter);
    //     counter++;

    // }

    //true / false 

    

    // console.log('To się wykona zawsze');

    // if(ifVariable){
    //     console.log('Warunek został spełniony');
    // }

    // ifVariable = !ifVariable;

}

function getEvenNumbers(){

    
    for (var i = 0; i <= 10; i++) {
        if(i%2 == 1){
            console.log(i);
        }
    }
}

function countPayment(){
    var isMember = document.getElementById("myCheckbox").checked;

    console.log("Opłata wynosi: " + (isMember ? "5zł" : "15zł" ));
}





// ! ++ 

// + - * / %

// > < >= <= = == ===

//  [jakiś warunek logiczny]  ?  [wartość, jeżeli warunek jest spełniony]  :  [wartość, jeżeli false]

