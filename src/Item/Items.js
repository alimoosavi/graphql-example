import React, {useContext} from "react";
import Item from "./Item";
import {Button, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useMutation} from "@apollo/client";
import {ADD_ORDER, user} from "./graphql";
import {AlertsContext} from "../Alert";

const useStyles = makeStyles({
    root: {
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
    const [addOrder, {}] = useMutation(ADD_ORDER);
    const {openSuccessAlert, openErrorAlert} = useContext(AlertsContext);

    const toggleItem = React.useCallback((id) =>
            setItems(items => items.map(item => item.id === id ? {
                    ...item,
                    selected: !item.selected
                } : item
            )),
        [])

    const orderItems = async () => {
        const selectedItem_ids = items.filter(item => item.selected).map(item => Number(item.id))

        if (selectedItem_ids.length === 0)
            openErrorAlert('pick some items to create order')
        else {
            try {
                await addOrder({variables: {user, selectedItem_ids}});
                openSuccessAlert('order submitted')
            } catch (e) {
                openErrorAlert('error has occurred while creating order')
            }
        }
    }

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