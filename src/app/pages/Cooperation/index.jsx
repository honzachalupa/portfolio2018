import React, { Component } from 'react';
import { _getHtmlFromMarkdown } from 'helpers';
import { AppContext } from 'App';
import Layout from 'Layouts/Main';
import LazyText from 'Components/LazyText';

export default (props) => (
    <AppContext.Consumer>
        {({ projects, translations, _onComponentDidMount }) => (
            <Page_Cooperation {...props} projects={projects} translations={translations} _onComponentDidMount={_onComponentDidMount} />
        )}
    </AppContext.Consumer>
);

class Page_Cooperation extends Component {
    constructor(props) {
        super(props);

        const { translations } = props;

        this.state = {
            page: {
                id: 'cooperation',
                label: translations.cooperation
            }
        };
    }

    componentDidMount() {
        const { _onComponentDidMount } = this.props;

        _onComponentDidMount(this.state.page);
    }

    render() {
        const { translations } = this.props;

        return (
            <section>
                <Layout page={this.state.page}>
                    <article className="basic-text-container">
                        <h2>
                            <LazyText value={translations.cooperation} />
                        </h2>
                        <p className="paragraph" dangerouslySetInnerHTML={{ __html: _getHtmlFromMarkdown(translations.cooperationContent) }} />
                    </article>
                </Layout>
            </section>
        );
    }
}
