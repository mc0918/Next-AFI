import Link from 'next/link'
import { string } from 'prop-types';

const ImageHeader = (props) => (
    <div className='container'>
        <img src={props.image} />
        <div className = 'centered-text'>{props.headerText}</div>
        <style jsx>{`
        .container {
            width: 100%; 
            height: 429.6px;
            }
        img {
            width: 100%; 
            height: 429.6px;
            }
        .centered-text {
            color: white;
            font-family: impact;
            font-size: 80px;
            text-align: center;
            position: relative;
            bottom: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
            `}</style>
    </div>
);

ImageHeader.propTypes = {
    image: string,
    headerText: string
};

export default ImageHeader;