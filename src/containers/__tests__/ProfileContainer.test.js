import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import expect from 'expect';
import jest from 'jest-mock';
import Adapter from 'enzyme-adapter-react-16';
import { ProfileContainer } from '../ProfileContainer';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('Profile Container component', () => {
  const props = {
    details: {},
    updating: false,
    errors: {},
    updated: true,
    following: 2,
    followers: 3,
    getProfileDetailsFunc: jest.fn(),
    updateProfile: jest.fn(),
    requestStatus: {},
    history: {},
    getFollowersFunc: jest.fn(),
    getFollowingFunc: jest.fn(),
    resetUpdated: jest.fn(),
    newUrl: '',
  };

  let shallowWrapper;
  beforeEach(() => {
    shallowWrapper = shallow(<ProfileContainer {...props} />);
  });
  describe('it should render correctly', () => {
    it('should call getProfileDetailsFunc, getFollowers and getFollowing once component mounts', () => {
      expect(shallowWrapper.exists()).toEqual(true);
      expect(props.getProfileDetailsFunc).toHaveBeenCalled();
      expect(props.getFollowersFunc).toHaveBeenCalled();
      expect(props.getFollowingFunc).toHaveBeenCalled();
    });
  });
});
