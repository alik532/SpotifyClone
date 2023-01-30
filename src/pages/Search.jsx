import React from "react";
import classes from '../styles/Search.module.css'
import LoadingAnimation from "../components/UI/Loading";
import SearchInput from "../components/UI/SearchInput";

const Search = () => {
    return (
        <div className={classes.search}>
            <div className={classes.loading}>
                <LoadingAnimation></LoadingAnimation>
                <SearchInput/>
            </div>
        </div>
    )
}

export default Search;