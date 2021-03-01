import React, { ReactElement } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

function style() {
  return css`
    background-color: #297116;
    color: white;
    height: 50px;
    img {
      height: 100%;
    }
  `;
}

export interface HeaderProps {
  imageUrl?: string;
}

export const Header = (props: HeaderProps): ReactElement => {
  return (
    <div className="Header" css={style()}>
      {props.imageUrl && <img alt="no" src={props.imageUrl} />}
    </div>
  );
};

Header.defaultProps = {};
