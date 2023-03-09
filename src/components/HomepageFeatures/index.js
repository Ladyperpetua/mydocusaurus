import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

{/* added button value property to the feature list object with button link and button text  */}
const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    buttonValues: {
      buttonText:'Tutorial', 
      buttonLink:'/docs/intro'
    }
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),buttonValues: {
      buttonText:'Helper', 
      buttonLink:'https://docusaurus.io/docs/playground'
    }
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
      
    ),buttonValues: {
      buttonText:'Learn React', 
      buttonLink:'https://reactjs.org/docs/getting-started.html'
    }
  },
];

{/* added buttonValues props */}
function Feature({Svg, title, description, buttonValues}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">

         {/* underline tag was added to the title */}
        <h3> <u> {title} </u></h3>
        <p>{description}</p>

        {/* created an anchor tag in button form */}
        {/* used buttonValues.buttonLink to pass the values through to the Link element */ }
        <Link 
            className="button button--secondary button--sm"
            to= {buttonValues.buttonLink}>
            {buttonValues.buttonText}
          </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
