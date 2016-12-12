import { Component, input } from '@angular/core';

@component({
  selecton: 'btn',
  templateUrl: './button.component.html'
})

class ButtonComponent {
  
  @Input() nome: string = 'Ok';
  @Input() estilo: string = 'btn-default';
  @Input() tipo: string = 'button';
  @Input() desable: boolean = false;

}
