import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  const isAuthPage = path.startsWith('/login');
  const isPublicRoute = path === '/';

  // Verificando se o usuario tem o cookie de sessão do Inspectify
  const hasAuth = request.cookies.has('user_email');

  // Se a rota for privada (dashboard, vistoria) e não tiver auth, chuta pro login
  if (!isAuthPage && !isPublicRoute && !hasAuth) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Se a rota for login e o cara já estiver logado, joga pro dashboard
  if (isAuthPage && hasAuth) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // O Middleware roda em tudo, exceto em arquivos estáticos, imagens e API
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|manifest.json|icons/).*)'],
};