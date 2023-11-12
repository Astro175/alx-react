import { getFooterCopy, getFullYear } from "../utils";
import './Footer.css';

const Footer = () => {
    return ( 
        <>
        <p>{getFullYear()} {getFooterCopy(true)} Copyright 2020 - holberton School</p>
      </>
     );
}
 
export default Footer;