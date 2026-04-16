import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PromptService } from '../prompt';

@Component({
  selector: 'app-add-prompt',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-prompt.html'
})
export class AddPrompt {

  form: any;

  constructor(private fb: FormBuilder, private promptService: PromptService) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(20)]],
      complexity: [1, [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.promptService.createPrompt(this.form.value).subscribe(() => {
      alert('Prompt added!');
      this.form.reset();
    });
  }
}