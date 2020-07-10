function angleBetweenPointsInDegrees(x1, y1, x2, y2) {
    var angle = Math.atan2(y2 - y1, x2 - x1) * 180.0 / Math.PI;

    angle = 180 + angle;

    return angle;
}

function distanceBetweenPoints(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.sqrt(a * a + b * b);
}

var _fontFamily = 'Anton'

$(document).ready(function () {

    var styleProperties = {
        family: _fontFamily,
        size: 80,
        fill: "#171717",
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0
    };

    var _w = $(window).width();
    if(_w < 776){
        styleProperties.size = 42;
        styleProperties.paddingTop = 15;
        styleProperties.paddingBottom = 25;
    }
    WebFont.load({
        google: { families: [_fontFamily] },
        active: () => {
            var blotterEL = document.querySelectorAll(".blotter");

            blotterEL.forEach(elememt => {
                var text = new Blotter.Text(elememt.innerHTML, styleProperties);

                var material = new Blotter.ChannelSplitMaterial();

                var blotter = new Blotter(material, {
                    texts: text
                });

                elememt.innerHTML = "";

                var myScope = blotter.forText(text);

                blotter.on("ready", function () {
                    myScope.appendTo(elememt);
                    myScope.material.uniforms.uRotation.value = 0;
                    myScope.material.uniforms.uOffset.value = 0.035;
                });

                myScope.on("mousemove", function (mousePosition) {
                    var angle = angleBetweenPointsInDegrees(
                        0.5,
                        0.5,
                        mousePosition.x,
                        mousePosition.y
                    );
                    var blur = Math.min(
                        0.035,
                        distanceBetweenPoints(0.5, 0.5, mousePosition.x, mousePosition.y)
                    );

                    myScope.material.uniforms.uRotation.value = angle;
                    myScope.material.uniforms.uOffset.value = blur;
                });
            });
        }
    });


    //   var text = new Blotter.Text("Media", styleProperties);

    //   var material = new Blotter.ChannelSplitMaterial();

    //   var blotter = new Blotter(material, {
    //     texts: text
    //   });


    //   var myScope = blotter.forText(text);

    //   blotter.on("ready", function() {
    //     myScope.appendTo(document.querySelector(".blotter"));
    //     myScope.material.uniforms.uRotation.value = 0;
    //     myScope.material.uniforms.uOffset.value = 0.025;
    //   });

    //   myScope.on("mousemove", function(mousePosition) {
    //     var angle = angleBetweenPointsInDegrees(
    //       0.5,
    //       0.5,
    //       mousePosition.x,
    //       mousePosition.y
    //     );
    //     var blur = Math.min(
    //       0.025,
    //       distanceBetweenPoints(0.5, 0.5, mousePosition.x, mousePosition.y)
    //     );

    //     myScope.material.uniforms.uRotation.value = angle;
    //     myScope.material.uniforms.uOffset.value = blur;
    //   });
});
