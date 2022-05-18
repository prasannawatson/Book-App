import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import { Bookdetails } from '../shared/models/bookdetails.model';
import { AppState } from '../store/app.state';
import { getBookDetail } from './state/bookdetails.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  filterDetailsValue : any;
  bookDetailsValue: any;
  resultBookDetail: any;
  threeInputResult: any;
  dateFilterValue: any;
  ratingFilterValue: any;
  constructor( private store: Store<AppState>) { }
 
  ngOnInit(): void {
    // call the Json of booklist from app store
     this.store.select(getBookDetail).subscribe(data => {
      this.bookDetailsValue = data;
      // retriveing the book object from local storage 
      var retrievedObject = localStorage.getItem('bookObject');
       this.resultBookDetail = JSON.parse(retrievedObject);
       if (localStorage.getItem("bookObject") === null) {
        this.resultBookDetail = data;
      }
    });
  }
  // calling the filters
  filterValue($event){
    this.filterDetailsValue = $event;
   
    this.Filter(this.filterDetailsValue);
    this.dataFilter(this.filterDetailsValue);
    this.ratingFilter(this.filterDetailsValue);
    this.mergeValue();
    
   }
// filtering price, availability, name
   Filter(data){
     
    this.threeInputResult = this.bookDetailsValue.filter(function (el)
    {
      if(data.name === el.name ||  data.price === el.price || data.availability === el.availability){
      return el.name;
      }
      if(data.name === "" && data.price === "" && data.availability === "" && data.rating === "" && data.range.from === "" && data.range.to === "" ){
        return el;
        }
    }
    );

   }
 
   //data filter
  dataFilter(data){
    var startDate = new Date(data.range.from);
    var endDate = new Date(data.range.to);
    
    this.dateFilterValue = this.bookDetailsValue.filter(data => {
      var dateValue = new Date(data.date);
      return (dateValue >= startDate && dateValue <= endDate);
    });

  }
  //rating filter
  ratingFilter(data){
    this.ratingFilterValue = this.bookDetailsValue.filter(function (el)
    {
     if(data.ratingRange == '<'){
       if(el.rating < data.rating){
         return el.rating;
       }
     }
     else if(data.ratingRange === '>'){
        if(el.rating > data.rating){
          return el.rating;
        }
     }
     else if(data.ratingRange === '='){
      if(el.rating === data.rating){
        return el.rating;
      }
   }
   else if(data.ratingRange === '<='){
    if(el.rating <= data.rating){
      return el.rating;
    }
 }  else if(data.ratingRange === '>='){
  if(el.rating >= data.rating){
    return el.rating;
  }
}
    }
    );

  }
// merging the all filtered value 
mergeValue(){
  var ids = new Set(this.threeInputResult.map(d => d.id));
var merged = [...this.threeInputResult, ...this.dateFilterValue.filter(d => !ids.has(d.id))];
var ids1 = new Set(merged.map(d => d.id));
var mergedValue = [...merged, ...this.ratingFilterValue.filter(d => !ids1.has(d.id))];
this.resultBookDetail = mergedValue;
localStorage.setItem('bookObject', JSON.stringify(this.resultBookDetail));
 this.threeInputResult =[];
 this.ratingFilterValue = [];
 this.dateFilterValue =[];
}
   
}
