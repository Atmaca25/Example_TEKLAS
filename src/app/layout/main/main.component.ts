import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { TopbarComponent } from "../topbar/topbar.component";
import { RouterOutlet } from '@angular/router';
import { TransactionComponent } from "../transaction/transaction.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [NavbarComponent, TopbarComponent, RouterOutlet, TransactionComponent]
})
export class MainComponent {

}
