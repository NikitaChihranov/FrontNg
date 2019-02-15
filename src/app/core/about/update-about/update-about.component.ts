import {Component, OnInit} from '@angular/core';
import {AboutService} from '../../../services/about.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-about',
  templateUrl: './update-about.component.html',
  styleUrls: ['./update-about.component.css']
})
export class UpdateAboutComponent implements OnInit {
  filesToUpdate: File[];

  constructor(
    private aboutService: AboutService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  update(aboutForm: NgForm) {
    this.aboutService.update(aboutForm.value).subscribe((res) => {
      if (this.filesToUpdate) {
        this.aboutService.updateLogo(this.filesToUpdate).subscribe((response) => {
          this.router.navigate(['/about']).then();
        });
      } else {
        this.router.navigate(['/about']).then();
      }
    });
  }

  fileUpdateEvent(event: any) {
    this.filesToUpdate = (<any>event.target).files;
  }

}
