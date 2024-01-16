import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import PortalCard from '../components/portalCard';
import { spanStyle,divStyle } from '../Styles/imageSlider';
import '../Styles/portalsContainer.css'
import Header from '../components/homeHeader';


const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

export default function HomePage () {
    return (
      <div className="slide-container">
        
        <Header />

        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>

        <div className='Portals'>
            <PortalCard portalType={"Map"}/>
            <PortalCard portalType={"Office"}/>
            <PortalCard portalType={"Service"}/>
        </div>

      </div>
    )
}