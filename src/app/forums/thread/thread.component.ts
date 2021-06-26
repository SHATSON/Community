import { ForumsService } from '../services/forums.service';
import { Component, OnInit } from '@angular/core';
import { Forum, Thread } from '../services/data';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  forum!: Forum;
  thread: Thread | undefined;

  constructor(private route: ActivatedRoute, private forumsService: ForumsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let forum = this.route.snapshot.parent?.params['forum_alias'];
      this.thread = this.forumsService.thread(forum, params['thread_alias']);
    });
  }

}
