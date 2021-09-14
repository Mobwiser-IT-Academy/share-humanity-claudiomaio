(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
     quote: `"Drugs are a waste of time. They destroy your memory and your self-respect and everything that goes along with your self esteem."`,  
     link: ' ', 
     imagePath: 'images/0_rt9PCV9eBB69EsfC.jpg'},
    ];
    
    let htmlLink = '';

    for(let i=0; i<issues.length;i++) {
        createQuoteContainer(issues,i);
    }


    function createQuoteContainer(arry,i){

        const quoteClass = i % 2 === 0 ? 'quote-container quote-1' : 'quote-container quote-2';
        const faded = i % 2 === 0 ? 'fade-right' : 'fade-left';
 
       if ( i % 2 == 0){
         /*htmlLink += `<a href=${arry[i].link}>`;*/
         
         htmlLink += `<div class="${quoteClass} ${arry[i].keyword}" data-aos="${faded}">`;
         let quote = '<p>' + arry[i].quoteTitle +  '</p>'; 
         quote += createQuotes(arry[i].quote);  
         htmlLink  += `<quote> ${quote}</quote>`;
         htmlLink += `<img class="${arry[i].keyword}" src=${arry[i].imagePath}>`;
         htmlLink += `</div>`;
         /*htmlLink += `</a>`;*/
       } else {
                 /*htmlLink += `<a href=${arry[i].link}>`;*/
                 htmlLink += `<div class="${quoteClass} ${arry[i].keyword}" data-aos="${faded}">`;
                 htmlLink += `<img class="${arry[i].keyword}" src=${arry[i].imagePath}>`;
                 let quote = '<p>' + arry[i].quoteTitle +  '</p>'; 
                 quote += createQuotes(arry[i].quote);
                 htmlLink += `<quote> ${quote}</quote>`;
                 htmlLink += `</div>`;
                 /*htmlLink  += `</a>`;*/
         }
        
         document.querySelector('#list-container').innerHTML = htmlLink;
    }


    function createQuotes(quote){

        const bgnP = '<p>';
        const endP = '</p>';
        
        const splits = quote.split(" ");
        
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
    

    $('#search-input').on('keyup', function(){
        var value = $(this).val()
        console.log('Value:', value)
        var data = searchTable(value, issues)
        htmlLink = '' 
        for(let i=0; i<issues.length;i++) {
            createQuoteContainer(data, i);
        }
    })


    function searchTable(value, data){
        var filteredData = []

        for(var i = 0; i < data.length; i++){
            value = value.toLowerCase()
            var name = data[i].keyword.toLowerCase()

            if (name.includes(value)){
                filteredData.push(data[i]) 
            }
        }    
        return filteredData 
    }
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgaXNzdWVzID0gW1xyXG4gICAge2tleXdvcmQ6ICdlY29ub21pYycsXHJcbiAgICAgcXVvdGVUaXRsZTogYEVjb25vbWljIENyaXNpc2AsXHJcbiAgICAgcXVvdGU6IGBcIlRvZGF5LCB0aGUgcmljaCBhcmUgdGhlIGhhdmVzIGFuZCB0aGUgcG9vciBhcmUgdGhlIGhhdmUtbm90cy4gVG9tb3Jyb3csIHRoZSByaWNoIHdpbGwgYmUgdGhlIGhhdmUtZm9vZCBhbmQgdGhlIHBvb3Igd2lsbCBiZSB0aGUgaGF2ZS1ub3QgZm9vZC5cImAsXHJcbiAgICAgbGluazogJ0Vjb25vbWljLkNyaXNpcy5odG1sJywgXHJcbiAgICAgaW1hZ2VQYXRoOiAnaW1hZ2VzL3RyYW5zZmVyaXIuanBnJ30sXHJcbiAgICAgIFxyXG4gICAge2tleXdvcmQ6ICdyYWNpc20nLFxyXG4gICAgIHF1b3RlVGl0bGU6IGBSYWNpc21gLCBcclxuICAgICBxdW90ZTogYFwiQWNjb21wbGlzaG1lbnRzIGhhdmUgbm8gY29sb3IuXCJgLCAgXHJcbiAgICAgbGluazogJyAnLCBcclxuICAgICBpbWFnZVBhdGg6ICdpbWFnZXMvMTUxOTc5MzMzMC5iYW5uZXIuQ1VMLVJhY2lhbC1EaXNjcmltaW5hdGlvbi03NzZ4NjIwLmpwZyd9LFxyXG5cclxuICAgIHtrZXl3b3JkOiAnZ2xvYmFsLXBvbGx1dGlvbicsXHJcbiAgICAgcXVvdGVUaXRsZTogYEdsb2JhbCBQb2xsdXRpb25gLCAgICAgXHJcbiAgICAgcXVvdGU6IGBcIldoZW4gdGhlIHdlbGwgaXMgZHJ5LCB3ZSBrbm93IHRoZSB3b3J0aCBvZiB3YXRlci5cImAsIFxyXG4gICAgIGxpbms6ICcnLCBcclxuICAgICBpbWFnZVBhdGg6ICdpbWFnZXMvMTcwNTAxLWFpcnBvbGx1dGlvbi1zdG9jay5qcGcnfSxcclxuICAgICAgXHJcbiAgICB7a2V5d29yZDogJ3NjaG9vbC1zeXN0ZW0nLFxyXG4gICAgIHF1b3RlVGl0bGU6IGBTY2hvb2wgU3lzdGVtYCwgXHJcbiAgICAgcXVvdGU6IGBcIkV2ZXJ5Ym9keSBpcyBhIGdlbml1cy4gQnV0IGlmIHlvdSBqdWRnZSBhIGZpc2ggYnkgaXRzIGFiaWxpdHkgdG8gY2xpbWIgYSB0cmVlLCBpdCB3aWxsIGxpdmUgaXRzIHdob2xlIGxpZmUgYmVsaWV2aW5nIHRoYXQgaXQgaXMgc3R1cGlkLlwiYCwgIFxyXG4gICAgIGxpbms6ICcgJywgXHJcbiAgICAgaW1hZ2VQYXRoOiAnaW1hZ2VzLzFfWVpqZm41MndMSS1sX1JlVzk5MjhFQS5qcGVnJ30sXHJcblxyXG4gICAge2tleXdvcmQ6ICd3YXItb24tZHJ1Z3MnLFxyXG4gICAgIHF1b3RlVGl0bGU6IGBXYXIgb24gRHJ1Z3NgLCAgXHJcbiAgICAgcXVvdGU6IGBcIkRydWdzIGFyZSBhIHdhc3RlIG9mIHRpbWUuIFRoZXkgZGVzdHJveSB5b3VyIG1lbW9yeSBhbmQgeW91ciBzZWxmLXJlc3BlY3QgYW5kIGV2ZXJ5dGhpbmcgdGhhdCBnb2VzIGFsb25nIHdpdGggeW91ciBzZWxmIGVzdGVlbS5cImAsICBcclxuICAgICBsaW5rOiAnICcsIFxyXG4gICAgIGltYWdlUGF0aDogJ2ltYWdlcy8wX3J0OVBDVjllQkI2OUVzZkMuanBnJ30sXHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICBsZXQgaHRtbExpbmsgPSAnJztcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTxpc3N1ZXMubGVuZ3RoO2krKykge1xyXG4gICAgICAgIGNyZWF0ZVF1b3RlQ29udGFpbmVyKGlzc3VlcyxpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUXVvdGVDb250YWluZXIoYXJyeSxpKXtcclxuXHJcbiAgICAgICAgY29uc3QgcXVvdGVDbGFzcyA9IGkgJSAyID09PSAwID8gJ3F1b3RlLWNvbnRhaW5lciBxdW90ZS0xJyA6ICdxdW90ZS1jb250YWluZXIgcXVvdGUtMic7XHJcbiAgICAgICAgY29uc3QgZmFkZWQgPSBpICUgMiA9PT0gMCA/ICdmYWRlLXJpZ2h0JyA6ICdmYWRlLWxlZnQnO1xyXG4gXHJcbiAgICAgICBpZiAoIGkgJSAyID09IDApe1xyXG4gICAgICAgICAvKmh0bWxMaW5rICs9IGA8YSBocmVmPSR7YXJyeVtpXS5saW5rfT5gOyovXHJcbiAgICAgICAgIFxyXG4gICAgICAgICBodG1sTGluayArPSBgPGRpdiBjbGFzcz1cIiR7cXVvdGVDbGFzc30gJHthcnJ5W2ldLmtleXdvcmR9XCIgZGF0YS1hb3M9XCIke2ZhZGVkfVwiPmA7XHJcbiAgICAgICAgIGxldCBxdW90ZSA9ICc8cD4nICsgYXJyeVtpXS5xdW90ZVRpdGxlICsgICc8L3A+JzsgXHJcbiAgICAgICAgIHF1b3RlICs9IGNyZWF0ZVF1b3RlcyhhcnJ5W2ldLnF1b3RlKTsgIFxyXG4gICAgICAgICBodG1sTGluayAgKz0gYDxxdW90ZT4gJHtxdW90ZX08L3F1b3RlPmA7XHJcbiAgICAgICAgIGh0bWxMaW5rICs9IGA8aW1nIGNsYXNzPVwiJHthcnJ5W2ldLmtleXdvcmR9XCIgc3JjPSR7YXJyeVtpXS5pbWFnZVBhdGh9PmA7XHJcbiAgICAgICAgIGh0bWxMaW5rICs9IGA8L2Rpdj5gO1xyXG4gICAgICAgICAvKmh0bWxMaW5rICs9IGA8L2E+YDsqL1xyXG4gICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAvKmh0bWxMaW5rICs9IGA8YSBocmVmPSR7YXJyeVtpXS5saW5rfT5gOyovXHJcbiAgICAgICAgICAgICAgICAgaHRtbExpbmsgKz0gYDxkaXYgY2xhc3M9XCIke3F1b3RlQ2xhc3N9ICR7YXJyeVtpXS5rZXl3b3JkfVwiIGRhdGEtYW9zPVwiJHtmYWRlZH1cIj5gO1xyXG4gICAgICAgICAgICAgICAgIGh0bWxMaW5rICs9IGA8aW1nIGNsYXNzPVwiJHthcnJ5W2ldLmtleXdvcmR9XCIgc3JjPSR7YXJyeVtpXS5pbWFnZVBhdGh9PmA7XHJcbiAgICAgICAgICAgICAgICAgbGV0IHF1b3RlID0gJzxwPicgKyBhcnJ5W2ldLnF1b3RlVGl0bGUgKyAgJzwvcD4nOyBcclxuICAgICAgICAgICAgICAgICBxdW90ZSArPSBjcmVhdGVRdW90ZXMoYXJyeVtpXS5xdW90ZSk7XHJcbiAgICAgICAgICAgICAgICAgaHRtbExpbmsgKz0gYDxxdW90ZT4gJHtxdW90ZX08L3F1b3RlPmA7XHJcbiAgICAgICAgICAgICAgICAgaHRtbExpbmsgKz0gYDwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAgLypodG1sTGluayAgKz0gYDwvYT5gOyovXHJcbiAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtY29udGFpbmVyJykuaW5uZXJIVE1MID0gaHRtbExpbms7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVF1b3RlcyhxdW90ZSl7XHJcblxyXG4gICAgICAgIGNvbnN0IGJnblAgPSAnPHA+JztcclxuICAgICAgICBjb25zdCBlbmRQID0gJzwvcD4nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNwbGl0cyA9IHF1b3RlLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGdwaCA9ICcnO1xyXG4gICAgICAgIGxldCBjbnRXb3JkcyA9IDA7IFxyXG4gICAgICAgIGRve1xyXG4gICAgICAgICAgICBpZiAoY250V29yZHMgPT0gMCApe1xyXG4gICAgICAgICAgICAgICAgICAgIHBncGggKz0gYmduUFxyXG4gICAgICAgICAgICAgICAgICAgIGNudFdvcmRzICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNudFdvcmRzIDwgOCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGdwaCArPSBzcGxpdHNbMF0gKyAnICc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRzLnNwbGljZSgwLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIGNudFdvcmRzICs9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihjbnRXb3JkcyA9PSA4KXtcclxuICAgICAgICAgICAgICAgICAgICBwZ3BoICs9IGVuZFA7XHJcbiAgICAgICAgICAgICAgICAgICAgY250V29yZHMgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBwZ3BoICs9IGVuZFA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIH13aGlsZShzcGxpdHMubGVuZ3RoICE9IDApO1xyXG4gICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHBncGggXHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgJCgnI3NlYXJjaC1pbnB1dCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gJCh0aGlzKS52YWwoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdWYWx1ZTonLCB2YWx1ZSlcclxuICAgICAgICB2YXIgZGF0YSA9IHNlYXJjaFRhYmxlKHZhbHVlLCBpc3N1ZXMpXHJcbiAgICAgICAgaHRtbExpbmsgPSAnJyBcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxpc3N1ZXMubGVuZ3RoO2krKykge1xyXG4gICAgICAgICAgICBjcmVhdGVRdW90ZUNvbnRhaW5lcihkYXRhLCBpKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzZWFyY2hUYWJsZSh2YWx1ZSwgZGF0YSl7XHJcbiAgICAgICAgdmFyIGZpbHRlcmVkRGF0YSA9IFtdXHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gZGF0YVtpXS5rZXl3b3JkLnRvTG93ZXJDYXNlKClcclxuXHJcbiAgICAgICAgICAgIGlmIChuYW1lLmluY2x1ZGVzKHZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZERhdGEucHVzaChkYXRhW2ldKSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgXHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkRGF0YSBcclxuICAgIH0iXX0=
