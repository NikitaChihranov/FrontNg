import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../models/order';
import {User} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  authorizedUser: User;
  orders: Order[] = [];
  ordersByUser: Order[] = [];

  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private router: Router
  ) {
    console.log(111);
    this.userService.dataSource.subscribe(value => {
      this.authorizedUser = value ? value : null;
      console.log(this.authorizedUser);
    });
    this.orderService.getAllOrders().subscribe((res) => {
      this.orders = res;
    });
    if (this.authorizedUser) {
      this.orderService.getOrdersByUser(this.authorizedUser._id).subscribe((res) => {
        this.ordersByUser = res;
        console.log(111);
        console.log(this.ordersByUser);
      });
    }
  }

  ngOnInit() {
    console.log(111);
  }

  updateOrder(order) {
    this.router.navigate(['/orders/updateOrder'], {queryParams: {order: JSON.stringify(order)}}).then();
  }

  deleteOrder(order) {
    this.orderService.deleteOrderById(order._id).subscribe((response) => {
      this.orderService.getOrdersByUser(this.authorizedUser._id).subscribe((res) => {
        this.ordersByUser = res;
      });
      this.orderService.getAllOrders().subscribe((re) => {
        this.orders = re;
      })
    });
  }
  deleteOrderFromAllOrders(order) {
    this.orderService.deleteOrderById(order._id).subscribe(() => {
      this.orderService.getAllOrders().subscribe((res) => {
        this.orders = res;
      });
      this.orderService.getOrdersByUser(this.authorizedUser._id).subscribe((response) => {
        this.ordersByUser = response;
      })
    })

  }
}
