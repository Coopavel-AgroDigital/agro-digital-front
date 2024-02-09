import * as axios from '@/axios/axios-provider'
import { Button } from '@/components/Button'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Base } from '../Base'
import * as S from './styles'
import { IAmbiencia } from '@/axios/types'

export const AmbienciaTemplate = () => {
  const [ambience, setAmbience] = useState<IAmbiencia>({
    id: '1',
    temperatura: '',
    umidade: '',
    carbono: '',
    iluminacao: '',
    phDoSolo: '',
    nutrientes: '',
    name: '',
    sensacaoTermica: 0,
    velocidadeDoVento: 0,
    data: new Date().toISOString()
  })

  const router = useRouter()

  const handleFormSubmit = async (e: any) => {
    e.preventDefault()

    const res = await axios.addAmbienceRegistry(ambience)
    console.log(res)
  }

  return (
    <Base>
      <S.Section>
        <S.Header>
          <h2>Novo Registro</h2>
        </S.Header>
      </S.Section>
      <S.Section>
        <Form onSubmit={handleFormSubmit}>
          <Input label="Nome">
            <input
              type="text"
              value={ambience.name}
              onChange={(e) =>
                setAmbience({ ...ambience, name: e.target.value })
              }
              placeholder="Nome para o registro"
              required
            />
          </Input>
          <Input label="Temperatura">
            <input
              type="number"
              value={ambience.temperatura}
              onChange={(e) =>
                setAmbience({ ...ambience, temperatura: e.target.value })
              }
              placeholder="20 (temperatura em graus celsius)"
              required
            />
          </Input>
          <Input label="Carbono">
            <input
              type="number"
              value={ambience.carbono}
              onChange={(e) =>
                setAmbience({ ...ambience, carbono: e.target.value })
              }
              placeholder="500 (ppm)"
              required
            />
          </Input>
          <Input label="Umidade">
            <input
              type="number"
              value={ambience.umidade}
              onChange={(e) =>
                setAmbience({ ...ambience, umidade: e.target.value })
              }
              placeholder="60%"
              required
            />
          </Input>
          <Input label="Iluminação">
            <input
              type="number"
              value={ambience.iluminacao}
              onChange={(e) =>
                setAmbience({ ...ambience, iluminacao: e.target.value })
              }
              placeholder="800 lux"
              required
            />
          </Input>
          <Input label="Ph do Solo">
            <input
              type="number"
              value={ambience.phDoSolo}
              onChange={(e) =>
                setAmbience({ ...ambience, phDoSolo: e.target.value })
              }
              placeholder="7.0"
              required
            />
          </Input>
          <Input label="Nutrientes">
            <input
              type="text"
              value={ambience.nutrientes}
              onChange={(e) =>
                setAmbience({ ...ambience, nutrientes: e.target.value })
              }
              placeholder="Ferro, Sódio, etc..."
              required
            />
          </Input>
          <Input label="Sensação Térmica">
            <input
              type="number"
              value={ambience.sensacaoTermica}
              onChange={(e) =>
                setAmbience({
                  ...ambience,
                  sensacaoTermica: Number(e.target.value)
                })
              }
              placeholder="0ºC"
              required
            />
          </Input>
          <Input label="Velocidade do Vento">
            <input
              type="number"
              value={ambience.velocidadeDoVento}
              onChange={(e) =>
                setAmbience({
                  ...ambience,
                  velocidadeDoVento: Number(e.target.value)
                })
              }
              placeholder="20m/s"
              required
            />
          </Input>
          <S.ButtonRow>
            <Button className="second" onClick={() => router.back()}>
              Voltar
            </Button>
            <Button type="submit">Salvar</Button>
          </S.ButtonRow>
        </Form>
      </S.Section>
    </Base>
  )
}
