import { Component, Input } from '@angular/core';
import { TransactionComponent } from "../../../layout/transaction/transaction.component";
import { TransactionTypes } from 'src/app/enum/transactionTypes';

@Component({
    selector: 'app-logistics-location-add',
    standalone: true,
    templateUrl: './location-add.component.html',
    styleUrl: './location-add.component.css',
    imports: [TransactionComponent]
})
export class LocationAddComponent  {
  handleStaticMenuActionEvent(parameter: TransactionTypes) {
    if(parameter == TransactionTypes.Add){
      
    }
  }
  
  handleCustomMenuActionEvent(parameter:string){
    console.log(parameter);
  }
}
