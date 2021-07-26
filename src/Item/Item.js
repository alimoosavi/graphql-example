import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CheckBox, CheckBoxOutlineBlank} from '@material-ui/icons'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 150,
        height: 150,
        margin: 10
    },
    media: {
        padding: 4,
    },
});

const Item = ({id, title, price, selected, toggle}) => {
    const classes = useStyles();
    const clickToggle = () => toggle(id);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom component="h2">
                    Title: {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Price: {price}$
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={clickToggle}>
                    {selected ? <CheckBox/> : <CheckBoxOutlineBlank/>}
                </Button>
            </CardActions>
        </Card>
    );
}

export default React.memo(Item);