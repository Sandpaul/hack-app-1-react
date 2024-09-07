'use strict';
import fetchImage from "./fetchImage.mjs";
import { TextractClient, DetectDocumentTextCommand } from '@aws-sdk/client-textract'

const textractClient = new TextractClient({region: 'eu-west-1'})

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

export const readTextFromImage = async (event) => {
  const imageUrl = 'https://gradacademydatastore.blob.core.windows.net/gradacademydatastore/sinclair/735ac977-ed49-4411-87a4-533124806170jpeg'
  try {
    const imageBase64 = await fetchImage(imageUrl)
    const imageBytes = Buffer.from(imageBase64, 'base64')
    
    const command = new DetectDocumentTextCommand({
      Document: {
        Bytes: imageBytes,
      }
    })
    const response = await textractClient.send(command)
    const blocks = response.Blocks || []
    const text = blocks
      .filter(block => block.BlockType === 'LINE')
      .map(block => block.Text)
      .join('/n')
    
    return {
      statusCode: 200,
      body: JSON.stringify({text}),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      }
    }
  } catch (error) {
    console.error('Error processing image:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Failed to process image: ${error.message}` }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }
}