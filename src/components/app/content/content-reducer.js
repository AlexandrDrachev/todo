
export const contentInitialState = {
  testValueContent: 'test value Content true',
  posts: {
    1: {
      entryFieldComment: false,
      allCommentsView: false,
      postId: 1,
      postImgUrl: 'https://itelon.ru/upload/iblock/829/news_9-06.JPG',
      postInfo: 'Информационный блог, который ведет специалист по программированию и информационным технологиям Шванов Вадим.\n' +
        'Проект Code blog будет интересен всем, кто хочет быть в курсе всех новостей современных информационных технологий,\n' +
        'или чья работа тесно связана с этой сферой.'
    },
    2: {
      entryFieldComment: false,
      allCommentsView: false,
      postId: 2,
      postImgUrl: 'https://telegraf.com.ua/files/2015/08/1439199725_383877036.jpg',
      postInfo: 'Группа исследователей из Израиля, работающих в университете Бен-Гуриона, ' +
        'создали вредоносное программное обеспечение GSMem, способное проникнуть в неподключенный к Интернету ПК ' +
        'посредством проникновения с помощью съемного носителя данных (например, флешки или смартфона).'
    }
  },
  news: [
    {
      entryFieldComment: false,
      allCommentsView: false,
      postId: 1,
      postImgUrl: 'https://itelon.ru/upload/iblock/829/news_9-06.JPG',
      postInfo: 'Информационный блог, который ведет специалист по программированию и информационным технологиям Шванов Вадим.\n' +
        'Проект Code blog будет интересен всем, кто хочет быть в курсе всех новостей современных информационных технологий,\n' +
        'или чья работа тесно связана с этой сферой.'
    },
    {
      entryFieldComment: false,
      allCommentsView: false,
      postId: 2,
      postImgUrl: 'https://telegraf.com.ua/files/2015/08/1439199725_383877036.jpg',
      postInfo: 'Группа исследователей из Израиля, работающих в университете Бен-Гуриона, ' +
        'создали вредоносное программное обеспечение GSMem, способное проникнуть в неподключенный к Интернету ПК ' +
        'посредством проникновения с помощью съемного носителя данных (например, флешки или смартфона).'
    }
  ],
  newCommentInputText: '',
  comments: [
    {
      entryFieldAnswer: false,
      allAnswersView: false,
      postIdAddress: 1,
      commentId: 1,
      commentAuthor: 'Leanne Graham',
      authorAvatar: "https://via.placeholder.com/150/92c952",
      commentText: 'laudantium enim quasi est quidem magnam voluptate ipsam eos ' +
        'tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'
    },
    {
      entryFieldAnswer: false,
      allAnswersView: false,
      postIdAddress: 1,
      commentId: 2,
      commentAuthor: 'Ervin Howell',
      authorAvatar: "https://via.placeholder.com/150/771796",
      commentText: 'tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium' +
      'laudantium enim quasi est quidem magnam voluptate ipsam eos '
    },
    {
      entryFieldAnswer: false,
      allAnswersView: false,
      postIdAddress: 2,
      commentId: 3,
      commentAuthor: 'Clementine Bauch',
      authorAvatar: "https://via.placeholder.com/150/92c952",
      commentText: 'laudantium enim quasi est quidem magnam voluptate ipsam eos ' +
        'tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'
    },
    {
      entryFieldAnswer: false,
      allAnswersView: false,
      postIdAddress: 2,
      commentId: 4,
      commentAuthor: 'Patricia Lebsack',
      authorAvatar: "https://via.placeholder.com/150/771796",
      commentText: 'tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium' +
        'laudantium enim quasi est quidem magnam voluptate ipsam eos '
    }
  ],
  answers: [
    {
      commentIdAddress: 1,
      answerIdAddress: undefined,
      answerId: 1,
      answerAuthor: 'Ervin Howell',
      authorAvatar: 'https://via.placeholder.com/150/771796',
      answerAuthorAddress: 'Leanne Graham',
      answerText: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus ' +
        'naccusamus in eum beatae sit nvel qui neque voluptates ut commodi qui incidunt nut animi commodi'
    },
    {
      commentIdAddress: 1,
      answerIdAddress: 1,
      answerId: 2,
      answerAuthor: 'Patricia Lebsack',
      authorAvatar: 'https://via.placeholder.com/150/771796',
      answerAuthorAddress: 'Ervin Howell',
      answerText: 'tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium' +
        'laudantium enim quasi est quidem magnam voluptate ipsam eos '
    }
  ]
};

const getUpdatePost = (state, payload) => {
  return state.news.map((post) => {
    if (post.postId === payload) {
      return {
        ...post,
        allCommentsView: !post.allCommentsView
      }
    }
    return post;
  });
};

const getUpdateComment = (state, payload) => {
  return state.comments.map((comment) => {
    if (comment.commentId === payload) {
      return {
        ...comment,
        allAnswersView: !comment.allAnswersView
      }
    }
    return comment;
  });
};

const toggleEntryFieldComment = (state, payload) => {
  return state.news.map((post) => {
    if (post.postId === payload) {
      return {
        ...post,
        entryFieldComment: !post.entryFieldComment
      };
    }
    return post;
  });
};

const toggleEntryFieldAnswer = (state, payload) => {
  return state.comments.map((comment) => {
    if (comment.commentId === payload) {
      return {
        ...comment,
        entryFieldAnswer: !comment.entryFieldAnswer
      };
    }
    return comment;
  });
};

export const contentReducer =  {

  'TEST_VALUE_CONTENT': (state, action) => {
    return {
      ...state,
      testValueContent: action.payload
    };
  },
  'ON_TOGGLE_ALL_COMMENTS_VIEW': (state, action) => {
    return {
      ...state,
      news: getUpdatePost(state, action.payload)
    };
  },
  'ON_TOGGLE_ALL_COMMENTS_VIEW_': (state, action) => {
    return {
      ...state,
      posts: {
        ...state.posts,
        [action.id]: {
          ...state.posts[action.id],
          allCommentsView: !state.posts[action.id].allCommentsView
        }
      }
    };
  },
  'ON_CHANGE_NEW_COMMENT_INPUT_TEXT': (state, action) => {
    return {
      ...state,
      newCommentInputText: action.payload
    };
  },
  'DEFAULT_COMMENT_INPUT_TEXT': (state) => {
    return {
      ...state,
      newCommentInputText: ''
    };
  },
  'RENDER_NEW_COMMENT': (state, action) => {
    return {
      ...state,
      comments: [
        ...state.comments,
        action.payload
      ]
    };
  },
  'ON_TOGGLE_ALL_ANSWERS_VIEW': (state, action) => {
    return {
      ...state,
      comments: getUpdateComment(state, action.payload)
    };
  },
  'ON_TOGGLE_ENTRY_FIELD_COMMENT': (state, action) => {
    return {
      ...state,
      news: toggleEntryFieldComment(state, action.payload)
    };
  },
  'ON_TOGGLE_ENTRY_FIELD_ANSWER': (state, action) => {
    return {
      ...state,
      comments: toggleEntryFieldAnswer(state, action.payload)
    };
  }
};