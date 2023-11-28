import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
import { alpha, useTheme, styled, Box, List, ListItemText, ListItemIcon, ListItemButton, Modal, Typography, Collapse } from '@mui/material';
import Iconify from './Iconify';

const ListItemStyle = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func,
};

function NavItem({ item, active }) {
  const theme = useTheme();
  const { title, path, icon, info, children } = item;
  const isActiveRoot = active(path);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          onClick={handleOpenModal}
          sx={{
            ...(isActiveRoot && activeRootStyle),
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Iconify
            icon={openModal ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        {/* Modal for "page information" */}
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <Typography variant="h6" component="h2">
              {title}
            </Typography>
            {/* Add additional content for the modal if needed */}
          </Box>
        </Modal>

        {/* Render nested items */}
        {openModal && (
          <Collapse in={openModal} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map((item) => (
                <ListItemStyle
                  key={item.title}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    ...(active(item.path) && {
                      color: 'text.primary',
                      fontWeight: 'fontWeightMedium',
                    }),
                  }}
                >
                  <ListItemIconStyle>{item.icon && item.icon}</ListItemIconStyle>
                  <ListItemText disableTypography primary={item.title} />
                </ListItemStyle>
              ))}
            </List>
          </Collapse>
        )}
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

NavSection.propTypes = {
  navConfig: PropTypes.array,
};

export default function NavSection({ navConfig, ...other }) {
  const { pathname } = useLocation();

  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
}
