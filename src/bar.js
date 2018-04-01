import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';

import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { fuction1, fuction2 } from './drawer图案';
import Drawer from 'material-ui/Drawer';
const styles = {
  root: {
    flexGrow: 1,
    hight: 10,
  },
 
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  //
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class MenuAppBar extends Component {
  state = {
    auth: true,
    anchorEl: null,
    left: false
  };

  //控制drawer出现或隐藏
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  //登入登出控制
  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };
  
  //toolbar上最右侧登入显示button按钮呼出菜单
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };


  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  
  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    
    // 对drawer呼出菜单的渲染
    const sideList = (
      <div className={classes.list}>
        <List>{fuction1}</List>
        <Divider />
        <List>{fuction2}</List>
      </div>
    );

//FormGroup组件对左上角登入登出按钮控制
//AppBar 中 position控制整栏位置 已知有absolute与 其他两项区别
// Toolbar内 可编辑应用栏上的各项组件
// IconButton应为material-ui中对 按钮 项目的渲染
// 例如 MenuIcon 即为菜单图案
// Drawer组件内为对 抽屉组件的实现 但组件中‘ tabIndex={0} role="button" ’两行未理解什么意思
//Typography 实现对应用栏文本部分的编辑
// 在接下来对右侧Menu组件的实现中 ‘auth &&’ 与 为什么该按钮会出现在最右端不能理解
    return (
      <div className={classes.root}>
       
        <FormGroup>
         <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />  
            }
            label={auth ? '登出' : '登录'}
          />
           </FormGroup>
        
        
        <AppBar position="1">  
          <Toolbar>  
          
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
             onClick={this.toggleDrawer('left', true)} >
              <MenuIcon />  
             </IconButton>
            
             <Drawer open={this.state.left}
              onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>


            <Typography variant="title" color="inherit" className={classes.flex}>
              Welcome            
            </Typography>


            {auth && (                                     //应用栏右侧的登录标志
              <div>
                
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}  
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>  
               
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}           //该程序段为打开应用栏右侧圆形按钮所示的菜单
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>菜单1</MenuItem>

                  <MenuItem onClick={this.handleClose}>菜单项2</MenuItem>
                </Menu>
              
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);