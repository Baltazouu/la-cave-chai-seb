import * as React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import ContrastIcon from '@mui/icons-material/Contrast';
import Box from '@mui/material/Box';
import IconButton, { IconButtonOwnProps } from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';

export default function ColorModeIconDropdown(props: IconButtonOwnProps) {
    const { mode, systemMode, setMode } = useColorScheme();

    const handleModeChange = () => {
        const nextMode = mode === 'light' ? 'dark' : mode === 'dark' ? 'system' : 'light';
        setMode(nextMode);
    };

    if (!mode) {
        return (
            <Box
                data-screenshot="toggle-mode"
                sx={(theme) => ({
                    verticalAlign: 'bottom',
                    display: 'inline-flex',
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: theme.shape.borderRadius,
                    border: '1px solid',
                    borderColor: theme.palette.divider,
                })}
            />
        );
    }
    const resolvedMode = mode === 'system' ? systemMode || 'light' : mode;

    const icon = {
        light: <LightModeIcon />,
        dark: <DarkModeIcon />,
        system: <ContrastIcon />,
    }[mode === 'system' ? 'system' : resolvedMode];

    return (
        <IconButton
            data-screenshot="toggle-mode"
            onClick={handleModeChange}
            disableRipple
            size="small"
            {...props}
        >
            {icon}
        </IconButton>
    );
}