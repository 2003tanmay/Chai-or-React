import React from 'react'
import { Container, PostForm as PostComponent } from '../components'

const AddPost = () => {
  return (
    <div className='py-8'>
        <Container>
            <PostComponent />
        </Container>
    </div>
  )
}

export default AddPost