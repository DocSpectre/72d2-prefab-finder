# 7D2D-prefab-finder
7D2D tool for searching of the nearest prefabs from a given center coordinate.

## **Required file: Prefabs.xml**
## API
#### /prefab/near-poi
Find nearest POI/s within search radius

**Method**: POST

**Parameters**: 

poi (OPTIONAL) - name of poi to filter

radius - radius to search

center - start location / midpoint

#### /prefab/poi-distance
Get distance between POI/s and current location

**Method**: GET 

**Parameters**: 

poi (OPTIONAL) - name of poi to filter

center - start location / midpoint