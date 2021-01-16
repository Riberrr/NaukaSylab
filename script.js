const sylaby = ["lusz", "ki", "mny", "cho", "cie", "nie", "by", "tny", "baj", "owe", "kot", "ty", "lu", "oto", "fut", "spry", "są", "me", "bia"]
let liczba = Math.random(sylaby.length);
const losuj = () => {
    liczba = Math.floor(Math.random() * sylaby.length);
    console.log(sylaby[liczba])

    document.querySelector("#wyswietl").innerHTML = sylaby[liczba];
}

document.addEventListener("keypress", losuj, false)