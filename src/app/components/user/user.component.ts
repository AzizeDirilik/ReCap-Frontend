import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { HttpClient } from '@angular/common/http';
import { UserResponseModel } from '../../models/user/userResponseModel';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  users: User[] = [];

  apiUrl = 'https://localhost:44329/api/users/getall';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.httpClient
      .get<UserResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.users = response.data;
      });
  }
}
