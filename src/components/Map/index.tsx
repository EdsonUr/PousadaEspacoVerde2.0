import React from 'react'
import GoogleMapReact from 'google-map-react'

import pin from '../../assets/pin.svg'
import { Container, Title } from './styles'
import { getWindowSize } from '../../utils/getWindowSize';

const mapKey = process.env.REACT_APP_MAP_KEY || '';

const location = {
    address: 'R. Silva Jardim, 644 - centro, Viçosa do Ceará - CE, 62300-000',
    center: {
        lat: -3.5635905847410134,
        lng: -41.09023348098478
    }
}


const Map = () =>{
  const windowSize = getWindowSize();
  return(
    <Container device={windowSize}>
      <Title device={windowSize}> 
        Acesso à pousada
      </Title>
      <div style={{ height: windowSize === 'desktop'?'390px':'422px' , width: windowSize === 'desktop'?'541px': windowSize === 'tablet'?'361px':'330px', marginTop: '12px', zIndex: -1}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapKey }}
          defaultCenter={location.center}
          defaultZoom={18}
          draggable={false}
          options={{disableDefaultUI: true}}
          >
          <div>
            <img src={pin} alt="marker" />
          </div>
        </GoogleMapReact>
      </div>
  </Container>
  )
}

export default Map;