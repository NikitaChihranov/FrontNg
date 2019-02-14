import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'deleteAll',
  templateUrl: './delete-all-producers.component.html',
  styleUrls: ['./delete-all-producers.component.css']
})
export class DeleteAllProducersComponent implements OnInit {
  @Output() deleteAll = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  deleteAllProducers() {
    this.deleteAll.emit();
  }
}
