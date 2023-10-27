import React from 'react'
import Card from './components/Card'

function Auction() {

    const auctions = [{
        name:"Crayons",
        description:"Selling crayons",
    },{
        name:"eliminating cancer",
        decription:"eliminating cancer"
    }]
  return (
    <div>
        {auctions.map((auction,index)=>{
            <Card name={auction.name} description={auction.description}/>
        })}
    </div>
  )
}

export default Auction