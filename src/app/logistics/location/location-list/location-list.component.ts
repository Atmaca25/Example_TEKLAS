import { Component, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxDataGridModule } from 'devextreme-angular';
import { DxoExportModule } from 'devextreme-angular/ui/nested';
import { TransactionComponent } from '../../../layout/transaction/transaction.component';
import { TransactionTypes } from 'src/app/enum/transactionTypes';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-logistics-location-list',
  standalone: true,
  templateUrl: './location-list.component.html',
  styleUrl: './location-list.component.css',
  imports: [DxDataGridModule, DxoExportModule, TransactionComponent],
})
export class LocationListComponent {
  dataSource: any;
  columns:any;
  page:number = 1;
  pageSize:number = 5;
  remoteOperationData = {
    filtering : null
};

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.columns = [
      { dataField: 'Id', caption: 'ID' },
      { dataField: 'Loc', caption: 'Location' },
      { dataField: 'Description', caption: 'Description' },
      { dataField: 'WarehouseName', caption: 'Warehouse' },
      { dataField: 'LocationType', caption: 'Location Type' }
    ];

    this.locationService.getLocations(this.page,this.pageSize).subscribe(result => {
      this.dataSource = result;  
    });
  }

  handleStaticMenuActionEvent(parameter: TransactionTypes) {
    console.log(this.dataGrid);
    console.log(this.remoteOperationData);
    if (parameter == TransactionTypes.Add) {
      this.loadData();
    }
  }
}
