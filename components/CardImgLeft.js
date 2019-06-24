import Link from 'next/link'
import { string } from 'prop-types';

const CardLeft = (props) => (
    <div className='content'>
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
    <style jsx>
        {`
        aside {
            float: left;
        }
        .content {
            width: 100%;
        }
        .card {
            float: right;
            width: 50%;
        }
        `}
    </style>
    </div>
);

CardLeft.propTypes = {
    image: string,
    bodyText: string,
    title: string,
    description: string,
    buttonText: string
}

export default CardLeft