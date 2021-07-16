function mainPopulate(){
    calendarDate()
    getUserLocale()

    todayWidget()
    // test()


    apps()
    media()

    statusBar(1000,4000)
    // lights()
}

function locationBasedLoad(userLocale) {
    document.getElementById("district").innerHTML = userLocale;

    smartCards(userLocale)
    // console.log("bruhhh")

    buses(userLocale)
    // console.log("bruhhh")

}

function mainRefresh() {
    calendarDate()
    getUserLocale()
    smartCards()
    todayWidget()
    // buses()
    statusBar(0,1500)
    // console.log("refreshed")
}


// function test() {
//     document.getElementById('file').onchange = function(){

//         var file = this.files[0];
      
//         var reader = new FileReader();
//         reader.onload = function(progressEvent){
//           // Entire file
//           console.log(this.result);
      
//           // By lines
//           var lines = this.result.split('\n');
//           for(var line = 0; line < lines.length; line++){
//             console.log(lines[line]);
//           }
//         };
//         reader.readAsText(file);
//     };
// }