var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Neighbourhoods_1 = new ol.format.GeoJSON();
var features_Neighbourhoods_1 = format_Neighbourhoods_1.readFeatures(json_Neighbourhoods_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neighbourhoods_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neighbourhoods_1.addFeatures(features_Neighbourhoods_1);
var lyr_Neighbourhoods_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Neighbourhoods_1, 
                style: style_Neighbourhoods_1,
                interactive: true,
    title: 'Neighbourhoods<br />\
    <img src="styles/legend/Neighbourhoods_1_0.png" /> HAZENDAL<br />\
    <img src="styles/legend/Neighbourhoods_1_1.png" /> LOTUS RIVER<br />\
    <img src="styles/legend/Neighbourhoods_1_2.png" /> SALT RIVER<br />\
    <img src="styles/legend/Neighbourhoods_1_3.png" /> STEENBERG<br />'
        });
var format_HealthCareServices_2 = new ol.format.GeoJSON();
var features_HealthCareServices_2 = format_HealthCareServices_2.readFeatures(json_HealthCareServices_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthCareServices_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthCareServices_2.addFeatures(features_HealthCareServices_2);
var lyr_HealthCareServices_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HealthCareServices_2, 
                style: style_HealthCareServices_2,
                interactive: true,
                title: '<img src="styles/legend/HealthCareServices_2.png" /> Health Care Services'
            });
var format_Libraries_3 = new ol.format.GeoJSON();
var features_Libraries_3 = format_Libraries_3.readFeatures(json_Libraries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Libraries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Libraries_3.addFeatures(features_Libraries_3);
var lyr_Libraries_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Libraries_3, 
                style: style_Libraries_3,
                interactive: true,
                title: '<img src="styles/legend/Libraries_3.png" /> Libraries'
            });
var format_Parks_4 = new ol.format.GeoJSON();
var features_Parks_4 = format_Parks_4.readFeatures(json_Parks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parks_4.addFeatures(features_Parks_4);
var lyr_Parks_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parks_4, 
                style: style_Parks_4,
                interactive: true,
    title: 'Parks<br />\
    <img src="styles/legend/Parks_4_0.png" /> Amber Road Park<br />\
    <img src="styles/legend/Parks_4_1.png" /> Autumn Close Park<br />\
    <img src="styles/legend/Parks_4_2.png" /> Ayre Court Park<br />\
    <img src="styles/legend/Parks_4_3.png" /> Bachlaan Park<br />\
    <img src="styles/legend/Parks_4_4.png" /> Blackbird Avenue East Park<br />\
    <img src="styles/legend/Parks_4_5.png" /> Bokmakierie Park<br />\
    <img src="styles/legend/Parks_4_6.png" /> Buck Road Park<br />\
    <img src="styles/legend/Parks_4_7.png" /> Chard Road Park<br />\
    <img src="styles/legend/Parks_4_8.png" /> Choir Street Park<br />\
    <img src="styles/legend/Parks_4_9.png" /> Coniston Avenue Park<br />\
    <img src="styles/legend/Parks_4_10.png" /> Crystal Road Park<br />\
    <img src="styles/legend/Parks_4_11.png" /> Diamond Drive Park<br />\
    <img src="styles/legend/Parks_4_12.png" /> Doreen or Cynthia Road Park<br />\
    <img src="styles/legend/Parks_4_13.png" /> Emerald Crescent Park<br />\
    <img src="styles/legend/Parks_4_14.png" /> First Avenue or Steenbok Road Park<br />\
    <img src="styles/legend/Parks_4_15.png" /> Flower Close Park<br />\
    <img src="styles/legend/Parks_4_16.png" /> Fontein Road Park<br />\
    <img src="styles/legend/Parks_4_17.png" /> Frank Road Park<br />\
    <img src="styles/legend/Parks_4_18.png" /> Galilee Close Park<br />\
    <img src="styles/legend/Parks_4_19.png" /> Gemsbok Park<br />\
    <img src="styles/legend/Parks_4_20.png" /> Gemsbok Road or Third Avenue Park<br />\
    <img src="styles/legend/Parks_4_21.png" /> Gluck Street Park<br />\
    <img src="styles/legend/Parks_4_22.png" /> Heron Road Park<br />\
    <img src="styles/legend/Parks_4_23.png" /> Hopkins Road Park<br />\
    <img src="styles/legend/Parks_4_24.png" /> Ibis Way Park<br />\
    <img src="styles/legend/Parks_4_25.png" /> Jonathon Road Park<br />\
    <img src="styles/legend/Parks_4_26.png" /> Kevin or Justin Way Park<br />\
    <img src="styles/legend/Parks_4_27.png" /> Klavier Street Park<br />\
    <img src="styles/legend/Parks_4_28.png" /> Kudu Street Park<br />\
    <img src="styles/legend/Parks_4_29.png" /> Mallow Street Park<br />\
    <img src="styles/legend/Parks_4_30.png" /> Melody - Klarinetlaan Park<br />\
    <img src="styles/legend/Parks_4_31.png" /> Montague\'s Gift Road Park<br />\
    <img src="styles/legend/Parks_4_32.png" /> Muritz Road Park<br />\
    <img src="styles/legend/Parks_4_33.png" /> Nita Street Park<br />\
    <img src="styles/legend/Parks_4_34.png" /> North Close Park<br />\
    <img src="styles/legend/Parks_4_35.png" /> Olympic Avenue Park<br />\
    <img src="styles/legend/Parks_4_36.png" /> Opal Lane Park<br />\
    <img src="styles/legend/Parks_4_37.png" /> Oribi Avenue Park<br />\
    <img src="styles/legend/Parks_4_38.png" /> Queens Park<br />\
    <img src="styles/legend/Parks_4_39.png" /> Rietbok Road Park<br />\
    <img src="styles/legend/Parks_4_40.png" /> Rochester Park 1<br />\
    <img src="styles/legend/Parks_4_41.png" /> Selbourne Road Dog Park<br />\
    <img src="styles/legend/Parks_4_42.png" /> Shelley Road Park<br />\
    <img src="styles/legend/Parks_4_43.png" /> Sibelius Avenue Park<br />\
    <img src="styles/legend/Parks_4_44.png" /> Spencer Street Park<br />\
    <img src="styles/legend/Parks_4_45.png" /> Stanley Road Park<br />\
    <img src="styles/legend/Parks_4_46.png" /> Strausslaan Park<br />\
    <img src="styles/legend/Parks_4_47.png" /> Symphony Park 1<br />\
    <img src="styles/legend/Parks_4_48.png" /> Symphony Park 2<br />\
    <img src="styles/legend/Parks_4_49.png" /> Symphony Park 3<br />\
    <img src="styles/legend/Parks_4_50.png" /> Third or Eland Avenue Park<br />\
    <img src="styles/legend/Parks_4_51.png" /> Trompet - Bassoon Street Park<br />\
    <img src="styles/legend/Parks_4_52.png" /> Uithof Street Park<br />\
    <img src="styles/legend/Parks_4_53.png" /> Woodwind Circle Park<br />\
    <img src="styles/legend/Parks_4_54.png" /> Zeekoe or 9Th Ave Park<br />\
    <img src="styles/legend/Parks_4_55.png" /> Zircon Circle Park<br />'
        });
