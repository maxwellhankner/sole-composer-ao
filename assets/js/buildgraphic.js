// ----------------------------------------------------------------- buildGraphic functions
function drawGraphicOnMask(texture, layer) {
    var {mask, graphic, x, y, scale, rotation} = layer;

    // Run function on image load
    var graphicImg = new Image();
    graphicImg.onload = function(){
        // Variables
        var graphicWidth = graphicImg.width;
        var graphicHeight = graphicImg.height;
        var graphicPythagorean = Math.sqrt(Math.pow(graphicWidth, 2) + Math.pow(graphicHeight, 2));

        // Create Pythagorean Canvas
        var pythagoreanCanvas = document.createElement('canvas');
        pythagoreanCanvas.id = 'pythagorean-canvas';
        pythagoreanCanvas.width = graphicPythagorean;
        pythagoreanCanvas.height = graphicPythagorean;
        var pythagoreanTemp = pythagoreanCanvas.getContext('2d');
        pythagoreanTemp.translate(pythagoreanCanvas.width/2, pythagoreanCanvas.height/2);
        pythagoreanTemp.rotate(rotation * Math.PI / 180);
        pythagoreanTemp.drawImage(graphicImg, (-graphicImg.width/2), (-graphicImg.height/2), graphicImg.width, graphicImg.height);

        // Create Temp Canvas
        var canvas = document.createElement('canvas');
        canvas.id = 'tempcanvas';
        canvas.width = 4096;
        canvas.height = 4096;
        var ctxtemp = canvas.getContext('2d');
        ctxtemp.drawImage(mask[0], 0, 0, ctxtemp.canvas.width, ctxtemp.canvas.width);

        // draw graphic canvas on temp canvas
        ctxtemp.globalCompositeOperation = "source-in";
        ctxtemp.translate(ctxtemp.canvas.width/2, ctxtemp.canvas.width/2);
        ctxtemp.drawImage(pythagoreanCanvas, (-ctxtemp.canvas.width/2) + x - scale, (-ctxtemp.canvas.height/2) + y - scale, ctxtemp.canvas.width + (2 * scale), ctxtemp.canvas.width + (2 * scale));
        ctxtemp.resetTransform();

        // draw part shadow atop
        ctxtemp.globalCompositeOperation = "source-atop";
        ctxtemp.drawImage(mask[5], 0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);

        // draw temp canvas on final texture
        texture.drawImage(canvas, mask[1], mask[2], mask[3], mask[4]);

        // Show canvas in lower interface
        div = document.getElementById("selection-texture-id")
        div.innerHTML = '';
        div.appendChild(canvas)
    }
    graphicImg.src = 'assets/images/' + graphic;
}
