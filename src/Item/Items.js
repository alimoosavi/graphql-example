import React from "react";
import Item from "./Item";
import {Button, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root:{
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    itemsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 30,
        padding: 20,
        backgroundColor: "green"
    },
    orderButton: {
        alignSelf: 'center'
    }
});

const Items = (props) => {
    const classes = useStyles();
    const [items, setItems] = React.useState(props.items.map(item => ({...item, selected: false})))
    const toggleItem = React.useCallback((id) =>
            setItems(items => items.map(item => item.id === id ? {
                    ...item,
                    selected: !item.selected
                } : item
            )),
        [])
    const orderItems = () => props.order(items.filter(item => item.selected).map(item => item.id))

    return (<div className={classes.root}>
        <Paper className={classes.itemsWrapper}>
            {items.map(item => <Item key={item.id} {...item} toggle={toggleItem}/>)}
        </Paper>
        <Button variant="contained" color="secondary" className={classes.orderButton} onClick={orderItems}>
            Order
        </Button>
    </div>)

}

export default React.memo(Items);