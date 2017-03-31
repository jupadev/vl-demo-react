import { isEmpty, isObject, every, map } from 'lodash';

function getRepositoryRoles(user) {
  let roles = [];
  every(user.repository, function(college) {
    let collegeRoles = map(college.roles, function(role) {
      return role.type.toLowerCase();
    });
    roles = roles.concat(collegeRoles);
  });
  return roles;
}

export function getRoles(user) {
  let roles = [];
  if (!isEmpty(user) && isObject(user)) {
    if (isObject(user.repository)) {
      roles = getRepositoryRoles(user);
    } else if (isObject(user.role)) {
      roles.push(user.role._id);
    } else if (!isEmpty(user.role)) {
      roles.push(user.role);
    }
  }
  return roles;
};

//export getRoles;

export function getUserRoute(user) {
  const roles  = getRoles(user) || [];
  switch(roles[0]) {
    case 'employer':
      return '/employer'
    case 'member':
    case 'student':
      return '/student'
    case 'admin':
    case 'superadmin':
      return '/admin'
    default:
      return '/home';
  }
}