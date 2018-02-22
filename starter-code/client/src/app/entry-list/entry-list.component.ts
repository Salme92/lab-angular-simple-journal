import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../service/journal.service'


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Array<any>

  constructor(
    private jS:JournalService
  ) { 
    this.jS.getList().subscribe( list => this.entries = list );
  }

  ngOnInit() {
  }
}