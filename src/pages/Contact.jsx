import MainLayout from '../components/MainLayout'
import PageLayout from '../components/PageLayout'
import Aside from '../components/Aside'
import contact from '../data/contact'

const Contact = () => {
  return (
    <PageLayout>
      {/* 左侧内容 */}
      <Aside />
      {/* 右侧主要内容 */}
      <MainLayout>
        <h1 className="font-semibold">{contact.company_name}</h1>
        <div className="text-base mt-2.5">
          <p className="">电话：{contact.tel}</p>
          <p>Email：{contact.email}</p>
          <p>地址：{contact.add}</p>
          {/* 网址 */}
          <p>{contact.website}</p>
        </div>
      </MainLayout>
    </PageLayout>
  )
}

export default Contact
