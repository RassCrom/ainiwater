var wms_layers = [];

var lyr_mosaic_19860616_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "mosaic_19860616",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/mosaic_19860616_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5680843.200331, 5397398.742317, 5729777.151392, 5444679.482402]
                            })
                        });
var lyr_mosaic_19880605_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "mosaic_19880605",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/mosaic_19880605_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5680843.200331, 5397398.742317, 5729777.151392, 5444679.482402]
                            })
                        });
var lyr_mosaic_19930721_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "mosaic_19930721",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/mosaic_19930721_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5680843.200331, 5397398.742317, 5729777.151392, 5444679.482402]
                            })
                        });
var lyr_mosaic_19980601_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "mosaic_19980601",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/mosaic_19980601_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5680843.200331, 5397398.742317, 5729777.151392, 5444679.482402]
                            })
                        });
var lyr_mosaic_20010625_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "mosaic_20010625",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/mosaic_20010625_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5680843.200331, 5397398.742317, 5729777.151392, 5444679.482402]
                            })
                        });
var lyr_mosaic_20130610_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "mosaic_20130610",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/mosaic_20130610_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5680843.200331, 5397398.742317, 5729777.151392, 5444679.482402]
                            })
                        });
var lyr_mosaic_20180710_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "mosaic_20180710",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/mosaic_20180710_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5680843.200331, 5397398.742317, 5729777.151392, 5444679.482402]
                            })
                        });
var lyr_mosaic_20230318_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "mosaic_20230318",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/mosaic_20230318_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5680843.200331, 5397398.742317, 5729777.151392, 5444679.482402]
                            })
                        });
var format_water_mask_19860616_2_8 = new ol.format.GeoJSON();
var features_water_mask_19860616_2_8 = format_water_mask_19860616_2_8.readFeatures(json_water_mask_19860616_2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_mask_19860616_2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_mask_19860616_2_8.addFeatures(features_water_mask_19860616_2_8);
var lyr_water_mask_19860616_2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_mask_19860616_2_8, 
                style: style_water_mask_19860616_2_8,
                interactive: true,
                title: '<img src="styles/legend/water_mask_19860616_2_8.png" /> water_mask_19860616_2'
            });
var format_water_mask_19880605_2_9 = new ol.format.GeoJSON();
var features_water_mask_19880605_2_9 = format_water_mask_19880605_2_9.readFeatures(json_water_mask_19880605_2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_mask_19880605_2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_mask_19880605_2_9.addFeatures(features_water_mask_19880605_2_9);
var lyr_water_mask_19880605_2_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_mask_19880605_2_9, 
                style: style_water_mask_19880605_2_9,
                interactive: true,
                title: '<img src="styles/legend/water_mask_19880605_2_9.png" /> water_mask_19880605_2'
            });
var format_water_mask_19930721_2_10 = new ol.format.GeoJSON();
var features_water_mask_19930721_2_10 = format_water_mask_19930721_2_10.readFeatures(json_water_mask_19930721_2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_mask_19930721_2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_mask_19930721_2_10.addFeatures(features_water_mask_19930721_2_10);
var lyr_water_mask_19930721_2_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_mask_19930721_2_10, 
                style: style_water_mask_19930721_2_10,
                interactive: true,
                title: '<img src="styles/legend/water_mask_19930721_2_10.png" /> water_mask_19930721_2'
            });
var format_water_mask_19980601_2_11 = new ol.format.GeoJSON();
var features_water_mask_19980601_2_11 = format_water_mask_19980601_2_11.readFeatures(json_water_mask_19980601_2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_mask_19980601_2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_mask_19980601_2_11.addFeatures(features_water_mask_19980601_2_11);
var lyr_water_mask_19980601_2_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_mask_19980601_2_11, 
                style: style_water_mask_19980601_2_11,
                interactive: true,
                title: '<img src="styles/legend/water_mask_19980601_2_11.png" /> water_mask_19980601_2'
            });
var format_water_mask_20010625_2_12 = new ol.format.GeoJSON();
var features_water_mask_20010625_2_12 = format_water_mask_20010625_2_12.readFeatures(json_water_mask_20010625_2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_mask_20010625_2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_mask_20010625_2_12.addFeatures(features_water_mask_20010625_2_12);
var lyr_water_mask_20010625_2_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_mask_20010625_2_12, 
                style: style_water_mask_20010625_2_12,
                interactive: true,
                title: '<img src="styles/legend/water_mask_20010625_2_12.png" /> water_mask_20010625_2'
            });
var format_water_mask_20130610_13 = new ol.format.GeoJSON();
var features_water_mask_20130610_13 = format_water_mask_20130610_13.readFeatures(json_water_mask_20130610_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_mask_20130610_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_mask_20130610_13.addFeatures(features_water_mask_20130610_13);
var lyr_water_mask_20130610_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_mask_20130610_13, 
                style: style_water_mask_20130610_13,
                interactive: true,
                title: '<img src="styles/legend/water_mask_20130610_13.png" /> water_mask_20130610'
            });
