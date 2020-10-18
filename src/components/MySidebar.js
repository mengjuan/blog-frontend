import React, { useState } from 'react'
import Sidebar from 'react-sidebar'

const MySidebar = () => {
    const initialState = {
    	sidebarOpen: true
    }
    const [sidebarOpenState, setSidebarOpenState] = useState(true)

	return (
		<Sidebar 
			sidebar={<b>Sidebar content</b>}
			open={sidebarOpenState}
			onSetopen={setSidebarOpenState}
			styles={{ sidebar: { background: "white" } }}
		>
			<button onClick={() => this.setSidebarOpenState(true)}>
	          Open sidebar
	        </button>
	    </Sidebar>
		)
}

export default MySidebar