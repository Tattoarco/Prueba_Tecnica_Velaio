import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent implements OnInit {
  taskForm: FormGroup;
  showUsersComponent: boolean = false;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      nameTask: ['', Validators.required],
      date: ['', Validators.required],
      fullName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      skills: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    // No es necesario reinicializar el taskForm aquí
  }

  toggleUsersComponent() {
    this.showUsersComponent = !this.showUsersComponent;
  }

  // Método para obtener el FormArray de habilidades
  get skills(): FormArray {
    return this.taskForm.get('skills') as FormArray;
  }

  // Método para añadir una habilidad
  addSkill(skill: string): void {
    if (skill) {
      this.skills.push(this.fb.control(skill, Validators.required));
    }
  }

  // Método para eliminar una habilidad
  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  onSubmit() {
    if (this.taskForm.valid) {
      console.log(this.taskForm.value);
      console.log('Se envió');
    } else {
      console.log('Form is not valid');
    }
  }
}
