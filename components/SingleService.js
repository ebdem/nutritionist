import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight, faFootballBall} from '@fortawesome/free-solid-svg-icons';


const SingleService = (props) => {
    return(
        <div className="col-md-4">
            <div className="card-box-c foo">
                <div className="card-header-c d-flex">
                    <div className="card-box-ico" >
                        <span><FontAwesomeIcon icon={props.Icon}/></span>
                    </div>
                    <div className="card-title-c align-self-center">
                        <h2 className="title-c" style={{textDecoration:'underline'}}>{props.title}</h2>
                    </div>
                </div>
                <div className="card-body-c">
                    <p className="content-c">
                        {props.desc}
                    </p>
                </div>
                <div className="card-footer-c">
                    <a href="#" className="link-c link-icon">Read more
                        <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SingleService;
