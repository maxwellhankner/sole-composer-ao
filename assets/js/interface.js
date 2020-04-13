// Selection Banner
var currentPartIndex = 0;

var selectionLabels = ['OUTER SWOOSH', 'INNER SWOOSH', 'OUTER QUARTER', 'INNER QUARTER', 'OUTER HEEL', 'INNER HEEL', 'OUTER SOLE', 'INNER SOLE', 'SOLE', 'TOE BOX', 'TOE CAP', 'LACE', 'LACE CAGE', 'LACE LOCK', 'TONGUE', 'HEEL WING', 'HEEL TAB', 'SOCK LINER'];

var selectionLabel = $('.selection-label');

var selectNext = $('#next-selection');
var selectLast = $('#last-selection');

var backButton = $('.back-to-main');

// Initialize
colorPicker = $('#color-picker');
var currentColor = "#" + layersArray[currentPartIndex].color;
viewToSelectionSpecifications();

selectNext.click(function(){
    if (currentPartIndex === 17) {
        currentPartIndex = 0;
    }
    else {
        currentPartIndex += 1;
    }
    viewToSelectionSpecifications()
    showColorGraphicView()
})

selectLast.click(function(){
    if (currentPartIndex === 0) {
        currentPartIndex = 17;
    }
    else {
        currentPartIndex -= 1;
    }
    viewToSelectionSpecifications()
    showColorGraphicView()
})

backButton.click(function(){
    showColorGraphicView();
})

// Part interface change function
function viewToSelectionSpecifications() {
    // Selection label
    selectionLabel.children().text(selectionLabels[currentPartIndex]);
    // Selection color
    currentColor = "#" + layersArray[currentPartIndex].color;
    // Set color value
    colorPicker.val(currentColor);
}

// Color Graphic Navigation
// Views
var colorGraphicView = $('.color-graphic-selection');
var colorView = $('.color-selection');
var graphicView = $('.graphic-selection');
// Buttons
var selectColor = $('.select-color');
var selectGraphic = $('.select-graphic');

// Initialize
showColorGraphicView();

// Color graphic option view
function showColorGraphicView(){
    colorGraphicView.attr('style', 'display: block;');
    colorView.attr('style', 'display: none;');
    graphicView.attr('style', 'display: none;');
}

// Color view
function showColorSelection(){
    colorGraphicView.attr('style', 'display: none;');
    colorView.attr('style', 'display: block;');
    graphicView.attr('style', 'display: none;');
}
selectColor.click(function(){
    layersArray[currentPartIndex].isColor = true;
    drawLayer(ctxTexture, layersArray[currentPartIndex]);
    showColorSelection();
})

// Graphic view
function showGraphicSelection(){
    colorGraphicView.attr('style', 'display: none;');
    colorView.attr('style', 'display: none;');
    graphicView.attr('style', 'display: block;');
}
selectGraphic.click(function(){
    layersArray[currentPartIndex].isColor = false;
    drawLayer(ctxTexture, layersArray[currentPartIndex]);
    showGraphicSelection();
})

// ----------------------------------------------------------------- Color button listener
var colorButton = $('#color-button');
colorButton.click(function(){
    var currentSelectedColor = document.getElementById('color-picker').value.substring(1);
    layersArray[currentPartIndex].color = currentSelectedColor;
    drawLayer(ctxTexture, layersArray[currentPartIndex]);
})

// ----------------------------------------------------------------- Color button listener

// Select graphic buttons
var graphicButtons = $('.graphic-buttons');
graphicButtons.click(function(event){
    // Move
    if(event.target.id === 'left-button'){
            layersArray[currentPartIndex].x -= 20;
    }
    else if(event.target.id === 'right-button'){
        layersArray[currentPartIndex].x += 20;
    }
    else if(event.target.id === 'up-button'){
        layersArray[currentPartIndex].y -= 20;
    }
    else if(event.target.id === 'down-button'){
        layersArray[currentPartIndex].y += 20;
    }
    // Rotate
    else if(event.target.id === 'rotate-left-button'){
        layersArray[currentPartIndex].rotation -= 2;
    }
    else if(event.target.id === 'rotate-right-button'){
        layersArray[currentPartIndex].rotation += 2;
    }
    // Scale
    else if(event.target.id === 'scale-up-button'){
        layersArray[currentPartIndex].scale += 20;
    }
    else if(event.target.id === 'scale-down-button'){
        layersArray[currentPartIndex].scale -= 20;
    }
    // Reset
    else if(event.target.id === 'reset-button'){
        layersArray[currentPartIndex].x = 0;
        layersArray[currentPartIndex].y = 0;
        layersArray[currentPartIndex].scale = 500;
        layersArray[currentPartIndex].rotation = 0;
    }
    drawLayer(ctxTexture, layersArray[currentPartIndex]);
})