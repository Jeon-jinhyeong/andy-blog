import React, { ReactElement } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

function style() {
  return css`
    display: flex;
    justify-content: flex-start;
    height: 100%;
    #sideNav {
      width: 20%;
      height: 100%;
      background-color: #1a506d;
      color: #ffffff;
      .sideNavMenu {
        cursor: pointer;
        margin-top: 20px;
        font-weight: bold;
        font-size: 16px;
      }
    }
    #content {
      width: 80%;
      height: 100%;
      .main-content {
        padding-top: 20px;
      }
    }
  `;
}

export interface Menu {
  id: number;
  path: string;
  exact?: boolean;
  label: string;
  component: React.ReactNode;
  hidden?: boolean;
}

export interface SideNavProps {
  menus: Menu[];
  children?: JSX.Element[] | JSX.Element;
}

const pubUrl = process.env.PUBLIC_URL;

export const SideNav = (props: SideNavProps): ReactElement => {
  // const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  // let selectedMenuIndex = 0

  // useEffect(() => {
  // }, [selectedMenuIndex])

  return (
    <Router>
      <div className="SideNav" css={style()}>
        <div id="sideNav">
          <img
            alt="no"
            src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679690/noticon/g16oddfpbk4wci2ec7nr.gif"
          />
          {props.menus.map((menu: Menu) => {
            if (menu.hidden) return null;
            return (
              <div key={menu.id} className="sideNavMenu">
                <Link to={pubUrl + menu.path}>{menu.label}</Link>
              </div>
            );
          })}
        </div>
        <div id="content">
          {props.children}
          <Switch>
            <Route exact path={['/', pubUrl]}>
              <Redirect to={pubUrl + props.menus[0].path} />
            </Route>
            <Route exact path="/andy-blog">
              <Redirect to={pubUrl + props.menus[0].path} />
            </Route>
            {props.menus.map((route) => (
              <Route key={route.id} path={pubUrl + route.path} exact={route.exact}>
                {route.component}
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

SideNav.defaultProps = {};
