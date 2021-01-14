const issues = [
    {keyword: 'economic',
     description: 'Varias informações sobre o Covid-19',
     link: 'Economic.Crisis.html', 
     imagePath: 'images/transferir.jpg'},
      
    {keyword: 'racism', 
     description: 'Racismo puro e duro!',  
     link: ' ', 
     imagePath: 'images/1519793330.banner.CUL-Racial-Discrimination-776x620.jpg'},
    
    ];
    
    
    let htmlLink = '';

    for(let i=0; i<issues.length;i++) {
      
      if (issues[i].keyword === 'economic'){
        htmlLink += `<a href=${issues[i].link}>`;
        htmlLink += `<div class="quote-container quote-1" data-aos="fade-right">`;
        htmlLink  += `<quote> 
                        <p>Economic Crisis </p> 
                        <p> "Today, the rich are the haves and</p> 
                        <p> the poor are the have-nots.</p> 
                        <p> Tomorrow, the rich will be the have-food and </p>
                        <p> the poor will be the have-not food."</p>
                      </quote>`;
        htmlLink += `<img class="economic" src=${issues[i].imagePath}>`;
        htmlLink += `<\div>`;
        htmlLink += `<\a>`;
      }
      
      if (issues[i].keyword === 'racism'){
        /*htmlLink += `<a href=${issues[i].link}>`;*/
        htmlLink += `<div class="quote-container quote-2" data-aos="fade-left">`;
        htmlLink += `<img class="racism" src=${issues[i].imagePath}>`;
        htmlLink  += `<quote> 
                        <p> Racism </p> 
                        <p>"Accomplishments have no color."</p> 
                      </quote>`;
        htmlLink += `<\div>`;
        /*htmlLink  += `<\a>`;*/
      }
     
    }

    

    document.querySelector('#list-container').innerHTML = htmlLink;