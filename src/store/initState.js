const initState = {
  layers: [
    {
      key: 1,
      name: 'head',
      options: [
        {
          id: 1,
          zindex: 40,
          file: 'zomboji-10.png'
        },
        {
          id: 2,
          zindex: 40,
          file: 'zomboji-11.png'
        },
        {
          id: 3,
          zindex: 48,
          file: 'zomboji-12.png'
        }
      ]
    },
    {
      key: 2,
      name: 'eyes',
      options: [
        {
          id: 1,
          zindex: 30,
          file: 'zomboji-7.png'
        },
        {
          id: 2,
          zindex: 45,
          file: 'zomboji-8.png'
        },
        {
          id: 3,
          zindex: 30,
          file: 'zomboji-9.png'
        }
      ]
    },
    {
      key: 3,
      name: 'nose',
      options: [
        {
          id: 1,
          zindex: 20,
          file: 'zomboji-5.png'
        },
        {
          id: 2,
          zindex: 20,
          file: 'zomboji-6.png'
        }
      ]
    },
    {
      key: 4,
      name: 'beard',
      options: [
        {
          id: 1,
          zindex: 10,
          file: 'zomboji-2.png'
        },
        {
          id: 2,
          zindex: 10,
          file: 'zomboji-3.png'
        },
        {
          id: 3,
          zindex: 10,
          file: 'zomboji-4.png'
        }
      ]
    }
  ]
}

export default initState
