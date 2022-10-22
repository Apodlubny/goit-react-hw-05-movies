import { ListItem, List, StyledLink, Image } from './Movie.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies, from }) => {
  return (
    <List>
      {movies &&
        movies.map(({ name, title, id, poster_path }) => (
          
          <ListItem key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: from }}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={name || title}
              />
              
            </StyledLink>
          </ListItem>
        ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string,
    poster_path: PropTypes.string.isRequired,
  })),
  from: PropTypes.string.isRequired,
}