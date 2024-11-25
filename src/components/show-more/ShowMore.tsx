import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from "@mui/material/Box";

interface ShowMoreProps {
    text: string;
    maxLength?: number;
}

const ShowMore: React.FC<ShowMoreProps> = ({ text, maxLength = 100 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => setIsExpanded((prev) => !prev);

    const displayedText = isExpanded ? text : `${text.slice(0, maxLength)}${text.length > maxLength ? '...' : ''}`;

    return (
        <Typography color="text.secondary" variant={'body1'} sx={{textAlign:'justify'}}>
            {displayedText}
            {text.length > maxLength && (
                <Box sx={{ display: 'block', mt: 1 }}>
                    <Button sx={{backgroundColor:'none'}} size={'small'} onClick={toggleExpanded}  endIcon={isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}>
                        {isExpanded ? 'Réduire' : 'Afficher la suite'}
                    </Button>
                </Box>
            )}
        </Typography>

    );
};

export default ShowMore;
