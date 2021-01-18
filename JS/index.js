const issues = [
    {keyword: 'economic',
     quoteTitle: `Economic Crisis`,
     quote: `"Today, the rich are the haves and the poor are the have-nots. Tomorrow, the rich will be the have-food and the poor will be the have-not food."`,
     link: 'Economic.Crisis.html', 
     imagePath: 'images/transferir.jpg'},
      
    {keyword: 'racism',
     quoteTitle: `Racism`, 
     quote: `"Accomplishments have no color."`,  
     link: ' ', 
     imagePath: 'images/1519793330.banner.CUL-Racial-Discrimination-776x620.jpg'},

    {keyword: 'global-pollution',
     quoteTitle: `Global Pollution`,     
     quote: `"When the well is dry, we know the worth of water."`, 
     link: '', 
     imagePath: 'images/170501-airpollution-stock.jpg'},
      
    {keyword: 'school-system',
     quoteTitle: `School System`, 
     quote: `"Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid."`,  
     link: ' ', 
     imagePath: 'images/1_YZjfn52wLI-l_ReW9928EA.jpeg'},

    {keyword: 'war-on-drugs',
     quoteTitle: `War on Drugs`,  
     quote: ` Drugs are a waste of time. They destroy your memory and your self-respect and everything that goes along with your self esteem."`,  
     link: ' ', 
     imagePath: 'images/0_rt9PCV9eBB69EsfC.jpg'},
    
    ];
    
    
    let htmlLink = '';

    for(let i=0; i<issues.length;i++) {
        
      if ( i % 2 == 0){
        /*htmlLink += `<a href=${issues[i].link}>`;*/
        htmlLink += `<div class="quote-container quote-1" data-aos="fade-right">`;

        console.log(createQuotes(issues[i].quote));
        let quote = '<p>' + issues[i].quoteTitle +  '</p>'; 
        quote += createQuotes(issues[i].quote);  

        htmlLink  += `<quote> ${quote}</quote>`;

        htmlLink += `<img class="${issues[i].keyword}" src=${issues[i].imagePath}>`;
        htmlLink += `</div>`;
        /*htmlLink += `</a>`;*/
      } else {
                /*htmlLink += `<a href=${issues[i].link}>`;*/
                htmlLink += `<div class="quote-container quote-2" data-aos="fade-left">`;
                htmlLink += `<img class="racism" src=${issues[i].imagePath}>`;

                console.log(createQuotes(issues[i].quote));
                let quote = '<p>' + issues[i].quoteTitle +  '</p>'; 
                quote += createQuotes(issues[i].quote);

                htmlLink += `<quote> ${quote}</quote>`;
                htmlLink += `</div>`;
                /*htmlLink  += `</a>`;*/
        }
     
    }

    

    document.querySelector('#list-container').innerHTML = htmlLink;


    function createQuotes(quote){

        const bgnP = '<p>';
        const endP = '</p>';
        
        const splits = quote.split(" ");
        console.log(splits);
        console.log(splits.length);
        
        let pgph = '';
        let cntWords = 0; 
    
        
        do{
            if (cntWords == 0 ){
                    pgph += bgnP
                    cntWords += 1;
            }
            if (cntWords < 8){
                    pgph += splits[0] + ' ';
                    splits.splice(0, 1)
                    console.log(splits);
                    console.log(splits.length);
                    console.log(pgph);
                    console.log(cntWords);
                    cntWords += 1;
            } else if(cntWords == 8){
                    pgph += endP;
                    cntWords = 0
                    }
            if (splits.length == 0){
                    pgph += endP;
            }
             
            }while(splits.length != 0);
      
             
      
            return pgph 
    };
    
    
   /* 
        console.log(createQuotes(issues[0].quote));
        let quote = '<p>' + issues[i].quoteTitle +  '</p>'; 
        quote += createQuotes(issues[0].quote); 
        */