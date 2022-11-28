import React from 'react'

const Card = ({imgUrl,isLive}) => {
  return (
<div className="card-wrapper" style={{aspectRatio:isLive?"2/1":"49/65",minWidth:isLive?"220px":"169px"}}>
<img src={imgUrl} alt="imgUrlNotFound" />
<div className="card-content-wrapper">

<div className="card-content">
    <p className="title"> Sita Raman</p>
    <p className="subtitle-one">3hr,22 min</p>
    <p className="subtitle-two">On a letter-delivering task, Afreen learns of a 20-year-old romance set amidst a war. Her quest to t ...</p>
    <p className="watch"><i  className="fa">&#xf04b;</i> WATCH MOVIE</p>
    <p className="playlist"><i  className="fa">&#xf067;</i> ADD TO PLAYLIST</p>
</div>
</div>

</div>
  )
}

export default Card