import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import {
    SearchBar,
    SearchInput,
} from "../StyledComponents/StyledDashboard.jsx";

const SearchBox = () => {
    return (
        <SearchBar>
            <SearchInput
                fullWidth
                id="outlined-search"
                label="Search"
                type="search"
                variant="outlined"
                margin="dense"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon
                                style={{
                                    color: '#878a8c',
                                }}
                            />
                        </InputAdornment>
                    ),
                }}
            />
        </SearchBar>
    )
}

export default SearchBox;