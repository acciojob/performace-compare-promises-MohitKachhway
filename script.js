// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
let allInput = document.getElementById("output-all");
let anyInput = document.getElementById("output-any");
async function promAll(){
		let Arr=[];
		let startTime = performance.now();
	for (let i = 0; i < apiUrls.length; i++) {
		let responce = await fetch(apiUrls[i]);
		let data = await responce.json();
		Arr.push(data)
	}
	
	let all = Promise.all(Arr);
	all.then(()=>{
		let endTime = performance.now();
		allInput.innerText=(endTime-startTime);
	})
	
}
promAll(apiUrls)
promAny(apiUrls)
async function promAny(){
		let Arr=[];
		let startTime = performance.now();
	for (let i = 0; i < apiUrls.length; i++) {
		let responce = await fetch(apiUrls[i]);
		let data = await responce.json();
		Arr.push(data)
	}
	
	let any = Promise.all(Arr);
	any.then(()=>{
		let endTime = performance.now();
		anyInput.innerText=(endTime-startTime);
	})
	
}
