import Link from 'next/link'
import { string } from 'prop-types';

const CardLeft = (props) => (
    <div className='content'>
        <aside>
            <img src={props.image} alt={props.alt}/>
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
            padding-left: 10%;
        }
        .content {
            width: 100%;
        }
        .card {
            float: left;
            width: 50%;
            padding-left: 30px;
            padding-right: 10px;
        }
        `}
    </style>
    </div>
);

CardLeft.propTypes = {
    image: string,
    alt: string,
    bodyText: string,
    title: string,
    description: string,
    buttonText: string,
}

export default CardLeft