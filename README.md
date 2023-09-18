In this module we will be covering Routing and Navigation. Below are the checklist which are covered

1.  Routing based on [id]. For eg., (/users/1 ) ( /users/2)
2.  Routing based on [[slug]](optional slug) . For eg., /products/grocery/store/id
3.  Adding Nav Bar and click of the moving to /users.
4.  Admin layout is created for only admin users, other respective layout added in main Layout will be common for all the pages inside Project.
5.  Added sorting on click of Id, Name, Email. (Using Fast Sort).

Details of above points :

1. Routing is done based on AppRouter if FOLDERNAME/page.tsx is present can access FOLDERNAME as route in the mail URL and if there are userid to be accessed add [id] as folder name and access the route users/1 , users/2

2. Routing based on [[slug]] - optional slug, is for sub routes /products - (/grocery/store/list)
3. Navbar is added for overall project to nagivate between the pages.
4. Admin layout is created for only admin users, other respective layout added in main Layout will be common for all the pages inside Project.
5. For server side rendering always try to get value from query parmas instead of using state.
