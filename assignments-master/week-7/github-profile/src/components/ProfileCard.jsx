import { useRecoilValueLoadable} from 'recoil'
import { cardInfo } from '../store/atoms/github'

export const ProfileCard = () => {
    const githubInfo = useRecoilValueLoadable(cardInfo)

    if(githubInfo.state === 'loading')
        return <div className='root-container'>Loading...</div>
    else if(githubInfo.state === 'hasError')
        return <div className='root-container'>User Not Found</div>
    else return (
        <div className='root-container'>
            <div>
                <div className='img-container'>
                    <img src={githubInfo.contents.avatar_url} alt="" />
                </div>
                <div className='name-container'>
                    <p>{githubInfo.contents.name}</p>
                </div>
            </div>
            <div className='info-container'>
                <div>
                    <div>Followers</div>
                    {githubInfo.contents.followers}
                </div>
                <div>
                    <div>Following</div>
                    {githubInfo.contents.following}
                </div>
                <div>
                    <div>Repos</div>
                    {githubInfo.contents.public_repos}
                </div>
            </div>
        </div>
    )
}