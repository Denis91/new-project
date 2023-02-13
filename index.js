 class TvShow {
     constructor (name,genre,image) {
        this.name = name;
        this.genre = genre;
       this.image = image;
    }

     toText(){
         return `${this.name} (${this.genre}) ${this.Image} `;
     }

     toHtml(){
         return `<div>
                <h1>${this.name}</h1>                  
                <p>${this.genre}<p>
                <img src= "${this.image}" alt="${this.name}"  widht="100">
          </div>`
     };
 }
 
 const request =fetch("./data.json")
    .then((response) =>{
       return response.json()
    })
    .then((json)=> {
        for(let i =0; i < json.length; i++){
            const tvShow = new TvShow(json[i].name, json[i].genres[0],json[i].image.original);
            console.log(tvShow.toText());
            document.body.innerHTML += tvShow.toHtml();

        };
    });

 console.log(request);