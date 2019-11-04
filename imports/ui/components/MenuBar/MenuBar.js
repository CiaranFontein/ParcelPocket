import React from "react";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.flexToolbar}>
        <Link to="./items">
          <IconButton
            className={classes.iconButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <img src={logo} alt="logo" width="40px" />
          </IconButton>
        </Link>
        <div className={classes.rightSideIcons}>
          <Link to="./share">
            <Button className={classes.iconButton}>
              <AddCircle />
              Share Something
            </Button>
          </Link>
          <IconButton
            onClick={handleClick}
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.iconButton}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options.map((option, index) => (
              <Link key={index} to={option.path}>
                <MenuItem to={option.path} onClick={handleClose}>
                  <ListItemIcon>{option.icon}</ListItemIcon>
                  <Typography noWrap>{option.name}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
