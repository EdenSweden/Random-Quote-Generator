$(document).ready(function(){
    $.get("https://gist.githubusercontent.com/MatthewJN/52a865acb9872e25951dfa184ceff015/raw/83cb1a13b433e61296b9c7d27989fbfb46d8a221/quotes.json", 
          
    function(data, status){
     var quotes = JSON.parse(data);
     var currentIndex = Math.floor(Math.random() * quotes.length);
     var currentQuote = quotes[currentIndex].Quote;
     var currentAuthor = quotes[currentIndex].Author;
        
   $("#text").text("\"" + currentQuote + "\" "); 
   $("#author").text("-" + currentAuthor);
        
        
   $("#new-quote").click(function(){
     currentIndex = Math.floor(Math.random() * quotes.length);
     currentQuote = quotes[currentIndex].Quote;
     currentAuthor = quotes[currentIndex].Author;
     
     $("#text, #author").fadeOut(1000, function(){
     $("#text").text("\"" + currentQuote + "\" ");
     $("#author").text("-" + currentAuthor);});
     $("#text, #author").fadeIn(1000);
     
   }
    );
    $('#tweet-quote').click(function(){
     $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' 
        + encodeURIComponent('"' + currentQuote +'"'+' -' + currentAuthor));
     
   });
     
   });
   
  
    
  });