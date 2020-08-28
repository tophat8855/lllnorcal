import React, { Component } from 'react'
import { Menu, DropdownItem, DropdownMenu, Dropdown} from 'semantic-ui-react'
import { Link } from 'gatsby'
import 'semantic-ui-less/semantic.less'

export default class MenuHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
          to={`/about/`}
        />
        <Menu.Item
          name='resources'
          active={activeItem === 'resources'}
          onClick={this.handleItemClick}
          as={Link}
          to={`/resources/`}
        />
        <Dropdown item text='California'>
          <DropdownMenu>
            {this.props.california.map(({ node }) => (
              <DropdownItem key={node.id} as={Link} to={node.fields.slug}>
                {node.frontmatter.group}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown item text='Hawaii'>
          <DropdownMenu>
            {this.props.hawaii.map(({ node }) => (
              <DropdownItem key={node.id} as={Link} to={node.fields.slug}>
                {node.frontmatter.group}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown item text='Nevada'>
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
