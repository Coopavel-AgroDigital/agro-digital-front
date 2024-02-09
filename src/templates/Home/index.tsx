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
    const res = await axios.getUserById(user.id)
    setUser(res)
    console.log(res)
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
          <Card title="TEMPERATURA">{ambiencia.temperatura}</Card>
          <Card title="CARBONO">
            {ambiencia.carbono}
            <small>ppm</small>{' '}
          </Card>
          <Card title="UMIDADE">{ambiencia.umidade}%</Card>
          <Card title="ILUMINAÇÃO">
            {ambiencia.iluminacao}
            <small>lux</small>
          </Card>
        </S.CardsContainer>
        <Button onClick={newRegister}>Novo Registro</Button>
        <Button className="second">Histórico</Button>
      </S.Section>
      <S.Section>
        <h1>Relatórios</h1>
        <Button>
          <a href="http://localhost:8090/pdf/generate" download>
            Baixar PDF
          </a>
        </Button>
      </S.Section>
    </Base>
  )
}
