const express = require('express');
const blog = express();
const port = 3000;
blog.use(express.static('public'));
const posts = [
  { 
    title: 'Post 1',
    content: 'ciambellone', 
    img: '/img/ciambellone.jpeg',
    tags: ['cioccolato', 'dolce','zuccherato'] 
},
  { 
   title: 'Post 2', 
   content: 'cracker barbabietola',
   img: '/img/cracker_barbabietola.jpeg',
   tags: ['salato', 'barbabietola'] 
},
  { 
    title:'Post 3', 
    content:'pane fritto dolce', 
    img: '/img/pane_fritto_dolce.jpeg', 
    tags: ['fritto', 'dolce','farina'] 
},
  { title: 'Post 4',
    content:'pasta barbabietola', 
    img: '/img/pasta_barbabietola.jpeg',
    tags: ['farina', 'barbabietola'] 
    },
  { title: 'Post 5',
    content: 'torta paesana',
    img: '/img/torta_paesana.jpeg',
    tags: ['farina', 'uova']
  }
];

blog.get('/', (req, res) => {
  res.json('Server del mio blog');
});

blog.get('/bacheca', (req, res) => {
  const data ={
    posts: posts,
    length : posts.lenght,
  };
  res.json(data);
});

blog.listen(port, () => {
  console.log(`server in ascolto sulla porta ${port}`);
});
