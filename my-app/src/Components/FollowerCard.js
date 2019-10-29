import React from 'react';
import styled from 'styled-components';



import { Card, Button, CardHeader, CardFooter, CardImg, CardBody,
    CardTitle, CardText } from 'reactstrap';
    
    
    const FollowerCard = props => {


        console.log("here are props",props);
        return(
            <div className = "cards">
                
        <Card>
        <CardHeader>{props.followers.login}</CardHeader>
        <img className ="user-img" top width="100%" src={props.followers.avatar_url} alt="Card image cap" />
        <CardBody>
         
          <CardText>{props.followers.bio}</CardText>
          <Button>Github Link</Button>
        </CardBody>
       
        <CardFooter></CardFooter>
      </Card>

    
          </div>
        )
    
    
    }
    
    
    
    
    
    
    
    
    export default FollowerCard;