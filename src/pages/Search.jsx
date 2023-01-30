import React from "react";
import classes from '../styles/Search.module.css'
import LoadingAnimation from "../components/UI/Loading";

const Search = () => {
    return (
        <div className={classes.search}>
            <div className={classes.loading}>
                <LoadingAnimation></LoadingAnimation>
            </div>
        </div>
    )
}

export default Search;