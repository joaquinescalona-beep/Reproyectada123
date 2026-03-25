var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_REPROYECTADA1_1 = new ol.format.GeoJSON();
var features_REPROYECTADA1_1 = format_REPROYECTADA1_1.readFeatures(json_REPROYECTADA1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REPROYECTADA1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REPROYECTADA1_1.addFeatures(features_REPROYECTADA1_1);
cluster_REPROYECTADA1_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_REPROYECTADA1_1
});
var lyr_REPROYECTADA1_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_REPROYECTADA1_1, 
                style: style_REPROYECTADA1_1,
                popuplayertitle: 'REPROYECTADA1',
                interactive: true,
                title: '<img src="styles/legend/REPROYECTADA1_1.png" /> REPROYECTADA1'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_REPROYECTADA1_1.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_REPROYECTADA1_1];
lyr_REPROYECTADA1_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_pregunta': 'T_pregunta', 'N_Preg_Inc': 'N_Preg_Inc', 'N_preg_cor': 'N_preg_cor', 'Por_Corr': 'Por_Corr', 'Porc_INCOR': 'Porc_INCOR', 'Porc_total': 'Porc_total', 'Preg_incor': 'Preg_incor', 'video': 'video', 'Nombre': 'Nombre', });
lyr_REPROYECTADA1_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_pregunta': 'TextEdit', 'N_Preg_Inc': 'TextEdit', 'N_preg_cor': 'TextEdit', 'Por_Corr': 'TextEdit', 'Porc_INCOR': 'TextEdit', 'Porc_total': 'TextEdit', 'Preg_incor': 'TextEdit', 'video': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_REPROYECTADA1_1.set('fieldLabels', {'id': 'no label', 'Name': 'header label - always visible', 'T_pregunta': 'inline label - visible with data', 'N_Preg_Inc': 'inline label - always visible', 'N_preg_cor': 'header label - visible with data', 'Por_Corr': 'inline label - always visible', 'Porc_INCOR': 'inline label - always visible', 'Porc_total': 'inline label - always visible', 'Preg_incor': 'inline label - always visible', 'video': 'inline label - always visible', 'Nombre': 'inline label - always visible', });
lyr_REPROYECTADA1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});