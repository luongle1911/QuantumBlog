import { getCollection } from 'astro:content';

export async function GET() {
  const coHoc = await getCollection('co-hoc-luong-tu');
  const dienToan = await getCollection('dien-toan-luong-tu');
  
  const allPosts = [...coHoc, ...dienToan].map(post => ({
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags || [],
    url: `/QuantumBlog/${post.collection}/${post.id.replace(/\.[^/.]+$/, "")}/`,
    body: post.body || "",
  }));

  return new Response(JSON.stringify(allPosts), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
