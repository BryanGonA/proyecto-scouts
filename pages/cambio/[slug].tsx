import { useRouter } from 'next/router'
import Change from '~/components/change/Change'

const ChangeToken = () => {
  const router = useRouter()
  const { slug } = router.query

  return <Change token={slug} />
}

export default ChangeToken