import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const styles = function getStyles() {
    const drawerWidth = 240;
    return makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
            },
            appBar: {
                zIndex: theme.zIndex.drawer + 1,
                'background-color': '#ff5e00',
            },
            drawer: {
                width: drawerWidth,
                flexShrink: 0,
            },
            drawerPaper: {
                width: drawerWidth,
            },
            drawerContainer: {
                overflow: 'auto',
            },
            content: {
                flexGrow: 1,
                padding: theme.spacing(3),
            },
        })
    )();
}()

export type StylesType = typeof styles;

export type StyledComponentPropType = {
    classes: StylesType,
}

export default styles;
