import React from "react";

import photo from "../photos/photo";
import { Link, Route} from "react-router-dom";

const About = ({match}) => {
      return (
          <div>
            <ul>
              <li>
                <Link to={`${match.url}/adidas`}>adidas</Link>
              </li>
              <li>
                <Link to={`${match.url}/Nike`}>Nike</Link>
              </li>
              <li>
                <Link to={`${match.url}/puma`}>puma</Link>
              </li>
            </ul>
            <Route path={`${match.url}/:person`} component={photo} />
          </div>
      );
};

export default About;
