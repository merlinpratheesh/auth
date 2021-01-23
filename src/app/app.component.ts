import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewChecked {
  name = 'Angular';

  constructor(){}

  ngAfterViewChecked(){
    //  const buttonModal = document.getElementById("openModalButton")
    //  console.log('buttonModal', buttonModal)
  }

 openModal(){
   const buttonModal = document.getElementById("openModalButton")
   console.log('buttonModal', buttonModal)
   buttonModal.click()
 }

}
