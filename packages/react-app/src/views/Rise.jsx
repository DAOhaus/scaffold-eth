import React from "react"
import { PageWrapper } from '../components'
import styled from 'styled-components'
import axios from 'axios'

const url = "https://api.rise.com/"
const instance = axios.create({
  baseURL: 'https://api.rise.com/',
  timeout: 1000,
  headers: { 
    'Authorization': 'Bearer 0b4bf39b-5250-4e3d-8274-8093aca3661c.hE2dlQxruswSQLPtaTaJIlywjUWGt912P8IjWNQ0iS5ubV',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
});

const Square = styled.div`
`

const getData = () => {
  console.log('getting')
  const testURL = url+'users';
	const myInit = {
		method: 'HEAD',
		mode: 'no-cors',
	};

	const myRequest = new Request(testURL, myInit);

	fetch(myRequest).then(function(response) {
		return response;
	}).then(function(response) {
		console.log(response);
	}).catch(function(e){
		console.log(e);
	});
  // instance.get('/users')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });
}
export default (props) => {
  return <PageWrapper  >
    <button onClick={getData}>Get Class Info</button>
  </PageWrapper>
}