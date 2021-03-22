import React from 'react'
import './Cards.scss';
import PropTypes from 'prop-types' ;

const Card = ({name , price , description , image , Alert}) => {
    return (
        <div>
            <div className="wrapper"  onClick={()=>  Alert(name)}  style={{cursor:"pointer"}}   >
  <div className="container">
    <div className="top">
        <img src={image} alt="error" style={{width:"100%" , height:"100%"}}/>
    </div>
    <div className="bottom">
      <div className="left">
        <div className="details">
          <h4>{name}</h4>
          <p>{price} DT</p>
        </div>
        
      </div>
      <div className="right">
        <div className="done"><i className="material-icons">done</i></div>
        <div className="details">
          <h1>Chair</h1>
          <p>Added to your cart</p>
        </div>
        <div className="remove"><i className="material-icons">clear</i></div>
      </div>
    </div>
  </div>
  <div className="inside">
    <div className="icon"><i className="fas fa-info"></i></div>
    <div className="contents">
     <p>{description}</p>
    </div>
  </div>
</div>
        </div>
    )
}

Card.propTypes = {

name : PropTypes.string ,
price : PropTypes.string ,
description:PropTypes.string ,
image : PropTypes.string ,
Alert : PropTypes.func



}

Card.defaultProps ={

name : "Anonyme" ,
price :"free" ,
description : "no description" ,
image : "logo512.png" ,
Alert : function error(x) {
    alert (`${x} not found `)
}

}




export default Card
