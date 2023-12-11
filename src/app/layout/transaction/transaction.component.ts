import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TransactionTypes } from 'src/app/enum/transactionTypes';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
buttonActionTypes = TransactionTypes;
  constructor(
    private _router:Router,
    private _activatedRoute:ActivatedRoute) {
    
  }

  navigateToTransaction(transactionName:string) {
    var paths:string[] = window.location.pathname.split('/');
    paths.pop();
    paths.push(transactionName);
    this._router.navigate(paths);
  }

  @Output() staticMenuAction = new EventEmitter<TransactionTypes>();

  triggerMenuActionEvent(buttonName:TransactionTypes) {
    console.log(buttonName);
    this.staticMenuAction.emit(buttonName);
  }

  isListScreen(){
    return location.pathname.includes('list');
  }
}

