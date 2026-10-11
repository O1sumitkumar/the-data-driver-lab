import { handleMcpRequest } from '@/lib/mcp/server.mjs';
import { apiBase } from '@/lib/config';
import { proxyApiHeaders } from '@/lib/proxy-api-headers.mjs';

export const runtime = 'nodejs';
export const maxDuration = 15;

const handle = (request: Request) => handleMcpRequest(request, { apiBase: apiBase(), upstreamHeaders: proxyApiHeaders(request) });
export const GET = handle;
export const POST = handle;
export const DELETE = handle;
export const OPTIONS = handle;
