import { Component, Input, EventEmitter, Output } from '@angular/core';

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
  @Output() action = new EventEmitter();
  @Input() confirmation = boolean;

  execAction() {
    if(this.confirmation) {
      if(confirm('Deseja realmente excluir?')) {
        this.action.emit(null);
      }
      return;
    }
    this.action.emit(null);
  }
}
