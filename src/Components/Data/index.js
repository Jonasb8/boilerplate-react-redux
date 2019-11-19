import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { retrieve } from '../../actions/Posts/show'

function Posts(props) {

    let {
        posts,
        handlePosts
    } = props

    useEffect(() => {
        handlePosts()
    },[handlePosts])

    return(
        <div>
            {
                posts === null ?
                <p>loading ... </p>
                :
                <div>
                    {
                      posts.map( item => (
                          <p>{item.title}</p>
                      ))
                    }
                </div>
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts : state.posts.posts.retrieved
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handlePosts : () => dispatch(retrieve())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)
