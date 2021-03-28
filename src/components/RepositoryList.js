import { Component } from 'react';
import { api } from '../services/api';

import styles from '../styles/components/RepositoryList.module.css';

export class RepositoryList extends Component {
    constructor() {
        super();
        this.state = {
            repositories: []
        }
    }

    async componentDidMount() {
        const response = await api.get('/repos');

        this.setState({ repositories: response.data });
    }

    render() {
        const { repositories } = this.state;

        return (
            <section className={styles.repositoryList}>
                {repositories.map(repository => (
                    <div key={repository.name}>
                        <h3>{repository.name}</h3>
                        <p>{repository.description}</p>
                        <a href={repository.html_url}>Acessar repositório</a>
                    </div>
                ))}
            </section>
        );
    }
}