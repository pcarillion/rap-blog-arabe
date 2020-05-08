import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default () => (

        <Layout>
                <SimpleHero>
                    <Banner title="Arabic rap blog" info="a blog about rap music in the arabic world">
                        <Link to='/blog' className='btn-white'>
                            See the articles
                        </Link>
                    </Banner>
                </SimpleHero>
                <About/>
                <Services/>
        </Layout>
)