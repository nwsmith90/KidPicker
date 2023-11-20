
let includedKids = []

function addLogan() {
        if(document.getElementById("loganCheck" == 1)){
                includedKids.push("logan")
        }
        else if(document.getElementById("loganCheck")!= 1){
                const index = includedKids.indexOf("logan")
                includedKids = includedKids.splice(index, 3)
                console.log(index)
        }
}

function addPatrick() {
        if(document.getElementById("patrickCheck")){
                includedKids.push("patrick")
        }
}

function addLillian() {
        if(document.getElementById("lillianCheck")){
                includedKids.push("lillian")
        }
}

function addSamuel() {
        if(document.getElementById("samuelCheck")){
                includedKids.push("samuel")
        }
}


console.log(`${includedKids}`)

document.getElementById("choice").addEventListener(
 "click",
 () => {
//     let randomNum = (Math.floor(Math.random()*4))
//     if(randomNum == 0){
//     document.getElementById("logan").hidden = false;
//     document.getElementById("patrick").hidden = true;
//     document.getElementById("lillian").hidden = true;
//     document.getElementById("samuel").hidden = true;
//     }
//     else if( randomNum == 1){
//         document.getElementById("patrick").hidden = false;
//         document.getElementById("logan").hidden = true;
//         document.getElementById("lillian").hidden = true;
//         document.getElementById("samuel").hidden = true;
//         }
//     else if(randomNum == 2){
//             document.getElementById("lillian").hidden = false;
//             document.getElementById("logan").hidden = true;
//             document.getElementById("patrick").hidden = true;
//             document.getElementById("samuel").hidden = true;
//             }
//     else{
//             document.getElementById("samuel").hidden = false;
//             document.getElementById("logan").hidden = true;
//             document.getElementById("patrick").hidden = true;
//             document.getElementById("lillian").hidden = true;
//     }
    console.log(`${includedKids}`)
 }   
)