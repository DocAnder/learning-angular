import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  prop = true;

  buttonToggle(){
    this.prop = !this.prop;
  }

  //Retornos que serão verdadeiros
  isTruthy(){
    // return {};
    // return [];
    // return true;
    // return 1;
    // return "teste";
    // return "0";
    // return "false";
    // return this.pessoa.status;
  }

  //Retornos que serão falsos
  isFalse(){
    // return false;
    // return 0;
    // return "";
    // return '';
    // return null;
    // return undefined;
    // return -0;
    // return NaN;
    // return this.pessoa.name;
  }

}
 