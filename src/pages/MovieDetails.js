import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../MovieState';

import { motion } from 'framer-motion';
import { PageAnimation } from '../Animation';

const MovieDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;

  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={PageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award title={award.title} description={award.description} />
            ))}
          </Awards>
          <SecondaryImage>
            <img src={movie.secondaryImg} alt="movie" />
          </SecondaryImage>
        </Details>
      )}
    </>
  );
};

const SecondaryImage = styled.div`
  min-height: 80vh;
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

const Details = styled(motion.div)`
  color: white;
`;

const Headline = styled.div`
  padding-top: 20vh;
  min-height: 90vh;
  position: relative;
  h2 {
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

//Award Component
const Awards = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 10rem;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const AwardStyle = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    height: 0.5rem;
    margin: 1rem 0rem;
    width: 50%;
    background: #23d997;
  }

  p {
    padding: 1rem 0rem;
  }
`;

export default MovieDetails;
