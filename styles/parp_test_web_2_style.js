var size = 0;
var placement = 'point';

var style_parp_test_web_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Arial Black\', sans-serif";
    var labelFill = "#f43d00";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("PARCNUM") !== null) {
        labelText = String(feature.get("PARCNUM"));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,227,0.10196078431372549)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