var format_PlacesOfWorship_5 = new ol.format.GeoJSON();
var features_PlacesOfWorship_5 = format_PlacesOfWorship_5.readFeatures(json_PlacesOfWorship_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlacesOfWorship_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlacesOfWorship_5.addFeatures(features_PlacesOfWorship_5);
var lyr_PlacesOfWorship_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PlacesOfWorship_5, 
                style: style_PlacesOfWorship_5,
                interactive: true,
                title: '<img src="styles/legend/PlacesOfWorship_5.png" /> Places Of Worship'
            });
var format_Schools_6 = new ol.format.GeoJSON();
var features_Schools_6 = format_Schools_6.readFeatures(json_Schools_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_6.addFeatures(features_Schools_6);
var lyr_Schools_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Schools_6, 
                style: style_Schools_6,
                interactive: true,
                title: '<img src="styles/legend/Schools_6.png" /> Schools'
            });
var format_TaxiRoutes_7 = new ol.format.GeoJSON();
var features_TaxiRoutes_7 = format_TaxiRoutes_7.readFeatures(json_TaxiRoutes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TaxiRoutes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TaxiRoutes_7.addFeatures(features_TaxiRoutes_7);
var lyr_TaxiRoutes_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TaxiRoutes_7, 
                style: style_TaxiRoutes_7,
                interactive: true,
                title: '<img src="styles/legend/TaxiRoutes_7.png" /> Taxi Routes'
            });
