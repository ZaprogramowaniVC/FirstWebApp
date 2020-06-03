function OnPlus(){
    var liczba1 = Number(document.getElementById('Liczba1').value);
    var liczba2 = Number(document.getElementById('Liczba2').value);

    document.getElementById('Wynik').value = liczba1 + liczba2;
}

function OnMinus(){
    var liczby = GetValues();

    document.getElementById('Wynik').value = liczby[0] - liczby[1];
}

function GetValues(){
    var liczba1 = Number(document.getElementById('Liczba1').value);
    var liczba2 = Number(document.getElementById('Liczba2').value);

    return [liczba1,liczba2];
}

