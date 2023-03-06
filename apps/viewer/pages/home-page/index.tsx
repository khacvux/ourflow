import LargeList from 'ui/components/category-lives/LargeList'
import MediumList from 'ui/components/category-lives/MediumList'

function HomePage() {
  return (
    <div className=' bg-[#0F0F0F]'>
        <LargeList title='Hot'/>
        <MediumList title='Category' />
    </div>
  )
}

export default HomePage