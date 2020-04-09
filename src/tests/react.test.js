import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from '../app/components/Main';
import { ConnectedPlaylists } from '../app/components/Playlists';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Link,MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import enzymeConfig from './enzymeConfig';
import { deleteCategory } from '../app/store/mutations';
import { ConnectedEditCategories} from '../app/components/EditCategories';

it("renders", () => {
    shallow(<Main />);
  });

//   it("displays initial to-dos", () => {
//     const wrapper = mount(<Playlists />);
//     expect(wrapper.find("h3")).toHaveLength(1);
//   });

  const mockStore = configureStore([]);
  describe('My Connected React-Redux Component', () => {
    let store;
    let component;
    beforeEach(() => {
      store = mockStore({
        myState: 'sample text',
      });
      store.dispatch = jest.fn();

      component = renderer.create(
        <Provider store={store}>
          <ConnectedEditCategories />
        </Provider>
      );
    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    
    it('should insert value to input field', () => {
    renderer.act(() => {
        component.root.findByType('input')
          .props.onChange({ target: { value: 'some other text' } });
      });
    });

    it('should dispatch an action on button click', () => {
        renderer.act(() => {
            component.root.findByType('button').props.onClick();
          });
          expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

    it('Link Exists', () => {

        expect(component.root.findByType(Link)).toBeTruthy();
        // expect(component.root.findByType(Link).toEqual('/'));
      });
  });