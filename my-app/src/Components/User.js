import React from 'react';

import { Card, Button, CardHeader, CardFooter, CardImg, CardBody,
    CardTitle, CardText } from 'reactstrap';
  


const User = props => {


    console.log("here are props",props);
    return(
        <div>
        <Card>
        <CardHeader>{props.users.name}</CardHeader>
        <CardBody>
          <CardTitle>Bio</CardTitle>
          <CardText>{props.users.bio}</CardText>
          <Button>Go somewhere</Button>
        </CardBody>
        <CardImg top width="10%" src={props.users.avatar_url} alt="Card image cap" />
        <CardFooter>Footer</CardFooter>
      </Card>

      </div>
    )


}


export default User;