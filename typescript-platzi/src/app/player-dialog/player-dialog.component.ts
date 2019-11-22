import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Countries, SquadNumber, Player } from '../interfaces/player';
import { PlayerService } from '../services/player.service';
import { take } from 'rxjs/operators';
import { TeamService } from '../services/team.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.css']
})
export class PlayerDialogComponent implements OnInit {
  @Input() player:Player;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();
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

  private editPlayer(playerFormValue){
    const playerFormValueKey = {...this.player, $key: this.player.$key};
    const playerFormValueKeyFormattedkey = {...this.player, key: this.player.$key};
    delete playerFormValueKeyFormattedkey.$key;
    
    const moddifiedPlayers =  this.team.players ? 
      this.team.players.map(player => {
        return player.key === this.player.$key ? playerFormValueKeyFormattedkey : player;
      }) : this.team.players;

    const formattedTeam = {
      ...this.team,
      players: [...(moddifiedPlayers ? moddifiedPlayers : [playerFormValueKeyFormattedkey])]
    };

    this.playerServices.editPlayer(playerFormValueKey);
    this.teamServices.editTeam(formattedTeam);
  }

  onSubmit(playerForm: NgForm){
    const playerFormValue = {...playerForm.value};

    if(playerForm.valid){
      playerFormValue.leftFooted = playerFormValue.leftFooted === '' ? false : playerFormValue.leftFooted;
    }

    if(this.player){
      this.editPlayer(playerFormValue);
    }else{
      this.newPlayer(playerFormValue);
    }
    //Cerrar el formulario
    window.location.replace('#');
  }

  onClose(){
    this.closeDialog.emit(true);
  }

}
