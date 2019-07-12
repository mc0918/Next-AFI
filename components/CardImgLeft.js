import Link from 'next/link'
import { string } from 'prop-types';

const renderButton = (text) => (
    <button>{text}</button>
)

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
                
            {props.buttonText ? renderButton(props.buttonText) : null}    
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
        img{
            height: ${props.imgHeight};
            width: ${props.imgWidth}
        }
        `}
    </style>
    </div>
);

CardLeft.propTypes = {
    image: string,
    imgHeight: string,
    imgWidth: string,
    alt: string,
    bodyText: string,
    title: string,
    description: string,
    buttonText: string,
}

export default CardLeft