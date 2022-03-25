import React from 'react';
import { Description } from '../ProfileExp/Elements';
import {
  RepoContainer,
  RepoInfo,
  RepoName,
  RepoLink,
  RepoDescription,
  RepoNote,
  NoteList,
  NoteItem
} from './Elements';

const RepoItem = ({ repo }) => {
  return (
    <RepoContainer>
      <RepoInfo>
        <RepoName>
          <RepoLink
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo.name}
          </RepoLink>
        </RepoName>
        <RepoDescription>{repo.description}</RepoDescription>
      </RepoInfo>
      <RepoNote>
        <NoteList>
          <NoteItem className = 'stars'>
            Stars: {repo.stargazers_count}
          </NoteItem>
          <NoteItem className = 'watchers'>
            Watchers: {repo.watchers_count}
          </NoteItem>
          <NoteItem>
            Forks: {repo.forks_count}
          </NoteItem>
        </NoteList>
      </RepoNote>

    </RepoContainer>
  );
};

export default RepoItem;
