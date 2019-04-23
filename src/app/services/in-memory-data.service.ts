
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    const heroes = [
      { id: 11, name: 'Mr. Nice', nick: "mr. nick" },
      { id: 12, name: 'Narco', nick: "nick narco" },
      { id: 13, name: 'Bombasto', nick: "nick bombast" },
      { id: 14, name: 'Celeritas', nick: "celes nick celes" },
      { id: 15, name: 'Magneta', nick: "nick mag nick" },
      { id: 16, name: 'RubberMan', nick: "Ivanov" },
      { id: 17, name: 'Dynama', nick: "petrov" },
      { id: 18, name: 'Dr IQ', nick: "doctor" },
      { id: 19, name: 'Magma', nick: "test" },
      { id: 20, name: 'Tornado', nick: "test" },
    ];
    return { heroes };
  }
}
