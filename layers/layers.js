var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CommunesdesunionslocalesCGTdansleMorbihan_2 = new ol.format.GeoJSON();
var features_CommunesdesunionslocalesCGTdansleMorbihan_2 = format_CommunesdesunionslocalesCGTdansleMorbihan_2.readFeatures(json_CommunesdesunionslocalesCGTdansleMorbihan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesdesunionslocalesCGTdansleMorbihan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesdesunionslocalesCGTdansleMorbihan_2.addFeatures(features_CommunesdesunionslocalesCGTdansleMorbihan_2);
var lyr_CommunesdesunionslocalesCGTdansleMorbihan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CommunesdesunionslocalesCGTdansleMorbihan_2, 
                style: style_CommunesdesunionslocalesCGTdansleMorbihan_2,
                interactive: true,
    title: 'Communes des unions locales CGT dans le Morbihan<br />\
    <img src="styles/legend/CommunesdesunionslocalesCGTdansleMorbihan_2_0.png" /> Communes de l\'UL d\'Auray<br />\
    <img src="styles/legend/CommunesdesunionslocalesCGTdansleMorbihan_2_1.png" /> Communes de l\'UL de Baud-Locminé<br />\
    <img src="styles/legend/CommunesdesunionslocalesCGTdansleMorbihan_2_2.png" /> Communes de l\'UL de Belle-Ile<br />\
    <img src="styles/legend/CommunesdesunionslocalesCGTdansleMorbihan_2_3.png" /> Communes de l\'UL du Faouët<br />\
    <img src="styles/legend/CommunesdesunionslocalesCGTdansleMorbihan_2_4.png" /> Communes de l\'UL de Lanester<br />\
    <img src="styles/legend/CommunesdesunionslocalesCGTdansleMorbihan_2_5.png" /> Communes de l\'UL de Lorient<br />\
    <img src="styles/legend/CommunesdesunionslocalesCGTdansleMorbihan_2_6.png" /> Communes de l\'UL de Ploermel<br />\
    <img src="styles/legend/CommunesdesunionslocalesCGTdansleMorbihan_2_7.png" /> Communes de l\'UL de Pontivy<br />\
    <img src="styles/legend/CommunesdesunionslocalesCGTdansleMorbihan_2_8.png" /> Communes de l\'UL de Redon<br />\
    <img src="styles/legend/CommunesdesunionslocalesCGTdansleMorbihan_2_9.png" /> Communes de l\'UL de Vannes<br />'
        });
var format_UnionsLocalesdelaCGTdansleMorbihan_3 = new ol.format.GeoJSON();
var features_UnionsLocalesdelaCGTdansleMorbihan_3 = format_UnionsLocalesdelaCGTdansleMorbihan_3.readFeatures(json_UnionsLocalesdelaCGTdansleMorbihan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnionsLocalesdelaCGTdansleMorbihan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnionsLocalesdelaCGTdansleMorbihan_3.addFeatures(features_UnionsLocalesdelaCGTdansleMorbihan_3);
var lyr_UnionsLocalesdelaCGTdansleMorbihan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UnionsLocalesdelaCGTdansleMorbihan_3, 
                style: style_UnionsLocalesdelaCGTdansleMorbihan_3,
                interactive: false,
    title: 'Unions Locales de la CGT dans le Morbihan<br />\
    <img src="styles/legend/UnionsLocalesdelaCGTdansleMorbihan_3_0.png" /> UL d\'Auray<br />\
    <img src="styles/legend/UnionsLocalesdelaCGTdansleMorbihan_3_1.png" /> UL de Baud-Locminé<br />\
    <img src="styles/legend/UnionsLocalesdelaCGTdansleMorbihan_3_2.png" /> UL de Belle-Ile<br />\
    <img src="styles/legend/UnionsLocalesdelaCGTdansleMorbihan_3_3.png" /> UL du Faouët<br />\
    <img src="styles/legend/UnionsLocalesdelaCGTdansleMorbihan_3_4.png" /> UL de Lanester<br />\
    <img src="styles/legend/UnionsLocalesdelaCGTdansleMorbihan_3_5.png" /> UL de Lorient<br />\
    <img src="styles/legend/UnionsLocalesdelaCGTdansleMorbihan_3_6.png" /> UL de Ploermel<br />\
    <img src="styles/legend/UnionsLocalesdelaCGTdansleMorbihan_3_7.png" /> UL de Pontivy<br />\
    <img src="styles/legend/UnionsLocalesdelaCGTdansleMorbihan_3_8.png" /> UL de Redon<br />\
    <img src="styles/legend/UnionsLocalesdelaCGTdansleMorbihan_3_9.png" /> UL de Vannes<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_CommunesdesunionslocalesCGTdansleMorbihan_2.setVisible(true);lyr_UnionsLocalesdelaCGTdansleMorbihan_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_CommunesdesunionslocalesCGTdansleMorbihan_2,lyr_UnionsLocalesdelaCGTdansleMorbihan_3];
lyr_CommunesdesunionslocalesCGTdansleMorbihan_2.set('fieldAliases', {'code_insee': 'code_insee', 'départeme': 'départeme', 'population': 'population', 'surface_en': 'surface_en', 'date_modif': 'date_modif', 'code_posta': 'code_posta', 'nom_offici': 'nom_offici', 'code_siren': 'code_siren', 'UL_CGT': 'UL_CGT', });
lyr_UnionsLocalesdelaCGTdansleMorbihan_3.set('fieldAliases', {'id': 'id', 'UL_CGT': 'UL_CGT', });
lyr_CommunesdesunionslocalesCGTdansleMorbihan_2.set('fieldImages', {'code_insee': 'TextEdit', 'départeme': 'TextEdit', 'population': 'TextEdit', 'surface_en': 'TextEdit', 'date_modif': 'TextEdit', 'code_posta': 'TextEdit', 'nom_offici': 'TextEdit', 'code_siren': 'TextEdit', 'UL_CGT': 'TextEdit', });
lyr_UnionsLocalesdelaCGTdansleMorbihan_3.set('fieldImages', {'id': 'TextEdit', 'UL_CGT': 'TextEdit', });
lyr_CommunesdesunionslocalesCGTdansleMorbihan_2.set('fieldLabels', {'code_insee': 'no label', 'départeme': 'no label', 'population': 'no label', 'surface_en': 'no label', 'date_modif': 'no label', 'code_posta': 'no label', 'nom_offici': 'inline label', 'code_siren': 'no label', 'UL_CGT': 'header label', });
lyr_UnionsLocalesdelaCGTdansleMorbihan_3.set('fieldLabels', {'id': 'no label', 'UL_CGT': 'no label', });
lyr_UnionsLocalesdelaCGTdansleMorbihan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});