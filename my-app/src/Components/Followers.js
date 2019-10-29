import React from 'react';
import FollowerCard from './FollowerCard'


const Followers = props => {


    console.log("here are props",props.followrs);
    return(
        <div>
        {props.followers.map(item => (
            <FollowerCard  key ={item.id} followers ={item}/>
        ) )}


      </div>
    )


}


export default Followers;