import React from 'react'
import { useGetData } from '../hooks/useGetData';
import { Todo } from './Todo';
import { Loading } from './Loading';
import '../styles/App.css';

const App = () => {
  const { data, isLoading } = useGetData('https://jsonplaceholder.typicode.com/todos/1')
  // since it returns data as on object, we can't re use the name 
  // so we use the : to use it as a different variable name, ex data as data1 and loading as loading1
  const { data: data1, isLoading : isLoading1 } = useGetData('https://jsonplaceholder.typicode.com/todos/3')
  return (
    <div id="main">
      {isLoading ? <Loading /> : <Todo {...data} />}
      <br/>
      {isLoading1 ? <Loading /> : <Todo {...data1} />}
    </div>
  )
}


export default App;
