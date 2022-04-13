import { Injectable } from '@angular/core';
import { Update } from 'src/app/_interface/update';
import { AlertService } from '../divers/alert.service';
import { RequestService } from '../request.service';
import { AuthService } from '../users/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateAppService {

  private tableUpdates = [
    {
      id: 1,
      dateUpdate: new Date(2022, 4, 14),
      description:
        'Pour associer un outillage à un moulage il suffit de scanner le numéro d\'OT dans l\'OF.' +
        'Vous devez le scanner comme un kit',
      title: 'Module Moulage'
    },
    {
      id: 2,
      dateUpdate: new Date(2022, 4, 14),
      description: 'Le module outillage est ouvert pour test',
      title: 'Module Outillage'
    },
  ];

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private requestService: RequestService

  ) {
  }



  /**
   *Si la promise retourn true c'est que toutes les updates sont vues
   *Si la promise return false l'utilisateur reverra les update à sa prochaine connexion
   *
   * @return {*}  {Promise<boolean>}
   * @memberof UpdateAppService
   */
  showUpdates(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.getUpdatesToShow()
        .then((updates: Update[]) => {
          if (updates) {
            console.log('bonjour', updates);
            updates.forEach((update: Update) => {
              this.alertService.simpleAlert('Info sur la mise à jours', update.title, update.description)
                .then(() => {
                  console.log('hello');
                  resolve(true);
                });
            });
          } else {
            console.log('toto');
            resolve(true);
          }

        });
    });
  }



  getUpdates(day1?: Date, day2?: Date): Promise<any> {
    return new Promise((resolve, reject) => {
      const updates = this.tableUpdates.filter(update => update.dateUpdate > new Date(this.authService.authUser.lastCon));
      if (updates.length > 0) {
        resolve(updates);
      } else {
        resolve(null);
      }

    });
    // return this.requestService.createGetRequest('');
  }

  private getUpdatesToShow(): Promise<Update[]> {
    const day = new Date();
    const lastConnection = this.authService.authUser.lastCon;
    return this.getUpdates(lastConnection, day);
  }
}