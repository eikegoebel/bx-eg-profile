import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ]
})

export class ProfileComponent {
  schools = [
    {
      name: 'Generic School',
      start: new Date('2003-09-01'),
      end: new Date('2009-07-01'),
    },
    {
      name: 'Generic High School',
      start: new Date('2009-09-01'),
      end: new Date('2012-06-01'),
    },
    {
      name: 'Generic Univeristy',
      start: new Date('2012-09-01'),
      end: new Date(),
    }
  ];
  /*adds education code-by-color #140956*/


  /*adds jobs code-by-color #140956*/


  /*adds skills code-by-color #1BA3FF*/

}
