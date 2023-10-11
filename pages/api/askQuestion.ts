import { admindb } from '@/firebaseAdmin'
import query from '@/lib/queryApi'
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from 'firebase-admin'
import React from 'react'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
  const {prompt, chatId, model , session} = req.body;

  if (!prompt){
    res.status(400).json({ answer: 'No prompt provided' })
    return;
  }

  if (!chatId){
    res.status(400).json({ answer: 'Provide a valid chatId !' })
    return;
  }

  //chatgpt quesery


  const response  = await query(prompt, chatId, model);

  const message: Message = {
    text: response || 'chat gpt was not able to answer',
    createdAt : admin.firestore.Timestamp.now(),
    user : {
      _id : 'ChatGPT',
      name : 'ChatGPT',
      avatar : ''
    },
  };

  await admindb
  .collection('users')
  .doc(session?.user?.email)
  .collection('chats')
  .doc(chatId)
  .collection('messages')
  .add(message);

  res.status(200).json({ answer: message.text })

}
