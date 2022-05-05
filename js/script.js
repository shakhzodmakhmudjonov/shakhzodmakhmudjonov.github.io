fetch('json/images.json').then(function(response) {
  response.json().then(function(json) {

	var header = document.getElementById('header');
	var gallery = document.getElementById('gallery');

	for(var i=0; i < json.images.length; i++){

		var img = document.createElement('img');
		img.src = json.images[i].url;
		img.alt = json.images[i].caption;
		img.classList.add("mb-3");
		img.style = "width: 100%";

		var aImg = document.createElement('a');
		aImg.href = json.images[i].url;
		aImg.setAttribute("data-bs-toggle","modal");
		aImg.setAttribute("data-bs-toggle","modal");
		aImg.setAttribute("data-bs-target","#myModal");
		

		var divCardBody = document.createElement('div');

		var imgcaption = document.createElement('h4');
		imgcaption.innerText = json.images[i].caption;
		imgcaption.style = "text-align:center";

		var divCard = document.createElement('div');
		divCard.style = "width:100%"

		var divCol = document.createElement('div');
		divCol.classList.add("col-lg-4");
		divCol.classList.add("mb-4");

		aImg.appendChild(img);
		divCardBody.appendChild(imgcaption);
		divCard.appendChild(aImg);
		divCard.appendChild(divCardBody);
		divCol.appendChild(divCard);
		gallery.appendChild(divCol);

		//Carousel Button
		var divButton = document.getElementById('divButton');
		var cButton = document.createElement('button');
		cButton.type ='button';
		cButton.setAttribute("data-bs-target","#demo");
		cButton.setAttribute("data-bs-slide-to",i);
		if(i==0){
			cButton.setAttribute("class","active");;
		}
		divButton.appendChild(cButton);

		//Carousel Slide
		var divSlide = document.getElementById('divSlide');
		var divImage = document.createElement('div');
		
		if(i==0){
			divImage.setAttribute("class","carousel-item active");
		}
		else{
			divImage.setAttribute("class","carousel-item");
		}

		var imgSlide = document.createElement('img');
		imgSlide.style="width:100%";
		imgSlide.src=json.images[i].url;
		imgSlide.alt=json.images[i].caption;
		imgSlide.class="d-block w-100";

		var divcaption = document.createElement('div');
		divcaption.setAttribute("class","carousel-caption");
		var imgSlidecaption = document.createElement('h4');
		imgSlidecaption.innerText= json.images[i].caption;
		divcaption.appendChild(imgSlidecaption);
		divImage.appendChild(imgSlide);
		divImage.appendChild(divcaption);
		divSlide.appendChild(divImage);
	}

  });
});


