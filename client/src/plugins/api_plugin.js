import axios from 'axios'

export const node = axios.create({
	baseURL: 'https://api.bcb.gov.br/dados/serie/'
})

export default function install (Vue) {
	Object.defineProperty(Vue.prototype, '$api', {
		get () {
			return node
		}
	})
}