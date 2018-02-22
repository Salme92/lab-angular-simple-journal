import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalService } from '../../service/journal.service';



@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entries: Array<any>;
  entry: any;

  constructor(private router:Router, private route: ActivatedRoute, private jS: JournalService) { }

  ngOnInit() {
    console.log(this.route)
    this.route.params.subscribe(params => {
      console.log(params)
      this.getEntryDetails(params['id']);
    })
  }

  getEntryDetails(id) {
    this.jS.getListId(id)
      .subscribe((entry) => {
        this.entry = entry;
      })
    }

}
