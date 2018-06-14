import React, { Component } from 'react';
import { AppContext } from 'App';
import Layout from 'Layouts/Main';
import AppName from 'Components/AppName';
import Button from 'Components/Button';
import ProjectOverview from 'Components/ProjectOverview';

class Page_Introduction extends Component {
    constructor(props) {
        super(props);

        const { translations } = props;

        this.state = {
            page: {
                id: 'introduction',
                label: translations.introduction
            }
        };
    }

    componentDidMount() {
        const { _onComponentDidMount } = this.props;

        _onComponentDidMount(this.state.page);
    }

    render() {
        const { translations, projects } = this.props;
        const latestProject = projects[0];
        const secondLatestProject = projects[1];

        return (
            <section>
                <Layout page={this.state.page}>
                    <AppName className="desktop-only" />

                    <div className="basic-text-container">
                        <h2>{translations.aboutMe}</h2>
                        <p className="paragraph">{translations.aboutMeContent}</p>
                    </div>

                    <div className="latest-projects">
                        <h2>{translations.latestProjects}</h2>
                        <ProjectOverview project={latestProject} />
                        <ProjectOverview project={secondLatestProject} />

                        <div className="basic-button-container">
                            <Button label={translations.moreProjects} path="/projects" />
                        </div>
                    </div>
                </Layout>
            </section>
        );
    }
}

const ContextWrapper = (props) => (
    <AppContext.Consumer>
        {({ projects, translations, _onComponentDidMount }) => (
            <Page_Introduction {...props} projects={projects} translations={translations} _onComponentDidMount={_onComponentDidMount} />
        )}
    </AppContext.Consumer>
);

export default ContextWrapper;