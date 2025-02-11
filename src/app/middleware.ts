import { NextRequest } from 'next/server'
import { updateSession } from "@utils/supabase/middleware";

export default async function middleware(request: NextRequest) {
	return await updateSession(request)
}

// Routes Middleware should not run on
export const config = {
	matcher: [
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
	],
}