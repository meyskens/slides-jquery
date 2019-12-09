

function checkForSlideShow() {
    if (slideshow) {
        initComponents()
        $(".jq-Ready").text("jQuery is ready! Go to the next slide please..")
    } else {
        console.log("Slideshow not ready yet...")
        setTimeout(checkForSlideShow, 500)
    }

}

$(function() {
    setTimeout(checkForSlideShow, 500)
})


function initComponents() {
    $("#target-1").click(function() {
        alert("Je klikte op mij!!!");
    })

    $("#target-2").click(function() {
        $("#box-2").removeClass("blue")
        $("#box-2").addClass("green")
      })
    $("#target-2").dblclick(function() {
        $("#box-2").removeClass("green")
        $("#box-2").addClass("blue")
    })
    $("#alert-demo").click(function() {
        alert("Bericht");
    })

    $("#console-demo").click(function() {
        console.log("Bericht");
        console.log($("#console-demo"));
    })
}