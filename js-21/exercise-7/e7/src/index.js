import React from 'react';
import ReactDOM from 'react-dom';

const sqlThreats = [
    'String injection',
    'Numeric injection',
    'Blind injection'
]

function App() {
    return (
        <div>
            <ThreatHeaderView />
            <ThreatListView threats={sqlThreats} />
        </div>
    );
}

function ThreatHeaderView() {
    return <h2>SQL Injection</h2>;
}

function ThreatListView(props) {
    return React.createElement(
        'ul',
        { className: 'single-threat' },
        props.threats.map((threat, i) => 
            React.createElement('li', { key: i }, threat)
        )
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));

