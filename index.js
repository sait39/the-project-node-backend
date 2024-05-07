const express = require('express');
require('./mongooseConnect');

const { addDays } = require('date-fns');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get('notes', (req, res) => {
  res.json([
    {
      Hello: 'World',
    },
  ]);
});

app.post('notes', async (req, res) => {
  try {
    await saveNote({
      title: 'My new Note',
      text: 'This is the content of the new note.',
      completed: false,
      created_at: new Date(),
    });

    res.status(201).json({ message: 'Note created successfully' });
  } catch (error) {
    console.error('Error creating note:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/static-notes', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'First Note',
      text: 'Lorem Ipsum of the First Note. Minim nostrud sit veniam ullamco voluptate officia quis ut minim ea.',
      completed: false,
      created_at: new Date(),
    },
    {
      id: 2,
      title: 'Second Note',
      text: 'Lorem Ipsum of the Second Note. Enim cupidatat laboris cillum sit eu reprehenderit cillum laboris. Irure tempor duis cupidatat cillum. Enim nulla magna duis sit sint pariatur eiusmod pariatur nisi dolor qui do ex. Laboris in dolor in ullamco aliqua velit occaecat velit. Nostrud consectetur aliquip excepteur minim in nisi incididunt laboris nulla aliquip minim dolore aliqua. Cupidatat reprehenderit aute nisi eiusmod elit exercitation.',
      completed: false,
      created_at: addDays(new Date(), 4),
    },
    {
      id: 3,
      title: 'Third Note',
      text: 'Lorem Ipsum of the Third Note. Duis id fugiat proident exercitation excepteur. Est do incididunt incididunt reprehenderit aute laborum laboris reprehenderit in incididunt velit veniam velit. Aute ex ex dolore ullamco adipisicing magna magna pariatur ut. Occaecat sit aliqua mollit consequat elit reprehenderit velit id cillum esse. Reprehenderit proident irure elit officia anim adipisicing do culpa. Proident amet irure id velit consequat minim amet. Cillum irure id veniam velit aliqua consectetur nisi proident reprehenderit et adipisicing.',
      completed: true,
      created_at: addDays(new Date(), 7),
    },
    {
      id: 4,
      title: 'Fourth Note',
      text: 'Lorem Ipsum of the Fourth Note. Enim labore cillum ad cupidatat culpa aliquip aute nulla cillum incididunt tempor adipisicing.',
      completed: false,
      created_at: addDays(new Date(), 10),
    },
    {
      id: 5,
      title: 'Fifth Note',
      text: 'Lorem Ipsum of the Fifth Note. Exercitation veniam id consequat do. Aliqua sit nulla laboris esse ad amet do excepteur consequat nisi.',
      completed: true,
      created_at: addDays(new Date(), 13),
    },
    {
      id: 6,
      title: 'Sixth Note',
      text: 'Lorem Ipsum of the Sixth Note. Consectetur veniam labore est ipsum ipsum do aute occaecat. Irure amet esse laborum in ullamco reprehenderit. Incididunt aute fugiat consequat id do dolor incididunt mollit nisi ad irure tempor.',
      completed: false,
      created_at: addDays(new Date(), 16),
    },
    {
      id: 7,
      title: 'Seventh Note',
      text: 'Lorem Ipsum of the Seventh Note. Labore esse occaecat non in tempor. Sint anim adipisicing exercitation non eiusmod culpa cillum. Pariatur qui consequat non est reprehenderit nostrud Lorem ex officia excepteur esse qui qui. Culpa velit cupidatat adipisicing in in est occaecat ex. Minim consequat veniam nisi culpa magna qui. Irure commodo sint consequat velit sunt ut non deserunt dolore Lorem magna labore sunt.',
      completed: true,
      created_at: addDays(new Date(), 19),
    },
  ]);
});
