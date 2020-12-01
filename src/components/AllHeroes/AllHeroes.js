/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useContext } from 'react';
import { HeroContext } from '../../Context/HeroContext';
import Container from '../ReusableComponents.js/Container';

const AllHeroes = () => {
    const { hero } = useContext(HeroContext);

    return (
        <div css={styles} className="hero">
            <Container>
                {hero.results &&
                    hero.results.map((heroItem, index) => (
                        <img key={index}
                            src={`https://superheroapi.com/api/1741527979362433/id/image/${heroItem.poster_path}`}
                            alt="poster"
                        />
                    ))}
            </Container>
        </div>
    );


};
const styles = css`
    width: 100%;
    .container{
        &:nth-child(1){
            height: 81vh;
            overflow-y: scroll;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            &::-webkit-scrollbar{
                width:0;
            }
        }
        img{
            width: 100%;
            max-width: 240px;
            height: 360px;
            margin: 10px 0;

        }
    }
    @media(max-width: 600px){
        .container{
            img{
                max-width: 100%;
                height: 500px;
            }
        }
    }
    @media(min-width: 601px) and (max-width: 854px){
        .container{
            img{
                max-width: 48%;
            
            }
        }
    }
    @media(min-width: 855px) and (max-width: 1144px){
        .container{
            img{
                max-width: 31%;
            }
        }
    }
    @media(min-width: 1145px) and (max-width: 1365px){
        .container{
            img{
                max-width: 23.4%;
            }
        }
    }

`;
export default AllHeroes;