var format_water_mask_20180710_14 = new ol.format.GeoJSON();
var features_water_mask_20180710_14 = format_water_mask_20180710_14.readFeatures(json_water_mask_20180710_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_mask_20180710_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_mask_20180710_14.addFeatures(features_water_mask_20180710_14);
var lyr_water_mask_20180710_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_mask_20180710_14, 
                style: style_water_mask_20180710_14,
                interactive: true,
                title: '<img src="styles/legend/water_mask_20180710_14.png" /> water_mask_20180710'
            });
var format_water_mask_20230318_15 = new ol.format.GeoJSON();
var features_water_mask_20230318_15 = format_water_mask_20230318_15.readFeatures(json_water_mask_20230318_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_mask_20230318_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_mask_20230318_15.addFeatures(features_water_mask_20230318_15);
var lyr_water_mask_20230318_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_water_mask_20230318_15, 
                style: style_water_mask_20230318_15,
                interactive: true,
                title: '<img src="styles/legend/water_mask_20230318_15.png" /> water_mask_20230318'
            });
var group_water = new ol.layer.Group({
                                layers: [lyr_water_mask_19860616_2_8,lyr_water_mask_19880605_2_9,lyr_water_mask_19930721_2_10,lyr_water_mask_19980601_2_11,lyr_water_mask_20010625_2_12,lyr_water_mask_20130610_13,lyr_water_mask_20180710_14,lyr_water_mask_20230318_15,],
                                title: "water"});
var group_mosaics = new ol.layer.Group({
                                layers: [lyr_mosaic_19860616_0,lyr_mosaic_19880605_1,lyr_mosaic_19930721_2,lyr_mosaic_19980601_3,lyr_mosaic_20010625_4,lyr_mosaic_20130610_5,lyr_mosaic_20180710_6,lyr_mosaic_20230318_7,],
                                title: "mosaics"});

lyr_mosaic_19860616_0.setVisible(true);lyr_mosaic_19880605_1.setVisible(true);lyr_mosaic_19930721_2.setVisible(true);lyr_mosaic_19980601_3.setVisible(true);lyr_mosaic_20010625_4.setVisible(true);lyr_mosaic_20130610_5.setVisible(true);lyr_mosaic_20180710_6.setVisible(true);lyr_mosaic_20230318_7.setVisible(true);lyr_water_mask_19860616_2_8.setVisible(true);lyr_water_mask_19880605_2_9.setVisible(true);lyr_water_mask_19930721_2_10.setVisible(true);lyr_water_mask_19980601_2_11.setVisible(true);lyr_water_mask_20010625_2_12.setVisible(true);lyr_water_mask_20130610_13.setVisible(true);lyr_water_mask_20180710_14.setVisible(true);lyr_water_mask_20230318_15.setVisible(true);
var layersList = [group_mosaics,group_water];
lyr_water_mask_19860616_2_8.set('fieldAliases', {'value': 'value', 'area': 'area', });
lyr_water_mask_19880605_2_9.set('fieldAliases', {'value': 'value', 'area': 'area', });
lyr_water_mask_19930721_2_10.set('fieldAliases', {'value': 'value', 'area': 'area', });
lyr_water_mask_19980601_2_11.set('fieldAliases', {'value': 'value', 'area': 'area', });
lyr_water_mask_20010625_2_12.set('fieldAliases', {'value': 'value', 'area': 'area', });
lyr_water_mask_20130610_13.set('fieldAliases', {'value': 'value', 'area': 'area', });
lyr_water_mask_20180710_14.set('fieldAliases', {'value': 'value', 'area': 'area', });
lyr_water_mask_20230318_15.set('fieldAliases', {'value': 'value', 'area': 'area', });
lyr_water_mask_19860616_2_8.set('fieldImages', {'value': '', 'area': '', });
lyr_water_mask_19880605_2_9.set('fieldImages', {'value': '', 'area': '', });
lyr_water_mask_19930721_2_10.set('fieldImages', {'value': '', 'area': '', });
lyr_water_mask_19980601_2_11.set('fieldImages', {'value': '', 'area': '', });
lyr_water_mask_20010625_2_12.set('fieldImages', {'value': '', 'area': '', });
lyr_water_mask_20130610_13.set('fieldImages', {'value': '', 'area': '', });
lyr_water_mask_20180710_14.set('fieldImages', {'value': '', 'area': '', });
lyr_water_mask_20230318_15.set('fieldImages', {'value': '', 'area': '', });
lyr_water_mask_19860616_2_8.set('fieldLabels', {});
lyr_water_mask_19880605_2_9.set('fieldLabels', {});
lyr_water_mask_19930721_2_10.set('fieldLabels', {});
lyr_water_mask_19980601_2_11.set('fieldLabels', {});
lyr_water_mask_20010625_2_12.set('fieldLabels', {});
lyr_water_mask_20130610_13.set('fieldLabels', {});
lyr_water_mask_20180710_14.set('fieldLabels', {});
lyr_water_mask_20230318_15.set('fieldLabels', {});
lyr_water_mask_20230318_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});