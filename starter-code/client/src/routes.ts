import { Routes } from '@angular/router';
import { EntryListComponent } from './app/entry-list/entry-list.component';
import { SingleEntryComponent } from './app/single-entry/single-entry.component';


export const routes: Routes = [
    { path: '', component: EntryListComponent},
    { path: 'entries/:id', component: SingleEntryComponent},
    { path: '**', redirectTo: ''}
];


