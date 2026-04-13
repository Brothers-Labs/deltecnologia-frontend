import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ContactRequest } from '../models/contact-request.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  submitContact(request: ContactRequest): Observable<void> {
    const payload = {
      ...request,
      endpoint: environment.contactEndpoint
    };

    console.info('Mock contact payload', payload);

    return of(void 0).pipe(delay(900));
  }
}
