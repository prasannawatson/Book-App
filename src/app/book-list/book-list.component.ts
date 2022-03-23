import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getBookDetail } from '../dashboard/state/bookdetails.selector';
import { Bookdetails } from '../shared/models/bookdetails.model';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  
  constructor(private store: Store<AppState>) { }
@Input() filterDetailsData: any[]


  ngOnInit(): void {
    
  }
    
  }
  
