import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';

import SlateEditor from '../components/slate-editor/Editor';

import { getBlogById } from '../actions';

class BlogEditorUpdate extends React.Component {
    
   static async getInitialProps({query}) {
        const blogId = query.id;

        try {
            const blog = getBlogById(blogId);
            return {blog};
        } catch(err) {
            return {err};
        }
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
                <SlateEditor isLoading={isSaving} save={() => { console.log('Here should be update')}} />
            </BasePage>
        </BaseLayout>
      )
   }
}

export default withAuth('siteOwner')(BlogEditorUpdate);