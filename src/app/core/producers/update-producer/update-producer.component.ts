import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProducerService} from '../../../services/producer.service';
import {NgForm} from '@angular/forms';
import {Producer} from '../../models/producer';

@Component({
  selector: 'app-update-producer',
  templateUrl: './update-producer.component.html',
  styleUrls: ['./update-producer.component.css']
})
export class UpdateProducerComponent implements OnInit {
  id = '';
  producer: Producer;
  filesToUpdate: File[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private producerService: ProducerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.id = JSON.parse(res.id);
    });
  }
  updateProducer(producerForm: NgForm) {
    this.producer = {...this.producer, ...producerForm.value};
    this.producer._id = this.id;
    this.producerService.updateProducer(this.producer._id, this.producer).subscribe((res) => {
      if (this.filesToUpdate) {
        this.producerService.updatePhoto(this.filesToUpdate, res).subscribe((response) => {
          this.router.navigate(['/producers']).then();
        });
      } else {
        this.router.navigate(['/producers']).then();
      }
    });
  }

  fileUpdateEvent(event: any) {
    this.filesToUpdate = (<any>event.target).files;
  }


}
