Simple presentation of “Server Canvas” interface. 

Lypraries and helpers:
- jQuery,
- SASS (includes basic nesseray setup, mixins and helpers),
- Autoprefixer (setup to support last to versions of morern browsers)

==========================

TODOs

html/css

servers:
- it should have a +server button
- it should have a -server button
- it should have a list of servers
- list should be aligned horizontaly with max of 4 items in a row
- each server block can contain max of 2 apps
- each app in the server block should have an abbreviation of two first letters
apps:
- it should have a list of apps
- each app should have a separate style (color)
- each app contains + and - buttons to add and remove the app


js:

- it should get a list of servers 
- it should keep a list of servers

servers:
- Clicking “Add Server” should create a new server and a new gray block in the Server Canvas.
- Clicking “Destroy” should remove the last server and its gray block from the Server Canvas.
- Clicking “+” for one of the Available Apps should start an instance of that app in the cluster.
- Clicking “-” for one of the Available Apps should kill the newest instance of that app in the cluster.
apps:
- Run on the first server running 0 apps.
- If all servers are running at least 1 app, the new app should be started on the first server running only 1 app.
- If all servers are running two apps, the app should not be started.
