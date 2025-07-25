import { NextRequest, NextResponse } from 'next/server';
import { getAccessToken } from '@/lib/spotify';

export const GET = async (req: NextRequest) => {
  const code = req.nextUrl.searchParams.get('code');

  if (!code) {
    return NextResponse.redirect('/');
  }

  const tokens = await getAccessToken(code);

  // Можно сохранить в cookie, но пока просто редирект
  console.log('Access Token:', tokens.access_token);

  return NextResponse.redirect('/dashboard');
};
