# 7D2D-prefab-finder
QOL tool for the game 7 Days to Die. 
<br/>
Provides capability to search near POI/s and calculate distance of a prefab from a given coordinate or location

---

**Required file: Prefabs.xml**
## API
#### /prefab/near-poi
Find nearest POI/s within search radius
<br/>
**Method**: POST
<br/>
**Parameters**: 
<br/>
*poi* - **(OPTIONAL)** name of poi to filter
<br/>
*radius* - radius to search
<br/>
*center* - start location / midpoint
<br/>

#### /prefab/poi-distance
Get distance between POI/s and current location
<br/>
**Method**: GET 
<br/>
**Parameters**: 
<br/>
*poi* - **(OPTIONAL)** name of poi to filter
<br/>
*center* - start location / midpoint
