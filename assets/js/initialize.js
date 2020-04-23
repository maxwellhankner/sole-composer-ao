// ----------------------------------------------------------------- Initialize

// Masks
var outerSwoosh = [document.getElementById("outer-swoosh-mask"), 2015, -359, 1500, 1500];

var innerSwoosh = [document.getElementById("inner-swoosh-mask"), 138, -384, 1520, 1520];

var outerQuarter = [document.getElementById("outer-quarter-mask"), 2679, -50, 1019, 1019];

var innerQuarter = [document.getElementById("inner-quarter-mask"), -54, -76, 1025, 1025];

var outerHeel = [document.getElementById("outer-heel-mask"), 1803, -272, 1385, 1385];

var innerHeel = [document.getElementById("inner-heel-mask"), 461, -270, 1360, 1360];

var outerSole = [document.getElementById("outer-sole-mask"), -197, 1142, 3760, 3760];

var innerSole = [document.getElementById("inner-sole-mask"), -200, 1486, 3760, 3760];

var sole = [document.getElementById("sole-mask"), -150, -110, 2800, 2800];

var toeBox = [document.getElementById("toe-box-mask"), 2937, 1891, 1151, 1151];

var toeCap = [document.getElementById("toe-cap-mask"), -217, 1831, 3920, 3920];

var lace = [document.getElementById("lace-mask"), 2932, 1024, 1264, 1264];

var laceCage = [document.getElementById("lace-cage-mask"), 2821, 950, 1497, 1497];

var laceLock = [document.getElementById("lace-lock-mask"), 3357, 1993, 325, 325];

var tongue = [document.getElementById("tongue-mask"),  2840, 722, 1455, 1455];

var heelWing = [document.getElementById("heel-wing-mask"), 1281, -235, 1084, 1084];

var heelTab = [document.getElementById("heel-tab-mask"), 1642, 495, 344, 344];

var sockLiner = [document.getElementById("sock-liner-mask"), -157, 640, 2660, 2660];

// Variables set by user
var layersArray = [
    {
        part: 'outer swoosh',
        mask: outerSwoosh,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'inner swoosh',
        mask: innerSwoosh,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'outer quarter',
        mask: outerQuarter,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'inner quarter',
        mask: innerQuarter,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
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
    },
    {
        part: 'outer sole',
        mask: outerSole,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'inner sole',
        mask: innerSole,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'sole',
        mask: sole,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'toe box',
        mask: toeBox,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'toe cap',
        mask: toeCap,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'lace',
        mask: lace,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'lace cage',
        mask: laceCage,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'lace lock',
        mask: laceLock,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'tongue',
        mask: tongue,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'heel wing',
        mask: heelWing,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'heel tab',
        mask: heelTab,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'sock liner',
        mask: sockLiner,
        isColor: true,
        graphic: 'static.jpg',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    },
    {
        part: 'outer overlay',
        mask: outerSwoosh,
        isColor: false,
        graphic: 'spongebob.png',
        color: 'ffffff',
        x: 0,
        y: 0,
        scale: 500,
        rotation: 0
    }
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
