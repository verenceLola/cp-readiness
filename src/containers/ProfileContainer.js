import { connect } from 'react-redux';
/* eslint-disable comma-dangle */
import React from 'react';
import propTypes from 'prop-types';
import {
  getProfileDetails, updateProfileDetails, getFollowers, getFollowing, updated as updatedFunc,
} from '../actions/profileActions';
import Profile from '../components/Profile/Profile';
import Header from '../components/Header/Header';
import SessionExpiredComponent from '../Common/SessionExpiredComponent';

export class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      bio: '',
      phone: '',
      country: '',
      website: '',
      email: '',
      avatar: '',
    };
  }

  componentDidMount() {
    const { getFollowersFunc, getFollowingFunc } = this.props;
    document.title = 'Profile | AuthorsHaven'; // update document title
    this.dispatchFetchProfileData();
    getFollowersFunc();
    getFollowingFunc();
  }

  onChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  updatedDetails = () => {
    const stat = this.state;
    return Object.keys(this.state).reduce((object, key) => {
      if (stat[key] !== '') {
        object[key] = stat[key];
      }
      return object;
    }, {});
  }


  dispatchUpdateProfileDetails = () => {
    const { updateProfile } = this.props;
    updateProfile(this.updatedDetails());
  }

  dispatchRefreshProfileDetails =() => {
    const { updated, resetUpdated } = this.props;
    if (updated) {
      this.dispatchFetchProfileData();
      this.setState({ // reset form fields after update
        username: '',
        bio: '',
        phone: '',
        country: '',
        website: '',
        email: '',
        avatar: '',
      });
    }
    resetUpdated();
  }

  dispatchFetchProfileData =() => {
    const { getProfileDetailsFunc } = this.props;
    getProfileDetailsFunc();
  }

  updateProfileImage = (newImage) => {
    this.setState({ avatar: newImage });
  }

  render() {
    const fields = this.state;
    const {
      details, errors, updating, updated, followers, following, newUrl, requestStatus, history
    } = this.props;
    return (
      <React.Fragment>
        <Header />
        <SessionExpiredComponent
          history={history}
          requestStatus={requestStatus}
          promptLogin={this.promptLogin}
        />
        <Profile
          details={details}
          requestStatus={requestStatus}
          fields={fields}
          refreshDetails={this.dispatchRefreshProfileDetails}
          errors={errors}
          updating={updating}
          handleOnChange={this.onChange}
          updated={updated}
          handleUpdateProfile={this.dispatchUpdateProfileDetails}
          followers={followers}
          following={following}
          updateProfileImage={this.updateProfileImage}
          new_url={newUrl}
        />
      </React.Fragment>
    );
  }
}

ProfileContainer.propTypes = {
  details: propTypes.shape().isRequired,
  errors: propTypes.shape().isRequired,
  updating: propTypes.bool.isRequired,
  updated: propTypes.bool.isRequired,
  followers: propTypes.number.isRequired,
  following: propTypes.number.isRequired,
  newUrl: propTypes.string.isRequired,
  resetUpdated: propTypes.func.isRequired,
  updateProfile: propTypes.func.isRequired,
  getProfileDetailsFunc: propTypes.func.isRequired,
  getFollowersFunc: propTypes.func.isRequired,
  getFollowingFunc: propTypes.func.isRequired,
  requestStatus: propTypes.shape().isRequired,
  history: propTypes.shape().isRequired,
};

const mapStateToProps = (state) => {
  const profileDetails = ({
    details: state.profileDetails.details,
    updating: state.profileDetails.updating,
    errors: state.profileDetails.errors,
    updated: state.profileDetails.updated,
    following: state.profileDetails.following,
    followers: state.profileDetails.followers,
    requestStatus: state.profileDetails.requestStatus,
  });
  return profileDetails;
};

const mapDispatchToProps = dispatch => (
  {
    getProfileDetailsFunc: () => (
      dispatch(getProfileDetails())
    ),
    updateProfile: details => (
      dispatch(updateProfileDetails(details))
    ),
    getFollowersFunc: () => (
      dispatch(getFollowers())
    ),
    getFollowingFunc: () => (
      dispatch(getFollowing())
    ),
    resetUpdated: () => (
      dispatch(updatedFunc(false))
    ),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
