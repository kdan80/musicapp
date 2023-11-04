import React from 'react'
import AWS from 'aws-sdk'
import songs from '../songs'

const signer = new AWS.CloudFront.Signer(process.env.CF_ACCESS_KEY!, process.env.CF_PRIVATE_KEY!)

const getCloudfrontUrl = (file: string) => {
    // 2 days as milliseconds to use for link expiration
    const twoDays = 2 * 24 * 60 * 60 * 1000

    // sign a CloudFront URL that expires 2 days from now
    const signedUrl = signer.getSignedUrl({
        url: `${process.env.CF_URL}/${file}`,
        expires: Math.floor((Date.now() + twoDays) / 1000), // Unix UTC timestamp for now + 2 days
    })

    return signedUrl
}

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    const id = params.id

    const song = songs.filter(song => song.id === id)[0]

    const url = getCloudfrontUrl(song.path)

    return new Response(JSON.stringify({ message: url }))
}
