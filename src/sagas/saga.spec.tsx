import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import test from 'tape'
import { take, put, call, fork, select } from 'redux-saga/effects'
import {
  fetchPosts,
  fetchPostsApi,
  invalidateReddit,
  nextRedditChange,
  startup
} from '../sagas'
import * as actions from '../actions'
import { postsByRedditSelector, selectedRedditSelector } from '../reducers/selector'

test('nextRedditChange Saga when same reddit is selected', (t) => {
  const generator = nextRedditChange()
  generator.next()
  generator.next('prev_reddit')
  generator.next()
  generator.next('prev_reddit')
  t.deepEqual(
    generator.next().value,
    select(selectedRedditSelector),
    'must go back to beginning of loop'
  )
  t.end()
})