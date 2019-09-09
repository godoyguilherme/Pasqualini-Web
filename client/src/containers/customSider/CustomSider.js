import React, { Component } from "react";
import Logo from "../../components/logo/Logo";
import { connect } from "react-redux";
import { collapseSiderChange } from "../../actions";
import { Layout, Menu, Icon } from "antd";
import "./customSider.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

class CustomSider extends Component {
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  state = {
    openKeys: []
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  //Sider - 100 Vicious Stance
  //Menu - 100 Vicious Stance
  //Menu.Item customClass - 133 Orange Juice

  render() {
    return (
      <Sider
        style={{
          background: "linear-gradient(60deg, #29323c 0%, #485563 100%)"
        }}
        trigger={null}
        breakpoint="lg"
        collapsedWidth="0"
        width="220"
        collapsed={this.props.collapsedSider}
        onBreakpoint={isMobileSize => {
          if (isMobileSize && !this.props.collapsedSider) {
            this.props.collapseSiderChange();
          }
        }}
      >
        <Logo />
        <Menu
          style={{
            background: "linear-gradient(60deg, #29323c 0%, #A7C8B8 100%)"
          }}
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          theme="dark"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="folder-add" />
                <span>Cadastros Básicos</span>
              </span>
            }
          >
            <Menu.Item className="customclass" key="1">
              Estados
            </Menu.Item>
            <Menu.Item className="customclass" key="2">
              Cidades
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="dollar" />
                <span>Movimentações</span>
              </span>
            }
          >
            <Menu.Item className="customclass" key="1">
              Locações
            </Menu.Item>
            <Menu.Item className="customclass" key="2">
              Locadores
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

const mapStateToPros = ({ app }) => {
  return {
    collapsedSider: app.collapsedSider
  };
};

export default connect(
  mapStateToPros,
  { collapseSiderChange }
)(CustomSider);
