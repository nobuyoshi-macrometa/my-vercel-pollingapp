import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '@/components/Header'
import Container from '@/components/Container'
import Heading2 from '@/components/Heading2'

// TODO: Create and import FabricContext.
// import FabricContext from "../context/JSC8Context";

// TODO: The code below was inside TemplateWrapper component.
//       I think `useStaticQuery` (Gatsby) should be replaced by
//       `getStaticProps` (Next.js).
//
// const data = useStaticQuery(graphql`
//   {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allSitePlugin(filter: {name: {eq: "gatsby-source-c8db"}}) {
//       edges {
//         node {
//           name
//           pluginOptions {
//             auth {
//               password
//               email
//             }
//             config
//             geoFabric
//           }
//         }
//       }
//     }
//   }  
// `);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export default function TemplateWrapper({ children }) {
  // const {pluginOptions: { auth: { email, password }, config, geoFabric } } = data.allSitePlugin.edges[0].node;

  // The following list of variables are mine.
  // Including `data`.
  // const email = 'nobuyoshi.aquino@macrometa.com'
  // const password = 'Welcome123!'
  // const config = ''
  // const geoFabric = ''

  const data = {
    site: {
      siteMetadata: {
        title: 'Macrometa Polling App',
      },
    },
  }

  return (
    // <FabricContext.Consumer>
    //   {
    //     fabricCtx => {
    //       let component;

    //       if (!fabricCtx.isSignedIn) {
    //         component = <Heading2 style={{ display: "flex", justifyContent: "center", marginTop: "102px" }}>Loading...</Heading2>;
    //         typeof fabricCtx.updateFabric === "function" && fabricCtx.updateFabric(config, email, password, geoFabric);
    //       } else {
    //         component = <Container>{children(fabricCtx)}</Container>;
    //       }
    //       return (
            <div>
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              />
              <Header
                background="background-image: linear-gradient(116deg, #08AEEA 0%, #2AF598 100%)"
                title={data.site.siteMetadata.title}
              />
              {/* {component} */}
              <Container>{children(null)}</Container>
            </div>
    //       )
    //     }
    //   }
    // </FabricContext.Consumer>
  )
}
