import React from 'react'
import { shallow } from 'enzyme'

import store from '../../plain/store'
import PlainComponent from '../../plain/Component'


describe('Plain Store', () => {

  it('plain connect', () => {

    const component = shallow(<PlainComponent />, {
      context: {
        store,
      },
    })

    const expected = {
      name: 'John Doe',
      avatar: null,
      stats: [
        { type: 'reviews', value: 10 },
        { type: 'orders', value: 20 },
      ],
    }

    expect(component.props().me).toEqual(expected)
    expect(component.props().myStats).toEqual(expected.stats)
    expect(component.props().avatar).toEqual(expected.avatar)

  })

})
