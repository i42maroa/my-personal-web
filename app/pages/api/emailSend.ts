import type { NextApiRequest, NextApiResponse } from 'next'
import emailjs from 'emailjs-com'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body
}
