const fs = require('fs');
const xml2js = require('xml2js');
const utils = require('../../utils/utils');
const xmlFile = fs.readFileSync('././sample-prefabs/krunch-prefabs.xml', { encoding: 'utf-8' });

exports.searchNearPOI = async (query) => {

    const response = {
        message: 'Invalid arguments'
    };

    if (!xmlFile || !query || !query.radius || !query.center) return response;

    const jsonOut = await utils.xml2Json(xmlFile);
    if (!jsonOut) return response;

    const { radius, center, poi = '' } = query;
    return jsonOut.reduce((acc, curr) => {
        const [key] = Object.keys(curr);
        const { name: prefab_name, position: prefab_position } = curr[key];

        const distance = utils.distanceOf2Points(prefab_position, center, true);

        if (distance <= radius && prefab_name.toLowerCase().includes(poi.toLowerCase())) {
            return acc.concat([{
                prefab_name,
                prefab_position,
                distance: Math.round(distance)
            }]);
        }

        return acc;
    }, []);
};

exports.findPOIDistance = async (query) => {
    const response = {
        message: 'Invalid arguments'
    };

    if (!xmlFile || !query || !query.center) return response;
    const jsonOut = await utils.xml2Json(xmlFile);
    if (!jsonOut) return response;

    const { center, poi = '' } = query;
    return jsonOut.reduce((acc, curr) => {
        const [key] = Object.keys(curr);
        const { name: prefab_name, position: prefab_position } = curr[key];

        const distance = utils.distanceOf2Points(prefab_position, center, true);

        if (prefab_name.toLowerCase().includes(poi.toLowerCase())) {
            return acc.concat([{
                prefab_name,
                prefab_position,
                distance: Math.round(distance)
            }]);
        }

        return acc;
    }, []);
};