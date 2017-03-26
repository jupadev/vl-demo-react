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
    } else if (!isEmpty(user.role)) {
      roles.push(user.role)
    }
  }
  return roles;
}