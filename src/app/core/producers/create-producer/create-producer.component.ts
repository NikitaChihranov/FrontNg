import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProducerService} from '../../../services/producer.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-create-producer',
  templateUrl: './create-producer.component.html',
  styleUrls: ['./create-producer.component.css']
})
export class CreateProducerComponent implements OnInit {
  filesToUpload: File[];
  authorizedUser: User;
  constructor(
    private producerService: ProducerService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }
  createProducer(producerForm: NgForm) {
    this.producerService.createProducer(producerForm.value, this.authorizedUser._id).subscribe((res) => {
      if (this.filesToUpload) {
        this.producerService.uploadPhoto(this.filesToUpload, res).subscribe((response) => {
          this.router.navigate(['/producers']).then();
        });
      }else{
        this.router.navigate(['/producers']).then();
      }
    });
   }

  fileChangeEvent(event: any) {
    this.filesToUpload = (<any>event.target).files;
  }
}
