import React from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

// name -> name of the menu
// anchorEl -> the event.currentTarget or menu button
// onClose -> the close function
// dataItem -> Contains the name and functions needed
const MenuBar = ({
  name,
  anchorRef,
  handleClose,
  open,
  handleListKeyDown,
  dataItem
}) => {
  return (
    <Popper
      id={name}
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      onClose={handleClose}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom"
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="menu-list-grow"
                onKeyDown={handleListKeyDown}
              >
                {dataItem.map(x => (
                  <MenuItem key={x.name} onClick={x.handleFunction}>
                    {x.name}
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default MenuBar;
