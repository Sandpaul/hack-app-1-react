import fetch from 'node-fetch'

const fetchImage = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl)
      console.log(response);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`)
      }
      const imageBuffer = await response.arrayBuffer()
      console.log('>>>>>', imageBuffer, '<<<<<');
      // console.log('>>>>>', imageBuffer.toString('base64'), '<<<<<');
      
      
      return imageBuffer
    } catch (error) {
      console.error('Error fetching image:', error)
      throw error
    }
  }

  export default fetchImage