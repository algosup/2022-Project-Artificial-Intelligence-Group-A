/* ---------------------- Percentage setting of values and refresh ---------------------- */
var intervalId = window.setInterval(function () {
    $.ajax({
        url: '/update',
        // data: $('form').serialize(),
        type: 'POST',
        success: function (response) {
            response = JSON.parse(response);
            response = brendon(response);
            console.log(response);
            document.getElementById("eng").style.width = response[0] + "%";
            document.getElementById("fr").style.width = response[1] + "%";
            document.getElementById("eng").innerHTML = eng + "%";
            document.getElementById("fr").innerHTML = fr + "%";
            response = result(response);
        },
        error: function (error) {
            console.log(error);
        }
    });
}, 2000);
/* ---------------------- Determine the language spoken --------------------- */
function result(response) {
    eng = response[0];
    fr = response[1];
    const spoken= document.querySelector("#demo");

    if (eng > 50) {
        spoken.innerHTML = "English is speaking";
    } else {
        spoken.innerHTML = "French is speaking";
    } 
}

/* --------------------- Calculate the percentage error -------------------- */
function brendon(response) {
    eng = response[0];
    fr = response[1];
    newEng = eng;
    newFr = fr;

    if (eng + fr > 100) {
        sum = eng + fr;
        newEng = eng / sum * 100 - (sum - 100) / 2;
        newFr = fr / sum * 100 - (sum - 100) / 2;

        console.log(sum, eng, fr);

        if (newEng < 0) { newEng = 0; } 
        if (newFr < 0) { newFr = 0;}
    }

    return [newEng, newFr]
}