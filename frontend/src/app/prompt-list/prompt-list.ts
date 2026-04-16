import { Component, OnInit } from '@angular/core';
import { PromptService } from '../prompt';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-prompt-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prompt-list.html'
})
export class PromptList implements OnInit {

  prompts: any[] | null = null;

  constructor(
  private promptService: PromptService,
  private cdr: ChangeDetectorRef,
  private router: Router   
) {}

  ngOnInit() {
    console.log("Calling API...");

    this.promptService.getPrompts().subscribe({
      next: (data) => {
        console.log("Data received:", data);
        this.prompts = data;
        this.cdr.detectChanges();   
      },
      error: (err) => {
        console.error("Error:", err);
      }
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/prompts', id]);
  }
}