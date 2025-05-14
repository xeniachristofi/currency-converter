import { Pipe, PipeTransform } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Pipe({
  name: 'formControl'
})
export class FormControlPipe implements PipeTransform {

  transform(form: UntypedFormGroup, control: string): UntypedFormControl {
      return form?.get(control) as UntypedFormControl;
  }

}
