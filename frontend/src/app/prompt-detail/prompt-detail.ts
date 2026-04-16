import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PromptService } from '../prompt';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-prompt-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prompt-detail.html'
})
export class PromptDetail implements OnInit {

  prompt: any = null;

  constructor(
  private route: ActivatedRoute,
  private promptService: PromptService,
  private cdr: ChangeDetectorRef
) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.promptService.getPrompt(Number(id)).subscribe({
        next: (data) => {
          console.log("Detail:", data);
          this.prompt = data;
          this.cdr.detectChanges();  
        },
        error: (err) => console.error(err)
      });
    }
  }
}