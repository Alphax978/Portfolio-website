import React from 'react'
import "./Footer.css"

const Footer = ({theme}) => {
    return (
        <footer className='footer' style={{
            backgroundColor: theme ? 'rgb(30,30,30)' : 'rgb(192,192,192)'
        }}>
            Copyright &#169; 2023 James Rawal
      </footer>
 
  )
}

export default Footer
