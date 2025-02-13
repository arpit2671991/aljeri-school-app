import { clerkMiddleware, createRouteMatcher, auth } from "@clerk/nextjs/server";
import { routeAccessMap } from "./lib/settings";
import { NextResponse } from "next/server";

// Create route matchers based on the routes in routeAccessMap
const matchers = Object.keys(routeAccessMap).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccessMap[route],
}));

export default clerkMiddleware(async (auth, req) => {
  // Wait for the auth session claims to be ready
  const { sessionClaims } = await auth();
  
  console.log(sessionClaims)
  // Safely access the role from sessionClaims, ensuring it exists
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  // If no role is found, we redirect the user to a default path
  // if (!role) {
  //   return NextResponse.redirect(new URL('/', req.url)); // Or any default path you prefer
  // }

  // Loop through the matchers and check if the route is protected
  for (const { matcher, allowedRoles } of matchers) {
    if (matcher(req) && !allowedRoles.includes(role)) {
      // Redirect to a path based on the user's role if they are not allowed
      return NextResponse.redirect(new URL(`/${role}`, req.url));
    }
  }

  // If all checks pass, allow the request to continue
  return NextResponse.next();
});

// Configuration for matching routes
export const config = {
  matcher: [
    // Skip Next.js internals and static files unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
