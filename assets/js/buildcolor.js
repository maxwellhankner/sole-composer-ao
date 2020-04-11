// ----------------------------------------------------------------- buildColor functions
// Draw UV texture image on given texture
function drawGivenTexture(texture) {
    texture.drawImage(uvtexturemap, 0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
}

// Draw shadow image on given texture
function drawShadow(texture) {
    texture.drawImage(shadowmap, 0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
}

// Draw color on texture where mask exists
// function drawColorOnMask(texture, color, mask) {
function drawColorOnMask(texture, layer) {
    var {mask, color} = layer;
    var canvas = document.createElement('canvas');
    canvas.id = 'tempcanvas';
    canvas.width = 4096;
    canvas.height = 4096;
    var ctxtemp = canvas.getContext('2d');
    ctxtemp.drawImage(mask[0], 0, 0, ctxtemp.canvas.width, ctxtemp.canvas.height);
    ctxtemp.globalCompositeOperation = "source-in";
    ctxtemp.fillStyle = "#" + color;
    ctxtemp.fillRect(0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);
    // draw part shadow atop
    ctxtemp.globalCompositeOperation = "source-atop";
    ctxtemp.drawImage(mask[5], 0, 0, ctxTexture.canvas.width, ctxTexture.canvas.height);

    texture.drawImage(canvas, mask[1], mask[2], mask[3], mask[4]);
}