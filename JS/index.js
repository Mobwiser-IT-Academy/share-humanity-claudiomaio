const issues = [
    {keyword: 'economic',
     quote: `<p>Economic Crisis </p> 
             <p>"Today, the rich are the haves and</p> 
             <p>the poor are the have-nots.</p> 
             <p>Tomorrow, the rich will be the have-food</p>
             <p>and the poor will be the have-not food."</p>`,
     link: 'Economic.Crisis.html', 
     imagePath: 'images/transferir.jpg'},
      
    {keyword: 'racism', 
     quote: `<p> Racism </p> 
             <p>"Accomplishments have no color."</p>`,  
     link: ' ', 
     imagePath: 'images/1519793330.banner.CUL-Racial-Discrimination-776x620.jpg'},

    {keyword: 'global-pollution',
     quote: `<p>Global Pollution</p> 
             <p>"When the well is dry,</p>
             <p>we know the worth of water."</p>`, 
     link: '', 
     imagePath: 'images/170501-airpollution-stock.jpg'},
      
    {keyword: 'school-system', 
     quote: `<p>School System</p> 
             <p>"Everybody is a genius.</p>
             <p>But if you judge a fish by its ability</p>
             <p>to climb a tree, it will live its</p>
             <p>whole life believing that it is stupid."</p>`,  
     link: ' ', 
     imagePath: 'images/1_YZjfn52wLI-l_ReW9928EA.jpeg'},

    {keyword: 'war-on-drugs', 
     quote: `<p>War on Drugs</p> 
             <p>"Drugs are a waste of time.</p>
             <p>hey destroy your memory and your</p>
             <p>self-respect and everything that</p>
             <p>goes along with your self esteem."</p>`,  
     link: ' ', 
     imagePath: 'images/0_rt9PCV9eBB69EsfC.jpg'},
    
    ];
    
    
    let htmlLink = '';

    for(let i=0; i<issues.length;i++) {
        
      if ( i % 2 == 0){
        /*htmlLink += `<a href=${issues[i].link}>`;*/
        htmlLink += `<div class="quote-container quote-1" data-aos="fade-right">`;
        htmlLink  += `<quote> ${issues[i].quote}</quote>`;
        htmlLink += `<img class="${issues[i].keyword}" src=${issues[i].imagePath}>`;
        htmlLink += `</div>`;
        /*htmlLink += `</a>`;*/
      } else {
                /*htmlLink += `<a href=${issues[i].link}>`;*/
                htmlLink += `<div class="quote-container quote-2" data-aos="fade-left">`;
                htmlLink += `<img class="racism" src=${issues[i].imagePath}>`;
                htmlLink += `<quote> ${issues[i].quote}</quote>`;
                htmlLink += `</div>`;
                /*htmlLink  += `</a>`;*/
        }
     
    }

    

    document.querySelector('#list-container').innerHTML = htmlLink;