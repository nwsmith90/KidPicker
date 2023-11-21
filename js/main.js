
let includedKids = []

function addLogan() {
        let isLoganChecked = document.getElementById("loganCheck")
        if(isLoganChecked.checked == true){
                includedKids.push("logan")
                console.log(`${includedKids}`)
        }
        else if(isLoganChecked.checked == false){
                includedKids = includedKids.filter(e => e !== 'logan')
                console.log(`${includedKids}`)
        }
}

function addPatrick() {
        let isPatrickChecked = document.getElementById("patrickCheck")
        if(isPatrickChecked.checked == true){
                includedKids.push("patrick")
                console.log(`${includedKids}`)
        }
        else if(isPatrickChecked.checked == false){
                includedKids = includedKids.filter(e => e !== 'patrick')
                console.log(`${includedKids}`)
        }
}

function addLillian() {
        let isLillianChecked = document.getElementById("lillianCheck")
        if(isLillianChecked.checked == true){
                includedKids.push("lillian")
                console.log(`${includedKids}`)
        }
        else if(isLillianChecked.checked == false){
                includedKids = includedKids.filter(e => e !== 'lillian')
                console.log(`${includedKids}`)
        }
}

function addSamuel() {
        let isSamuelChecked = document.getElementById("samuelCheck")
        if(isSamuelChecked.checked == true){
                includedKids.push("samuel")
                console.log(`${includedKids}`)
        }
        else if(isSamuelChecked.checked == false){
                includedKids = includedKids.filter(e => e !== 'samuel')
                console.log(`${includedKids}`)
        }
}


console.log(`${includedKids}`)

document.getElementById("choice").addEventListener(
 "click",
 () => {
    let randomNum = (Math.floor(Math.random()*includedKids.length))
    if(includedKids.length < 2){
        document.getElementById("logan").hidden = true;
        document.getElementById("patrick").hidden = true;
        document.getElementById("lillian").hidden = true;
        document.getElementById("samuel").hidden = true;
        document.getElementById("notEnough").hidden = false;
    }

    else if(includedKids[randomNum] == "logan"){
    document.getElementById("logan").hidden = false;
    document.getElementById("patrick").hidden = true;
    document.getElementById("lillian").hidden = true;
    document.getElementById("samuel").hidden = true;
    document.getElementById("notEnough").hidden = true;
    }
    else if( includedKids[randomNum] == "patrick"){
        document.getElementById("patrick").hidden = false;
        document.getElementById("logan").hidden = true;
        document.getElementById("lillian").hidden = true;
        document.getElementById("samuel").hidden = true;
        document.getElementById("notEnough").hidden = true;
        }
    else if(includedKids[randomNum] == "lillian"){
            document.getElementById("lillian").hidden = false;
            document.getElementById("logan").hidden = true;
            document.getElementById("patrick").hidden = true;
            document.getElementById("samuel").hidden = true;
            document.getElementById("notEnough").hidden = true;
            }
    else{
            document.getElementById("samuel").hidden = false;
            document.getElementById("logan").hidden = true;
            document.getElementById("patrick").hidden = true;
            document.getElementById("lillian").hidden = true;
            document.getElementById("notEnough").hidden = true;
    }
    console.log(`${randomNum}`)
    
 }   
)