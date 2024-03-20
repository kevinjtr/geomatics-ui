
import styled from '@emotion/styled';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const AppBarMenu = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} arrow placement="bottom-start" />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.primary.light,
        fontSize: theme.typography.pxToRem(12),
        borderRadius: 12
    }
}));

export default AppBarMenu;
