
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

    const orders = [
      {
        totalCount: 2
      },
      {
        results: [
          {
            id: "827243bf0a9d4287b87b547568f85a45",
            items: [
              {
                id: "01c16e783c0f433583c7197f5315798b",
                quantity: 1,
                productId: "508d2a0584ad4e0e9811577f00b735c8",
                name: "1\" Steel Hex Flange Bolt, Grade 8, Plain Finish, 1/2\"-20 Dia/Thread Size, 25 PK",
                imageUrl: "//localhost/admin/assets/catalog/7829d/22A447/22A458.jpg",
              }
            ],
            number: 'CO190424-00001',
            status: "Completed",
            createdDate: "2019-04-24T11:20:47.087Z",
            createdBy: "testppa",
            assignedTo: "testppa1",
            total: "$18.35",
            toRole: "Approver1",
            comments: [
              {
                id: "01c16e783c0f433583c7197f53157981",
                userId: "508d2a0584ad4e0e9811577f00b735c8",
                username: "Author 1",
                text: "its good!",
              },
              {
                id: "01c16e783c0f433583c7197f53157982",
                userId: "508d2a0584ad4e0e9811577f00b735c8",
                username: "Author 2",
                text: "its bad!",
              }
            ]
          },
          {
            id: "9b0a3eb6999d481a894792cad4446019",
            items: [
              {
                id: "83e1d2a4948240db840a0f1e21102520",
                quantity: 1,
                productId: "7829d35f417e4dd98851f51322f32c23",
                name: "1\" Stainless Steel Carriage Bolt, 18-8, NL-19(SM) Finish, 1/4\"-20 Dia/Thread Size, 50 PK",
                imageUrl: "//localhost/admin/assets/catalog/7829d/53MF87/53MF87.jpg",
              },
              {
                id: "8cc11d16ed9f4fff949c422f49fe4eed",
                quantity: 3,
                productId: "ec235043d51848249e90ef170c371a1c",
                name: "1\" Steel Carriage Bolt, Grade 5, Zinc Plated Finish, 1/4\"-20 Dia/Thread Size, 100 PK",
                imageUrl: "//localhost/admin/assets/catalog/7829d/5ZMR1/5ZMR1.jpg",
              },
              {
                id: "309d43873f554780bf3dff053bccd99b",
                quantity: 11,
                productId: "dae730451bc745bfa642870bdf22f150",
                name: "1\" Steel Carriage Bolt, Grade A, Hot Dipped Galvanized Finish, 1/4\"-20 Dia/Thread Size, 1300 PK",
                imageUrl: "//localhost/admin/assets/catalog/7829d/164W15/164W15.jpg",
              },
              {
                id: "8926a0b066d243909f86b60054dc8ab2",
                quantity: 3,
                productId: "e9de38b73c424db19f319c9538184d03",
                name: "1\" Steel Carriage Bolt, Grade 5, Chrome Plated Finish, 1/4\"-20 Dia/Thread Size, 5 PK",
                imageUrl: "//localhost/admin/assets/catalog/7829d/4GVA7/4GVA7_AS01.jpg",
              },
            ],
            number: 'CO190422-00001',
            status: "Awaiting Approve",
            createdDate: "2019-04-22T07:22:25.337Z",
            createdBy: "testppa",
            assignedTo: "testppa1",
            total: "$4,245.65",
            toRole: "Approver1",
            comments: [
              {
                id: "01c16e783c0f433583c7197f53157981",
                userId: "508d2a0584ad4e0e9811577f00b735c8",
                username: "Author 1",
                text: "its good!",
              }
            ]
          },
        ]
      }
    ];

    // const users =[
    //   {id:"1",  username: "users1", password: "user1", role: ""},
    //   {id:"2",  username: "users2", password: "user2", role: "Role2"},
    //   {id:"3",  username: "users3", password: "user3", role: "Role3"},
    //   {id:"4",  username: "users4", password: "user4", role: "Role4"},
    // ];

    const approveWorkflow = [
      {
        id: "9b0a3eb6999d481a894792cad4446019",
        roles: [
          {
            id: "01c16e783c0f433583c7197f5315798b",
            name: "Role11",
          },
          {
            id: "83e1d2a4948240db840a0f1e21102520",
            name: "Role22",
          },
          {
            id: "8926a0b066d243909f86b60054dc8ab2",
            name: "Role33",
          }

        ]
      }
    ]

    return { orders };
  }
}
