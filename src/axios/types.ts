export interface IAmbiencia {
  id: string
  name?: string
  temperatura: string
  umidade: string
  carbono: string
  iluminacao: string
  phDoSolo: string
  nutrientes: string
  sensacaoTermica: number
  velocidadeDoVento: number
  data: string
}

export interface IAddAmbiencia {
  id: string
  nome?: string
  temperatura: string
  umidade: string
  nivelCO2: string
  nivelIluminacao: string
  nivelPhSolo: string
  nutrientes: string
  data: string
}
