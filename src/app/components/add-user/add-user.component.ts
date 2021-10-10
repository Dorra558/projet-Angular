import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/user.model';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  utilisateur: Utilisateur = {
    firstname: '',
    secondname: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private utilisateurService: UtilisateursService) { }

  ngOnInit(): void {
  }

  saveUtilisateur(): void {
    const data = {
      firstname: this.utilisateur.firstname,
      secondname: this.utilisateur.secondname,
      description: this.utilisateur.description
    };

    this.utilisateurService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });

  }
  newUtilisateur(): void {
    this.submitted = false;
    this.utilisateur = {
      firstname: '',
      secondname:'',
      description: '',
      published: false
    };
  }

}
