import React, { Component } from 'react'
import { Icon, Label, Menu } from 'semantic-ui-react'

export default class SidebarMenuFixed extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const labelStyles = {
      marginTop: '0px'
    };

    return (
      <Menu vertical inverted>
        <Menu.Item>
          <Menu.Header>Cybrary</Menu.Header>
          <Menu.Menu>
            <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
              Home
              <Icon name='home'></Icon>
            </Menu.Item>
            <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
              Tasks
              <Icon name='tasks'></Icon>
              <Label style={labelStyles} color='red' circular empty={true}></Label>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Courses</Menu.Header>
          <Menu.Menu>
            <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
              CISPA A+
              <Icon name='globe'></Icon>
            </Menu.Item>
            <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
              
              Windows 10 Security
              <Icon name='windows'></Icon>
              <Label style={labelStyles} color='orange' circular empty={true}></Label>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Groups</Menu.Header>
          <Menu.Menu>
            <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
              Mastercard
              <Icon name='credit card'></Icon>
              {/* <Label style={labelStyles} color='blue' circular empty={true}></Label> */}
            </Menu.Item>
            <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
              CISPA A+
              <Icon name='globe'></Icon>
              <Label style={labelStyles} color='blue' circular empty={true}></Label>
            </Menu.Item>
            <Menu.Item name='spam' active={activeItem === 'spam'} onClick={this.handleItemClick}>
              Windows 10 Security
              <Icon name='windows'></Icon>
              <Label style={labelStyles} color='olive' circular empty={true}></Label>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>


        <Menu.Item as='a'>
          Discussions
          <Icon name='chat'></Icon>
        </Menu.Item>
        <Menu.Item as='a'>
          Cybrary Live
          <Icon name='video camera'></Icon>
          <Label style={labelStyles} color='red' circular empty={true}></Label>
        </Menu.Item>
        <Menu.Item as='a'>
          Learner Preferences
          <Icon name='cog'></Icon>
        </Menu.Item>


        {/* <Menu.Item>
          <Input icon='search' placeholder='Search mail...' />
        </Menu.Item> */}
        
      </Menu>
    )
  }
}