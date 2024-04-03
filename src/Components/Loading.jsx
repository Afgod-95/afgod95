import React from 'react'
import Logo from '../../src/assets/Logo.png'

const Loading = () => {
  return (
    <div style={{justifyContent: 'center', alignItems: 'center', display:'flex', height: '95vh', margin: 'auto', background: '#fff'}}>
        <div style={{width: '100px', height: '150px', }}>
            <img src={Logo} alt="Loading"
                style = {{
                    width: '100%',
                    height: '100%',
                    objectPosition: 'center'
                }}
            />
        </div>
    </div>
  )
}

export default Loading
