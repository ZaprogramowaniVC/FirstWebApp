/*var zdjecie1 = 1;
zdjecie1.posX = 10,
zjecie1.posY = 10;

var zdjecie2 = 2;
zdjecie2.posX = 120;
zdjecie2.posY = 10;*/


//Przy pomocy petli stworzyc 100 napisow: napis1, napis2, napis3....
//Umiescic kazdy napis w osobnej szufladzie w szafieznapisami
var szafaZNapisami = []; //Array

for(var i = 2; i <= 100; i+=2)
{
    var napis = "napis" + i;
    szafaZNapisami.push(napis);
}


/*
for(var j = 0; j < szafaZNapisami.length; j++)
{
   console.log(szafaZNapisami[j]);
}

szafaZNapisami.forEach( val => {
    console.log(val);
});
*/


function przywitajSie(imie)
{
    window.alert("Witaj " + imie);
}



/*
przywitajSie("Grzegorz");
przywitajSie("Damian");
przywitajSie("Michał");
przywitajSie(100);
*/



//wyswietlZdjecie(jakiesZdjecie);










//var szafaZeZdjeciami = [zdjecie1.jpg, zdjecie2.jpg, zdjecie3.jpg];








var zmienna1 = 20;
var zmienna2 = 30;

zmienna1 = zmienna1 * 2;// zmienna1 *= 2;

var dodawanie = 10;
dodawanie += 5;//15

var zmienna3 = "Ala ma";
var zmienna4 = " kota";

for(var licznik = 0; licznik < 10; licznik++)//licznik++ // licznik = licznik + 1;
{
    console.log("petla " + licznik);
}

for(var j = 10; j >= 0; j--)
{

}



var tablica1 = [100, zmienna1, zmienna3, 20, true];
var tablica2 = [];

tablica1[0] = tablica1[0] * 2;
tablica1[4] = false;



console.log(tablica1[0])


