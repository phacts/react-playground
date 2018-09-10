import React, { Component } from 'react'
import { Icon, Label, Menu } from 'semantic-ui-react'

export default class PrimarySidebarFixed extends Component {
  state = { activeItem: 'learner' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const floatingStyle = {
      top: '10%',
      left: '85%',
    }

    return (
      <Menu vertical inverted icon='labeled' >
        <Menu.Item as='a' name='learner' active={activeItem === 'learner'}>
          <Icon name='home' />
          Learner
          {/* <Label attached='top right'  color='orange'>1</Label> */}
          <Label floating style={floatingStyle} circular color='orange' >1</Label>
        </Menu.Item>
        <Menu.Item as='a' name='profile' active={activeItem === 'profile'}>
          {/* <Label attached='top right' circular color='red'>21</Label> */}
          <Label floating style={floatingStyle} circular color='grey' >13</Label>
          <Icon name='user' />
          Profile
        </Menu.Item>
        <Menu.Item as='a' name='instructor' active={activeItem === 'instructor'}>
          {/* <Label attached='top right' circular color='red' style={{ marginTop: '1.5em' }}>21</Label> */}
          <Label floating style={floatingStyle} circular color='blue' >1</Label>
          <Icon name='camera' />
          Instructor
        </Menu.Item>
        <Menu.Item as='a' name='admin' active={activeItem === 'admin'}>
          <Label floating style={floatingStyle} circular color='red' >4</Label>
          <Icon name='lock' />
          Admin
        </Menu.Item>
      </Menu>
    )
  }
}