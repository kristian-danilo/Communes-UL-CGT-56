var size = 0;
var placement = 'point';
function categories_UnionsLocalesdelaCGTdansleMorbihan_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Auray':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(212,134,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Baud-Locminé':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(167,69,99,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Belle-Ile':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(242,184,9,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Le Faouët':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(44,83,120,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lanester':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(208,208,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lorient':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(144,133,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ploermel':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,191,191,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pontivy':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(159,133,58,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Redon':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(214,171,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vannes':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(176,206,78,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_UnionsLocalesdelaCGTdansleMorbihan_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("UL_CGT");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("UL_CGT") !== null) {
        labelText = String(feature.get("UL_CGT"));
    }
    
var style = categories_UnionsLocalesdelaCGTdansleMorbihan_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
