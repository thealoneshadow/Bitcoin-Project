import React from 'react'
import axios from 'axios'
export default function Index() {
    let [data, setData] = React.useState('')
    const getData = () => {
        axios({
            method: 'GET',
            url: '/graphql/inputs',
        })
        .then(response => {
            // add data to state
            setData(response.data.data)
        })
        .catch(error => {
           
            console.log(error)
        })
    }
    return (
      <div>
        <h1>Using a GraqhQL Api with React.js</h1>
        <button type='button' onClick={getData}>Get Data</button>
        <pre>
            <code>
                {JSON.stringify(data, null, 4)}
            </code>
        </pre>
      </div>
    );
}