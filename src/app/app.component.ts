import { Component, OnInit, OnChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControlName, FormControl} from '@angular/forms';
import { GlobalHttpService } from './services/global-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  step1FormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  fiveFormGroup: FormGroup;

  pnTxt = ["PN1", "PN2", "PN3", "PN4"];
  pnDescription = ["PNDesc1", "PNDesc2", "PNDesc3", "PNDesc4"];
  classificationItems: string[] = ['Item Class1', 'Item Class2', 'Item Class3', 'Item Class4', 'Item Class5', 'Item Class6'];
  itemGroupTxt = ["Item1", "Item2", "Item3", "Item4"];
  provisionTxt = ["Provision1", "Provision2", "Provision3", "Provision4"];
  manufacturerTxt =["Manufacturer1", "Manufacturer2", "Manufacturer3", "Manufacturer4"];
  glAccountTxt = ["GlAccount1", "GlAccount2", "GlAccount3", "GlAccount4"];
  purchaseUOMTxt = ["Purchase1", "Purchase2", "Purchase3", "Purchase4"]
  stockUOMTxt = ["Stock1", "Stock2", "Stock3", "Stock4"];
  consumeUOMTxt = ["Consume1", "Consume2", "Consume3", "Consume4"];
  priorityTxt = ["Priority1", "Priority2", "Priority3", "Priority4"];
  integrationTxt = ["Integration1", "Integration2", "Integration3", "Integration4"];
  items: FormArray;

  step1Data: any;
  isOptional = false;

  constructor(private _formBuilder: FormBuilder, private globalHttp: GlobalHttpService) {}

  ngOnInit() {
    this.step1FormGroup = this._formBuilder.group({
      //items: this._formBuilder.array([ this.createItem() ])
      pnNo: ['', Validators.required],
      pnDesc: ['', Validators.required],
      serialized: [''],
      timeLife: [''],
      nsn: [''],
      itemClassification: ['', Validators.required],
      itemGroup: [''],
      acquired: [''],
      expirationDate: [''],
      shelfLife: [''],
      provision: [''],
      hazardous: [''],
      pma: [''],
      der: [''],
      manufacture: ['', Validators.required],
      schematic: [''],
      rfq: [''],
      glAccount: ['', Validators.required],
      purchaseUOM: ['', Validators.required],
      stockUOM: [''],
      consumeUOM: [''],
      days: [''],
      hours: [''],
      stockLevel: [''],
      reorderPoint: [''],
      reorderQty: [''],
      minOrderQty: [''],
      priority: [''],
      integration: [''],
      memo: ['']
      
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this._formBuilder.group({
      fourCtrl: ['', Validators.required]
    });
    this.fiveFormGroup = this._formBuilder.group({
      fiveCtrl: ['', Validators.required]
    });

    /* this.globalHttp.getJson().subscribe(res=> {
      console.log(res);
    }) */

  }

  /* ngOnChanges() {
    this.createItem();
  }

  createItem(): FormGroup {
    return this._formBuilder.group({
      firstCtrl: ''
    });
  }

  addItem(): void {
    this.items = this.firstFormGroup.get('items') as FormArray;
    this.items.push(this.createItem());
  } */

  submitForm1() {    
    this.step1Data = this.step1FormGroup.value;
    console.log(this.step1Data);
    localStorage.setItem("step1", JSON.stringify(this.step1Data));
  }

}
