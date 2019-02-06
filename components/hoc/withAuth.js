import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

export default function(Component) {
    return class withAuth extends React.Component {

        static async getInitialProps(args) {
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);

            return { ...pageProps };
        }

        renderProtectedPage() {
            const { isAuthenticated } = this.props.auth;

            if (isAuthenticated) {
                return ( <Component {...this.props } />)
            } else {
                return (
                    <BaseLayout {...this.props.auth}>
                        <BasePage>
                        <h1> Você não esta logado. Por favor faça seu login e retorne nesta página. </h1>
                        </BasePage>
                    </BaseLayout>
                )
            }
        }

        render() {
            return this.renderProtectedPage()
        }

    }
}