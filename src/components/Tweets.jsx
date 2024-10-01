import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { AppContext, ThemeContext } from "../App"
import { useContext, useEffect} from 'react'

export default function Tweets() {
    const { theme } = useContext(ThemeContext)
    const { tweets, setTweets, user } = useContext(AppContext)

  return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet tweets={tweets} setTweets={setTweets} user={user} theme={theme} />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => <Tweet tweet={tweet} theme={theme} key={index} />)}
        </main>
    )
}
