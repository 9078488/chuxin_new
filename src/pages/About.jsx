import MainLayout from '../components/MainLayout'
import PageLayout from '../components/PageLayout'
import Aside from '../components/Aside'
import companyIntroduction from '../data/companyIntroduction'

const About = () => {
  return (
    <PageLayout>
      {/* Left Side */}
      <Aside />
      {/* Right Side */}
      <MainLayout>
        {companyIntroduction.map((paragraph, index) => {
          return (
            <p key={index} className="text-base text-gray-700 mb-2">
              {paragraph}
            </p>
          )
        })}
      </MainLayout>
    </PageLayout>
  )
}

export default About
