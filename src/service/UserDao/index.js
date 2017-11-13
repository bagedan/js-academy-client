export function getUserLists() {
  console.log('getting user lists data');
  return [
    {
      title: 'Backlog',
      items: [
        {
          id: 'item1',
          title: 'Pre-Sale/ Planning/ Execution Design Spring Planning',
          lastModified: '27/09',
          color: 'red'
        },
        {
          id: 'item2',
          title: 'Mentor Program - for all SZ site',
          lastModified: '30/09',
          color: 'green'
        },
        {
          id: 'item3',
          title: 'UNSW Cafe Red Centre',
          lastModified: '27/09',
          imageUrl: 'http://via.placeholder.com/350x150',
          color: 'blue'
        }
      ]
    },
    {
      title: 'To-do',
      items: [
        {
          id: 'item4',
          title: 'Pre-Sale/ Planning/ Execution Design Spring Planning',
          lastModified: '27/09',
          color: 'red'
        },
        {
          id: 'item5',
          title: 'Website Launch and testing',
          lastModified: '27/09',
          color: 'violet'
        },
        {
          id: 'item6',
          title: 'Mentor Program - for all SZ site',
          lastModified: '30/09',
          color: 'green'
        },
        {
          id: 'item7',
          title: 'Heineken Party',
          lastModified: '27/09',
          color: 'orange'
        }
      ]
    },
    {
      title: 'In Progress',
      items: [
        {
          id: 'item8',
          title: 'Files updated',
          lastModified: '27/09',
          imageUrl: 'http://via.placeholder.com/350x50',
          color: 'blue'
        },
        {
          id: 'item9',
          title: 'Pre-Sale/ Planning/ Execution Design Spring Planning',
          lastModified: '27/09',
          color: 'orange'
        }
      ]
    },
    {
      title: 'Done',
      items: []
    }
  ]
}

export function getUserAvatars(){
  return [
    {
      id: 'user1',
      name: 'Elliot',
      avatarUrl: '/homework/js-academy-client/static/assets/images/elliot.jpg',
      markWithStar: true
    },
    {
      id: 'user2',
      name: 'Joe',
      avatarUrl: '/homework/js-academy-client/static/assets/images/Joe.jpg'
    },
    {
      id: 'user3',
      name: 'Stevie',
      avatarUrl: '/homework/js-academy-client/static/assets/images/stevie.jpg'
    }
  ]
}