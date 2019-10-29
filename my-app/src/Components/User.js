import React from 'react';

import { Card, Button, CardHeader, CardFooter, CardImg, CardBody,
    CardTitle, CardText } from 'reactstrap';
  


const User = props => {



    return(
        <div className = "cards">
        <Card >
        <CardHeader>{props.users.name}</CardHeader>
        <img className ="user-img" top width="100%" src={props.users.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>Bio</CardTitle>
          <CardText>{props.users.bio}</CardText>
          <Button>Github Link</Button>
        </CardBody>
       
        <CardFooter></CardFooter>
      </Card>

      </div>
    )


}


export default User;