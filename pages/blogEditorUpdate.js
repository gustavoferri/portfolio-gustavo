import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';

import SlateEditor from '../components/slate-editor/Editor';

import { getBlogById } from '../actions';

class BlogEditorUpdate extends React.Component {
    
   static async getInitialProps({query}) {
        const blogId = query.id;
        let blog = {};

        try {
            blog = await getBlogById(blogId);
            return {blog};
        } catch(err) {
           console.error(err);
        }

        return {blog};
    }

    constructor(props) {
        super(props);

        this.state = { 
         isSaving: false
        }

    }

    render() {
        const { blog } = this.props;
        console.log(blog);
        const { isSaving } = this.state;

      return (
        <BaseLayout {...this.props.auth}>
            <BasePage containerClass="editor-wrapper" className="blog-editor-page">
                <SlateEditor initialValue={blog.story} isLoading={isSaving} save={() => { console.log('Here should be update')}} />
            </BasePage>
        </BaseLayout>
      )
   }
}

export default withAuth('siteOwner')(BlogEditorUpdate);