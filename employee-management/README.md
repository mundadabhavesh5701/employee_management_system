# Employee Management (NestJS)

A simple, ready-to-run Employee Management REST API demonstrating:
- Controllers, Modules, Services
- DTOs & Validation (class-validator)
- Dependency Injection
- Middleware, Guards, Interceptors
- Exception Filters
- CRUD REST API for Employees
- Authentication with JWT & Passport
- SQLite with TypeORM
- ConfigModule with ENV variables
- Pipes for validation

## Quick start

```bash
npm install
npm run start:dev
```

### Auth
- `POST /auth/login` with body `{ "username": "admin", "password": "password" }` → returns JWT
- Use `Authorization: Bearer <token>` for `/employees/*` routes

### Employees
- `GET /employees`
- `POST /employees`
- `GET /employees/:id`
- `PUT /employees/:id`
- `DELETE /employees/:id`
```json
// Example Create
{ "name": "Alice", "position": "Developer", "salary": 80000 }
```
