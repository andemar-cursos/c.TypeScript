import { Component, OnInit } from '@angular/core';
import { Countries, SquadNumber } from '../interfaces/player';
import { PlayerService } from '../services/player.service';
import { take } from 'rxjs/operators';
import { Team } from '../interfaces/team';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.css']
})
export class PlayerDialogComponent implements OnInit {

  private team;
  public countries = Object.keys(Countries).map(key => ({lavel: key, key: Countries}));
  public squadNumber = Object.keys(SquadNumber).slice(Object.keys(SquadNumber).length/2);


  constructor(private playerServices: PlayerService, private teamServices: TeamService) { }

  ngOnInit() {
  
    this.teamServices
    .getTeams()
    .pipe(take(1))
    .subscribe(teams => {
        if(teams.length > 0){
          this.team = teams[0];
        }
    });

  }

  private newPlayer(playerFormValue){
    const key = this.playerServices.addPlayer(playerFormValue).key;
    const playerFormValueKey = {
      ...playerFormValue, 
      key
    }
    const formattedTeam = {
      ... this.team,
      players: [... (this.team.players ? this.team.players : []), playerFormValueKey]
    }

    this.teamServices.editTeam(formattedTeam);
  }


}
