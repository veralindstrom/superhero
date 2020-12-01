/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useContext } from 'react';
import { HeroContext } from '../../Context/HeroContext';
import Container from '../ReusableComponents.js/Container';
import AllHeroes from '../AllHeroes/AllHeroes';
const Output = () => {
    const { activeLink } = useContext(HeroContext);
    return (
        <div css={styles} className="output">
            { activeLink === "AllHeroes" && (
                <Container>
                    <AllHeroes />
                </Container>
            )
            }
        </div>
    );
};
const styles = css`
    width: 100%;
    min-height: calc(100vh - 80vh);
    display: flex;
     .container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

    }
    @media(max-width: 1365px){
        .container{
            max-width: 90%;
        }
    }
  
`;

export default Output;