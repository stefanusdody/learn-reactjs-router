import React from "react";
import photo from "../photos/photo";
import { Link, Route} from "react-router-dom";
import { Button } from 'reactstrap';

const About = ({match}) => {
      return (
          <div>
          <h1>LOGO</h1>
            <Button color="danger" href={`${match.url}/adidas`}>ADIDAS</Button>{' '}
            <Button color="info" href={`${match.url}/Nike`}>NIKE</Button>{' '}
            <Button color="primary" href={`${match.url}/puma`}>PUMA</Button>{' '}
            <Route path={`${match.url}/:person`} component={photo} />
          </div>
      );
};

export default About;
