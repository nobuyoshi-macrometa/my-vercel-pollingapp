import { Component } from 'react'
import _ from 'lodash'
import Poll from '@/components/Poll'
import Layout from '@/components/Layout'

export async function getServerSideProps() {
  return {
    props: {
      jsc8Config: {
        url: process.env.MACROMETA_URL,
        fabricName: process.env.MACROMETA_FABRIC_NAME,
        apiKey: process.env.MACROMETA_API_KEY
      },
    }
  }
}

class PollContainer extends Component {
  state = {
    title: '',
    loading: false,
    selection: "",
    hasVoted: false,
    options: [],
  }

  componentDidMount() {
    const title = _.get(this, 'props.location.state.title')
    const options = _.get(this, 'props.location.state.options')

    if (title && options) {
      this.setState({ title, options })
    }
  }

  onVote = async (onSubmitVote, getPollData, establishLiveConnection) => {
    const { title } = this.state
    const { selection } = this.state

    this.setState({ loading: true }, () => {
      onSubmitVote(selection)
        .then(async () => {
          const pollData = await getPollData()

          this.setState({
            loading: false,
            hasVoted: true,
            options: Object.values(pollData)
          }, () => {
            // open socket connections for live updates
            const onmessage = msg => {
              const { payload } = JSON.parse(msg)
              const decoded = JSON.parse(atob(payload))
              this.setState({ options: decoded[title] })
            }
            establishLiveConnection(onmessage)
          })
        })
        .catch(err => console.log(err))
    })
  }

  onSelectOption = (id) => {
    this.setState({ selection: id })
  }

  getData = (getPollData) => {
    new Promise(async (resolve) => {
      const allPollData = await getPollData(true)
      const { pollName: title, polls } = allPollData
      
      this.setState({ options: Object.values(polls), title }, () => resolve())
    })
  }

  render() {
    return (
      <Layout jsc8Config={this.props.jsc8Config}>
        {
          (fabricCtx) => {
            const { title, options } = this.state
            const {
              isSignedIn,
              onSubmitVote,
              getPollData,
              establishLiveConnection
            } = fabricCtx

            if (!title || !options) {
              // this has been loaded directly
              isSignedIn && this.getData(getPollData)
            }

            return (
              <Poll {...this.state}
                onVote={() => { this.onVote(onSubmitVote, getPollData, establishLiveConnection) }}
                onSelectOption={(id) => { this.onSelectOption(id) }}
              />
            )
          }
        }
      </Layout>
    )
  }
}

export default PollContainer