import { Component, Input, ViewChild } from '@angular/core';
import { DxDataGridComponent, DxDataGridModule } from 'devextreme-angular';
import { LocationService } from '../service/location.service';
import { TransactionTypes } from 'src/app/enum/transactionTypes';
import { TransactionComponent } from "../../../layout/transaction/transaction.component";
import { DxoExportModule } from 'devextreme-angular/ui/nested';
import DataSource from 'devextreme/data/data_source';
import { HttpClient, HttpParams } from '@angular/common/http';
import CustomStore from 'devextreme/data/custom_store';
import { LoadOptions } from 'devextreme/data';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'app-logistics-location-delete',
    standalone: true,
    templateUrl: './location-delete.component.html',
    styleUrl: './location-delete.component.css',
    imports: [DxDataGridModule, DxoExportModule, TransactionComponent]
})
export class LocationDeleteComponent {
  customDataSource: DataSource;
  height = window.innerHeight - 150;
  width = window.innerWidth - 150;

  constructor(private http: HttpClient) {
    
      const isNotEmpty = (value: unknown) => value !== undefined && value !== null && value !== '';

      this.customDataSource = new DataSource({
          store: new CustomStore({
              key: 'Id',
              load: (loadOptions: LoadOptions) => {
                  let params: HttpParams = new HttpParams();
                  [
                      'filter',
                      'group',
                      'groupSummary',
                      'parentIds',
                      'requireGroupCount',
                      'requireTotalCount',
                      'searchExpr',
                      'searchOperation',
                      'searchValue',
                      'select',
                      'sort',
                      'skip',
                      'take',
                      'totalSummary',
                      'userData',
                      'dataField'
                  ].forEach(function (i) {
                      const optionValue = loadOptions[i as keyof LoadOptions];
                      if (i in loadOptions && isNotEmpty(optionValue)) {
                          params = params.set(i, JSON.stringify(optionValue));
                      }
                  });

                  return lastValueFrom(
                      this.http.get(
                        'http://localhost:56055/ShipmentWarehouseApiMMA/GetAllLocationDevEx',
                          { params }
                      )
                  ).then((response: any) => {
                    debugger
                      return {
                          data: response?.Data,
                          totalCount: response?.Total,
                          summary: response?.summary,
                          groupCount: response?.groupCount,
                      };
                  }).catch(() => {
                      throw 'Data loading error';
                  });
              },
              // Needed to process selected value(s) in the SelectBox, Lookup, Autocomplete, and DropDownBox
              // byKey: (key: number) => {
              //     return lastValueFrom(
              //        this.http.get(`$https://mydomain.com/MyDataService?id=${key}`)
              //     );
              // },
          }),
      });
  }

  handleStaticMenuActionEvent(parameter: TransactionTypes) {
    if (parameter == TransactionTypes.Add) {
      // this.loadData();
    }
  }

  calculateFilterExpression(value, selectedFilterOperations, target) {
    debugger
    const column = this as any;
    if (target === 'headerFilter' && value === 'weekends') {
      return 1;
    }
    return column.defaultCalculateFilterExpression.apply(this, arguments);
  }
}
