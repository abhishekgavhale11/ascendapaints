import React from 'react';

import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import "./Gallery.css"

const breakPoints = [
  {width:1, itemsToShow:1},
  {width:550, itemsToShow:1},
  {width:768, itemsToShow:1},
  {width:1200, itemsToShow:2},
]


function Gallery() {
  return (<>
     <h1 style={{textAlign:"center"}}>Image Gallery </h1>
     <div className="container-fluid gallery">
     <div className="row justify-content-center">
    <div className="col-10">
       <Carousel breakPoints={breakPoints}  >
         <Item><img src="gallery/1.jpg" alt="" /></Item>
         <Item><img src="gallery/blaze-base.jpg" alt="" /></Item>
         <Item><img src="gallery/brushing-spz.jpg" alt="" /></Item>
         <Item><img src="gallery/classic-swirl-pearl.jpg" alt="" /></Item>
         <Item><img src="gallery/classic-wave(velvetto).jpg" alt="" /></Item>
         <Item><img src="gallery/combi-spz-silver.jpg" alt="" /></Item>
         <Item><img src="gallery/creep-tex.jpg" alt="" /></Item>
         <Item><img src="gallery/criss-cross.jpg" alt="" /></Item>
         <Item><img src="gallery/crystal-design.jpg" alt="" /></Item>
         <Item><img src="gallery/ct-fabric.jpg" alt="" /></Item>
         <Item><img src="gallery/cyclone(velvetto).jpg" alt="" /></Item>
         <Item><img src="gallery/dapple-effect.jpg" alt="" /></Item>
         <Item><img src="gallery/fabrico.jpg" alt="" /></Item>
         <Item><img src="gallery/flower-effect.jpg" alt="" /></Item>         
         <Item><img src="gallery/godness-of-ocean.jpg" alt="" /></Item>
         <Item><img src="gallery/mastic-wash.jpg" alt="" /></Item>
         <Item><img src="gallery/ozho-velvetto.jpg" alt="" /></Item>
         <Item><img src="gallery/raging-effect.jpg" alt="" /></Item>
         <Item><img src="gallery/royal-curtain-velvetto.jpg" alt="" /></Item>
         <Item><img src="gallery/scratching-gl-mango.jpg" alt="" /></Item>
         <Item><img src="gallery/sea-shell.jpg" alt="" /></Item>
         <Item><img src="gallery/shell-finish.jpg" alt="" /></Item>         
         <Item><img src="gallery/sparklz-gold.jpg" alt="" /></Item>         
         <Item><img src="gallery/sparklz-wash.jpg" alt="" /></Item>
         <Item><img src="gallery/spatla-3.jpg" alt="" /></Item>
         <Item><img src="gallery/spatula-2.jpg" alt="" /></Item>
         <Item><img src="gallery/spatula.jpg" alt="" /></Item>
         <Item><img src="gallery/spick.jpg" alt="" /></Item>
         <Item><img src="gallery/spiral-effect.jpg" alt="" /></Item>
         <Item><img src="gallery/swirl-pearl.jpg" alt="" /></Item>
         <Item><img src="gallery/swirl-pearl2.jpg" alt="" /></Item>
         <Item><img src="gallery/wooden-finish.jpg" alt="" /></Item>
         
       </Carousel>
       </div>
       </div>
     </div>    
    </>
  )
} 

export default Gallery