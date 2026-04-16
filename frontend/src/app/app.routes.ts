import { PromptList } from './prompt-list/prompt-list';
import { PromptDetail } from './prompt-detail/prompt-detail';
import { AddPrompt } from './add-prompt/add-prompt';

export const routes = [
  { path: '', component: PromptList },
  { path: 'prompts/:id', component: PromptDetail },
  { path: 'add', component: AddPrompt }
];