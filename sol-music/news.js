
async function populate() {

  const requestURL = 'https://newsdata.io/api/1/news?apikey=pub_627132a419ae8d18f1e152b2cf71893e14ac&q=music&country=br,cn,kr,gb,us&language=en&category=entertainment';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const newsText = await response.text();

  const news = JSON.parse(newsText);
  console.log(news);
  var singleNews = news['results']

  populateCarousel(singleNews);
  populateCards(singleNews);
}

function populateCarousel(obj) {
  var imageList = ['https://images.unsplash.com/photo-1649643491719-db6aac987675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    'https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80',
    'https://images.unsplash.com/photo-1638913662295-9630035ef770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1649682716735-b1ba94eda742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1649621036238-eb47069a9092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1649642118956-0d28da035265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1622352496174-9e1d969b1945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
    'https://images.unsplash.com/photo-1648737119422-2680a7e39089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    'https://images.unsplash.com/photo-1649664585762-3f4bea1aedb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80'];
  const section = document.querySelector('#carousel-news');
  var i = 0;
  for (const aNews of obj) {
    var title = aNews['title'];
    var image = aNews['image_url'];
    var imageCSS = image;
    //console.log(title);
    //console.log(image);
    //console.log(imageCSS);

    var myDiv1 = document.createElement('div');
    var myDiv2 = document.createElement('div');
    var myPara1 = document.createElement('p');
    var myA = document.createElement('a');
    var myImg1 = document.createElement('img');
    
    if (i == 0) {
      myDiv1.setAttribute("class", "carousel-item active");
    } else {
      myDiv1.classList.add("carousel-item");
    }

    myDiv2.setAttribute("id", "newsLargeBox");
    
    if (image == null) {
      var newimageCSS = imageList[i];
      myImg1.setAttribute("src", newimageCSS);
    } else {
      myImg1.setAttribute("src", imageCSS);
    }
    myA.textContent = title;
    myA.setAttribute("href", "#A" + i);
    myA.setAttribute("class", "newsA");

    myDiv1.appendChild(myDiv2);
    myDiv2.appendChild(myImg1);
    myDiv2.appendChild(myPara1);
    myPara1.appendChild(myA);
    
    myImg1.setAttribute("class", "newsImage");

    section.appendChild(myDiv1);

    i++;
  }

}

function populateCards(obj) {
  var imageList = ['https://images.unsplash.com/photo-1649643491719-db6aac987675?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
  'https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80',
  'https://images.unsplash.com/photo-1638913662295-9630035ef770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1649682716735-b1ba94eda742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1649621036238-eb47069a9092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1649642118956-0d28da035265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1622352496174-9e1d969b1945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
  'https://images.unsplash.com/photo-1648737119422-2680a7e39089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  'https://images.unsplash.com/photo-1649664585762-3f4bea1aedb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80'];
  const section2 = document.querySelector('#listOfNews');
  var j = 0;
  for (const bNews of obj) {
    var btitle = bNews['title'];
    var blink = bNews['link'];
    var bdescription = bNews['description'];
    var bcontent = bNews['content'];
    var bimage_url = bNews['image_url'];



    var myDiv1 = document.createElement('div');
    myDiv1.setAttribute("class", "card");
    myDiv1.setAttribute("style", "width: 24rem");
    myDiv1.setAttribute("id", "A" + j);
    var myImg = document.createElement('img');
    if (bimage_url == null) {
      myImg.setAttribute("src", imageList[j]);
    } else {
      myImg.setAttribute("src", bimage_url);
    }
    myImg.setAttribute("class", "card-img-top");
    var myDiv2 = document.createElement('div');
    myDiv2.setAttribute("class", "card-body");
    var myH5 = document.createElement('h5');
    myH5.setAttribute("class", "card-title");
    myH5.textContent = btitle;
    var myPara = document.createElement('p');
    myPara.setAttribute("class", "card-text");
    myPara.textContent = bdescription;
    var myButton = document.createElement('button');
    myButton.setAttribute("class", "readMore");
    var readMore = document.createElement('a');
    readMore.setAttribute("href", blink);
    readMore.textContent = 'Read more';
    readMore.setAttribute("target", "_blank");

    myDiv1.appendChild(myImg);
    myDiv1.appendChild(myDiv2);
    myDiv2.appendChild(myH5);
    myDiv2.appendChild(myPara);
    myDiv2.appendChild(myButton);
    myButton.appendChild(readMore);

    section2.appendChild(myDiv1);

    j++

  }
}




populate()
