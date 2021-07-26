import React from 'react';
import {Query} from "react-apollo";
import gql from "graphql-tag";
import Items from "./Items";
import {CircularProgress, Snackbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MuiAlert from '@material-ui/lab/Alert';

const GET_ITEMS = gql`
     {
        allItems{
            id
            title
            price
        }
    }`;

const useStyles = makeStyles({
    loadBar: {
        position: 'relative',
        left: '50%'
    }
});

const OrderItem = () => {
    const order = (ids) => console.log(ids);
    const classes = useStyles();

    return (
        <Query
            query={GET_ITEMS}
        >
            {({loading, error, data}) => {
                if (loading) return<CircularProgress className={classes.loadBar}/>;
                if (error) return (<Snackbar open={true} autoHideDuration={6000} >
                    <MuiAlert elevation={6} variant="filled" severity="error">
                        An Error has occurred!
                    </MuiAlert>
                </Snackbar>);
                return <Items items={data.allItems} order={order}/>
            }}
        </Query>
    )
};
export default OrderItem;