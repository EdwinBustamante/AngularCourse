import { Directive } from '@angular/core';
import {NG_VALIDATORS, Validator,AbstractControl} from "@angular/forms";
import { from } from 'rxjs';

@Directive({
  selector: '[edadValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EdadValidatorDirective, multi: true}]
})
export class EdadValidatorDirective implements Validator{
  
  validate(control: AbstractControl): {[key: string]: any} {
  let edad = control.value;
  return edad < 1  || edad >50? {"edadReturn": true} : null;
  }
  //registerOnValidatorChange?(fn: () => void): void {
 //   throw new Error("Method not implemented.");
  //}

  constructor() { }
    
}
