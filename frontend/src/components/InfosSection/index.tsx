import computer from '../../assets/images/computer.png'

import * as S from './styles'

const InfoSection = () => {
  return (
    <S.Section>
      <S.Container>
        <S.Content>
          <h1><span />O que oferecemos</h1>
          <p>Na Código Certo Coders, oferecemos uma ampla gama de recursos e oportunidades para impulsionar seu desenvolvimento pessoal e profissional na área de tecnologia. Nosso compromisso é fornecer um ambiente que favoreça o aprendizado, a colaboração e a inovação.</p>
          <img src={computer} alt="Computer" />
        </S.Content>
      </S.Container>
    </S.Section>
  )
}

export default InfoSection