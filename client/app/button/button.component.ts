import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'btn',
  templateUrl: './button.component.html'
})

export class ButtonComponent {

  @Input() nome: string = 'Ok';
  @Input() estilo: string = 'btn-default';
  @Input() tipo: string = 'button';
  @Input() desable: boolean = false;

}
