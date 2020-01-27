import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
// import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    settingsButton: {
        position: 'absolute',
        top: 40,
        right: 40,
        color: 'white'
    }
});

export default function Settings({ setTime }) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Inbox'].map((text, index) => (
                    <ListItem button key={text}>
                        {/* <ListItemIcon>{index % 2 === 0 && <InboxIcon />}</ListItemIcon> */}
                        <ListItemText primary={text} />
                        <input onClick={() => { setTime(1000) }}></input>
                    </ListItem>
                ))}
            </List>
            {/* <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 && <InboxIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    return (
        <>
            <SettingsIcon onClick={toggleDrawer('right', true)} className={classes.settingsButton} />
            {/* <Button >Open Right</Button> */}
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </>
    );
}