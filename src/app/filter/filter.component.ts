import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

//Variable Declaration
selectedOption = '='
  ratingsRange = [
    {value: '=', viewValue: '='},
    {value: '<', viewValue: '<'},
    {value: '>', viewValue: '>'},
    {value: '<=', viewValue: '<='},
    {value: '>=', viewValue: '>='}
  ];

// pass Json output to booklist component
  @Output() bookDetailsFilterValue = new EventEmitter<any>();

  constructor(private form: FormBuilder) { }

  ngOnInit(): void {
    // retrieving the filter object from local storage 
    var retrievedObject = localStorage.getItem('filerObject');
    var filerObjectValue = JSON.parse(retrievedObject);

    //applying filter object to the form
    if(localStorage.getItem("filerObject") != null){
    this.filterForm.get('name').setValue(filerObjectValue.name);
    this.filterForm.get('range').get('from').setValue(filerObjectValue.range.from);
    this.filterForm.get('range').get('to').setValue(filerObjectValue.range.to);
    this.filterForm.get('price').setValue(filerObjectValue.price);
    this.filterForm.get('ratingRange').setValue(filerObjectValue.ratingRange);
    this.filterForm.get('rating').setValue(filerObjectValue.rating);
    this.filterForm.get('availability').setValue(filerObjectValue.availability);
    }
  }
  // declaring the filter form group
  filterForm = this.form.group({
    name: [''],
    range: this.form.group({
      from: [],
      to: [''],
      
    }),
    price: [''],
    ratingRange: [''],
    rating:[''],
    availability:['']
    
  })

  formInit(){
   this.filterForm = this.form.group({
      name: [''],
      range: this.form.group({
        from: [''],
        to: [''],
        
      }),
      price: [''],
      ratingRange: ['='],
      rating:[''],
      availability:['']
      
    })
  }
// passing the output to book list 
submit(){
  this.bookDetailsFilterValue.emit(this.filterForm.value);
  localStorage.setItem('filerObject', JSON.stringify(this.filterForm.value));
}
// Clearing the filter value 
  clear(){
   this.filterForm.reset();
   this.formInit();
   this.bookDetailsFilterValue.emit(this.filterForm.value);
  }
}
