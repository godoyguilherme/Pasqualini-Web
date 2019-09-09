import "./customHeader.css";
import React, { Component } from "react";
import { logout, collapseSiderChange } from "../../actions";
import { connect } from "react-redux";
import { Layout, Icon, Dropdown, Avatar, Menu } from "antd";
const { Header } = Layout;

const userMenu = ({ logout }) => (
  <Menu>
    <Menu.Item key="1">
      <Icon type="stop" />
      Bloquear Tela
    </Menu.Item>
    <Menu.Item key="2" onClick={logout}>
      <Icon type="poweroff" />
      Sair do Sistema
    </Menu.Item>
  </Menu>
);

class CustomHeader extends Component {
  toggle = () => {
    this.props.collapseSiderChange();
  };

  renderUserMenu = () => {
    return (
      <div
        style={{
          width: "50px",
          float: "right",
          textAlign: "center",
          marginRight: "10px"
        }}
      >
        <Dropdown overlay={userMenu(this.props)}>
          <Avatar size="large" icon="user" />
        </Dropdown>
      </div>
    );
  };

  render() {
    const triggerStyle = {
      fontSize: "18px",
      lineHeight: "64px",
      padding: "0 24px",
      cursor: "pointer",
      transition: "color 0.3s",
      triggerhover: "#1890ff"
    };

    return (
      <Header
        style={{
          background: "linear-gradient(to right, #a8caba 0%, #5d4157 100%)",
          padding: "0"
        }}
      >
        <Icon
          onClick={this.toggle}
          style={triggerStyle}
          type={this.props.collapsedSider ? "menu-unfold" : "menu-fold"}
        />
        {this.renderUserMenu()}
      </Header>
    );
  }
}

const mapStateToPros = ({ auth, app }) => {
  return { auth, collapsedSider: app.collapsedSider };
};

export default connect(
  mapStateToPros,
  { logout, collapseSiderChange }
)(CustomHeader);
