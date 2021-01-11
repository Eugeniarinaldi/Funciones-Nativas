/* Reddit es una red de comunidades en la que cada comunidad se conocer como subreddit. Crear una función obtenerSubreddit que tome como argumento un string url que consista en la url de un subreddit (p. ej. 'https://www.reddit.com/r/dankmemes/') y devuelva el subreddit (p. ej. 'dankmemes')
*/

const obtenerSubreddit = (url) => {
    const slcUrl = url.slice (0, url.length-1);
    return slcUrl.slice(slcUrl.lastIndexOf('/')+1);
};

console.log (obtenerSubreddit('https://www.reddit.com/r/javascript/')) // 'javascript' 
console.log (obtenerSubreddit('https://www.reddit.com/r/aww/')) // 'aww'