import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Octokit } from 'octokit';
import { UserArticle } from 'src/app/components/user/user-articles/user-article.model';
import { environment } from 'src/app/core/environments/environment';
import { UserTag } from '../../user-tags/user-tag.model';
import { marked } from 'marked';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
})
export class ArticleDetailComponent {
  constructor(private route: ActivatedRoute) {}

  // 記事
  public article: UserArticle | undefined;

  // 更新有無ステータス
  public isupdated: boolean = false;

  public skeletonScreen: boolean = false;

  public async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);

    this.skeletonScreen = true;

    this.route.queryParams.subscribe(async param => {
      const octokit = new Octokit({
        auth: environment.githubAccessToken,
      });
      const githubResponse = await octokit.request(
        'GET /repos/{owner}/{repo}/issues/{issue_number}',
        {
          owner: 'ryusukevlc',
          repo: 'blog-archive',
          issue_number: param['id'],
        }
      );

      const issue = githubResponse.data;
      console.log(issue);

      const tagList: UserTag[] = [];
      for (const label of issue.labels) {
        if (typeof label !== 'string') {
          const userTag: UserTag = new UserTag(
            label?.id ?? 0,
            label?.name ?? '',
            new Date(),
            new Date()
          );
          tagList.push(userTag);
        }
      }

      const htmlContent = marked(issue?.body ?? '');

      this.article = new UserArticle(
        issue.id,
        issue.title.replace(/^\d{4}-\d{2}-\d{2}\s*/, ''),
        htmlContent,
        issue.title.split(' ')[0],
        issue.title.split(' ')[0],
        tagList,
        htmlContent.replace(/<\/?[^>]+(>|$)/g, '').substring(0, 180),
        0
      );

      this.skeletonScreen = false;
    });

    // this.route.data.subscribe(data => {
    //   const article = data['article'];
    //   article.createdAt = article.createdAt.substring(0, 10);
    //   if (article.updatedAt != undefined || article.updatedAt != null) {
    //     article.updatedAt = article.updatedAt.substring(0, 10);
    //     this.isupdated = true;
    //   }
    //   this.article = article;
    // });
  }

  public sortByTag(tagname: string) {}
}
