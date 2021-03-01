import React, { ReactElement } from 'react';
import './App.css';
import { BlogDetail } from './components/BlogDetail/BlogDetail';
import { Header } from './components/Header/Header';
import { Menu, SideNav } from './components/SideNav/SideNav';
import { List } from './components/List/List';
import { Write } from './components/Write/Write';
import { AndyProvider } from './services/api';
import { PostServiceMock } from './services/post.service.mock';
import { CommentServiceMock } from './services/comment.service.mock';

const menus: Menu[] = [
  {
    id: 1,
    path: '/post',
    exact: true,
    label: '게시글 리스트',
    component: <List />,
  },
  {
    id: 2,
    path: '/new',
    label: '글쓰기',
    component: <Write />,
  },
  {
    id: 3,
    path: '/post/:postId',
    label: '상세 페이지',
    component: <BlogDetail />,
    hidden: true,
  },
  {
    id: 4,
    path: '/update/:postId',
    label: '글쓰기',
    component: <Write />,
    hidden: true,
  },
];

const App = (): ReactElement => {
  return (
    <AndyProvider andy={{ post: PostServiceMock, comment: CommentServiceMock }}>
      <div className="App" style={{ height: '100%' }}>
        <SideNav menus={menus}>
          <Header imageUrl="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603852170/noticon/iwbd31aaoxcxh1ololsi.png" />
        </SideNav>
      </div>
    </AndyProvider>
  );
};

export default App;
