import {Component} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";

export interface Customer {
  name: string;
  address: string;
  salary: number;
  registerDate: Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private toastrService: ToastrService) {
  }

  customerForm= new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    salary: new FormControl('')
  });

  customers: Customer[] = [];
  // [0],[1],[2]

  name = '';
  address = '';
  salary = 0;

  setName(name: string) {
    this.name = name;
  }

  setAddress(address: string) {
    this.address = address;
  }

  setSalary(salary: string) {
    this.salary = Number.parseInt(salary);
  }

  saveCustomer() {
    console.log(this.customerForm)
   /* this.customers.push(
      {
        'name': this.name,
        'address': this.address,
        'salary': this.salary,
        'registerDate': new Date()
      }
    );
    this.popup('Customer Saved!','Complete!','success');*/
  }

  deleteCustomer(index: number) {
    if (confirm('Are you sure?')) {
      this.customers.splice(index, 1);
    }

  }

  popup(message: string, title: string, type: string) {
    switch (type) {
      case 'success': this.toastrService.success(message,title,{
        timeOut:5000,
        positionClass:'toast-bottom-right'
      }); break;
      case 'error':
      case 'warning':
    }
  }


}
