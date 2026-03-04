import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Container Orchestration & GitOps',
    emoji: '☸️',
    description: (
      <>
        Hands-on labs covering Kubernetes (Minikube), ArgoCD continuous delivery,
        and GitOps workflows for managing cluster state declaratively.
      </>
    ),
  },
  {
    title: 'Infrastructure as Code',
    emoji: '🏗️',
    description: (
      <>
        Terraform and Ansible configurations for provisioning and managing
        infrastructure. Every resource tracked, versioned, and reproducible.
      </>
    ),
  },
  {
    title: 'Observability & CI/CD',
    emoji: '📡',
    description: (
      <>
        Monitoring and logging stacks, GitHub Actions pipelines, and deployment
        strategies — all documented as live implementations.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{fontSize: '4rem', lineHeight: 1.2, padding: '1rem 0'}}>
        {emoji}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
