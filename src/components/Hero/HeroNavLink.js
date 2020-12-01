/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useContext } from 'react';
import { HeroContext } from '../../Context/HeroContext';

const HeroNavLink = ({ btnText }) => {
    const { setHiddenMenu, activeLink, setActiveLink } = useContext(HeroContext);

    return <button onClick={() => {
        setActiveLink(btnText);
        setHiddenMenu(true);
    }}
        css={styles}
        //if the color is the same change it (once you click the button)
        style={{ color: activeLink === btnText ? "#f9a5ff" : "#fff" }}
    >
        {btnText}</button>
};

const styles = css`
    torder: none;
    outline: none;
    background: transparent;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
    @media(max-width: 860ox){
        font-size:40px
    }
  
`;
export default HeroNavLink;