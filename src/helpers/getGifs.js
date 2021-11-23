export const getGifs = async(category) => {
    let api = 'api.giphy.com/v1/gifs/search';
    let apiKey = 'lOr25JojrMj7xQqHSV3GkcWqPwzvDQDI';
    let limit = '10';
    let search = encodeURI(category);
    let url = 'https://' + api + '?q=' + search + '&limit=' + limit + '&api_key=' + apiKey;

    const resp = await fetch(url);
    const {data} =  await resp.json();
    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        } 
    })

    return gifs;
}