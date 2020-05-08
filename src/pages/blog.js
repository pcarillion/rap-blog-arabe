import React, { Component } from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'

export default class blog extends Component {
    render() {
        return (
            <Layout>
                hello from the blog page!
                <Link to='/'>back home</Link>
            </Layout>
        )
    }
}
