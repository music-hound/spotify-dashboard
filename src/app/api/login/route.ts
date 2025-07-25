import { NextResponse } from 'next/server';
import { getLoginUrl } from '@/lib/spotify';

export const GET = async () => {
  const loginUrl = getLoginUrl();
  return NextResponse.redirect(loginUrl);
};
