// Homemade card component with the image on the left and text to the right.
// Pass specifics through props. Title is largest text, description smaller flavor for title. bodyText is main paragraph(s)
// Can also choose to render a button by including buttonText as well as specify image properties (alt, heigh, width)

//Use <Link> tag to redirect to another page on site
import Link from 'next/link'
//string allows for strings to be passed as props instead of using this.state or other react features.
import { string } from 'prop-types';

//renderButton allows a button to be generated dynamically - including a button with no text makes an ugly bump on screen
const renderButton = (text) => (
    <button>{text}</button>
)

//The html body of the card. Notice <style> tag must be included withing parent div
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