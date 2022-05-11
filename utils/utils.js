const xml2js = require('xml2js');


//** Convert XML to JSON format **/
exports.xml2Json = async (xmlFile) => {
    const xml = xmlFile.buffer.toString('utf8');
    return await xml2js.parseStringPromise(xml)
        .then(({ prefabs: { decoration } }) => decoration)
        .catch(err => null);
};


//** Parse string to coordinates X and Y **/
exports.string2Coords = (string) => {
    const [x, z, y] = string.split(',');
    if (y) return [x, y];
    return [x, z];
}

//** Compute Distance between prefab and center/midpoint **/
exports.distanceOf2Points = (prefab_pos, center, stringShouldParse = false) => {
    if (stringShouldParse) {
        prefab_pos = this.string2Coords(prefab_pos);
        center = this.string2Coords(center);
    }

    const [prefab_x, prefab_y] = prefab_pos;
    const [center_x, center_y] = center;
    return Math.sqrt(Math.pow(prefab_y - center_y, 2) + Math.pow(prefab_x - center_x, 2))
}