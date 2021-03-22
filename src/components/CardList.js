import React from 'react'
import Card from './Card'
import Data from '../Data'
const CardList = () => {

 const Alert = x => alert(x) ;


    return (
        <div id="card_list">
        {
           Data.map((el,i) => (

            <Card key={i} name={el.name} price={el.price} description={el.description} image={el.image} />
           )) 




        }


        </div>
    )
}

export default CardList
