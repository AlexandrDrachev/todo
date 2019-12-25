
export const contentInitialState = {
  testValueContent: 'test value Content true',
  news: [
    {
      postId: 1,
      postImgUrl: '../../../images/news-image.jpg',
      postInfo: 'Информационный блог, который ведет специалист по программированию и информационным технологиям Шванов Вадим.\n' +
        'Проект Code blog будет интересен всем, кто хочет быть в курсе всех новостей современных информационных технологий,\n' +
        'или чья работа тесно связана с этой сферой.'
    }
  ],
  comments: [
    {
      postIdAddress: 1,
      commentId: 1,
      commentAuthor: 'Leanne Graham',
      commentText: 'laudantium enim quasi est quidem magnam voluptate ipsam eos ' +
        'tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'
    },
    {
      postIdAddress: 1,
      commentId: 2,
      commentAuthor: 'Leanne Graham',
      commentText: 'laudantium enim quasi est quidem magnam voluptate ipsam eos ' +
        'tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'
    },
    {
      postIdAddress: 2,
      commentId: 2,
      commentAuthor: 'Leanne Graham',
      commentText: 'laudantium enim quasi est quidem magnam voluptate ipsam eos ' +
        'tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium'
    }
  ],
  answers: [
    {
      commentIdAddress: 1,
      answerId: 1,
      answerAuthor: 'Ervin Howell',
      answerAuthorAddress: 'Leanne Graham',
      answerText: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus ' +
        'naccusamus in eum beatae sit nvel qui neque voluptates ut commodi qui incidunt nut animi commodi'
    }
  ]
};

export const contentReducer =  {

  'TEST_VALUE_CONTENT': (state, action) => {
    return {
      ...state,
      testValueContent: action.payload
    };
  }
};