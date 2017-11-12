export function getUserLists() {
  console.log('getting user lists data');
  return [
    {
      title: 'Backlog',
      items: [
        {
          title: 'Pre-Sale/Planning/Execution Design Spring Planning',
          lastModified: '27/09'
        },
        {
          title: 'Mentor Program - for all SZ site',
          lastModified: '30/09'
        },
        {
          title: 'UNSW Cafe Red Centre',
          lastModified: '27/09',
          imageUrl: 'http://via.placeholder.com/350x150'
        }
      ]
    },
    {
      title: 'To-Do',
      items: [
        {
          title: 'Pre-Sale/Planning/Execution Design Spring Planning',
          lastModified: '27/09'
        },
        {
          title: 'Website Launch and testing',
          lastModified: '27/09'
        },
        {
          title: 'Mentor Program - for all SZ site',
          lastModified: '30/09'
        },
        {
          title: 'Heineken Party',
          lastModified: '27/09',
          imageUrl: 'http://via.placeholder.com/350x150'
        }
      ]
    },
    {
      title: 'In Progress',
      items: [
        {
          title: 'Files updated',
          lastModified: '27/09',
          imageUrl: 'http://via.placeholder.com/350x50'
        },
        {
          title: 'Pre-Sale/Planning/Execution Design Spring Planning',
          lastModified: '27/09'
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
      name: 'Elliot',
      avatarUrl: '/homework/js-academy-client/static/assets/images/elliot.jpg'
    },
    {
      name: 'Joe',
      avatarUrl: '/homework/js-academy-client/static/assets/images/Joe.jpg'
    },
    {
      name: 'Stevie',
      avatarUrl: '/homework/js-academy-client/static/assets/images/stevie.jpg'
    }
  ]
}