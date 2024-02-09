import axios from 'axios'
import { IAddAmbiencia, IAmbiencia } from './types'

export const URL = 'http://localhost:8090'

export const getUserById = async (id: string) => {
  try {
    const res = await axios.get(`${URL}/user/${id}`)

    return res.data
  } catch (e) {
    console.log(e)
  }
}

export const getAmbienceById = async (id: string) => {
  const ambiencia: IAmbiencia = {
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
    data: Date.prototype.toISOString.toString()
  }

  try {
    const res = await axios.get(`${URL}/ambiencia/${id}`)
    ambiencia.id = res.data.id
    ambiencia.name = res.data.nome
    ambiencia.temperatura = res.data.temperatura
    ambiencia.umidade = res.data.umidade
    ambiencia.carbono = res.data.nivelCO2
    ambiencia.iluminacao = res.data.nivelIluminacao
    ambiencia.phDoSolo = res.data.nivelPhSolo
    ambiencia.sensacaoTermica = res.data.sensacaoTermica
    ambiencia.velocidadeDoVento = res.data.velocidadeDoVento
    ambiencia.nutrientes = res.data.nutrientes

    return ambiencia
  } catch (e) {
    return ambiencia
  }
}

export const addAmbienceRegistry = async (data: IAmbiencia) => {
  const parsed: IAddAmbiencia = {
    id: data.id,
    nivelCO2: data.carbono,
    nivelIluminacao: data.iluminacao,
    nivelPhSolo: data.phDoSolo,
    nutrientes: data.nutrientes,
    temperatura: data.temperatura,
    umidade: data.umidade,
    sensacaoTermica: data.sensacaoTermica,
    velocidadeDoVento: data.velocidadeDoVento,
    nome: data.name,
    data: data.data
  }

  console.log(parsed)

  try {
    const res = await axios.post(
      `${URL}/ambiencia/register`,
      JSON.stringify(parsed),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    return res.data
  } catch (e) {
    console.log(e)
  }
}
