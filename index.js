const printSelection = function(seats){
    // Logic
    const size = 10
    let unavailableSeats = []
    seats.filter(seat=>{
        const row = seat[0].charCodeAt(0) - 97
        const column = seat[1]
        console.log(row,column)
        if(row>=size || column>=size){
            unavailableSeats.push(seat)
        }
    })
    const getCharacter = (x,y,seats)=>{
        
        const letter = String.fromCharCode(97 + x)
        return seats.includes(`${letter}${y+1}`)?"O":"X"
    }

    for(let i=0;i<size;i++){
        let row = []
        for(let j=0;j<size;j++){
            const character = getCharacter(i,j,seats)
            row.push(character)
        }
        console.log(row.join(" "))
    }

    console.log("Seats",seats)
    console.log("Unavailable",unavailableSeats)
}
const seats = ["a1","b5","a2","f10","a100"]
printSelection(seats)