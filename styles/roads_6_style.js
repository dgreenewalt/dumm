var size = 0;
var placement = 'line';
function categories_roads_6(feature, value, size, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, offsetX, offsetY) {
                switch(value.toString()) {case '1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, offsetX, offsetY)
    })];
                    break;
case '2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: [10,5], lineCap: 'butt', lineJoin: 'miter', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, offsetX, offsetY)
    })];
                    break;
case '7':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(149,149,149,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, offsetX, offsetY)
    })];
                    break;
case '8':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,153,153,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, offsetX, offsetY)
    })];
                    break;}};

var style_roads_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("cti_type");
    var labelText = "";
    size = 0;
    var labelFont = "15.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "black";
    var bufferColor = "white";
    var bufferWidth = 5;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 1;
    var placement = 'line';
    if (feature.get("RDFLNAME") !== null && resolution > 0 && resolution < 2) {
        labelText = String(feature.get("RDFLNAME"));
    }
    
var style = categories_roads_6(feature, value, size, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, offsetX, offsetY);


    return style;
};
