import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DialogService} from '../../services/others/dialog/dialog.service';

@Component({
  selector: 'app-can-activate',
  templateUrl: './can-activate.component.html',
  styleUrls: ['./can-activate.component.less']
})
export class CanActivateComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm('路由守卫：离开测试');
  }


  ngOnInit() {
  }

}
