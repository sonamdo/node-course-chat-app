const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

  beforeEach(()=>{
    users = new Users();
    users.users = [{
      id : 1,
      name : 'Mike',
      room : 'Node course'
    },
    {
      id : 2,
      name : 'Jen',
      room : 'React course'
    },
    {
      id : 3,
      name : 'Julie',
      room : 'Node course'
    }]
  })

  it('Should add new user', () => {
    var users = new Users();
    var user = {
      id : '123',
      name : 'Sonam',
      room : 'Office fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    users.removeUser(1);

    expect(users.users.length).toEqual(2);
  });

  it('should not remove a user', () => {
    users.removeUser(5);

    expect(users.users.length).toEqual(3);
  });

  it('should find user', () => {
    var testUser = users.getUser(1);
    var expectedUser = {
      id : 1,
      name : 'Mike',
      room : 'Node course'
    };
    expect(testUser).toEqual(expectedUser);
  });

  it('should not find a user', () => {
    var testUser = users.getUser(4);
    var expectedUser = {
      id : 1,
      name : 'Mike',
      room : 'Node course'
    };
    expect(testUser).toNotEqual(expectedUser);

  });

  it('Should return names for node course', () => {
    var userList = users.getUserList('Node course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('Should return names for react course', () => {
    var userList = users.getUserList('React course');

    expect(userList).toEqual(['Jen']);
  })

});
