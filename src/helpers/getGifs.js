export const getGifs = async (category,limit) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=mxeBz9msSQCg7tQfbcwmfwPOp1gyj9Ic&q=${category}&limit=${limit}`
    console.log(url)
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    })
    return gifs
}

