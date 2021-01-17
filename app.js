let button = document.querySelector('button');
let tquote = [
    {
    'quote' : 'It always seems impossible until it is done.' , 
     'author' : 'Nelson Mandela',

    },
    {
        'quote' : 'Keep your face to the sunshine and you cannot see a shadow.' , 
     'author' : 'Helen Keller'},

    {
        'quote' : 'Once you replace negative thoughts with positive ones, you’ll start having positive results.' , 
     'author' : 'Willie Nelson',
 
    },
    {
     'quote' : 'If opportunity doesn’t knock, build a door.' , 
     'author' : 'Milton Berle',
     
    },
    {
        'quote' : 'The struggle you’re in today is developing the strength you need tomorrow.' , 
     'author' : 'Robert Tew',
     
    }
];

button.addEventListener('click', () => {
    //Create two p tags
    let randomquote = document.getElementById('author');
    let randomauthor = document.getElementById('quote');

    //Create a random number based on array length
    let todaysquote = parseInt(Math.random() * tquote.length)

    //Set the innerHTML of the p tags value based on the arrays index object
    randomquote.innerHTML = tquote[todaysquote].quote;
    randomauthor.innerHTML = tquote[todaysquote].author;

})


