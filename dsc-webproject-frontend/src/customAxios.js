
import axios from 'axios'; // 액시오스

export default function customAxios(url, callback) {
  axios(
    {
      url: '/api' + url,
      method: 'post',

      /**
       * 개발 환경에서의 크로스 도메인 이슈를 해결하기 위한 코드로
       * 운영 환경에 배포할 경우에는 15~16행을 주석 처리합니다.
       * 
       * ※크로스 도메인 이슈: 브라우저에서 다른 도메인으로 URL 요청을 하는 경우 나타나는 보안문제
       */
      baseURL: 'http://localhost:8080',
      withCredentials: true,
    }
  ).then(function (response) {
    callback(response.data);
  });
}
