import React from 'react'
import { shallow } from 'enzyme'

import store from '../../connected-router/store'
import PlainComponent from '../../connected-router/Component'


describe('Connected couter', () => {

  it('connect', () => {

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
