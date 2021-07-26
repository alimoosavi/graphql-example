import React from 'react';
import {CircularProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useQuery} from "@apollo/client";
import Items from "./Items";
import {GET_ITEMS} from "./graphql";


const useStyles = makeStyles({
    loadBar: {
        position: 'relative',
        left: '50%'
    }
});

const OrderItem = () => {
    const classes = useStyles();
    const {loading, error, data} = useQuery(GET_ITEMS);

    if (loading) return <CircularProgress className={classes.loadBar}/>;

    if (error) {
        return null;
    }

    return <Items items={data.allItems}/>

};
export default OrderItem;