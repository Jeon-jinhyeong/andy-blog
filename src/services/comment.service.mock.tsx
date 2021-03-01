import { Comment } from '../object-model/model';

const comments: Comment[] = [
  {
    id: 1,
    content: '댓글 1 내용',
    createdBy: 'Andy the 투명 드래곤',
    createdAt: '2021-02-16 00:00:00',
    updatedAt: '2021-02-16 00:00:00',
  },
  {
    id: 2,
    content: '댓글 2 내용',
    createdBy: 'Andy the 투명 드래곤',
    createdAt: '2021-02-16 00:00:00',
    updatedAt: '2021-02-16 00:00:00',
  },
  {
    id: 3,
    content: '댓글 3 내용',
    createdBy: 'Andy the 투명 드래곤',
    createdAt: '2021-02-16 00:00:00',
    updatedAt: '2021-02-16 00:00:00',
  },
  {
    id: 4,
    content: '댓글 4 내용',
    createdBy: 'Andy the 투명 드래곤',
    createdAt: '2021-02-16 00:00:00',
    updatedAt: '2021-02-16 00:00:00',
  },
  {
    id: 5,
    content: '댓글 5 내용',
    createdBy: 'Andy the 투명 드래곤',
    createdAt: '2021-02-16 00:00:00',
    updatedAt: '2021-02-16 00:00:00',
  },
  {
    id: 6,
    content: '댓글 6 내용',
    createdBy: 'Andy the 투명 드래곤',
    createdAt: '2021-02-16 00:00:00',
    updatedAt: '2021-02-16 00:00:00',
  },
  {
    id: 7,
    content: '댓글 7 내용',
    createdBy: 'Andy the 투명 드래곤',
    createdAt: '2021-02-16 00:00:00',
    updatedAt: '2021-02-16 00:00:00',
  },
  {
    id: 8,
    content: '댓글 8 내용',
    createdBy: 'Andy the 투명 드래곤',
    createdAt: '2021-02-16 00:00:00',
    updatedAt: '2021-02-16 00:00:00',
  },
];

export const CommentServiceMock = {
  getComments: () => {
    return Promise.resolve(comments);
  },
  getComment: (id: number) => {
    const foundComment: Comment | undefined = comments.find((comment: Comment) => {
      return comment.id === id;
    });
    return Promise.resolve(foundComment);
  },
  writeComment: () => {
    return Promise.resolve(1);
  },
  updateComment: () => {
    return Promise.resolve(1);
  },
  deleteComment: () => {
    return Promise.resolve(1);
  },
};
