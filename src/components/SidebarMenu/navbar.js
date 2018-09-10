import React from 'react'
import { Dropdown, Menu, Icon } from 'semantic-ui-react'

// TODO: Update <Search> usage after its will be implemented

const NavbarExample = () => {

  return (
    
    <div>
      <Menu attached='top'>


        {/* <Menu.Menu position='left'> */}
          <Menu.Item icon name='Home'>
            <Icon name='bars'></Icon>
          </Menu.Item>
        {/* </Menu.Menu> */}

        

        <Menu.Menu position='right'>
          {/* <div className='ui right aligned category search item'>
            <div className='ui transparent icon input'>
              <input className='prompt' type='text' placeholder='Search...' />
              <i className='search link icon' />
            </div>
            <div className='results' />
          </div> */}
          <Menu.Item>
            <div className='ui transparent icon input'>
              <input className='prompt' type='text' placeholder='Search...' />
              <i className='search link icon' />
            </div>
          </Menu.Item>
          <Menu.Item style={{ padding: '0px' }}>
            <Dropdown item icon='bell' basic>
              <Dropdown.Menu>
                <Dropdown.Header>Latest Notifications</Dropdown.Header>
                <Dropdown.Item>You have one new task You have one new task</Dropdown.Item>
                <Dropdown.Item>Someone said something to you</Dropdown.Item>
                <Dropdown.Item>Another thing happened, you can count on it.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Dropdown item icon='user' basic> 
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Subscription Settings</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Session</Dropdown.Header>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
        
      </Menu>

      {/* <Segment attached='bottom'>
        <img src='/images/wireframe/paragraph.png' />
      </Segment> */}
    </div>
  );
}

export default NavbarExample