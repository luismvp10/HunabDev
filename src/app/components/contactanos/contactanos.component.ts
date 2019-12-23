import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  constructor( private messageService: MessageService) { }

  ngOnInit() {
  }

  contactForm(form) {
    this.messageService.sendMessage(form)
    .subscribe(() => {
      Swal.fire({
        type: 'success',
        title: 'El mensaje ha sido enviado exitosamente',
        showConfirmButton: true,
      });
    });
  }
}
