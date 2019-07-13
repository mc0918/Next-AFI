//Basic footer... can style or add props as you like

const Footer = (props) => (
    <div className='footerContainer'>
        <footer>
            Copyright © 2019 Artists Fighting Isolation. All rights reserved.
        </footer>
        <style jsx>
            {`
            .footerContainer{
                text-align: center
            }
            `}
        </style>
    </div>
);

export default Footer