import React, { Component } from 'react'

import styles from '../../css/items.module.css'

import Artist from './Artist'

import Title from '../Title'

import AniLink from 'gatsby-plugin-transition-link/AniLink'


export default class ArtistList extends Component {

    state = {
        artists: [],
        sortedArtists: []
    }

    componentDidMount() {
        this.setState({
            artists:this.props.artists.edges,
            sortedArtists: this.props.artists.edges
        })
    }

    render() {
        return (
            <section className={styles.tours}>
                <Title title="Les" subtitle="artistes"/>
                <div className={styles.center}>
                    {this.state.artists.map(({node}) => {
                        return (
                            <Artist key={node.contentful_id} artist={node} >
                            </Artist>
                        )
                    })}
                </div>
                <AniLink fade to='/artists' className="btn-primary">
                    Tous les artistes
                </AniLink>
            </section>
        )
    }
}
