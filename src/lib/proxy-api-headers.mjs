import { isIP } from 'node:net';
import { serverApiHeaders } from './server-api-headers.mjs';

/** Vercel supplies these headers at the edge for incoming visitor requests. */
export function proxyApiHeaders(request) {
  const headers = serverApiHeaders();
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const real = request.headers.get('x-real-ip')?.trim();
  headers.set('X-TDD-Client-IP', (forwarded && isIP(forwarded) ? forwarded : null)
    || (real && isIP(real) ? real : null) || '0.0.0.0');
  return headers;
}
