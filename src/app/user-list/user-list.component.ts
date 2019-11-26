import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Role } from '../model/Role';
import { User } from '../model/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  roles: Role[];
  allRoles: Role[];
  selectedRoles: Role[];
  getRolesAddSubscription: any;
  getRolesSubscription: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.allUsers().subscribe(data => {
      this.users = data;
      console.log(data);
      this.getRolesSubscription = this.userService.allRoles().subscribe(roleService => {
        this.allRoles = roleService;
      });
      for (let user of this.users) {
        this.userService.userRoles(user.id).subscribe(date2 => {
          user.roles = date2;
        });
      }
      
    });
  }

  getUserRoles(user: User, role: Role) {
    if (user.roles) {
      return user.roles.some((userRole) => userRole.name === role.name);
    }
  }

  userAddRoleWithExisting(role: Role, user: User) {
    user.roles.push(role);
  }

  userRemoveRole(role: Role, user: User) {
    user.roles = user.roles.filter(r => r.name !== role.name);
  }

  toggleEditable(event, role: Role, user: User) {
    if (event.target.checked) {
      this.userAddRoleWithExisting(role, user);
    } else if (!event.target.checked) {
      this.userRemoveRole(role, user);
    }

    this.getRolesAddSubscription = this.userService.setRoles(this.toArray(user.roles), user.id).subscribe(data => {
      console.log(data)
    })
  }

  private toArray(roles: Role[]) {
    let roleIds: Number[] = [];

    roles.forEach(role => {
      roleIds.push(role.id)
    });
    return roleIds;
  }

}
