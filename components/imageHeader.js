import Link from 'next/link'
import { string } from 'prop-types';


const ImageHeader = (props) => (
    <img src={props.image} />
);

ImageHeader.propTypes = {
    image: string
};

export default ImageHeader;