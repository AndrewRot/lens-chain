import { ipfsClient } from "~~/utils/simpleNFT/ipfs";

export async function POST(request: Request) {
  try {
    console.log('request')
    console.log(request.body)
    const body = await request.json();
    console.log('body')
    console.log(body)

    const res = await ipfsClient.add(JSON.stringify(body));
    return Response.json(res);
  } catch (error) {
    console.log("Error adding to ipfs", error);
    return Response.json({ error: "Error adding to ipfs" });
  }
}
