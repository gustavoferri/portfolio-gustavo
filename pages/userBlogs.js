import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Container, Row, Col } from 'reactstrap';
import PortButtonDropdown from '../components/ButtonDropdown';

import withAuth from '../components/hoc/withAuth';
import { Link, Router } from '../routes';

import { getUserBlogs, updateBlog } from '../actions';


class UserBlogs extends React.Component {

    static async getInitialProps({req}) {
        let blogs = [];
        try {
            blogs = await getUserBlogs(req);
        } catch (err) {
            console.error(err);
        }

        return {blogs};
    }

changeBlogStatus(status, blogId) {
  updateBlog({status}, blogId)
  .then(() => {
    Router.pushRoute('/userBlogs');
  })
  .catch(err => {
    console.error(err.message);
  })
}
    deleteBlog() {
        alert('Deletando o Post');
    }

    separateBlogs(blogs) {
        const published = [];
        const drafts = [];

        blogs.forEach((blog) => {
            blog.status === 'draft' ? drafts.push(blog) : published.push(blog);
        });

        return {published, drafts};
    }

    createStatus(status) {
        return status === 'draft' ? {view: 'Publicar', value: 'published'}
                                  : {view: 'Rascunho', value: 'draft'};
    }

    dropdownOptions = (blog) => {
        const status = this.createStatus(blog.status);

        return [
            { text: status.view, handlers: { onClick: () => this.changeBlogStatus(status.value, blog._id) }},
            { text: 'Delete', handlers: { onClick: () => this.deleteBlog() }}
        ]
    }


    renderBlogs(blogs) {
        return (
            <ul className="user-blogs-list">
            {
             blogs.map((blog, index) => (
                <li key={index}>
                  <Link route={`/blogs/${blog._id}/edit`}>
                    <a>{blog.title}</a>
                  </Link>
                  <PortButtonDropdown items={this.dropdownOptions(blog)} />
                </li>
                )
              )
            }
            </ul>
        )
    }

    render() {
        const {blogs} = this.props;
        const {published, drafts} = this.separateBlogs(blogs);

      return (
        <BaseLayout {...this.props.auth} headerType={'landing'}>
        <div className="masthead" style={{"backgroundImage": "url('/static/images/home-bg.jpg')"}}>
          <div className="overlay"></div>
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Posts Recentes</h1>
                  <span className="subheading">Desenvolvimento, Web,  E-commerce... </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-user-page">
          <Row>
            <Col md="6" className="mx-auto text-center">
                <h2 className="blog-status-title">Publicados</h2>
                {this.renderBlogs(published)}
            </Col>
            <Col md="6" className="mx-auto text-center">
                <h2 className="blog-status-title">Rascunhos</h2>
                {this.renderBlogs(drafts)}
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
      )
   }
}

export default withAuth('siteOwner')(UserBlogs);