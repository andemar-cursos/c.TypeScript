import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team';
import { take } from 'rxjs/operators';
import { Countries } from '../interfaces/player';
import { TeamsTableHeaders } from '../services/team.service';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {

  //Con $ se identifica las variables a-sincronicas.
  public teams$: Observable<Team[]>;
  public tableHeaders = TeamsTableHeaders;
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams$ = this.teamService.getTeams();
    this.teamService
    .getTeams()
    .pipe(take(1))
    .subscribe(teams => {
        if(teams.length === 0){
          const team: Team = {
            name: 'MyTeam',
            country: Countries.Colombia,
            players: null,
          };
          this.teamService.addTeam(team);
        }
    });
  }

}
