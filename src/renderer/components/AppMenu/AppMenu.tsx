import * as React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

// const { SubMenu } = Menu;

interface IAppMenuProps {
    currentMenu: any;
}

export class AppMenu extends React.Component<IAppMenuProps> {
    render() {
        const { currentMenu } = this.props;
        // console.log(currentMenu);
        return (
            <Menu selectedKeys={currentMenu} mode="horizontal">
                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="login">
                    <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="protected">
                    <Link to="/protected">Protected</Link>
                </Menu.Item>
                <Menu.Item key="pageNotFound">
                    <Link to="/pageNotFound">pageNotFound</Link>
                </Menu.Item>
            </Menu>
        );
    }
}
