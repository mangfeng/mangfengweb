export default function request(url, data) {
    return fetch(url)
      .then(response=>response.json())
      .then(data => ({ data }))
      .catch(err => ({ err }));
}
  
// fetch('http://localhost:9099/api/iframePost', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     msg: 'helloIframePost'
//   })
// })