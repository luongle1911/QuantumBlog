import { getCollection } from 'astro:content';

export async function GET() {
  const coHoc = await getCollection('en-co-hoc-luong-tu');
  const dienToan = await getCollection('en-dien-toan-luong-tu');
  const hocMay = await getCollection('en-hoc-may-luong-tu');
  
  const allPosts = [...coHoc, ...dienToan, ...hocMay].map(post => ({
    title: post.data.title,
    description: post.data.description,
    tags: post.data.tags || [],
    url: `/QuantumBlog/en/${post.collection.replace('en-', '')}/${post.id.replace(/\.[^/.]+$/, "")}/`,
    body: post.body || "",
  }));

  return new Response(JSON.stringify(allPosts), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
