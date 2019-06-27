import Link from 'next/link'
import { string } from 'prop-types';

const CardRight = (props) => (
    <div className='row'>
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
        <aside>
            <img src={props.image} alt={props.alt} />
        </aside>    
    <style jsx>
        {`
        .row {
            width: 100%;
        }
        aside {
            float: right;
        }
        .card {
            float: left;
            width: 50%;
        }
        `}
    </style>
    </div>
);

CardRight.propTypes = {
    image: string,
    alt: string,
    bodyText: string,
    title: string,
    description: string,
    buttonText: string
}

export default CardRight