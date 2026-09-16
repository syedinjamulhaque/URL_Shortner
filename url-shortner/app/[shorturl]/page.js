import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
  const { shorturl } = await params

  let target = null

  try {
    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")
    const doc = await collection.findOne({ shorturl })

    if (doc?.url) {
      target = /^https?:\/\//i.test(doc.url) ? doc.url : `https://${doc.url}`
    }
  } catch (err) {
    console.error("Redirect lookup failed:", err)
  }

  redirect(target || process.env.NEXT_PUBLIC_HOST)
}