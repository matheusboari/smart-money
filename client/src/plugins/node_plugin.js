import axios from 'axios'

export const node = axios.create({
	baseURL: 'http://localhost:5001/api/v1/'
})

export default function install (Vue) {
	Object.defineProperty(Vue.prototype, '$node', {
		get () {
			return node
		}
	})
}