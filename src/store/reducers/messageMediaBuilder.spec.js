import reducer from './messageMediaBuilder';

const initialState = {
  data: null,
  error: false,
  selectedImage: null,
  selectedPage: 0,
};

describe('store/reducers', () => {
  it('should have initial state', () => {
    expect(reducer(initialState, {type: ''})).toEqual(initialState);
  });
});