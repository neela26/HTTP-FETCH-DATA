import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit {

  // Create empty array to hold the batch details
  public students = [];

  // Add the instance of service in side constructor
  constructor(private _studentservice: StudentsService)
  {

  }

public onClick()
{
  this._studentservice.GetBatchDetails()
  .subscribe(data=>this.students=data);
}

  // call the service method once in ngOnInit method
  ngOnInit() 
  {
   
  }

}
