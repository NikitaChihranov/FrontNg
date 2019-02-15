import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AboutService} from '../../../services/about.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-about',
  templateUrl: './create-about.component.html',
  styleUrls: ['./create-about.component.css']
})
export class CreateAboutComponent implements OnInit {
  filesToUpload: File[];

  constructor(
    private aboutService: AboutService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  create(aboutForm: NgForm) {
    this.aboutService.create(aboutForm.value).subscribe((res) => {
      if (this.filesToUpload) {
        this.aboutService.uploadLogo(this.filesToUpload, res).subscribe((response) => {
          this.router.navigate(['/about']).then();
        });
      } else {
        this.router.navigate(['/about']).then();
      }
    });
  }

  fileChangeEvent(event: any) {
    this.filesToUpload = (<any>event.target).files;
  };
}
