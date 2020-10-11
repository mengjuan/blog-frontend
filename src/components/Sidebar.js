import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
		
		  <Menu >
		    <MenuItem >Java</MenuItem>
		    <SubMenu title="Spring" >
		      <MenuItem>技术 <Link to="/tech" /></MenuItem>
		      <MenuItem>生活 <Link to="/life" /></MenuItem>
		    </SubMenu>
		  </Menu>
		
		)
}

export default Sidebar