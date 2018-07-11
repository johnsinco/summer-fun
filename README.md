# summer-fun
like book it!


### Kids activity incentives system for Rec depts schools churches parents.
- Parent signs up via fb
- Add kid to acct. kid chooses “challenge”.
- Kid logs progress and leaderboard. Mini rewards like virtual stickers
- Email reminders  
- Donation page with payments
- Can post to parents fb with accomplishments


### REST API

#### Players
Players are participants, ie the kids. they have a name and activities
- GET/POST/PUT/DELETE /players
- GET /player/{id}  -- player by id

#### Challenges
Challenges are activities the kids try to complete to earn points
- POST /player/{id}/challenges -- add a challenge to a player
- GET /player/{id}/challenges -- get all player challenges
- PUT /player/{id}/challenge/{id} -- update progress for a challenge

#### Organization
The org the parents signed up thru has a list of players and leaderboard
- GET/POST/PUT/DELETE /org
- GET /org/{id}/players
- GET /org/{id}/leaderboard
