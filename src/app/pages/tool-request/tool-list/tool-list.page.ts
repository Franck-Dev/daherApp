import { Component, OnInit } from '@angular/core';
import { ToolRequest } from 'src/app/_interface/tool-request';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { ToolRequestService } from 'src/app/_services/toolRequest/tool-request.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.page.html',
  styleUrls: ['./tool-list.page.scss'],
})
export class ToolListPage implements OnInit {
  public requestList: ToolRequest[];

  constructor(
    private toolRequestService: ToolRequestService,
    private alertControleService: AlertService) { }

  ngOnInit() {
    this.updateToolList();
  }

  updateToolList() {
    this.toolRequestService.getToolRequests()
      .then((responseList: ToolRequest[]) => {
        this.requestList = responseList;
      })
      .catch((error) => {
        this.alertControleService.simpleAlert(
          'Erreur',
          'Mise à jour de la liste',
          'La liste des requêtes ne s\'est pas mise à jour correctement'
        );
      }
      );
  }


}