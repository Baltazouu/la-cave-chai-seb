import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    //WebkitLineClamp: au,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});