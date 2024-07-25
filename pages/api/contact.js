import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body
    if (!email || !email.includes('@') || !name || !name.trim() === '' || !message || !message.trim() === '') {
      res.status(422).json({ 'message': 'Invalid input.' })
      return
    }
    const msg = {
      email, name, message
    }
    let client
    try {
      client = await MongoClient.connect(`mongodb+srv://${process.env.mongodb_username
        }:${process.env.mongodb_password}@${process.env.mongodb_cluster}.ukt0np6.mongodb.net/${process.env.mongodb_database}`)
    } catch (error) {
      res.status(500).json({ 'message': 'Could not connect to database.' })
      return
    }
    const db = client.db()

    try {
      const res = await db.collection('messages').insertOne(msg)
      msg.id = res.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({ 'message': 'Storing message failed.' })
      return
    }
    client.close()

    res.status(201).json({ message: 'Success', data: msg })
  }
}

export default handler