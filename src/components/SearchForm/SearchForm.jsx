import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function SearchForm() {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('')

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        dispatch({
            type: 'FETCH_RESULTS',
            payload: searchQuery
        })
        setSearchQuery('')
    }

    return (

        <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Search a Gif!" variant="outlined"
        value={searchQuery} onChange={handleChange}
        />
        <Button type="submit" variant="outlined">Search</Button>
        </form>
        

    )
}

export default SearchForm;

