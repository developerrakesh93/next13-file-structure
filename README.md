In this module we will be covering Navigation. Below are the checklist which are covered

1. Currently Link is used to navigate between the pages below are the points about Link

   a. Only downloads the content of the target page.
   b. Pre-fetches links that are in the viewport.
   c. Caches pages on the client.

2. Programatic Navigation : use of - import { useRouter } from 'next/navigation' - to push to another Page.

3. Adding the <suspense> tag to load between the data if data is fetched is slow and can append loading part in the app & route level.

4. Can Change the Page Not Found error by adding new file in the respective folder or root folder i.e., not-found.tsx

5. If there is doesn't (' - apostrophe used in the file need to replace with &apos or use string literal) or else it will throw error in the build time.

6. Separate error page can be handled in the route level or in the app level i.e., error.tsx
