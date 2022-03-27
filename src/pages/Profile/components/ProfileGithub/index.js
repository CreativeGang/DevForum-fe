import React, {useEffect}from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { getGithubRepos} from '../../../../actions/profile' 
import Spinner from '../../../../common/layout/SpinnerGraphic/spinner.gif'
import {RepoWrapper,
  RepoTitle} from './Elements'
  import RepoItem from './RepoItem'

const ProfileGithub = ({username, getGithubRepos, repos}) => {
  useEffect(() => {
    getGithubRepos(username)
  }, [getGithubRepos])
  return (
    <RepoWrapper>
        <RepoTitle>
            Github Repos
        </RepoTitle>
        {repos === null? <Spinner/>: (
          repos.map(repo => (
            <RepoItem key ={repo._id} repo = {repo}/>
          ))
        )}
    </RepoWrapper>
  )
}

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  usermame: PropTypes.string.isRequired,

}
const mapStateToProps = state => ({
  repos: state.profile.repos
})

export default connect(mapStateToProps, {getGithubRepos} )(ProfileGithub)