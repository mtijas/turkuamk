import React from 'react';
import ReactDOM from 'react-dom';

let renovation_elements = [
  {
    'name': 'Painting walls',
    'tools': [
      'Brushes',
      'Masking tape',
      'Paint bucket',
    ],
    'steps': [
      'Remove old paint',
      'Fill holes and tracks with filler',
      'Paint',
      'Repaint',
    ],
  },
  {
    'name': 'Peeling paint',
    'tools': [
      'Knife',
      'Spatula',
    ],
    'steps': [
      'Remove old paint',
    ],
  },
  {
    'name': 'Repainting walls',
    'tools': [
      'Better brushes',
      'Masking tape',
      'Paint bucket, different color',
    ],
    'steps': [
      'Remove old paint',
      'Fill holes and tracks with filler',
      'Paint',
      'Repaint',
    ],
  },
];

function Task(props) {
  const {name, tools, steps} = props
  const listTools = tools.map((tool, i) =>
    <li key={i}>{tool}</li>
  );
  const listSteps = steps.map((step, i) =>
    <li key={i}>{step}</li>
  );

  return (
    <>
      <h1>{name}</h1>
      <h2>Tools</h2>
      <ul>{listTools}</ul>
      <h2>Steps</h2>
      <ol>{listSteps}</ol>
    </>
  )
}

function TaskList(props) {
  const taskArticles = props.elements.map((task, i) =>
    <article key={i}>
      <Task {...task} />
    </article>
  );
  return (
    //React.Fragment, works from 16.2 onwards
    <>
      {taskArticles}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <TaskList elements={renovation_elements}/>
  </React.StrictMode>,
  document.getElementById('root')
);
