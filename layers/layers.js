ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32145").setExtent([481744.639141, 41358.366788, 501912.005379, 54056.843837]);
var wms_layers = [];

var lyr_ArealImagery_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.vcgi.vermont.gov/arcgis/services/EGC_services/IMG_VCGI_CLR_SP_CACHE/ImageServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Areal Imagery",
                            opacity: 1.000000,
                            
maxResolution:7.00111653806549,

                            
                          });
              wms_layers.push([lyr_ArealImagery_0, 0]);
var lyr_Hilshade_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.vcgi.vermont.gov/arcgis/services/EGC_services/IMG_VCGI_LIDARHILLSHD_SP_CACHE_v1/ImageServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Hilshade",
                            opacity: 0.500000,
                            
maxResolution:7.00111653806549,

                            
                          });
              wms_layers.push([lyr_Hilshade_1, 0]);
var format_parp_test_web_2 = new ol.format.GeoJSON();
var features_parp_test_web_2 = format_parp_test_web_2.readFeatures(json_parp_test_web_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32145'});
var jsonSource_parp_test_web_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parp_test_web_2.addFeatures(features_parp_test_web_2);
var lyr_parp_test_web_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parp_test_web_2, 
                style: style_parp_test_web_2,
                interactive: true,
                title: '<img src="styles/legend/parp_test_web_2.png" /> parp_test_web'
            });
var format_sw_poly_3 = new ol.format.GeoJSON();
var features_sw_poly_3 = format_sw_poly_3.readFeatures(json_sw_poly_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32145'});
var jsonSource_sw_poly_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sw_poly_3.addFeatures(features_sw_poly_3);
var lyr_sw_poly_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sw_poly_3, 
                style: style_sw_poly_3,
                interactive: false,
                title: '<img src="styles/legend/sw_poly_3.png" /> sw_poly'
            });
var format_sw_line_lidar_2020_4 = new ol.format.GeoJSON();
var features_sw_line_lidar_2020_4 = format_sw_line_lidar_2020_4.readFeatures(json_sw_line_lidar_2020_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32145'});
var jsonSource_sw_line_lidar_2020_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sw_line_lidar_2020_4.addFeatures(features_sw_line_lidar_2020_4);
var lyr_sw_line_lidar_2020_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sw_line_lidar_2020_4, 
                style: style_sw_line_lidar_2020_4,
                interactive: false,
                title: '<img src="styles/legend/sw_line_lidar_2020_4.png" /> sw_line_lidar_2020'
            });
var format_parl_2020_5 = new ol.format.GeoJSON();
var features_parl_2020_5 = format_parl_2020_5.readFeatures(json_parl_2020_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32145'});
var jsonSource_parl_2020_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parl_2020_5.addFeatures(features_parl_2020_5);
var lyr_parl_2020_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parl_2020_5, 
                style: style_parl_2020_5,
                interactive: false,
                title: 'parl_2020'
            });
var format_roads_6 = new ol.format.GeoJSON();
var features_roads_6 = format_roads_6.readFeatures(json_roads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32145'});
var jsonSource_roads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_6.addFeatures(features_roads_6);
var lyr_roads_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_6, 
                style: style_roads_6,
                interactive: false,
    title: 'roads<br />\
    <img src="styles/legend/roads_6_0.png" /> Paved<br />\
    <img src="styles/legend/roads_6_1.png" /> Dirt<br />\
    <img src="styles/legend/roads_6_2.png" /> Trail<br />\
    <img src="styles/legend/roads_6_3.png" /> Private<br />'
        });
var format_e911BuildingsforTown_7 = new ol.format.GeoJSON();
var features_e911BuildingsforTown_7 = format_e911BuildingsforTown_7.readFeatures(json_e911BuildingsforTown_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32145'});
var jsonSource_e911BuildingsforTown_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_e911BuildingsforTown_7.addFeatures(features_e911BuildingsforTown_7);
var lyr_e911BuildingsforTown_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_e911BuildingsforTown_7, 
                style: style_e911BuildingsforTown_7,
                interactive: false,
    title: 'e911 Buildings for Town<br />\
    <img src="styles/legend/e911BuildingsforTown_7_0.png" /> 0<br />\
    <img src="styles/legend/e911BuildingsforTown_7_1.png" /> 1<br />'
        });
