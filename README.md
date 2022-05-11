# 7D2D-prefab-finder
QOL tool for the game 7 Days to Die. Built with <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> 
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
