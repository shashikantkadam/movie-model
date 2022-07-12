
let cl = console.log;

const btn = document.getElementById("btn");
const backdrop = document.getElementById("backdrop");
const myModel = document.getElementById("myModel");
const hideModel=Array.from( document.querySelectorAll(".hideModel"));
const movieform = document.getElementById("movieform");
const addmoviebtn = document.getElementById("addmoviebtn");
const title = document.getElementById("title"); 
const url = document.getElementById("url"); 
const rating = document.getElementById("rating"); 
const movieList = document.getElementById("movieList");

let movieArr=[];

const myModelHandler =()=>{
	backdrop.classList.toggle("show")
	myModel.classList.toggle("show")
}

const modelHandler=(e)=>{
	myModelHandler()
}

const addMoviehandler = (e) =>{
	//cl("hello");
	e.preventDefault()
	let movieObj ={
		titleName:title.value,
		imgUrl:url.value,
		ratingvalue:rating.value,
	}
	movieArr.push(movieObj);
	movieform.reset();
	myModelHandler();
	let result=[];
	movieArr.forEach(movie =>{
		result +=`<div class="col-sm-4 mt-4">
					<div class="card">
						<div class="card-body">
							<figure class="movie-img">
								<img src="${movie.imgUrl}" alt="" class="img-fluid">
								<figcaption class="movie-info">
										<h2>${movie.titleName}</h2>
										<p>${movie.ratingvalue}</p>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>`
		
	});
	movieList.innerHTML =result;
}


btn.addEventListener('click', modelHandler);
backdrop.addEventListener('click', myModelHandler);
movieform.addEventListener('submit',addMoviehandler);
//addmoviebtn.addEventListener('click',addMoviehandler);


hideModel.forEach(ele =>{
	ele.addEventListener('click',myModelHandler)
})

//function modelHandler(e){
//	 backdrop.classList.add("show")
//	 myModel.classList.add("show")
//}

