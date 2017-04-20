import React, { Component } from 'react';

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

import { ABOUT_PAGE, HOME_PAGE, LOCATION_PAGE } from '../../../../constants';

class LayoutComponent extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" selectedKeys={[ABOUT_PAGE]} onClick={(item) => {
                        console.log(item);
                    }}>
                        <Menu.Item key={HOME_PAGE}>
                            <Icon type="user" />
                            <span className="nav-text">Home</span>
                        </Menu.Item>
                        <Menu.Item key={ABOUT_PAGE}>
                            <Icon type="video-camera" />
                            <span className="nav-text">About</span>
                        </Menu.Item>
                        <Menu.Item key={LOCATION_PAGE}>
                            <Icon type="upload" />
                            <span className="nav-text">Location</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default LayoutComponent;