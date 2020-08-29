import React, { Component } from 'react'
import { Menu, DropdownItem, DropdownMenu, Dropdown} from 'semantic-ui-react'
import { Link } from 'gatsby'
import 'semantic-ui-less/semantic.less'

export default class MenuHeader extends Component {
  state = {
      californiaActive: false,
      nevadaActive: false,
      hawaiiActive: false
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  toggleCaliforniaClass = () => this.setState(prevState => ({ californiaActive: !prevState.californiaActive}))
  toggleNevadaClass = () => this.setState(prevState => ({ nevadaActive: !prevState.nevadaActive}))
  toggleHawaiiClass = () => this.setState(prevState => ({ hawaiiActive: !prevState.hawaiiActive}))

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
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
          name='resources'
          active={activeItem === 'resources'}
          onClick={this.handleItemClick}
          as={Link}
          to={`/resources`}
        />
        <Dropdown item
                  text='California'
                  className={this.state.californiaActive ? 'visible': null}
                  onClick={this.toggleCaliforniaClass}>
          <DropdownMenu>
            {this.props.california.map(({ node }) => (
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
    )
  }
}