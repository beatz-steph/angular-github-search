import { Component, OnInit } from '@angular/core';
import {} from 'rxjs';

import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.scss'],
})
export class GitSearchComponent implements OnInit {
  user: any = '';
  repos: any = [];
  username: string = '';

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  search() {
    this.githubService.updateUsername(this.username);

    this.githubService.getUser().subscribe((user) => {
      //console.log(user);
      this.user = user;
    });

    this.githubService.getRepos().subscribe((repos) => {
      this.repos = repos;
    });
  }
}