var format_tz2020_8 = new ol.format.GeoJSON();
var features_tz2020_8 = format_tz2020_8.readFeatures(json_tz2020_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32145'});
var jsonSource_tz2020_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tz2020_8.addFeatures(features_tz2020_8);
var lyr_tz2020_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tz2020_8, 
                style: style_tz2020_8,
                interactive: false,
    title: 'tz2020<br />\
    <img src="styles/legend/tz2020_8_0.png" /> LAND HOOK<br />\
    <img src="styles/legend/tz2020_8_1.png" /> LEADERLINE<br />\
    <img src="styles/legend/tz2020_8_2.png" /> ORIGINAL LINE<br />\
    <img src="styles/legend/tz2020_8_3.png" /> PRIVATE ROW<br />\
    <img src="styles/legend/tz2020_8_4.png" /> ROAD CENTERLINE<br />\
    <img src="styles/legend/tz2020_8_5.png" /> UTILITY EASEMENT<br />\
    <img src="styles/legend/tz2020_8_6.png" /> Subdivision<br />\
    <img src="styles/legend/tz2020_8_7.png" /> TB OUT<br />'
        });

lyr_ArealImagery_0.setVisible(false);lyr_Hilshade_1.setVisible(false);lyr_parp_test_web_2.setVisible(true);lyr_sw_poly_3.setVisible(true);lyr_sw_line_lidar_2020_4.setVisible(true);lyr_parl_2020_5.setVisible(true);lyr_roads_6.setVisible(true);lyr_e911BuildingsforTown_7.setVisible(true);lyr_tz2020_8.setVisible(true);
var layersList = [lyr_ArealImagery_0,lyr_Hilshade_1,lyr_parp_test_web_2,lyr_sw_poly_3,lyr_sw_line_lidar_2020_4,lyr_parl_2020_5,lyr_roads_6,lyr_e911BuildingsforTown_7,lyr_tz2020_8];
lyr_parp_test_web_2.set('fieldAliases', {'PARCNUM': 'PARCNUM', 'e911': 'e911', 'P_NAME1': 'P_NAME1', 'P_NAME2': 'P_NAME2', 'P_ADDR_A': 'P_ADDR_A', 'P_ADDR_B': 'P_ADDR_B', 'csz': 'csz', 'P_LOCA_B': 'P_LOCA_B', 'P_LOCA_C': 'P_LOCA_C', 'P_PDESC': 'P_PDESC', 'surv': 'surv', 'P_PRICE': 'P_PRICE', 'P_BOOK': 'P_BOOK', 'P_PAGE': 'P_PAGE', 'P_RECORDED': 'P_RECORDED', 'P_XFERID': 'P_XFERID', 'P_SALEDATE': 'P_SALEDATE', 'P_STATUS': 'P_STATUS', 'P_SPAN': 'P_SPAN', 'P_WOOD': 'P_WOOD', 'P_SITE': 'P_SITE', 'P_TOTL': 'P_TOTL', 'P_REAL': 'P_REAL', 'P_LAND': 'P_LAND', 'P_BUILDING': 'P_BUILDING', 'P_LUACRES': 'P_LUACRES', 'P_LANDUSE': 'P_LANDUSE', 'P_GRNDLST': 'P_GRNDLST', 'P_PREAL': 'P_PREAL', 'P_TAXAMT': 'P_TAXAMT', 'search': 'search', });
lyr_sw_poly_3.set('fieldAliases', {'COMID': 'COMID', 'GNIS_NAME': 'GNIS_NAME', 'AREASQKM': 'AREASQKM', 'REACHCODE': 'REACHCODE', 'FTYPE': 'FTYPE', 'SHAPE_area': 'SHAPE_area', 'SHAPE_len': 'SHAPE_len', });
lyr_sw_line_lidar_2020_4.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'stream_typ': 'stream_typ', 'type_code': 'type_code', 'network': 'network', });
lyr_parl_2020_5.set('fieldAliases', {'DIM': 'DIM', 'DIR': 'DIR', 'PLTYPE': 'PLTYPE', 'SURVACC': 'SURVACC', 'SOURCETYPE': 'SOURCETYPE', 'EDITDATE': 'EDITDATE', 'SOURCEDATE': 'SOURCEDATE', 'EDITMETHOD': 'EDITMETHOD', 'LENGTH': 'LENGTH', 'DECVAL': 'DECVAL', 'SOURCENAME': 'SOURCENAME', 'JOINT': 'JOINT', });
lyr_roads_6.set('fieldAliases', {'RDFLNAME': 'RDFLNAME', 'cti_type': 'cti_type', 'town_road': 'town_road', });
lyr_e911BuildingsforTown_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SEGMENTID': 'SEGMENTID', 'ESITEID': 'ESITEID', 'GEONAMEID': 'GEONAMEID', 'PD': 'PD', 'PT': 'PT', 'SN': 'SN', 'ST': 'ST', 'SD': 'SD', 'PRIMARYNAM': 'PRIMARYNAM', 'ALIAS1': 'ALIAS1', 'ALIAS2': 'ALIAS2', 'ALIAS3': 'ALIAS3', 'ALIAS4': 'ALIAS4', 'ALIAS5': 'ALIAS5', 'CALCADDRES': 'CALCADDRES', 'GFADDRESS': 'GFADDRESS', 'PRIMARYADD': 'PRIMARYADD', 'SITETYPE': 'SITETYPE', 'COMMENTS': 'COMMENTS', 'LR': 'LR', 'TOWNNAME': 'TOWNNAME', 'MCODE': 'MCODE', 'ESN': 'ESN', 'ZIP': 'ZIP', 'PARCELNUM': 'PARCELNUM', 'GPSFLG': 'GPSFLG', 'GPSX': 'GPSX', 'GPSY': 'GPSY', 'MAPYEAR': 'MAPYEAR', 'UPDATESOUR': 'UPDATESOUR', 'UPDATEDATE': 'UPDATEDATE', 'STATE': 'STATE', 'FIPS8': 'FIPS8', 'SPAN': 'SPAN', 'SUBTYPE': 'SUBTYPE', 'GlobalID_1': 'GlobalID_1', 'UNITCOUNT': 'UNITCOUNT', 'PRIMARYA_1': 'PRIMARYA_1', 'PRIMARYA_2': 'PRIMARYA_2', 'SITETYPE_M': 'SITETYPE_M', 'SITETYPE_1': 'SITETYPE_1', 'SITETYPE_2': 'SITETYPE_2', 'SITETYPE_3': 'SITETYPE_3', 'SITETYPE_4': 'SITETYPE_4', 'COUNTY': 'COUNTY', 'COUNTRY': 'COUNTRY', 'SOURCEOFDA': 'SOURCEOFDA', 'DRIVEWAYID': 'DRIVEWAYID', 'ESZ': 'ESZ', 'HOUSE_NUMB': 'HOUSE_NUMB', 'HOUSE_NU_1': 'HOUSE_NU_1', 'HOUSE_NU_2': 'HOUSE_NU_2', 'GC_EXCEPTI': 'GC_EXCEPTI', 'FIPS': 'FIPS', 'cti_house': 'cti_house', });
lyr_tz2020_8.set('fieldAliases', {'TAXLINE_ID': 'TAXLINE_ID', 'SHEET_ID': 'SHEET_ID', 'SHEET': 'SHEET', 'TAXMAPZ_ID': 'TAXMAPZ_ID', 'TYPE': 'TYPE', 'DIM': 'DIM', 'DIR': 'DIR', 'EDITDATE': 'EDITDATE', 'SOURCEDATE': 'SOURCEDATE', });
lyr_parp_test_web_2.set('fieldImages', {'PARCNUM': 'TextEdit', 'e911': 'TextEdit', 'P_NAME1': 'TextEdit', 'P_NAME2': 'TextEdit', 'P_ADDR_A': 'TextEdit', 'P_ADDR_B': 'TextEdit', 'csz': 'TextEdit', 'P_LOCA_B': 'TextEdit', 'P_LOCA_C': 'TextEdit', 'P_PDESC': 'TextEdit', 'surv': 'TextEdit', 'P_PRICE': 'TextEdit', 'P_BOOK': 'TextEdit', 'P_PAGE': 'TextEdit', 'P_RECORDED': 'DateTime', 'P_XFERID': 'TextEdit', 'P_SALEDATE': 'DateTime', 'P_STATUS': 'TextEdit', 'P_SPAN': 'TextEdit', 'P_WOOD': 'TextEdit', 'P_SITE': 'TextEdit', 'P_TOTL': 'TextEdit', 'P_REAL': 'TextEdit', 'P_LAND': 'TextEdit', 'P_BUILDING': 'Range', 'P_LUACRES': 'TextEdit', 'P_LANDUSE': 'TextEdit', 'P_GRNDLST': 'TextEdit', 'P_PREAL': 'TextEdit', 'P_TAXAMT': 'TextEdit', 'search': 'TextEdit', });
lyr_sw_poly_3.set('fieldImages', {'COMID': 'TextEdit', 'GNIS_NAME': 'TextEdit', 'AREASQKM': 'TextEdit', 'REACHCODE': 'TextEdit', 'FTYPE': 'TextEdit', 'SHAPE_area': 'TextEdit', 'SHAPE_len': 'TextEdit', });
lyr_sw_line_lidar_2020_4.set('fieldImages', {'fid': 'TextEdit', 'cat': 'TextEdit', 'stream_typ': 'TextEdit', 'type_code': 'TextEdit', 'network': 'TextEdit', });
lyr_parl_2020_5.set('fieldImages', {'DIM': 'TextEdit', 'DIR': 'TextEdit', 'PLTYPE': 'TextEdit', 'SURVACC': 'TextEdit', 'SOURCETYPE': 'TextEdit', 'EDITDATE': 'TextEdit', 'SOURCEDATE': 'TextEdit', 'EDITMETHOD': 'TextEdit', 'LENGTH': 'TextEdit', 'DECVAL': 'TextEdit', 'SOURCENAME': 'TextEdit', 'JOINT': 'TextEdit', });
lyr_roads_6.set('fieldImages', {'RDFLNAME': 'TextEdit', 'cti_type': 'Range', 'town_road': 'Range', });
lyr_e911BuildingsforTown_7.set('fieldImages', {'OBJECTID': 'Range', 'SEGMENTID': 'Range', 'ESITEID': 'Range', 'GEONAMEID': 'Range', 'PD': 'TextEdit', 'PT': 'TextEdit', 'SN': 'TextEdit', 'ST': 'TextEdit', 'SD': 'TextEdit', 'PRIMARYNAM': 'TextEdit', 'ALIAS1': 'TextEdit', 'ALIAS2': 'TextEdit', 'ALIAS3': 'TextEdit', 'ALIAS4': 'TextEdit', 'ALIAS5': 'TextEdit', 'CALCADDRES': 'Range', 'GFADDRESS': 'Range', 'PRIMARYADD': 'TextEdit', 'SITETYPE': 'TextEdit', 'COMMENTS': 'TextEdit', 'LR': 'TextEdit', 'TOWNNAME': 'TextEdit', 'MCODE': 'Range', 'ESN': 'Range', 'ZIP': 'TextEdit', 'PARCELNUM': 'TextEdit', 'GPSFLG': 'TextEdit', 'GPSX': 'TextEdit', 'GPSY': 'TextEdit', 'MAPYEAR': 'DateTime', 'UPDATESOUR': 'TextEdit', 'UPDATEDATE': 'DateTime', 'STATE': 'TextEdit', 'FIPS8': 'Range', 'SPAN': 'TextEdit', 'SUBTYPE': 'Range', 'GlobalID_1': 'TextEdit', 'UNITCOUNT': 'Range', 'PRIMARYA_1': 'TextEdit', 'PRIMARYA_2': 'TextEdit', 'SITETYPE_M': 'TextEdit', 'SITETYPE_1': 'TextEdit', 'SITETYPE_2': 'TextEdit', 'SITETYPE_3': 'TextEdit', 'SITETYPE_4': 'TextEdit', 'COUNTY': 'TextEdit', 'COUNTRY': 'TextEdit', 'SOURCEOFDA': 'TextEdit', 'DRIVEWAYID': 'Range', 'ESZ': 'TextEdit', 'HOUSE_NUMB': 'Range', 'HOUSE_NU_1': 'TextEdit', 'HOUSE_NU_2': 'TextEdit', 'GC_EXCEPTI': 'TextEdit', 'FIPS': 'TextEdit', 'cti_house': 'Range', });
lyr_tz2020_8.set('fieldImages', {'TAXLINE_ID': 'Range', 'SHEET_ID': 'Range', 'SHEET': 'TextEdit', 'TAXMAPZ_ID': 'Range', 'TYPE': 'TextEdit', 'DIM': 'TextEdit', 'DIR': 'TextEdit', 'EDITDATE': 'TextEdit', 'SOURCEDATE': 'TextEdit', });
lyr_parp_test_web_2.set('fieldLabels', {'PARCNUM': 'no label', 'e911': 'no label', 'P_NAME1': 'no label', 'P_NAME2': 'no label', 'P_ADDR_A': 'no label', 'P_ADDR_B': 'no label', 'csz': 'no label', 'P_LOCA_B': 'no label', 'P_LOCA_C': 'no label', 'P_PDESC': 'no label', 'surv': 'no label', 'P_PRICE': 'no label', 'P_BOOK': 'no label', 'P_PAGE': 'no label', 'P_RECORDED': 'no label', 'P_XFERID': 'no label', 'P_SALEDATE': 'no label', 'P_STATUS': 'no label', 'P_SPAN': 'no label', 'P_WOOD': 'no label', 'P_SITE': 'no label', 'P_TOTL': 'no label', 'P_REAL': 'no label', 'P_LAND': 'no label', 'P_BUILDING': 'no label', 'P_LUACRES': 'no label', 'P_LANDUSE': 'no label', 'P_GRNDLST': 'no label', 'P_PREAL': 'no label', 'P_TAXAMT': 'no label', 'search': 'no label', });
lyr_sw_poly_3.set('fieldLabels', {'COMID': 'no label', 'GNIS_NAME': 'no label', 'AREASQKM': 'no label', 'REACHCODE': 'no label', 'FTYPE': 'no label', 'SHAPE_area': 'no label', 'SHAPE_len': 'no label', });
lyr_sw_line_lidar_2020_4.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'stream_typ': 'no label', 'type_code': 'no label', 'network': 'no label', });
lyr_parl_2020_5.set('fieldLabels', {'DIM': 'no label', 'DIR': 'no label', 'PLTYPE': 'no label', 'SURVACC': 'no label', 'SOURCETYPE': 'no label', 'EDITDATE': 'no label', 'SOURCEDATE': 'no label', 'EDITMETHOD': 'no label', 'LENGTH': 'no label', 'DECVAL': 'no label', 'SOURCENAME': 'no label', 'JOINT': 'no label', });
lyr_roads_6.set('fieldLabels', {'RDFLNAME': 'no label', 'cti_type': 'no label', 'town_road': 'no label', });
lyr_e911BuildingsforTown_7.set('fieldLabels', {'OBJECTID': 'no label', 'SEGMENTID': 'no label', 'ESITEID': 'no label', 'GEONAMEID': 'no label', 'PD': 'no label', 'PT': 'no label', 'SN': 'no label', 'ST': 'no label', 'SD': 'no label', 'PRIMARYNAM': 'no label', 'ALIAS1': 'no label', 'ALIAS2': 'no label', 'ALIAS3': 'no label', 'ALIAS4': 'no label', 'ALIAS5': 'no label', 'CALCADDRES': 'no label', 'GFADDRESS': 'no label', 'PRIMARYADD': 'no label', 'SITETYPE': 'no label', 'COMMENTS': 'no label', 'LR': 'no label', 'TOWNNAME': 'no label', 'MCODE': 'no label', 'ESN': 'no label', 'ZIP': 'no label', 'PARCELNUM': 'no label', 'GPSFLG': 'no label', 'GPSX': 'no label', 'GPSY': 'no label', 'MAPYEAR': 'no label', 'UPDATESOUR': 'no label', 'UPDATEDATE': 'no label', 'STATE': 'no label', 'FIPS8': 'no label', 'SPAN': 'no label', 'SUBTYPE': 'no label', 'GlobalID_1': 'no label', 'UNITCOUNT': 'no label', 'PRIMARYA_1': 'no label', 'PRIMARYA_2': 'no label', 'SITETYPE_M': 'no label', 'SITETYPE_1': 'no label', 'SITETYPE_2': 'no label', 'SITETYPE_3': 'no label', 'SITETYPE_4': 'no label', 'COUNTY': 'no label', 'COUNTRY': 'no label', 'SOURCEOFDA': 'no label', 'DRIVEWAYID': 'no label', 'ESZ': 'no label', 'HOUSE_NUMB': 'no label', 'HOUSE_NU_1': 'no label', 'HOUSE_NU_2': 'no label', 'GC_EXCEPTI': 'no label', 'FIPS': 'no label', 'cti_house': 'no label', });
lyr_tz2020_8.set('fieldLabels', {'TAXLINE_ID': 'no label', 'SHEET_ID': 'no label', 'SHEET': 'no label', 'TAXMAPZ_ID': 'no label', 'TYPE': 'no label', 'DIM': 'no label', 'DIR': 'no label', 'EDITDATE': 'no label', 'SOURCEDATE': 'no label', });
lyr_tz2020_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});