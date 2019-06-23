import Link from 'next/link'
import { string } from 'prop-types';

const Card = (props) => (
    <div>
    <div className='row'>
        <aside>
            <img src={props.image} />
        </aside>
            <div className='card'>
            <h3>
                {props.title}
            </h3>

            <br />

            <h4>
                {props.description}
            </h4>

            <br />

            <p>
                {props.bodyText}
            </p>  

            <br />
                
            <button>
                {props.buttonText}
            </button>
            </div>    
        </div>
    <style jsx>
        {`
        .row {

        }
        aside {
            float: left;
        }
        img {
            float: left;
        }
        .card {
            float: right;
        }
        `}
    </style>
    </div>
);

Card.propTypes = {
    image: string,
    bodyText: string,
    title: string,
    description: string,
    buttonText: string
}

export default Card