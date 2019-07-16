import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { User } from '../models/user';
import { Role } from '../models/role';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const users: User[] = [
            { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin, workflowRole: "Approver 1" },
            { id: 3, username: 'user', password: 'user', firstName: 'User', lastName: 'User', role: Role.User, workflowRole: "Approver 1" },
            { id: 2, username: 'user1', password: 'user1', firstName: 'User1', lastName: 'User1', role: Role.User, workflowRole: "Approver 2" },
            { id: 4, username: 'user2', password: 'user2', firstName: 'User2', lastName: 'User2', role: Role.User, workflowRole: "Approver 3" },
            { id: 5, username: 'user3', password: 'user3', firstName: 'User3', lastName: 'User3', role: Role.User, workflowRole: "Approver 4" },
            { id: 6, username: 'user4', password: 'user4', firstName: 'User4', lastName: 'User4', role: Role.User, workflowRole: "Approver 1" },
        ];

        const authHeader = request.headers.get('Authorization');
        const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        
        const roleString = isLoggedIn && authHeader.split('.')[1];
        
        const role = roleString ? Role[roleString] : null;
        
        return of(null).pipe(mergeMap(() => {
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                const user = users.find(x => x.username === request.body.username && x.password === request.body.password);
                if (!user) return error('Username or password is incorrect');
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                    token: `fake-jwt-token.${user.role}`,
                    workflowRole: user.workflowRole
                });
            }
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                if (!isLoggedIn) return 
                {
                    unauthorised();
                }
                let urlParts = request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);

                const user = users.find(x => x.id === id);
                return ok(user);
            }

            // get all users (admin only)
            if (request.url.endsWith('/users') && request.method === 'GET') {
                if (role !== Role.Admin) {
                    
                    return unauthorised();
                }
                return ok(users);
            }

            // pass through any requests not handled above
            return next.handle(request);
        }))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        // private helper functions

        function ok(body: any) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function unauthorised() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function error(message: any) {
            return throwError({ status: 400, error: { message } });
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};