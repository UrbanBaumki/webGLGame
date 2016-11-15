# Portal Game
This is a Portal Game Clone using Three.js library for webgl implementation. 

This is how the game looks

![screenshot 3](https://cloud.githubusercontent.com/assets/17611529/20304567/43ea4ac2-ab31-11e6-987e-6e7197822939.png)

![screenshot 2](https://cloud.githubusercontent.com/assets/17611529/20304574/4f50a852-ab31-11e6-97d2-1befc7c203ca.png)

![screenshot 4](https://cloud.githubusercontent.com/assets/17611529/20304580/564ccda2-ab31-11e6-8d4e-42108fe8b65d.png)

Note that the 3D models are a free resource.
I implemented most of the FPS aspects, such as movement and collision. Teleporting works both ways and on all white surfaces (except the floor). Cameras from each portal are being cut and projected on the opposite portal's surface texture uvs, that had to be manually repositioned using blender.
![slika1](https://cloud.githubusercontent.com/assets/17611529/20304762/52a1795e-ab32-11e6-9087-8f92feb513c1.png)

Maps are serialized with an array in javascript and can be easily manipulated or made. An example of a map:
```
var maps= new Array();
//notation:
// 1 wall (for portals), 2 floor (blocks portals) , 0  air, 3 wall (block portals)
// 4 finish (button position) , -1 move 1 level in height for next set of map notation
//Level 1 
var map = [
           [3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
           [3, 2, 3, 2, 2, 2, 3, 0, 3, 3,], 
           [3, 2, 3, 2, 2, 2, 3, 0, 0, 3,],
           [3, 2, 3, 2, 3, 2, 3, 2, 0, 3,], 
           [3, 2, 3, 2, 2, 2, 3, 1, 3, 3,], 
           [3, 2, 2, 3, 3, 2, 3, 0, 0, 3,], 
           [3, 2, 1, 2, 3, 2, 3, 3, 3, 3,], 
           [3, 2, 3, 2, 3, 2, 3, 3, 2, 1,], 
           [3, 2, 3, 2, 2, 2, 3, 2, 2, 3,], 
           [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, -1],

           [3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
           [3, 3, 3, 0, 0, 0, 3, 1, 0, 3,], 
           [3, 3, 3, 0, 0, 0, 3, 3, 0, 3,],
           [3, 0, 3, 0, 0, 0, 3, 0, 0, 3,], 
           [3, 0, 3, 0, 0, 0, 3, 3, 0, 3,], 
           [3, 0, 0, 3, 3, 0, 3, 0, 0, 3,], 
           [3, 0, 3, 0, 3, 0, 3, 3, 3, 3,], 
           [3, 0, 3, 0, 3, 0, 3, 0, 0, 1,], 
           [3, 0, 3, 3, 0, 0, 3, 0, 0, 3,], 
           [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, -1], ...
```
It works sort of like a tileset, but in 3D.

