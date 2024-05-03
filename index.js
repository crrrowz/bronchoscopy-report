var lung_img = document.getElementById("lung-img");
var chachtest = document.getElementById("chachtest");
var output_img_lung = document.getElementById("output-region-b-img-lung");
var output_region = document.getElementById("output-region");
var output_region_b_input = document.getElementById("output-region-b-input");
var output_region_b_photos_lung = document.getElementById("output-region-b-photos-lung");




var numOFcircle = 1;
var DBOFcircle = []
chachtest.addEventListener("click", (e) => {


});
lung_img.addEventListener("dblclick", (e) => {

    if (numOFcircle < 100) {


        // var rect = lung_img.getBoundingClientRect();
        // var x = rect.left;
        // var y = rect.top;

        var x = e.offsetX - 13;
        var y = e.offsetY - 13;

        // console.log("y:" + y + "  x:" + x)


        function findClosest(y, x, arr) {

            let highNumX = Math.max(x + 20);
            let lowNumX = Math.min(x - 20);

            let highNumY = Math.max(y + 20);
            let lowNumY = Math.min(y - 20);

            for (let i = lowNumX; i <= highNumX; i++) {
                for (let j = lowNumY; j <= highNumY; j++) {
                    for (let d = 0; d < DBOFcircle.length; d++) {
                        let DBOF = DBOFcircle[d].split(':');
                        if ("" + j + ":" + i + "" == "" + DBOF[0] + ":" + DBOF[1] + "") {
                            return true;
                        }
                    }
                }
            }



        }
        const result = findClosest(y, x, DBOFcircle) || null

        if (result == null) {
            DBOFcircle.push("" + y + ":" + x + "")
            var div = document.createElement("div");
            div.setAttribute("class", "circle");
            div.setAttribute("style", 'top:' + Number(y) + 'px;left:' + Number(x) + "px;");
            var p = document.createElement("p");
            p.innerHTML = numOFcircle
            div.appendChild(p);
            lung_img.lastElementChild.appendChild(div);


            var x = e.offsetX / 2 - 5;
            var y = e.offsetY / 2 - 5;

            // output_img_lung.setAttribute("style", "height:500px;width:500px;");

            // console.log("y:" + y + "  x:" + x)


            var div = document.createElement("div");
            div.setAttribute("class", "circle2");
            div.setAttribute("style", 'top:' + Number(y) + 'px;left:' + Number(x) + "px;");
            var p = document.createElement("p");
            p.innerHTML = numOFcircle
            div.appendChild(p);

            output_img_lung.appendChild(div);


            numOFcircle = numOFcircle + 1;

        }

    }
});

lung_imgDIV = lung_img.lastElementChild

lung_img.addEventListener("keyup", (e) => {
    if (e.keyCode == 8 && numOFcircle > 1) {
        lung_imgDIV.innerHTML = "";
        numOFcircle = 1;
        DBOFcircle = [];
    }
});
lung_img.addEventListener("contextmenu", (e) => {
    if (numOFcircle > 1) {
        lung_imgDIV.removeChild(lung_imgDIV.lastChild);
        numOFcircle = numOFcircle - 1;
        DBOFcircle = DBOFcircle.splice(-1, 1);
    }
});
document.body.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});


window.addEventListener("afterprint", (e) => {
    // if (output_region.offsetHeight > 900) {
    console.log(output_region_b_input.offsetHeight)
    console.log(output_region_b_photos_lung.offsetHeight)
    if (output_region_b_input > output_region_b_photos_lung) {

    }

    // }

});