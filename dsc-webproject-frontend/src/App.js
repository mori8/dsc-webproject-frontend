import React, { Component } from 'react';
import './App.css'
import ArticleForm from './components/ArticleForm';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import customAxios from './customAxios';

function App() {
  // IP주소 변수 선언
  const [ip, setIp] = useState('');

  render() {
    const { information } = this.state;
    return (
      <div className="App">
        <Header/>
        <ArticleList data={information}/>
        <ArticleForm/>
      </div>
    );
  }

  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
      // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
      customAxios('/ip', callback);
    }, []
  );

  return (
    <div className="App">
      <header className="App-header">
        이 기기의 IP주소는 {ip}입니다.
      </header>
    </div>
  );
}

export default App;
