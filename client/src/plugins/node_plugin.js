import axios from 'axios'

export const http = axios.create({
	baseURL: 'https://api.bcb.gov.br/'
})

export default function install (Vue) {
	Object.defineProperty(Vue.prototype, '$http', {
		get () {
			return http
		}
	})
}