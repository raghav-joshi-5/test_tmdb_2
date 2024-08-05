const skills=["html","js","css","angular","bootstrap"];

let list=`<ul class="list-group">`;

skills.forEach(ele => {list += `<li class="list-group-item">i love ${ele}</li>`});

list +=`</ul>`;

const listContainer=document.getElementById('listContainer');

listContainer.innerHTML=list;


const playerArr=[
	{
		fname:'sachin',
		lname:'tendulkar',
		nickname:'master',
		number:10
	},
	{
		fname:'virat',
		lname:'kohali',
		nickname:'chiku',
		number:18
	},
	{
		fname:'rohit',
		lname:'sharma',
		nickname:'rs',
		number:45
	},
]

let playerlist='';

playerArr.forEach((ele,i)=> {
	playerlist +=`
				<tr>
					<td>${i+1}</td>
					<td>${ele.fname}</td>
					<td>${ele.lname}</td>
					<td>${ele.nickname}</td>
					<td>${ele.number}</td>
				</tr>
					`
})

const tableContainer=document.getElementById('tableContainer');

tableContainer.innerHTML=playerlist;