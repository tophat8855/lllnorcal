import React, { Component } from 'react'
import { Menu, DropdownItem, DropdownMenu, Dropdown} from 'semantic-ui-react'
import { Link } from 'gatsby'
import 'semantic-ui-less/semantic.less'

export default class MenuHeader extends Component {
  state = {
      northernCaliforniaActive: false,
      southernCaliforniaActive: false,
      nevadaActive: false,
      hawaiiActive: false
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  toggleNorthernCaliforniaClass = () => this.setState(prevState => ({ northernCaliforniaActive: !prevState.northernCaliforniaActive}))
  toggleSouthernCaliforniaClass = () => this.setState(prevState => ({ southernCaliforniaActive: !prevState.southernCaliforniaActive}))
  toggleNevadaClass = () => this.setState(prevState => ({ nevadaActive: !prevState.nevadaActive}))
  toggleHawaiiClass = () => this.setState(prevState => ({ hawaiiActive: !prevState.hawaiiActive}))

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu className='stackable'>
        <Menu.Item header as={Link} to={`/`}>
            {this.props.title}
        </Menu.Item>
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          as={Link}
          to={`/about`}
        />
         <Menu.Item
          name='Meeting Calendar'
          active={activeItem === 'calendar'}
          onClick={this.handleItemClick}
          as={Link}
          to={`/calendar`}
        />
         <Menu.Item
          name='Map of Groups'
          active={activeItem === 'map'}
          onClick={this.handleItemClick}
          as={Link}
          to={`/map`}
        />
        <Menu.Item
          name='resources'
          active={activeItem === 'resources'}
          onClick={this.handleItemClick}
          as={Link}
          to={`/resources`}
        />
      </Menu>
      <Menu className='stackable'>
        <Menu.Item header >
            Groups
        </Menu.Item>
        <Dropdown item
                  text='Northern California'
                  className={this.state.northernCaliforniaActive ? 'visible': null}
                  onClick={this.toggleNorthernCaliforniaClass}>
          <DropdownMenu>
            {this.props.northernCalifornia.map(({ node }) => (
              <DropdownItem key={node.id}
                            as={Link}
                            to={node.fields.slug}>
                {node.frontmatter.group}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown item
                  text='Southern California'
                  className={this.state.southernCaliforniaActive ? 'visible': null}
                  onClick={this.toggleSouthernCaliforniaClass}>
          <DropdownMenu>
            {this.props.southernCalifornia.map(({ node }) => (
              <DropdownItem key={node.id}
                            as={Link}
                            to={node.fields.slug}>
                {node.frontmatter.group}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown item
                  text='Hawaii'
                  className={this.state.hawaiiActive ? 'visible': null}
                  onClick={this.toggleHawaiiClass}>
          <DropdownMenu>
            {this.props.hawaii.map(({ node }) => (
              <DropdownItem key={node.id} as={Link} to={node.fields.slug}>
                {node.frontmatter.group}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown item
                  text='Nevada'
                  className={this.state.nevadaActive ? 'visible': null}
                  onClick={this.toggleNevadaClass}>
          <DropdownMenu>
            {this.props.nevada.map(({ node }) => (
              <DropdownItem key={node.id} as={Link} to={node.fields.slug}>
                {node.frontmatter.group}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </Menu>
      </div>
   )
  }
}