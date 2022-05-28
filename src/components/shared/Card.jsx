import React from 'react'
import PropTypes from'prop-types'
function Card({children,reverse}) {
  const date=new Date()
  const nowhour=date.getHours()
  if (nowhour>18){
    reverse=true
  }else{
    reverse=false
  }




  return (
    //<div className={`card ${reverse&&`reverse`}`}> // if reverse is true, add reverse to card class <style></style>
        //{children}</div>// conditional class
    <div className="card" style={{
        backgroundColor:reverse ? 'rgba(0,0,0,0.4)':'#fff',
        color:reverse ? '#fff':'#000',// conditional styling
    }}>
        {children}
    </div>
  )
}

Card.propTypes={
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool,
}

export default Card