import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

/*
  Usuario:Object ={
    nombre: "Luis",
    correo: "luis@gmail.com"
  }*/
  constructor( private messageService: MessageService) { }

  ngOnInit() {
  }

  contactForm(form:NgForm) {
  console.log("Formulario posteado");
   console.log(form.value);
    console.log(form);
   this.messageService.sendMessage(form.value)
    .subscribe(() => {
      Swal.fire({
        type: 'success',
        title: 'El mensaje ha sido enviado con éxito',
        showConfirmButton: true,
      });
    });
  }
}
