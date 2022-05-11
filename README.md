<a href="https://7daystodie.com/" target="_blank" rel="noreferrer"> <img src="http://www.onrpg.com/wp-content/uploads/2016/04/7_days_to_die_668x227.jpg" alt="7d2d-banner"/> </a>


# 7D2D Prefab Finder
A personal QOL tool I made for the game 7 Days to Die. Built with <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> 
<br/>
Provides capability to search nearby POI/s and calculate distance of a prefab from a given coordinate or location

---

<a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/heroku/favicon/master/favicon.iconset/icon_32x32.png" alt="heroku" width="30" height="30"/> </a>
Live URL: https://sleepy-island-17313.herokuapp.com/      


Live Sample Links using **Darkness Fall: Krunch's 12k Map**:
<br/>
GET: https://sleepy-island-17313.herokuapp.com/sample/near-poi?poi=dfall&radius=1300&center=530,-999
<br/>
GET: https://sleepy-island-17313.herokuapp.com/sample/poi-distance?poi=trader&center=530,-999

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