var format_Rivers_8 = new ol.format.GeoJSON();
var features_Rivers_8 = format_Rivers_8.readFeatures(json_Rivers_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rivers_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_8.addFeatures(features_Rivers_8);
var lyr_Rivers_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rivers_8, 
                style: style_Rivers_8,
                interactive: true,
    title: 'Rivers<br />\
    <img src="styles/legend/Rivers_8_0.png" /> BIG LOTUS RIVER CANAL<br />\
    <img src="styles/legend/Rivers_8_1.png" /> BOKMAKIERIE<br />\
    <img src="styles/legend/Rivers_8_2.png" /> KEYSERS RIVER<br />\
    <img src="styles/legend/Rivers_8_3.png" /> LITTLE LOTUS RIVER CANAL<br />\
    <img src="styles/legend/Rivers_8_4.png" /> VYGEKRAAL<br />\
    <img src="styles/legend/Rivers_8_5.png" /> WESTLAKE RIVER<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Neighbourhoods_1.setVisible(true);lyr_HealthCareServices_2.setVisible(true);lyr_Libraries_3.setVisible(true);lyr_Parks_4.setVisible(true);lyr_PlacesOfWorship_5.setVisible(true);lyr_Schools_6.setVisible(true);lyr_TaxiRoutes_7.setVisible(true);lyr_Rivers_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Neighbourhoods_1,lyr_HealthCareServices_2,lyr_Libraries_3,lyr_Parks_4,lyr_PlacesOfWorship_5,lyr_Schools_6,lyr_TaxiRoutes_7,lyr_Rivers_8];
lyr_Neighbourhoods_1.set('fieldAliases', {'id': 'id', 'ofc_sbrb_n': 'ofc_sbrb_n', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_HealthCareServices_2.set('fieldAliases', {'adr': 'adr', 'name': 'name', });
lyr_Libraries_3.set('fieldAliases', {'ctgy': 'ctgy', 'name': 'name', 'area_sqm': 'area_sqm', });
lyr_Parks_4.set('fieldAliases', {'park_name': 'park_name', 'play_eqpm': 'play_eqpm', 'shape_area': 'shape_area', });
lyr_PlacesOfWorship_5.set('fieldAliases', {'name': 'name', 'rlgn_type': 'rlgn_type', 'bldg_type': 'bldg_type', 'adr_sbrb': 'adr_sbrb', });
lyr_Schools_6.set('fieldAliases', {'ecd_name': 'ecd_name', 'adrs': 'adrs', 'sbrb': 'sbrb', 'sts': 'sts', });
lyr_TaxiRoutes_7.set('fieldAliases', {'orgn': 'orgn', 'dstn': 'dstn', 'shape_leng': 'shape_leng', });
lyr_Rivers_8.set('fieldAliases', {'rvr_name': 'rvr_name', 'owc_dscr': 'owc_dscr', 'sap_descr': 'sap_descr', 'mnt_auth': 'mnt_auth', 'shape_leng': 'shape_leng', });
lyr_Neighbourhoods_1.set('fieldImages', {'id': 'TextEdit', 'ofc_sbrb_n': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_HealthCareServices_2.set('fieldImages', {'adr': 'TextEdit', 'name': 'TextEdit', });
lyr_Libraries_3.set('fieldImages', {'ctgy': 'TextEdit', 'name': 'TextEdit', 'area_sqm': 'TextEdit', });
lyr_Parks_4.set('fieldImages', {'park_name': 'TextEdit', 'play_eqpm': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_PlacesOfWorship_5.set('fieldImages', {'name': 'TextEdit', 'rlgn_type': 'TextEdit', 'bldg_type': 'TextEdit', 'adr_sbrb': 'TextEdit', });
lyr_Schools_6.set('fieldImages', {'ecd_name': 'TextEdit', 'adrs': 'TextEdit', 'sbrb': 'TextEdit', 'sts': 'TextEdit', });
lyr_TaxiRoutes_7.set('fieldImages', {'orgn': 'TextEdit', 'dstn': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Rivers_8.set('fieldImages', {'rvr_name': 'TextEdit', 'owc_dscr': 'TextEdit', 'sap_descr': 'TextEdit', 'mnt_auth': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Neighbourhoods_1.set('fieldLabels', {'id': 'inline label', 'ofc_sbrb_n': 'inline label', 'shape_leng': 'inline label', 'shape_area': 'inline label', });
lyr_HealthCareServices_2.set('fieldLabels', {'adr': 'inline label', 'name': 'inline label', });
lyr_Libraries_3.set('fieldLabels', {'ctgy': 'inline label', 'name': 'inline label', 'area_sqm': 'inline label', });
lyr_Parks_4.set('fieldLabels', {'park_name': 'inline label', 'play_eqpm': 'inline label', 'shape_area': 'inline label', });
lyr_PlacesOfWorship_5.set('fieldLabels', {'name': 'inline label', 'rlgn_type': 'inline label', 'bldg_type': 'inline label', 'adr_sbrb': 'inline label', });
lyr_Schools_6.set('fieldLabels', {'ecd_name': 'inline label', 'adrs': 'inline label', 'sbrb': 'inline label', 'sts': 'inline label', });
lyr_TaxiRoutes_7.set('fieldLabels', {'orgn': 'inline label', 'dstn': 'inline label', 'shape_leng': 'inline label', });
lyr_Rivers_8.set('fieldLabels', {'rvr_name': 'inline label', 'owc_dscr': 'inline label', 'sap_descr': 'inline label', 'mnt_auth': 'inline label', 'shape_leng': 'inline label', });
lyr_Rivers_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});