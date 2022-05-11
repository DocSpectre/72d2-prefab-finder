# 7D2D-prefab-finder
7D2D tool for searching of the nearest prefabs from a given center coordinate.


### **Required file: Prefabs.xml**
### API
##### *prefab/near-poi
Find nearest POI/s within search radius
<br/>
**Method**: POST
<br/>
**Parameters**: 
<br/>
**poi (OPTIONAL)** - name of poi to filter
<br/>
**radius** - radius to search
<br/>
**center** - start location / midpoint

##### *prefab/poi-distance
Get distance between POI/s and current location
<br/>
**Method**: GET 
<br/>
**Parameters**: 
<br/>
**poi (OPTIONAL)** - name of poi to filter
<br/>
**center** - start location / midpoint
<br/>