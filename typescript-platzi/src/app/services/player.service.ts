import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Player } from '../interfaces/player';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  //
  private playersDb: AngularFireList<Player>;

  constructor(private db: AngularFireDatabase) { 
    //Se accede a la db de firebase, se accede a la lista de player's y se ordena por nombre.
    this.playersDb = this.db.list('/players', ref => ref.orderByChild('name'));
  }

  getPlayers(): Observable<Player[]>{
    //
    return this.playersDb.snapshotChanges().pipe(
      map(changes => {
        return changes.map( c => ( { $key: c.payload.key, ...c.payload.val() } ) )
      })
    );
  }

  //Ingresar un juegor a la db
  addPlayer(player: Player){
    return this.playersDb.push(player);
  }

  //Eliminar un jugador de la db.
  delatePlayer(id: string){
    this.db.list('/players').remove(id);
  }

  editPlayer(newPlayerData){
    const $key = newPlayerData.$key;
    delete(newPlayerData.$key);
    this.db.list('/players').update($key, newPlayerData);
  }

}
