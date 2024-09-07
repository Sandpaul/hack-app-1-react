'use strict';
import fetchImage from "./fetchImage.mjs";

export const handle = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hello: "World!"
    }),
  };
};

export const getImage = async (event) => {
  try {
    const imageUrl = 'https://gradacademydatastore.blob.core.windows.net/gradacademydatastore/sinclair/735ac977-ed49-4411-87a4-533124806170jpeg'
    const base64Image = await fetchImage(imageUrl)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({image: base64Image})
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Failed to fetch image' }),
    }
  }
}