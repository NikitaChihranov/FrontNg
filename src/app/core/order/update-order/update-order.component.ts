import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';
import {Order} from '../../models/order';
import {NgForm} from '@angular/forms';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  authorizedUser: User;
  orderToUpdate: Order;
  addressValue = '';
  phoneValue = '';
  detailsValue = '';
  paymentValue = '';
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.orderToUpdate = JSON.parse(res.order);
    })
  }
  updateOrder(form: NgForm){
    this.orderToUpdate = {...this.orderToUpdate, ...form.value};
    this.orderService.updateOrder(this.orderToUpdate).subscribe((res) => {
      this.router.navigate(['/orders/updatedPage'], {queryParams: {order: JSON.stringify(res)}}).then();
    })
  }
  inputAdress(input){
    this.addressValue = input.value;
}
  inputPhone(input){
    this.phoneValue = input.value;
}
  inputDetails(input){
    this.detailsValue = input.value;
}
  inputPayment(input){
    this.paymentValue = input.value;
}

}
