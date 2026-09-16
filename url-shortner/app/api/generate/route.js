import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  try {
    const body = await request.json()
    const url = body.url?.trim()
    const shorturl = body.shorturl?.trim()

    if (!url || !shorturl) {
      return Response.json(
        { success: false, error: true, message: "URL and short URL are required." },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({ shorturl })
    if (doc) {
      return Response.json({ success: false, error: true, message: 'URL already exists!' }, { status: 409 })
    }

    await collection.insertOne({ url, shorturl })

    return Response.json({ success: true, error: false, message: 'URL Generated Successfully' })
  } catch (err) {
    console.error("API /generate error:", err)
    return Response.json({ success: false, error: true, message: err.message || "Server error" }, { status: 500 })
  }
}