
let includedKids = []

function addLogan() {
        let isLoganChecked = document.getElementById("loganCheck")
        if(isLoganChecked.checked == true){
                includedKids.push("logan")
                console.log(`${includedKids}`)
        }
        else if(isLoganChecked.checked == false){
                const index = includedKids.indexOf("logan")
                includedKids = includedKids.splice(index, 0)
                console.log(`${includedKids}`)
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