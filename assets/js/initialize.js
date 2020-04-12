// ----------------------------------------------------------------- Initialize

// Masks
// 'OUTER HEEL', 'OUTER QUARTER', 'OUTER SOLE', 'SOLE', 'INNER SOLE', 'INNER HEEL', 'INNER QUARTER', 'LACE CAGE', 'TOE CAP', 'TOE BOX', 'SOCK LINER'
var outerHeel = [document.getElementById("outer-heel-mask-focus"), 1820, -260, 1350, 1350];

var innerHeel = [document.getElementById("inner-heel-mask-focus"), 482, -253, 1320, 1320];

// var outerSole = [document.getElementById("outer-sole-mask-focus"), -70, 1295, 4100, 4100, document.getElementById("outer-sole-shadow-focus")];

// var sole = [document.getElementById("sole-mask-focus"), -115, -1050, 3200, 3200, document.getElementById("sole-shadow-focus")];

// var innerSole = [document.getElementById("inner-sole-mask-focus"), -65, 1750, 4100, 4100, document.getElementById("inner-sole-shadow-focus")];

// var innerHeel = [document.getElementById("inner-heel-mask-focus"), 1380, 1425, 1650, 1650, document.getElementById("inner-heel-shadow-focus")];

// var innerQuarter = [document.getElementById("inner-quarter-mask-focus"), 835, 1765, 1050, 1050, document.getElementById("inner-quarter-shadow-focus")];

// var laceCage = [document.getElementById("lace-cage-mask-focus"), 2510, -70, 1950, 1950, document.getElementById("lace-cage-shadow-focus")];

// var toeBox = [document.getElementById("toe-box-mask-focus"), 2760, 1280, 1390, 1390, document.getElementById("toe-box-shadow-focus")];

// var toeCap = [document.getElementById("toe-cap-mask-focus"), -145, 562, 4375, 4375, document.getElementById("toe-cap-shadow-focus")];

// var sockLiner = [document.getElementById("sock-liner-mask-focus"), -50, 1755, 900, 900, document.getElementById("sock-liner-shadow-focus")];

// Variables set by user
var layersArray = [
    {
        part: 'outer heel',
        mask: outerHeel,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    // {
    //     part: 'outer quarter',
    //     mask: outerQuarter,
    //     isColor: true,
    //     graphic: 'static.jpg',
    //     color: 'ffffff',
    //     x: 0,
    //     y: 0,
    //     scale: 500,
    //     rotation: 0
    // }
    // {
    //     part: 'outer sole',
    //     mask: outerSole,
    //     isColor: true,
    //     graphic: 'static.jpg',
    //     color: 'ffffff',
    //     x: 0,
    //     y: 0,
    //     scale: 500,
    //     rotation: 0
    // },
    // {
    //     part: 'sole',
    //     mask: sole,
    //     isColor: true,
    //     graphic: 'static.jpg',
    //     color: 'ffffff',
    //     x: 0,
    //     y: 0,
    //     scale: 500,
    //     rotation: 0
    // },
    // {
    //     part: 'inner sole',
    //     mask: innerSole,
    //     isColor: true,
    //     graphic: 'static.jpg',
    //     color: 'ffffff',
    //     x: 0,
    //     y: 0,
    //     scale: 500,
    //     rotation: 0
    // },
    {
        part: 'inner heel',
        mask: innerHeel,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    }
    // {
    //     part: 'inner quarter',
    //     mask: innerQuarter,
    //     isColor: true,
    //     graphic: 'static.jpg',
    //     color: 'ffffff',
    //     x: 0,
    //     y: 0,
    //     scale: 500,
    //     rotation: 0
    // },
    // {
    //     part: 'lace cage',
    //     mask: laceCage,
    //     isColor: true,
    //     graphic: 'static.jpg',
    //     color: 'ffffff',
    //     x: 0,
    //     y: 0,
    //     scale: 500,
    //     rotation: 0
    // },
    // {
    //     part: 'toe box',
    //     mask: toeBox,
    //     isColor: true,
    //     graphic: 'static.jpg',
    //     color: 'ffffff',
    //     x: 0,
    //     y: 0,
    //     scale: 500,
    //     rotation: 0
    // },
    // {
    //     part: 'toe cap',
    //     mask: toeCap,
    //     isColor: true,
    //     graphic: 'static.jpg',
    //     color: 'ffffff',
    //     x: 0,
    //     y: 0,
    //     scale: 500,
    //     rotation: 0
    // },
    // {
    //     part: 'sock liner',
    //     mask: sockLiner,
    //     isColor: true,
    //     graphic: 'static.jpg',
    //     color: 'ffffff',
    //     x: 0,
    //     y: 0,
    //     scale: 500,
    //     rotation: 0
    // }
]

// ----------------------------------------------------------------- buildTexture
var ctxTexture = document.getElementById('texture').getContext('2d');


// NEW build layers function

function drawLayer(destinationTexture, layer) {
        // if isColor = true
        if(layer.isColor){
            drawColorOnMask(destinationTexture, layer);
            texture.needsUpdate = true;
        }
        // if isColor = false
        else if (!layer.isColor) {
            drawGraphicOnMask(destinationTexture,  layer);
            texture.needsUpdate = true;
        }
}

// Run
function buildTexture() {
    for (i = 0; i < layersArray.length; i++){
        drawLayer(ctxTexture, layersArray[i]);
    }
}
