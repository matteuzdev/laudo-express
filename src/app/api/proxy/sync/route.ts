import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Tenta falar com o backend internamente (Railway) ou localmente
    const BACKEND_SERVICE_URL = process.env.BACKEND_URL || 'http://localhost:8000';
    const targetUrl = `${BACKEND_SERVICE_URL}/vistoria/sync`;

    console.log(`[PROXY] Redirecionando para: ${targetUrl}`);

    const res = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('[PROXY_ERROR]', error);
    return NextResponse.json({ detail: "Erro na ponte de comunicacao com o Backend." }, { status: 500 });
  }
}
