import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LaCaveIcon from './LaCaveIcon';
import ColorModeIconDropdown from '../theme/ColorModeIconDropdown';
import {Link} from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexShrink: 0,
	borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
	backdropFilter: 'blur(24px)',
	border: '1px solid',
	borderColor: theme.palette.divider,
	backgroundColor: alpha(theme.palette.background.default, 0.4),
	boxShadow: theme.shadows[1],
	padding: '8px 12px',
}));

export default function Navbar() {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	return (
		<AppBar
			position="fixed"
			enableColorOnDark
			sx={{
				boxShadow: 0,
				bgcolor: 'transparent',
				backgroundImage: 'none',
				mt: 'calc(var(--template-frame-height, 0px) + 28px)',
			}}
		>
			<Container maxWidth="lg">
				<StyledToolbar variant="dense" disableGutters>
					<Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
						<Link to={'/'}>
							<LaCaveIcon/>
						</Link>
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<Link to={"/"}>
								<Button color="info" size="small" >
									Accueil
								</Button>
							</Link>
							<Link to={"/products"}>
								<Button variant="text" color="info" size="small">
									Notre Gamme
								</Button>
							</Link>
							<Link to={"/the-room"}>
								<Button variant="text" color="info" size="small" >
									La salle
								</Button>
							</Link>
							<Link to={"/about"}>
								<Button variant="text" color="info" size="small">
									À Propos
								</Button>
							</Link>

						</Box>
					</Box>
					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
							gap: 1,
							alignItems: 'center',
						}}
					>

						<ColorModeIconDropdown />
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
						<ColorModeIconDropdown size="medium" />
						<IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor="top"
							open={open}
							onClose={toggleDrawer(false)}
							PaperProps={{
								sx: {
									top: 'var(--template-frame-height, 0px)',
								},
							}}
						>
							<Box sx={{ p: 2, backgroundColor: 'background.default' }}>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'flex-end',
									}}
								>
									<IconButton onClick={toggleDrawer(false)}>
										<CloseRoundedIcon />
									</IconButton>
								</Box>
								<MenuItem component={Link} to="/" sx={{ color: 'info', textDecoration: 'none' }}>
									Accueil
								</MenuItem>
								<MenuItem component={Link} to="/products" sx={{ color: 'info', textDecoration: 'none' }}>
									Notre gamme
								</MenuItem>
								<MenuItem component={Link} to="/the-room" sx={{ color: 'info', textDecoration: 'none' }}>
									La Salle
								</MenuItem>
								<MenuItem component={Link} to="/about" sx={{ color: 'info', textDecoration: 'none' }}>
									À Propos
								</MenuItem>

								<Divider sx={{ my: 3 }} />

							</Box>
						</Drawer>
					</Box>
				</StyledToolbar>
			</Container>
		</AppBar>
	);
}
