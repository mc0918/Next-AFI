import Link from 'next/link'
import { string } from 'prop-types';

const ImageHeader = (props) => (
    <div className='container'>
        <img src={props.image} />
        <style jsx>{`
        .container {
            width: 100%; 
            height: 429.6px;
            }
        img {
            width: 100%; 
            height: 429.6px;
            }`}</style>
    </div>
);

ImageHeader.propTypes = {
    image: string
};

export default ImageHeader;