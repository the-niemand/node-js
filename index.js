const express = require('express');
const Teams = require('./models/teams');
const app = express();
require('./config/connect');
app.use(express.json());




app.post('/createTeam', async (req, res) => {
     try {
          const data = req.body
          const Team = new Teams(data);
          const savedTeam = await Team.save()
          res.send(savedTeam)
     } catch (err) {
          res.send(err)
     }
})




app.get('/fetchTeams', async (req, res) => {
     try {
         const teams = await Teams.find({});
         res.send(teams);
     } catch (err) {
         res.status(500).send(err);
     }
 });
 

app.get('/fetchTeamById/:id', async (req, res) => {
     try {
          const id = req.params.id
          const Team = await Teams.find({ id : id });
          res.send(Team)
     } catch (err) {
          res.send(err)
     }
})



app.delete('/deleteTeamById/:id', async (req, res) => {
     try {
          const id = req.params.id
          const deleted = await Teams.findOneAndDelete({ id : id });
          res.send(deleted)
     } catch (err) {
          res.send(err)
     }
})


app.put('/updateTeamById/:id', async (req, res) => {
     try {
          id = req.params.id
          newData = req.body
          const updated = await Teams.findOneAndUpdate({ id : id } , {name : newData.name , country: newData.country });
          res.send(updated)
     } catch (err) {
          res.send(err)
     }
})




app.listen('5000', () => {
     console.log('im listening');
})