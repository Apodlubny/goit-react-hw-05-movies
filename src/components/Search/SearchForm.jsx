import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { StyledForm, StyledInput, StyledButton } from './SearchForm.styled';
import { GoSearch } from 'react-icons/go';

export const SearchForm = ({ onSubmit}) => {
  const [query, setQuery] = useState('');
  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      toast.warning('Please, enter the movie which you want to find.');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <StyledForm onSubmit={handleFormSubmit} >
      <StyledInput
        name="movie"
        value={query}
        placeholder="Search movies..."
        onChange={handleInputChange}
      />{' '}
      <StyledButton type="submit">
        <GoSearch />
      </StyledButton>
    </StyledForm>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};