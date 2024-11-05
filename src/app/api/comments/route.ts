import { NextResponse } from 'next/server';

export async function GET(request:any) {
    const url = new URL(request.url);
    const postId = url.searchParams.get('postId');
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const data = await res.json();
    return NextResponse.json(data);
  }
  