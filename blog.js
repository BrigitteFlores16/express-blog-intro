const express = require('express');
const blog = express();
const port = 3000;
blog.use(express.static('public'));
const posts = [
  { 
    title: 'Post 1',
    content: 'ciambellone', 
    image: 'ciambellone.jpeg',
    tags: ['cioccolato', 'dolce','zuccherato'] 
},
  { 
   title: 'Post 2', 
   content: 'cracker barbabietola',
   image: 'cracker_barbabietola.jpeg',
   tags: ['salato'] 
},
  { 
    title:'Post 3', 
    content:'pane fritto dolce', 
    image: 'pane_fritto_dolce.jpeg', 
    tags: ['fritto', 'dolce','farina'] 
},
  { title: 'Post 4',
    content:'pasta barbabietola', 
    image: 'pasta_barbabietola.jpeg',
    tags: ['farina', 'barbabietola'] 
    },
  { title: 'Post 5',
    content: 'torta paesana',
    image: 'torta_paesana.jpeg',
    tags: ['farina', 'uova']
     }
];

blog.get('/', (req, res) => {
  res.send('Server del mio blog');
});

blog.get('/bacheca', (req, res) => {
  res.json(posts);
});

blog.listen(port, () => {
  console.log(`server in ascolto sulla porta ${port}`);
});
