# 7D2D-prefab-finder
QOL tool for the game 7 Days to Die. Built with <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> 
<br/>
Provides capability to search near POI/s and calculate distance of a prefab from a given coordinate or location

---

Live URL: https://sleepy-island-17313.herokuapp.com/ <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/heroku/favicon/master/favicon.iconset/icon_32x32.png" alt="heroku" width="40" height="40"/> </a>


Sample Links:
POST: https://sleepy-island-17313.herokuapp.com/prefab/near-poi?poi=dfall&radius=1300&center=530,-999
POST: https://sleepy-island-17313.herokuapp.com/prefab/poi-distance?poi=dfalls&center=530,-999

---

**Required file: Prefabs.xml**
## API
#### /prefab/near-poi
Find nearest POI/s within search radius
<br/>
**Method**: POST
<br/>
**Query Parameters**: 
<br/>
*poi* STRING - **(OPTIONAL)** name of poi to filter
<br/>
*radius* INT - radius to search
<br/>
*center* INT - start location / midpoint
<br/>
**Body**: 
*file* XML - Prefabs.xml file
<br/>

#### /prefab/poi-distance
Get distance between POI/s and current location
<br/>
**Method**: POST 
<br/>
**Query Parameters**: 
<br/>
*poi* STRING - **(OPTIONAL)** name of poi to filter
<br/>
*center* INT - start location / midpoint
**Body**: 
*file* XML - Prefabs.xml file
<br/>

