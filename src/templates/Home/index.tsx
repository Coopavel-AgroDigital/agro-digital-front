import * as axios from '@/axios/axios-provider'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Base } from '../Base'
import * as S from './styles'
import { IAmbiencia } from '@/axios/types'

export const HomeTemplate = () => {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    password: ''
  })

  const [ambiencia, setAmbiencia] = useState<IAmbiencia>({
    id: '',
    name: '',
    temperatura: '',
    umidade: '',
    carbono: '',
    iluminacao: '',
    phDoSolo: '',
    nutrientes: '',
    sensacaoTermica: 0,
    velocidadeDoVento: 0,
    data: new Date().toISOString()
  })

  const router = useRouter()

  const id = '1'

  useEffect(() => {
    async function fetchData(id: string) {
      const res = await axios.getUserById(id)
      const resAmbiencia = await axios.getAmbienceById(id)

      setUser(res)
      setAmbiencia(resAmbiencia!)
    }

    fetchData(id)
  }, [])

  const sincronizeData = async () => {
    const res = await axios.getUserById(id)
    const resAmbiencia = await axios.getAmbienceById(id)

    setUser(res)
    setAmbiencia(resAmbiencia!)
    console.log(res)
    console.log(resAmbiencia)
  }

  const newRegister = () => {
    router.push('/ambiencia')
  }

  return (
    <Base>
      <S.Section>
        <S.Header>
          <h2>Olá, {user.name}</h2>
          <Button onClick={sincronizeData}>SINCRONIZAR</Button>
        </S.Header>
      </S.Section>
      <S.Section>
        <h1>Último registro</h1>
        <S.CardsContainer>
          <Card
            title="TEMPERATURA"
            data={ambiencia.temperatura}
            datatype="ºC"
          />
          <Card title="CARBONO" data={ambiencia.carbono} datatype="pmm" />
          <Card title="UMIDADE" data={ambiencia.umidade} datatype="%" />
          <Card title="ILUMINAÇÃO" data={ambiencia.iluminacao} datatype="aux" />
          <Card
            title="SENSAÇÃO TERM."
            data={ambiencia.sensacaoTermica}
            datatype="ºC"
          />
          <Card
            title="VEL. DO VENTO"
            data={ambiencia.velocidadeDoVento}
            datatype="m/s"
          />
        </S.CardsContainer>
        <Button onClick={newRegister}>Novo Registro</Button>
      </S.Section>
      <S.Section>
        <h1>Relatórios</h1>
        <a href={`/pdf/Relatorio.pdf`} download>
          <Button>Baixar PDF</Button>
        </a>
      </S.Section>
    </Base>
  )
}
